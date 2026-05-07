import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Clock,
  Calendar,
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
} from 'lucide-react'
import { blogPosts, schools } from '@/lib/data'
import { SchoolCard } from '@/components/schools/school-card'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${post.title} | DekDee Thailand Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)
  const featuredSchools = schools.filter((s) => s.featured).slice(0, 2)

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
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Back Link */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>

                {/* Article Header */}
                <header className="mt-6">
                  <Badge className="mb-4">{post.category}</Badge>
                  <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                    {post.title}
                  </h1>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {post.author.split(' ').map((n) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{post.author}</p>
                        <p className="text-xs text-muted-foreground">Education Expert</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Article Content */}
                <div className="mt-8 max-w-none">
                  <ReactMarkdown
                    components={{
                      h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-xl font-bold text-foreground mt-8 mb-3" {...props} />,
                      p: ({node, ...props}) => <p className="text-muted-foreground text-lg leading-relaxed mb-6" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc list-outside text-muted-foreground text-lg ml-6 mb-6 space-y-2" {...props} />,
                      li: ({node, ...props}) => <li className="pl-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-semibold text-foreground" {...props} />,
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Share Buttons */}
                <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Share:</span>
                    <Button variant="ghost" size="icon">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button variant="outline">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save Article
                  </Button>
                </div>

                {/* Related Posts */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-foreground">Related Articles</h3>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                          <div className="relative aspect-video overflow-hidden">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {relatedPost.category}
                            </Badge>
                            <h4 className="line-clamp-2 font-semibold text-foreground group-hover:text-primary">
                              {relatedPost.title}
                            </h4>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Ad Banner */}
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-6">
                    <Badge variant="outline" className="mb-3">Sponsored</Badge>
                    <h3 className="font-semibold text-foreground">Find Your Perfect School</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Use our smart search to discover schools that match your requirements.
                    </p>
                    <Button className="mt-4 w-full" asChild>
                      <Link href="/schools">Search Schools</Link>
                    </Button>
                  </div>
                </Card>

                {/* Featured Schools */}
                <div>
                  <h3 className="font-semibold text-foreground">Featured Schools</h3>
                  <div className="mt-4 space-y-4">
                    {featuredSchools.map((school) => (
                      <SchoolCard key={school.id} school={school} variant="compact" />
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">Newsletter</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Get weekly education insights delivered to your inbox.
                    </p>
                    <Button className="mt-4 w-full">Subscribe</Button>
                  </CardContent>
                </Card>

                {/* Tags */}
                <div>
                  <h3 className="font-semibold text-foreground">Popular Tags</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['International Schools', 'Bangkok', 'IB Curriculum', 'Private Schools', 'School Rankings'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
