import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Terms of Service | DekDee Thailand',
  description: 'DekDee Thailand Terms of Service. Read the terms and conditions governing your use of our school directory platform.',
}

const sections = [
  { title: '1. Acceptance of Terms', body: 'By using DekDee Thailand, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, please do not use this service.' },
  { title: '2. Use of Service', body: 'DekDee Thailand provides a school discovery and comparison directory. You may use the service for lawful purposes only. You must not use it in any way that causes, or may cause, damage to the website or impairment of availability.' },
  { title: '3. School Listings', body: 'School information is compiled from publicly available sources and direct school submissions. While we strive for accuracy, DekDee cannot guarantee the completeness or accuracy of all listed information. Always verify details directly with the school.' },
  { title: '4. User Reviews', body: 'Reviews submitted by users must be honest, first-hand accounts. We reserve the right to remove reviews that violate our guidelines, including fake reviews, spam, or defamatory content.' },
  { title: '5. Intellectual Property', body: 'All content on DekDee Thailand, including logos, text, and data, is the property of DekDee Thailand or its content suppliers. You may not reproduce, distribute, or use our content without explicit written permission.' },
  { title: '6. Limitation of Liability', body: 'DekDee Thailand shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the service, any school enrollment decisions made based on our listings, or any errors or omissions in the directory.' },
  { title: '7. Privacy', body: 'Your use of DekDee Thailand is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.' },
  { title: '8. Changes to Terms', body: 'We reserve the right to modify these terms at any time. We will always post the most current version on this page. Continued use of the service after changes constitutes your acceptance of the new terms.' },
  { title: '9. Contact', body: 'For any questions regarding these Terms of Service, contact us at contact@dekdee.co.th.' },
]

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: May 1, 2026</p>
          <div className="space-y-8 text-muted-foreground">
            {sections.map(({ title, body }) => (
              <section key={title}>
                <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
                <p className="leading-relaxed">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
