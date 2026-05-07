'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FilterSidebar, FilterState } from '@/components/schools/filter-sidebar'
import { SchoolCard } from '@/components/schools/school-card'
import { SchoolMap } from '@/components/schools/school-map'
import { SearchBar } from '@/components/search/search-bar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Grid3X3, List, MapPin, X } from 'lucide-react'
import { schools } from '@/lib/data'
import { cn } from '@/lib/utils'

type ViewMode = 'grid' | 'list' | 'map'
type SortMode = 'rating' | 'popular' | 'fees-low' | 'fees-high' | 'newest'

const defaultFilters: FilterState = {
  locations: [],
  curriculums: [],
  types: [],
  priceRange: [0, 1000000],
  rating: 0,
  admissionOpen: false,
}

// Pure filter + sort function — runs on every render, no useMemo
function applyFilters(
  allSchools: typeof schools,
  q: string,
  filters: FilterState,
  sortMode: SortMode
) {
  let result = allSchools.filter((school) => {
    // Text search
    if (q) {
      const haystack = [school.name, school.description, school.city, school.type]
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(q)) return false
    }
    // Location
    if (filters.locations.length > 0 && !filters.locations.includes(school.city)) return false
    // School type
    if (filters.types.length > 0 && !filters.types.includes(school.type)) return false
    // Curriculum
    if (
      filters.curriculums.length > 0 &&
      !filters.curriculums.some((c) => school.curriculum.some((sc) => sc.includes(c)))
    ) return false
    // Price range — school must overlap with the selected range
    if (school.fees.min > filters.priceRange[1]) return false
    if (filters.priceRange[0] > 0 && school.fees.max < filters.priceRange[0]) return false
    // Rating
    if (filters.rating > 0 && school.rating < filters.rating) return false
    // Admissions
    if (filters.admissionOpen && !school.admissionOpen) return false

    return true
  })

  // Sort
  result = [...result].sort((a, b) => {
    switch (sortMode) {
      case 'rating':    return b.rating - a.rating
      case 'popular':   return b.reviewCount - a.reviewCount
      case 'fees-low':  return a.fees.min - b.fees.min
      case 'fees-high': return b.fees.max - a.fees.max
      case 'newest':    return b.established - a.established
      default:          return 0
    }
  })

  return result
}

function SchoolsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const q = searchParams.get('q')?.toLowerCase() || ''
  const cityParam = searchParams.get('city') || ''

  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortMode, setSortMode] = useState<SortMode>('rating')
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    locations: cityParam ? [cityParam] : [],
  })

  // Called by sidebar on every change — directly sets state, no memoization involved
  function handleFilterChange(newFilters: FilterState) {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  function clearFilters() {
    setFilters(defaultFilters)
    setCurrentPage(1)
    router.push(pathname)
  }

  function removeFilterTag(key: string, value: string) {
    if (key === 'search') {
      router.push(pathname)
      return
    }
    setFilters((prev) => {
      if (key === 'location')    return { ...prev, locations:   prev.locations.filter((l) => l !== value) }
      if (key === 'curriculum')  return { ...prev, curriculums: prev.curriculums.filter((c) => c !== value) }
      if (key === 'type')        return { ...prev, types:       prev.types.filter((t) => t !== value) }
      if (key === 'admission')   return { ...prev, admissionOpen: false }
      if (key === 'rating')      return { ...prev, rating: 0 }
      return prev
    })
    setCurrentPage(1)
  }

  // No useMemo — computed fresh each render (150 schools is trivial)
  const filteredSchools = applyFilters(schools, q, filters, sortMode)

  // Build active filter tags
  const activeFilterTags: { key: string; value: string; label: string }[] = []
  if (q) activeFilterTags.push({ key: 'search', value: q, label: `Search: "${q}"` })
  filters.locations.forEach((l)  => activeFilterTags.push({ key: 'location',   value: l, label: l }))
  filters.curriculums.forEach((c) => activeFilterTags.push({ key: 'curriculum', value: c, label: c }))
  filters.types.forEach((t)       => activeFilterTags.push({ key: 'type',       value: t, label: t.charAt(0).toUpperCase() + t.slice(1) }))
  if (filters.admissionOpen)       activeFilterTags.push({ key: 'admission',   value: 'open',               label: 'Admissions Open' })
  if (filters.rating > 0)          activeFilterTags.push({ key: 'rating',      value: String(filters.rating), label: `${filters.rating}+ Stars` })

  const itemsPerPage = 9
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage)
  const displayedSchools =
    viewMode === 'map'
      ? filteredSchools
      : filteredSchools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Top bar */}
        <section className="border-b border-border bg-muted/30 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Find Schools in Thailand</h1>
                <p className="mt-1 text-muted-foreground">
                  Showing{' '}
                  <span className="font-semibold text-foreground">{filteredSchools.length}</span>{' '}
                  schools{' '}
                  {filters.locations.length > 0
                    ? `in ${filters.locations.join(', ')}`
                    : 'across all locations'}
                </p>
              </div>
              <div className="w-full md:w-auto">
                <SearchBar variant="compact" className="w-full md:w-80" />
              </div>
            </div>

            {/* Active filter tags */}
            {activeFilterTags.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {activeFilterTags.map((tag) => (
                  <Badge
                    key={`${tag.key}-${tag.value}`}
                    variant="secondary"
                    className="gap-1 pr-1"
                  >
                    {tag.label}
                    <button
                      onClick={() => removeFilterTag(tag.key, tag.value)}
                      className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={clearFilters}
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Main layout */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar */}
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClear={clearFilters}
              />

              {/* Results */}
              <div className="flex-1 min-w-0">
                {/* Toolbar */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{filteredSchools.length}</span>{' '}
                    schools found
                  </p>

                  <div className="flex items-center gap-3">
                    <Select
                      value={sortMode}
                      onValueChange={(v) => {
                        setSortMode(v as SortMode)
                        setCurrentPage(1)
                      }}
                    >
                      <SelectTrigger className="w-44">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Top Rated</SelectItem>
                        <SelectItem value="popular">Most Reviewed</SelectItem>
                        <SelectItem value="fees-low">Lowest Fees</SelectItem>
                        <SelectItem value="fees-high">Highest Fees</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex items-center rounded-lg border border-border p-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn('h-8 w-8', viewMode === 'grid' && 'bg-muted')}
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn('h-8 w-8', viewMode === 'list' && 'bg-muted')}
                        onClick={() => setViewMode('list')}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn('h-8 w-8', viewMode === 'map' && 'bg-muted')}
                        onClick={() => setViewMode('map')}
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map */}
                {viewMode === 'map' && (
                  <div className="mb-6">
                    <SchoolMap schools={filteredSchools} className="h-[500px]" />
                  </div>
                )}

                {/* Empty state */}
                {filteredSchools.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="text-5xl mb-4">🏫</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      No schools match your filters
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Try removing some filters or broadening your search.
                    </p>
                    <Button className="mt-6" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                )}

                {/* Grid / List */}
                {viewMode !== 'map' && filteredSchools.length > 0 && (
                  <div
                    className={cn(
                      'grid gap-6',
                      viewMode === 'grid' ? 'sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
                    )}
                  >
                    {displayedSchools.map((school) => (
                      <SchoolCard
                        key={school.id}
                        school={school}
                        variant={viewMode === 'list' ? 'compact' : 'default'}
                      />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    >
                      Previous
                    </Button>
                    {Array.from({ length: Math.min(totalPages, 10) }).map((_, i) => (
                      <Button
                        key={i}
                        variant={currentPage === i + 1 ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    >
                      Next
                    </Button>
                  </div>
                )}

                {/* SEO block */}
                <div className="mt-16 rounded-xl border border-border bg-card p-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Finding the Right School in Thailand: A Parent&apos;s Guide
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    With hundreds of options across Bangkok, Phuket, Chiang Mai, and beyond, use our
                    filters to narrow down by city, school type, curriculum, budget, and rating to find
                    exactly the right school for your child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function SchoolsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-muted-foreground">
          Loading schools...
        </div>
      }
    >
      <SchoolsContent />
    </Suspense>
  )
}
