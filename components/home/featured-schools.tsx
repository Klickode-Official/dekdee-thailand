'use client'

import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SchoolCard } from '@/components/schools/school-card'
import { schools } from '@/lib/data'
import { useRef } from 'react'

export function FeaturedSchools() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const featuredSchools = schools.filter((s) => s.featured || s.promoted).slice(0, 6)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Featured Schools
            </h2>
            <p className="mt-2 text-muted-foreground">
              Top-rated schools handpicked by our education experts
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="mt-8 flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {featuredSchools.map((school) => (
            <div
              key={school.id}
              className="w-[340px] flex-shrink-0 sm:w-[380px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <SchoolCard school={school} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/schools">
              View All Schools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
