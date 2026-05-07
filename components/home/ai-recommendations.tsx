'use client'

import { Sparkles, ArrowRight, Clock, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SchoolCard } from '@/components/schools/school-card'
import { schools } from '@/lib/data'
import Link from 'next/link'

export function SchoolRecommendations() {
  // Top featured schools as recommendations
  const recommendedSchools = schools.filter(s => s.featured).slice(0, 3)
  const popularSchools = schools.filter(s => s.promoted).slice(0, 3)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* AI Recommendations */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Top Recommendations
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Handpicked schools based on top ratings &amp; parent reviews
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedSchools.map((school) => (
                    <SchoolCard key={school.id} school={school} variant="compact" />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/schools?featured=true">
                      Browse All Schools
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recently Viewed */}
          <div>
            <Card>
              <CardHeader className="border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Recently Viewed
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Continue where you left off
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {popularSchools.map((school) => (
                    <Link
                      key={school.id}
                      href={`/schools/${school.slug}`}
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                    >
                      <div
                        className="h-12 w-12 flex-shrink-0 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${school.image})` }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">
                          {school.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{school.city}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="mt-4 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Need Help Choosing?</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Talk to our education consultants for personalized guidance.
                </p>
                <Button variant="secondary" className="mt-4 w-full">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
