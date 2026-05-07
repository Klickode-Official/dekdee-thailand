import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedSchools } from '@/components/home/featured-schools'
import { CategoriesSection } from '@/components/home/categories-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { SchoolRecommendations } from '@/components/home/ai-recommendations'
import { BlogPreview } from '@/components/home/blog-preview'
import { CTASection } from '@/components/home/cta-section'
import { FAQSection } from '@/components/home/faq-section'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedSchools />
        <CategoriesSection />
        <SchoolRecommendations />
        <TestimonialsSection />
        <BlogPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
