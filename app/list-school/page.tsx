import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'List Your School | DekDee Thailand',
  description: 'Add your school to the DekDee Thailand directory.',
}

export default function ListSchoolPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-card p-8 shadow-sm md:p-12">
            <h1 className="text-4xl font-bold text-foreground">List Your School</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join Thailand's fastest-growing directory of international and private schools. Connect with thousands of parents actively searching for the right education for their children.
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground">Claim your Profile</h3>
                <p className="mt-2 text-sm text-muted-foreground">Search for your school in our database and claim ownership, or create a brand new listing if you're not there yet.</p>
              </div>

              <div className="rounded-xl border border-border p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <h3 className="font-semibold text-foreground">Update Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">Add high-quality photos, update tuition fees, list extracurriculars, and reply to parent reviews.</p>
              </div>

              <div className="rounded-xl border border-border p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 mb-4">
                  <span className="text-xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="font-semibold text-foreground">Connect with Parents</h3>
                <p className="mt-2 text-sm text-muted-foreground">Receive direct inquiries and booking requests for school tours straight from interested families.</p>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Free Listing
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">Already have an account? <a href="#" className="text-primary hover:underline">Log in here</a>.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
