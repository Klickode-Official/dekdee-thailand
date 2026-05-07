'use client'

import { X, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { locations, curriculums } from '@/lib/data'

export interface FilterState {
  locations: string[]
  curriculums: string[]
  types: string[]
  priceRange: [number, number]
  rating: number
  admissionOpen: boolean
}

interface FilterSidebarProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onClear: () => void
}

const schoolTypes = [
  { id: 'international', label: 'International Schools' },
  { id: 'private', label: 'Private Schools' },
  { id: 'islamic', label: 'Islamic Schools' },
  { id: 'public', label: 'Public Schools' },
]

function FilterContent({
  filters,
  onChange,
  onClear,
}: {
  filters: FilterState
  onChange: (f: FilterState) => void
  onClear: () => void
}) {
  // Always create a fresh merged object so the parent sees a new reference
  const set = (patch: Partial<FilterState>) => {
    const next: FilterState = {
      locations: filters.locations,
      curriculums: filters.curriculums,
      types: filters.types,
      priceRange: filters.priceRange,
      rating: filters.rating,
      admissionOpen: filters.admissionOpen,
      ...patch,
    }
    onChange(next)
  }

  const toggleList = (key: 'locations' | 'curriculums' | 'types', value: string, checked: boolean) => {
    const prev = filters[key] as string[]
    set({ [key]: checked ? [...prev, value] : prev.filter((v) => v !== value) })
  }

  const activeFilterCount =
    filters.locations.length +
    filters.curriculums.length +
    filters.types.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.admissionOpen ? 1 : 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="font-semibold">Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1">{activeFilterCount}</Badge>
          )}
        </div>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClear} className="text-muted-foreground hover:text-foreground">
            Clear All
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={['location', 'type', 'curriculum', 'price', 'rating']} className="w-full">
        {/* Location */}
        <AccordionItem value="location">
          <AccordionTrigger className="text-sm font-medium">
            Location
            {filters.locations.length > 0 && (
              <Badge variant="secondary" className="ml-2">{filters.locations.length}</Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <Checkbox
                    id={`loc-${loc}`}
                    checked={filters.locations.includes(loc)}
                    onCheckedChange={(c) => toggleList('locations', loc, !!c)}
                  />
                  <Label htmlFor={`loc-${loc}`} className="text-sm font-normal cursor-pointer">{loc}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* School Type */}
        <AccordionItem value="type">
          <AccordionTrigger className="text-sm font-medium">
            School Type
            {filters.types.length > 0 && (
              <Badge variant="secondary" className="ml-2">{filters.types.length}</Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {schoolTypes.map((t) => (
                <div key={t.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`type-${t.id}`}
                    checked={filters.types.includes(t.id)}
                    onCheckedChange={(c) => toggleList('types', t.id, !!c)}
                  />
                  <Label htmlFor={`type-${t.id}`} className="text-sm font-normal cursor-pointer">{t.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Curriculum */}
        <AccordionItem value="curriculum">
          <AccordionTrigger className="text-sm font-medium">
            Curriculum
            {filters.curriculums.length > 0 && (
              <Badge variant="secondary" className="ml-2">{filters.curriculums.length}</Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {curriculums.map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <Checkbox
                    id={`cur-${c}`}
                    checked={filters.curriculums.includes(c)}
                    onCheckedChange={(checked) => toggleList('curriculums', c, !!checked)}
                  />
                  <Label htmlFor={`cur-${c}`} className="text-sm font-normal cursor-pointer">{c}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">Annual Fees (THB)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                max={1000000}
                step={25000}
                value={filters.priceRange}
                onValueChange={(v) => set({ priceRange: v as [number, number] })}
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>฿{(filters.priceRange[0] / 1000).toFixed(0)}K</span>
                <span>฿{(filters.priceRange[1] / 1000).toFixed(0)}K{filters.priceRange[1] >= 1000000 ? '+' : ''}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Rating */}
        <AccordionItem value="rating">
          <AccordionTrigger className="text-sm font-medium">Minimum Rating</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {[0, 3, 3.5, 4, 4.5].map((r) => (
                <Button
                  key={r}
                  variant={filters.rating === r ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => set({ rating: r })}
                >
                  {r === 0 ? 'Any' : `${r}+ ⭐`}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Admission Open */}
      <div className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted/40 transition-colors">
        <Checkbox
          id="admission-open"
          checked={filters.admissionOpen}
          onCheckedChange={(c) => set({ admissionOpen: !!c })}
        />
        <Label htmlFor="admission-open" className="cursor-pointer text-sm">
          Admissions Open Only
        </Label>
      </div>
    </div>
  )
}

export function FilterSidebar({ filters, onFilterChange, onClear }: FilterSidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-72 flex-shrink-0 lg:block">
        <div className="sticky top-20 rounded-xl border border-border bg-card p-5">
          <FilterContent filters={filters} onChange={onFilterChange} onClear={onClear} />
        </div>
      </aside>

      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2 lg:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filter Schools</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent filters={filters} onChange={onFilterChange} onClear={onClear} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
