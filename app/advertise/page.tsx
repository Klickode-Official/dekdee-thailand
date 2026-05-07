import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, TrendingUp, Users, Star, Globe, Zap, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advertise with DekDee Thailand | Reach 50,000+ Families Monthly',
  description: 'Partner with DekDee Thailand to reach 50,000+ active families searching for schools in Thailand every month. Premium listings, featured placement, and targeted lead generation.',
  keywords: 'advertise Thailand schools, education marketing Thailand, school listing Thailand, reach parents Thailand',
}

const packages = [
  {
    name: 'Basic Listing',
    price: 'Free',
    badge: null,
    features: ['School profile page', 'Basic contact info', 'Searchable directory', 'Parent reviews'],
    cta: 'List for Free',
    highlight: false,
  },
  {
    name: 'Premium Listing',
    price: '฿4,900 / mo',
    badge: 'Most Popular',
    features: ['Everything in Basic', 'Priority search placement', 'Featured badge & callout', '"Promoted" tag on cards', 'Lead inquiry notifications', 'Photo gallery (10 photos)', 'Analytics dashboard'],
    cta: 'Get Premium',
    highlight: true,
  },
  {
    name: 'Sponsored Content',
    price: '฿12,500 / mo',
    badge: 'Best ROI',
    features: ['Everything in Premium', 'Homepage featured slot', 'Blog post sponsorship', 'Dedicated email campaign', 'Banner ads across site', 'Priority leads delivery', 'Dedicated account manager'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

const stats = [
  { icon: Users, value: '50,000+', label: 'Monthly active families' },
  { icon: Globe, value: '20+', label: 'Cities covered in Thailand' },
  { icon: TrendingUp, value: '85%', label: 'Of visitors are parents ready to enroll' },
  { icon: BarChart, value: '3.2x', label: 'Higher conversion vs generic ads' },
]

export default function AdvertisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Badge className="mb-4 bg-primary text-primary-foreground">Partner With Us</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Reach <span className="text-primary">50,000+ families</span><br />searching for schools in Thailand
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              DekDee is Thailand&apos;s leading school discovery platform. Every visitor is an active parent or student researching their next school — your ideal, high-intent audience.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button size="lg" asChild><Link href="/contact">Get a Media Kit</Link></Button>
              <Button size="lg" variant="outline" asChild><Link href="/list-school">List Your School Free</Link></Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto h-8 w-8 text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="outline" className="mb-4">Revenue Streams</Badge>
              <h2 className="text-3xl font-bold text-foreground">How we work together</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Three flexible partnership models designed for schools, tutoring centers, and education service providers.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <Card key={pkg.name} className={`relative flex flex-col ${pkg.highlight ? 'border-primary shadow-lg shadow-primary/10 ring-1 ring-primary' : ''}`}>
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 shadow-md">{pkg.badge}</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 gap-6">
                    <ul className="space-y-3">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button className={`mt-auto w-full ${pkg.highlight ? '' : 'variant-outline'}`} variant={pkg.highlight ? 'default' : 'outline'} asChild>
                      <Link href="/contact">{pkg.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Revenue */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground">Additional Partnership Opportunities</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Zap, title: 'Lead Generation', desc: 'Pay only per qualified parent inquiry. Schools pay per verified contact form submission from parents actively seeking enrollment.' },
                { icon: Star, title: 'Sponsored Blog Posts', desc: 'Get long-form SEO articles written about your school, published on DekDee\'s blog reaching 50,000+ monthly readers.' },
                { icon: BarChart, title: 'Banner Advertising', desc: 'Strategic banner placement on high-traffic school listing pages, blog posts, and search results for education service providers.' },
              ].map(({ icon: Icon, title, desc }) => (
                <Card key={title}>
                  <CardContent className="p-6">
                    <Icon className="h-7 w-7 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to reach Thailand&apos;s most engaged education audience?</h2>
            <p className="mt-4 text-muted-foreground">Contact our team today for a free media kit, audience insights, and a custom partnership proposal.</p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Contact Our Sales Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
