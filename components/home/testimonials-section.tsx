import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Trusted by Thousands of Families
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            See what parents are saying about their experience with DekDee Thailand
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-muted/30" />
                
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-featured text-featured" />
                  ))}
                </div>

                {/* Content */}
                <p className="mt-4 text-foreground leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {['Google Reviews', 'Facebook', 'Trustpilot', 'Education.com'].map((badge) => (
            <div key={badge} className="text-lg font-semibold text-muted-foreground">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
