'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Star,
  MapPin,
  Users,
  Calendar,
  CheckCircle,
  X,
  Plus,
  ArrowRight,
  Search,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { schools } from '@/lib/data'



import { useCompareStore } from '@/hooks/use-compare-store'
import { useEffect, useState } from 'react'

export default function ComparePage() {
  const { schools: selectedSchools, removeSchool, addSchool } = useCompareStore()
  const [isMounted, setIsMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const formatFees = (fees: (typeof schools)[0]['fees']) => {
    const formatter = new Intl.NumberFormat('en-US')
    return `${formatter.format(fees.min / 1000)}K - ${formatter.format(fees.max / 1000)}K`
  }

  const allFacilities = [...new Set(selectedSchools.flatMap((s) => s.facilities))]

  const availableSchools = schools.filter(
    (s) => !selectedSchools.some((sel) => sel.id === s.id) && s.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Compare Schools</h1>
              <p className="mt-1 text-muted-foreground">
                Side-by-side comparison of your selected schools
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* School Headers */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      Comparing {selectedSchools.length} schools
                    </p>
                  </div>
                  {selectedSchools.map((school) => (
                    <Card key={school.id} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={school.image}
                          alt={school.name}
                          fill
                          className="object-cover"
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeSchool(school.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        {school.featured && (
                          <Badge className="absolute left-2 top-2 bg-featured text-featured-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="line-clamp-1 font-semibold text-foreground">
                          {school.name}
                        </h3>
                        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{school.city}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-1">
                          <Star className="h-4 w-4 fill-featured text-featured" />
                          <span className="font-medium">{school.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({school.reviewCount})
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Add More Schools */}
                {selectedSchools.length < 3 && (
                  <div className="mt-4 grid grid-cols-4 gap-4">
                    <div />
                    {[...Array(3 - selectedSchools.length)].map((_, i) => (
                      <Dialog key={i}>
                        <DialogTrigger asChild>
                          <button className="block h-full w-full text-left focus:outline-none">
                            <Card
                              className="flex h-full min-h-[160px] flex-col items-center justify-center border-dashed transition-colors hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
                            >
                              <Plus className="mx-auto h-8 w-8 text-muted-foreground" />
                              <p className="mt-2 text-sm text-muted-foreground">Add School</p>
                            </Card>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg max-h-[85vh] flex flex-col overflow-hidden">
                          <DialogHeader>
                            <DialogTitle>Add School to Compare</DialogTitle>
                          </DialogHeader>
                          <div className="relative mt-2">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <input
                              type="text"
                              placeholder="Search schools..."
                              className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                          <div className="flex-1 overflow-y-auto mt-4 space-y-2 pr-2">
                            {availableSchools.map((school) => (
                              <DialogClose asChild key={school.id}>
                                <div
                                  className="flex items-center gap-3 rounded-lg border border-border p-2 hover:bg-muted cursor-pointer transition-colors"
                                  onClick={() => {
                                    addSchool(school)
                                    setSearchQuery('')
                                  }}
                                >
                                  <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                                    <Image src={school.image} alt={school.name} fill className="object-cover" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium line-clamp-1 text-foreground">{school.name}</h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">{school.city}</p>
                                  </div>
                                </div>
                              </DialogClose>
                            ))}
                            {availableSchools.length === 0 && (
                              <p className="text-center text-sm text-muted-foreground py-8">No matching schools found.</p>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                )}

                {/* Comparison Rows */}
                <div className="mt-6 space-y-1">
                  {/* Fees */}
                  <div className="grid grid-cols-4 gap-4 rounded-lg bg-card p-4">
                    <div className="flex items-center font-medium text-foreground">
                      Annual Fees
                    </div>
                    {selectedSchools.map((school) => (
                      <div key={school.id} className="text-center">
                        <p className="font-semibold text-primary">
                          {formatFees(school.fees)} THB
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Curriculum */}
                  <div className="grid grid-cols-4 gap-4 rounded-lg p-4">
                    <div className="flex items-center font-medium text-foreground">
                      Curriculum
                    </div>
                    {selectedSchools.map((school) => (
                      <div key={school.id} className="text-center">
                        <div className="flex flex-wrap justify-center gap-1">
                          {school.curriculum.map((curr) => (
                            <Badge key={curr} variant="secondary" className="text-xs">
                              {curr}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Students */}
                  <div className="grid grid-cols-4 gap-4 rounded-lg bg-card p-4">
                    <div className="flex items-center font-medium text-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      Students
                    </div>
                    {selectedSchools.map((school) => (
                      <div key={school.id} className="text-center">
                        <p className="text-foreground">{school.students.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  {/* Established */}
                  <div className="grid grid-cols-4 gap-4 rounded-lg p-4">
                    <div className="flex items-center font-medium text-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      Established
                    </div>
                    {selectedSchools.map((school) => (
                      <div key={school.id} className="text-center">
                        <p className="text-foreground">{school.established}</p>
                      </div>
                    ))}
                  </div>

                  {/* Admissions */}
                  <div className="grid grid-cols-4 gap-4 rounded-lg bg-card p-4">
                    <div className="flex items-center font-medium text-foreground">
                      Admissions Open
                    </div>
                    {selectedSchools.map((school) => (
                      <div key={school.id} className="flex justify-center">
                        {school.admissionOpen ? (
                          <Badge className="bg-success text-success-foreground">Open</Badge>
                        ) : (
                          <Badge variant="secondary">Closed</Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Facilities Section */}
                  <div className="mt-6 pt-4">
                    <h3 className="mb-4 text-lg font-semibold text-foreground">Facilities</h3>
                  </div>

                  {allFacilities.slice(0, 8).map((facility) => (
                    <div key={facility} className="grid grid-cols-4 gap-4 rounded-lg p-4 odd:bg-card">
                      <div className="flex items-center text-sm text-foreground">{facility}</div>
                      {selectedSchools.map((school) => (
                        <div key={school.id} className="flex justify-center">
                          {school.facilities.includes(facility) ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground/30" />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 grid grid-cols-4 gap-4">
                  <div />
                  {selectedSchools.map((school) => (
                    <div key={school.id} className="flex flex-col gap-2">
                      <Button asChild>
                        <Link href={`/schools/${school.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline">Contact School</Button>
                    </div>
                  ))}
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
