import { SearchBar } from '@/components/search/search-bar'
import { Badge } from '@/components/ui/badge'
import { stats } from '@/lib/data'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pb-16 pt-12 lg:pb-24 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-1.5">
            Trusted by 5,000+ Thai families
          </Badge>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Child Deserves the{' '}
            <span className="text-primary">Perfect School</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Stop googling. Stop asking random Facebook groups. We&apos;ve done the homework - 
            real fees, honest reviews, and all the info you need to choose with confidence.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-4xl">
            <SearchBar />
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {['International Schools Bangkok', 'IB Schools', 'British Curriculum', 'Affordable Schools'].map((term) => (
              <Link key={term} href={`/schools?q=${encodeURIComponent(term)}`}>
                <Badge
                  variant="outline"
                  className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground text-sm py-1 px-3"
                >
                  {term}
                </Badge>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-foreground lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
