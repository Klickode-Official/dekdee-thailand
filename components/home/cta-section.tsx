import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Free school consultations',
  'Direct contact with admissions',
  'Compare schools side-by-side',
  'Read verified parent reviews',
]

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
                Start Your School Search Today
              </h2>
              <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
                Join thousands of families who found their perfect school through DekDee Thailand.
              </p>
              
              {/* Benefits */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-foreground/80" />
                    <span className="text-sm text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base"
                asChild
              >
                <Link href="/schools">
                  Browse Schools
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base"
              >
                List Your School
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
