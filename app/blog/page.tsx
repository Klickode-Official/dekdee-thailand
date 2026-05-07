import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Clock, Calendar, Search, ArrowRight, User } from 'lucide-react'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Education Blog | DekDee Thailand',
  description: 'Expert guides, school rankings, and education insights for families in Thailand.',
}

const categories = [
  'All',
  'Rankings',
  'Guides',
  'Budget Guide',
  'News',
  'Tips',
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
                Education Insights
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Expert guides, school rankings, and tips to help you make the best education decisions for your family.
              </p>
              
              {/* Search */}
              <div className="mx-auto mt-8 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    className="h-12 pl-12 pr-4"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === 'All' ? 'default' : 'secondary'}
                    className="cursor-pointer px-4 py-2"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute left-4 top-4">{featuredPost.category}</Badge>
                  </div>
                  <CardContent className="flex flex-col justify-center p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 w-fit">Featured Article</Badge>
                    <h2 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <Button className="mt-6 w-fit">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* All Posts */}
        <section className="bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute left-3 top-3 bg-background/90 text-foreground backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="flex flex-col items-center justify-between gap-6 p-8 lg:flex-row lg:p-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold">Stay Updated</h3>
                  <p className="mt-2 text-primary-foreground/80">
                    Get the latest education news and school updates delivered to your inbox.
                  </p>
                </div>
                <div className="flex w-full max-w-md gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
