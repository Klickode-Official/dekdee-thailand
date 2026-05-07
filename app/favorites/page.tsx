import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SchoolCard } from '@/components/schools/school-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, ArrowRight, Search } from 'lucide-react'
import { schools } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Saved Schools | DekDee Thailand',
  description: 'View and manage your saved schools.',
}

export default function FavoritesPage() {
  // In a real app, this would come from user state/database
  const savedSchools = schools.slice(0, 3)
  const hasSchools = savedSchools.length > 0

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Saved Schools</h1>
                <p className="mt-1 text-muted-foreground">
                  {hasSchools
                    ? `You have ${savedSchools.length} saved schools`
                    : 'Start saving schools to compare later'}
                </p>
              </div>
              {hasSchools && (
                <Button asChild>
                  <Link href="/compare">
                    Compare Schools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>

            {/* Content */}
            {hasSchools ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {savedSchools.map((school) => (
                  <SchoolCard key={school.id} school={school} />
                ))}
              </div>
            ) : (
              <Card className="mt-12">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <Heart className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-foreground">No saved schools yet</h2>
                  <p className="mt-2 text-center text-muted-foreground">
                    When you find schools you like, save them here to easily compare and access later.
                  </p>
                  <Button asChild className="mt-6">
                    <Link href="/schools">
                      <Search className="mr-2 h-4 w-4" />
                      Browse Schools
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
