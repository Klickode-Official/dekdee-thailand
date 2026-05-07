import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Globe, Award, BookOpen, Heart, TrendingUp, MapPin, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About DekDee Thailand | Thailand\'s Trusted School Directory',
  description: 'DekDee Thailand is the leading school discovery platform in Thailand, helping thousands of families find the best international, private, and public schools since 2020.',
  keywords: 'about DekDee, Thailand school directory, find schools Thailand, international school guide Thailand',
}

const team = [
  { name: 'Somchai Rattana', role: 'Founder & CEO', bio: 'Former educator with 15 years in Thailand international schools. Passionate about making quality education accessible to every family.' },
  { name: 'Priya Anand', role: 'Head of Data & Research', bio: 'Expert in Thai education policy and school accreditation. Ensures every listing is verified and accurate.' },
  { name: 'James Whitfield', role: 'Product Lead', bio: 'Expat parent of 3, built DekDee after struggling to find accurate school info when relocating to Bangkok.' },
  { name: 'Napat Limcharoen', role: 'Community Manager', bio: 'Connects with parents and schools across Thailand to gather real, honest reviews.' },
]

const values = [
  { icon: Heart, title: 'Family First', desc: 'Every decision we make is guided by what\'s best for families and students in Thailand.' },
  { icon: Award, title: 'Verified & Trusted', desc: 'All school data is manually reviewed and verified by our research team.' },
  { icon: Globe, title: 'Inclusive', desc: 'We cover all school types — international, public, private, Islamic, and budget schools.' },
  { icon: TrendingUp, title: 'Always Improving', desc: 'We constantly update our database and add new features based on your feedback.' },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Thailand&apos;s Most Trusted<br />
                <span className="text-primary">School Directory</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                DekDee was born out of a simple frustration: finding accurate, comprehensive school information in Thailand was incredibly hard. We built the platform we wished had existed.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { icon: BookOpen, value: '150+', label: 'Schools Listed' },
                { icon: Users, value: '50,000+', label: 'Monthly Families' },
                { icon: MapPin, value: '20+', label: 'Cities Covered' },
                { icon: Star, value: '4.8', label: 'Average School Rating' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto h-8 w-8 text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge variant="outline" className="mb-4">Our Mission</Badge>
                <h2 className="text-3xl font-bold text-foreground">Every child deserves the right school</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Thailand has a rich and diverse education landscape — from world-class IB international schools in Bangkok to community-rooted Islamic schools in the South. Yet for most parents, navigating this landscape is overwhelming and time-consuming.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  DekDee simplifies this journey. We aggregate verified school data, real parent reviews, fee information, and curriculum details into one beautiful, easy-to-use platform.
                </p>
                <Button asChild className="mt-8">
                  <Link href="/schools">Browse All Schools</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map(({ icon: Icon, title, desc }) => (
                  <Card key={title} className="p-5 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Icon className="h-7 w-7 text-primary mb-3" />
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">The Team</Badge>
              <h2 className="text-3xl font-bold text-foreground">Built by educators, parents & technologists</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {member.name[0]}
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mt-1">{member.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground">Are you a school administrator?</h2>
            <p className="mt-4 text-muted-foreground">Join 150+ schools already listed on DekDee and reach thousands of families actively searching for their next school.</p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg"><Link href="/list-school">List Your School</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
