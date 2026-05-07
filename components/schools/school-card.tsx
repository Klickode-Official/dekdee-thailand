'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, MapPin, Star, Users, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { School } from '@/lib/data'
import { useState, useEffect } from 'react'
import { useCompareStore } from '@/hooks/use-compare-store'

interface SchoolCardProps {
  school: School
  variant?: 'default' | 'compact' | 'featured'
}

export function SchoolCard({ school, variant = 'default' }: SchoolCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const { schools: compareSchools, addSchool, removeSchool } = useCompareStore()
  const isComparing = compareSchools.some((s) => s.id === school.id)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const formatFees = (fees: School['fees']) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return `${formatter.format(fees.min / 1000)}K - ${formatter.format(fees.max / 1000)}K ${fees.currency}/yr`
  }

  if (variant === 'compact') {
    return (
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <div className="flex">
          <div className="relative h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28">
            <Image
              src={school.image}
              alt={school.name}
              fill
              className="object-cover"
            />
            {school.featured && (
              <Badge className="absolute left-1 top-1 bg-featured text-featured-foreground text-xs">
                Featured
              </Badge>
            )}
          </div>
          <CardContent className="flex flex-1 flex-col justify-center p-3 relative">
            <Link href={`/schools/${school.slug}`} className="absolute inset-0 z-0"></Link>
            <div className="z-10 flex justify-between items-start">
              <h3 className="line-clamp-1 font-semibold text-foreground group-hover:text-primary">
                {school.name}
              </h3>
              <Button 
                size="sm" 
                variant={isComparing ? "secondary" : "outline"}
                className="h-7 text-xs flex-shrink-0 ml-2"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  if (isComparing) {
                    removeSchool(school.id)
                  } else {
                    addSchool(school)
                  }
                }}
              >
                {isMounted && isComparing ? 'Remove' : 'Compare'}
              </Button>
            </div>
            <div className="z-10 mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${school.coordinates.lat},${school.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{school.city}</span>
              </a>
            </div>
            <div className="z-10 mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-featured text-featured" />
                <span className="text-sm font-medium">{school.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">{formatFees(school.fees)}</span>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className={cn(
        'group overflow-hidden transition-all hover:shadow-xl',
        school.promoted && 'ring-2 ring-primary/20'
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={school.image}
          alt={school.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {school.featured && (
            <Badge className="bg-featured text-featured-foreground">
              Featured
            </Badge>
          )}
          {school.promoted && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Promoted
            </Badge>
          )}
          {school.admissionOpen && (
            <Badge className="bg-success text-success-foreground">
              Admissions Open
            </Badge>
          )}
        </div>

        {/* Save Button */}
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            'absolute right-3 top-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm',
            isSaved && 'text-destructive'
          )}
          onClick={(e) => {
            e.preventDefault()
            setIsSaved(!isSaved)
          }}
        >
          <Heart className={cn('h-4 w-4', isSaved && 'fill-current')} />
          <span className="sr-only">Save school</span>
        </Button>

        {/* Rating Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 backdrop-blur-sm">
          <Star className="h-4 w-4 fill-featured text-featured" />
          <span className="text-sm font-semibold">{school.rating}</span>
          <span className="text-xs text-muted-foreground">({school.reviewCount})</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {school.curriculum.slice(0, 2).map((curr) => (
            <Badge key={curr} variant="secondary" className="text-xs font-normal">
              {curr}
            </Badge>
          ))}
        </div>

        <Link href={`/schools/${school.slug}`}>
          <h3 className="line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {school.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${school.coordinates.lat},${school.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-1 hover:underline hover:text-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {school.location}
          </a>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {school.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Annual Fees</p>
            <p className="font-semibold text-foreground">{formatFees(school.fees)}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{school.students.toLocaleString()} students</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" className="flex-1" asChild>
            <Link href={`/schools/${school.slug}`}>View Details</Link>
          </Button>
          <Button 
            className="flex-1"
            variant={isComparing ? "secondary" : "default"}
            onClick={(e) => {
              e.preventDefault()
              if (isComparing) {
                removeSchool(school.id)
              } else {
                addSchool(school)
              }
            }}
          >
            <Bookmark className="mr-1.5 h-4 w-4" />
            {isMounted && isComparing ? 'Remove' : 'Compare'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
