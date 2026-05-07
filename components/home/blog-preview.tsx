import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/lib/data'

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Education Insights
            </h2>
            <p className="mt-2 text-muted-foreground">
              Expert guides and rankings to help you make the best decision
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className={`group h-full overflow-hidden transition-all hover:shadow-lg ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
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
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
