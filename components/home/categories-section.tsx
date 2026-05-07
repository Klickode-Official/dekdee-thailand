import Link from 'next/link'
import { GraduationCap, Building2, Moon, Wallet, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const categories = [
  {
    name: 'International Schools',
    description: 'World-class education with global curricula',
    icon: GraduationCap,
    href: '/schools?type=international',
    count: 150,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    name: 'Private Schools',
    description: 'Premium Thai and bilingual education',
    icon: Building2,
    href: '/schools?type=private',
    count: 200,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    name: 'Islamic Schools',
    description: 'Faith-based education with modern standards',
    icon: Moon,
    href: '/schools?type=islamic',
    count: 80,
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    name: 'Budget Schools',
    description: 'Quality education at affordable prices',
    icon: Wallet,
    href: '/schools?budget=low',
    count: 120,
    color: 'bg-amber-500/10 text-amber-600',
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Find the perfect school type for your family&apos;s needs and preferences
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={cn('inline-flex rounded-xl p-3', category.color)}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.count}+ schools
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
