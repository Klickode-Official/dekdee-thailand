import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SchoolDetailTabs } from '@/components/schools/school-detail-tabs'
import { LeadCaptureForm } from '@/components/schools/lead-capture-form'
import { SchoolCard } from '@/components/schools/school-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Star,
  MapPin,
  Users,
  Calendar,
  BookOpen,
  Heart,
  Share2,
  Phone,
  Mail,
  Globe,
  ChevronRight,
  Bookmark,
  Award,
  Activity,
  Languages,
} from 'lucide-react'
import { schools } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const school = schools.find((s) => s.slug === slug)
  
  if (!school) {
    return { title: 'School Not Found' }
  }

  return {
    title: `${school.name} | DekDee Thailand`,
    description: school.description,
  }
}

export default async function SchoolDetailPage({ params }: PageProps) {
  const { slug } = await params
  const school = schools.find((s) => s.slug === slug)

  if (!school) {
    notFound()
  }

  const relatedSchools = schools
    .filter((s) => s.id !== school.id && s.city === school.city)
    .slice(0, 3)

  const formatFees = (fees: typeof school.fees) => {
    const formatter = new Intl.NumberFormat('en-US')
    return `${formatter.format(fees.min)} - ${formatter.format(fees.max)} ${fees.currency}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/schools" className="hover:text-foreground">Schools</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href={`/schools?city=${school.city}`} className="hover:text-foreground">{school.city}</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{school.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative">
          <div className="relative h-64 sm:h-80 lg:h-96">
            <Image
              src={school.image}
              alt={school.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          {/* School Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {school.featured && (
                      <Badge className="bg-featured text-featured-foreground">Featured</Badge>
                    )}
                    {school.promoted && (
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">Promoted</Badge>
                    )}
                    {school.admissionOpen && (
                      <Badge className="bg-success text-success-foreground">Admissions Open</Badge>
                    )}
                  </div>

                  <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                    {school.name}
                  </h1>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4" />
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${school.coordinates.lat},${school.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <span>{school.location}</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-featured text-featured" />
                      <span className="font-medium text-foreground">{school.rating}</span>
                      <span>({school.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Compare
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content Area */}
              <div className="lg:col-span-2">
                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <BookOpen className="mx-auto h-6 w-6 text-primary" />
                      <p className="mt-2 text-sm text-muted-foreground">Curriculum</p>
                      <p className="font-medium text-foreground text-sm">
                        {school.curriculum[0]}
                      </p>
                    </CardContent>
                  </Card>
                  {school.classSize && (
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="mx-auto h-6 w-6 text-primary" />
                        <p className="mt-2 text-sm text-muted-foreground">Class Size</p>
                        <p className="font-medium text-foreground text-sm">
                          ~{school.classSize} students
                        </p>
                      </CardContent>
                    </Card>
                  )}
                  {school.studentTeacherRatio && (
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="mx-auto h-6 w-6 text-primary" />
                        <p className="mt-2 text-sm text-muted-foreground">Teacher Ratio</p>
                        <p className="font-medium text-foreground text-sm">
                          {school.studentTeacherRatio}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                  {school.languages && school.languages.length > 0 && (
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Languages className="mx-auto h-6 w-6 text-primary" />
                        <p className="mt-2 text-sm text-muted-foreground">Languages</p>
                        <p className="font-medium text-foreground text-sm truncate">
                          {school.languages.slice(0, 2).join(', ')}{school.languages.length > 2 ? '...' : ''}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Calendar className="mx-auto h-6 w-6 text-primary" />
                      <p className="mt-2 text-sm text-muted-foreground">Established</p>
                      <p className="font-medium text-foreground text-sm">
                        {school.established}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Star className="mx-auto h-6 w-6 text-primary" />
                      <p className="mt-2 text-sm text-muted-foreground">Rating</p>
                      <p className="font-medium text-foreground text-sm">
                        {school.rating}/5
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Accreditations & Extracurriculars */}
                {(school.accreditations || school.extracurriculars) && (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {school.accreditations && school.accreditations.length > 0 && (
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold text-foreground">Accreditations</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {school.accreditations.map((acc, idx) => (
                              <Badge key={idx} variant="secondary">{acc}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    {school.extracurriculars && school.extracurriculars.length > 0 && (
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Activity className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold text-foreground">Extracurriculars</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {school.extracurriculars.map((ext, idx) => (
                              <Badge key={idx} variant="outline">{ext}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Tabs Section */}
                <div id="admissions" className="mt-8">
                  <SchoolDetailTabs school={school} />
                </div>

                {/* Location Map */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Location & Map</h2>
                  <Card className="overflow-hidden">
                    <iframe
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://maps.google.com/maps?q=${school.coordinates.lat},${school.coordinates.lng}&z=15&output=embed`}
                    ></iframe>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Premium Listing Callout */}
                {school.promoted && (
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-4 text-center">
                    <Badge variant="default" className="mb-2">Verified Premium School</Badge>
                    <p className="text-sm text-muted-foreground">This institution is a DekDee preferred partner, ensuring priority support for your application.</p>
                  </div>
                )}
                {/* Fees Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">Annual Fees</h3>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {formatFees(school.fees)}
                    </p>
                    <p className="text-sm text-muted-foreground">per academic year</p>
                    
                    <div className="mt-6 space-y-3">
                      {school.contactPhone ? (
                        <a href={`tel:${school.contactPhone.replace(/\s+/g, '')}`}>
                          <Button className="w-full" size="lg">
                            <Phone className="mr-2 h-4 w-4" />
                            {school.contactPhone}
                          </Button>
                        </a>
                      ) : (
                        <Button className="w-full" size="lg">
                          <Phone className="mr-2 h-4 w-4" />
                          Contact School
                        </Button>
                      )}
                      
                      <Button variant="outline" className="w-full" size="lg">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Inquiry
                      </Button>
                    </div>

                    {school.website && (
                      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <a 
                          href={school.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                          Visit Official Website
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Lead Capture Form - Monetization Hook */}
                <div id="lead-form" className="relative">
                  <div className="absolute -top-3 right-4 z-10">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs shadow-sm">Fast Response</Badge>
                  </div>
                  <LeadCaptureForm schoolName={school.name} />
                </div>

                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">Quick Actions</h3>
                    <div className="mt-4 space-y-2">
                      <a href="#lead-form">
                        <Button variant="ghost" className="w-full justify-start hover:text-primary">
                          📅 Schedule a School Tour
                        </Button>
                      </a>
                      {school.website ? (
                        <a href={school.website} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="w-full justify-start hover:text-primary">
                            📄 Download Brochure
                          </Button>
                        </a>
                      ) : (
                        <a href="#lead-form">
                          <Button variant="ghost" className="w-full justify-start hover:text-primary">
                            📄 Request Brochure
                          </Button>
                        </a>
                      )}
                      <a href="#admissions">
                        <Button variant="ghost" className="w-full justify-start hover:text-primary">
                          📋 View Admission Requirements
                        </Button>
                      </a>
                      <Link href="/contact">
                        <Button variant="ghost" className="w-full justify-start hover:text-primary">
                          🎓 Check Scholarship Options
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Sponsored Ad Placeholder - High Revenue */}
                <Card className="overflow-hidden border-accent/20">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-6 relative">
                    <Badge variant="outline" className="absolute top-4 right-4 text-[10px] uppercase tracking-wider text-muted-foreground bg-background/50 border-none">Sponsored</Badge>
                    <h3 className="font-semibold text-foreground pr-16">Need Education Financing?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Explore flexible payment plans and education loans with DekDee&apos;s trusted financial partners.
                    </p>
                    <Button variant="secondary" className="mt-4 w-full border border-border/50 hover:bg-background">
                      Check Eligibility
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Related Schools */}
            {relatedSchools.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground">
                  Similar Schools in {school.city}
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedSchools.map((relatedSchool) => (
                    <SchoolCard key={relatedSchool.id} school={relatedSchool} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sticky CTA - Mobile */}
        <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background p-4 lg:hidden">
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
            <Button className="flex-1">
              Apply Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
