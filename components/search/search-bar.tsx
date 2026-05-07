'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, BookOpen, Wallet, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { locations, curriculums, budgetRanges } from '@/lib/data'

interface SearchBarProps {
  variant?: 'hero' | 'compact'
  className?: string
}

export function SearchBar({ variant = 'hero', className }: SearchBarProps) {
  const router = useRouter()
  const [location, setLocation] = useState<string>('')
  const [curriculum, setCurriculum] = useState<string>('')
  const [budget, setBudget] = useState<string>('')
  const [query, setQuery] = useState<string>('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location) params.set('city', location)
    if (curriculum) params.set('curriculum', curriculum)
    if (budget) params.set('budget', budget)
    if (query) params.set('q', query)
    router.push(`/schools?${params.toString()}`)
  }

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-sm', className)}>
        <div className="flex flex-1 items-center gap-2 px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search schools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <Button size="sm" className="rounded-full" onClick={handleSearch}>
          Search
        </Button>
      </div>
    )
  }

  return (
    <div className={cn('rounded-2xl bg-card p-2 shadow-2xl shadow-primary/10', className)}>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        {/* Location */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 flex-1 justify-start gap-3 rounded-xl px-4 hover:bg-accent lg:border-r lg:border-border lg:rounded-r-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">
                  {location || 'Select Location'}
                </p>
              </div>
              <ChevronDown className="ml-auto h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem onClick={() => setLocation('')}>
              All Locations
            </DropdownMenuItem>
            {locations.map((loc) => (
              <DropdownMenuItem key={loc} onClick={() => setLocation(loc)}>
                {loc}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Curriculum */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 flex-1 justify-start gap-3 rounded-xl px-4 hover:bg-accent lg:border-r lg:border-border lg:rounded-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Curriculum</p>
                <p className="font-medium text-foreground line-clamp-1">
                  {curriculum || 'Select Curriculum'}
                </p>
              </div>
              <ChevronDown className="ml-auto h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <DropdownMenuItem onClick={() => setCurriculum('')}>
              All Curricula
            </DropdownMenuItem>
            {curriculums.map((curr) => (
              <DropdownMenuItem key={curr} onClick={() => setCurriculum(curr)}>
                {curr}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Budget */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 flex-1 justify-start gap-3 rounded-xl px-4 hover:bg-accent lg:rounded-l-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Budget</p>
                <p className="font-medium text-foreground line-clamp-1">
                  {budget || 'Select Budget'}
                </p>
              </div>
              <ChevronDown className="ml-auto h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => setBudget('')}>
              Any Budget
            </DropdownMenuItem>
            {budgetRanges.map((range) => (
              <DropdownMenuItem key={range.label} onClick={() => setBudget(range.label)}>
                {range.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Button */}
        <Button
          size="lg"
          className="h-14 gap-2 rounded-xl px-8 text-base"
          onClick={handleSearch}
        >
          <Search className="h-5 w-5" />
          <span>Search Schools</span>
        </Button>
      </div>
    </div>
  )
}
