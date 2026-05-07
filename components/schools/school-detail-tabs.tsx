'use client'

import { Star, ThumbsUp, CheckCircle, MapPin, Clock, FileText } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import type { School } from '@/lib/data'
import { reviews } from '@/lib/data'

interface SchoolDetailTabsProps {
  school: School
}

export function SchoolDetailTabs({ school }: SchoolDetailTabsProps) {
  const schoolReviews = reviews.filter((r) => r.schoolId === school.id)

  const ratingBreakdown = [
    { stars: 5, count: 156, percentage: 66 },
    { stars: 4, count: 52, percentage: 22 },
    { stars: 3, count: 18, percentage: 8 },
    { stars: 2, count: 6, percentage: 3 },
    { stars: 1, count: 2, percentage: 1 },
  ]

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
        <TabsTrigger
          value="overview"
          className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Reviews
        </TabsTrigger>
        <TabsTrigger
          value="facilities"
          className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Facilities
        </TabsTrigger>
        <TabsTrigger
          value="admission"
          className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Admission
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="mt-6">
        <div className="space-y-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-foreground">About {school.name}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {school.description}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our school provides a nurturing environment where students can thrive academically, 
              socially, and emotionally. With state-of-the-art facilities and dedicated faculty, 
              we prepare students for success in an increasingly globalized world. Our curriculum 
              emphasizes critical thinking, creativity, and cultural awareness.
            </p>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="text-xl font-semibold text-foreground">Curriculum</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {school.curriculum.map((curr) => (
                <Badge key={curr} variant="secondary" className="px-4 py-2">
                  {curr}
                </Badge>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">
              Our curriculum is designed to provide a balanced education that prepares students 
              for higher education and beyond. We offer a range of subjects and extracurricular 
              activities to support holistic development.
            </p>
          </div>

          {/* Key Facts */}
          <div>
            <h3 className="text-xl font-semibold text-foreground">Key Facts</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">School Hours</p>
                    <p className="font-medium text-foreground">8:00 AM - 3:30 PM</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Grade Levels</p>
                    <p className="font-medium text-foreground">Pre-K to Grade 12</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div>
            <h3 className="text-xl font-semibold text-foreground">Location</h3>
            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{school.location}</span>
            </div>
            <div className="mt-4 h-64 rounded-xl bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map</p>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Reviews Tab */}
      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-8">
          {/* Rating Summary */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-foreground">{school.rating}</p>
                  <div className="mt-2 flex justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(school.rating)
                            ? 'fill-featured text-featured'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {school.reviewCount} reviews
                  </p>
                </div>
                <div className="flex-1 space-y-2">
                  {ratingBreakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <span className="w-8 text-sm text-muted-foreground">{item.stars} star</span>
                      <Progress value={item.percentage} className="h-2 flex-1" />
                      <span className="w-8 text-sm text-muted-foreground">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Write Review CTA */}
          <Card className="border-dashed">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h4 className="font-semibold text-foreground">Share your experience</h4>
                <p className="text-sm text-muted-foreground">Help other parents make informed decisions</p>
              </div>
              <Button>Write a Review</Button>
            </CardContent>
          </Card>

          {/* Reviews List */}
          <div className="space-y-4">
            {schoolReviews.length > 0 ? (
              schoolReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {review.author.split(' ').map((n) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{review.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'fill-featured text-featured'
                                : 'fill-muted text-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <h4 className="mt-4 font-semibold text-foreground">{review.title}</h4>
                    <p className="mt-2 text-muted-foreground">{review.content}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" />
                        Helpful ({review.helpful})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </TabsContent>

      {/* Facilities Tab */}
      <TabsContent value="facilities" className="mt-6">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground">School Facilities</h3>
            <p className="mt-2 text-muted-foreground">
              Our campus features modern facilities designed to support student learning and development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {school.facilities.map((facility) => (
              <Card key={facility}>
                <CardContent className="flex items-center gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">{facility}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Facilities Info */}
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground">Campus Highlights</h4>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Air-conditioned classrooms with smart boards</li>
                <li>• Dedicated STEM and robotics lab</li>
                <li>• Multi-purpose auditorium (500+ seats)</li>
                <li>• On-campus health clinic with nurse</li>
                <li>• Secure campus with 24/7 security</li>
                <li>• School bus service covering major areas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Admission Tab */}
      <TabsContent value="admission" className="mt-6">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Admission Process</h3>
            <p className="mt-2 text-muted-foreground">
              We welcome applications from families who share our commitment to academic excellence.
            </p>
          </div>

          {/* Admission Status */}
          <Card className={school.admissionOpen ? 'border-success/50' : ''}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Admission Status</h4>
                  <p className="text-sm text-muted-foreground">
                    Academic Year 2026-2027
                  </p>
                </div>
                <Badge className={school.admissionOpen ? 'bg-success text-success-foreground' : ''}>
                  {school.admissionOpen ? 'Open' : 'Closed'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <div>
            <h4 className="font-semibold text-foreground">Application Steps</h4>
            <div className="mt-4 space-y-4">
              {[
                { step: 1, title: 'Submit Online Application', desc: 'Complete the application form with required documents' },
                { step: 2, title: 'Entrance Assessment', desc: 'Students will take age-appropriate assessments' },
                { step: 3, title: 'Family Interview', desc: 'Meet with our admissions team' },
                { step: 4, title: 'Admission Decision', desc: 'Receive notification within 2 weeks' },
                { step: 5, title: 'Enrollment', desc: 'Complete enrollment and fee payment' },
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground">Required Documents</h4>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Completed application form</li>
                <li>• Copy of student&apos;s passport/ID</li>
                <li>• Copy of parent&apos;s passport/ID</li>
                <li>• Academic transcripts (last 2 years)</li>
                <li>• Passport-sized photos (2)</li>
                <li>• Letter of recommendation (optional)</li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex gap-4">
            <Button size="lg" className="flex-1">Start Application</Button>
            <Button variant="outline" size="lg" className="flex-1">Download Brochure</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
