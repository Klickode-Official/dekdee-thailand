import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Cookie Policy | DekDee Thailand',
  description: 'How we use cookies to improve your experience.',
}

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card p-8 shadow-sm md:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: May 2026</p>
            
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Like almost every modern website, DekDee Thailand uses cookies to ensure our platform functions properly and to give you the best possible experience.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are tiny text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (like login details, language, or the schools you added to your comparison list) over a period of time.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Them</h2>
              <ul>
                <li><strong>Essential Cookies:</strong> These are strictly necessary for the website to function. Without these, features like secure logins wouldn't work.</li>
                <li><strong>Functional Cookies:</strong> These remember your preferences, like the specific schools you added to your "Compare" tool, so they are still there when you refresh the page.</li>
                <li><strong>Analytics Cookies:</strong> We use tools like Google Analytics to understand how visitors interact with our site. This data is completely anonymous and helps us figure out what features parents find most useful.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Managing Your Cookies</h2>
              <p>
                You have full control over your cookies. You can set your browser to block all cookies or to alert you when a cookie is being set. However, please note that if you block essential or functional cookies, parts of DekDee Thailand (like the Compare feature) may not work correctly.
              </p>

              <div className="mt-8 flex gap-4">
                <Button variant="outline">Manage Preferences</Button>
                <Button className="bg-primary text-primary-foreground">Accept All</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
