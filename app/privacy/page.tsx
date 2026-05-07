import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | DekDee Thailand',
  description: 'Read the DekDee Thailand Privacy Policy. Learn how we collect, use, and protect your personal data.',
}

const sections = [
  { title: '1. Information We Collect', body: 'We collect information you provide directly to us such as your name, email address, and phone number when you submit a school inquiry or create an account. We also automatically collect log data, device information, and cookie data when you use our services.' },
  { title: '2. How We Use Your Information', body: 'We use collected data to provide and improve our services, send school inquiry confirmations, communicate about products, and comply with legal obligations. We never sell your personal data to third parties.' },
  { title: '3. Information Sharing', body: 'We share your inquiry information with specific schools you request. We may share anonymised aggregate data with advertising partners for analytics. We do not sell personal data to any third party.' },
  { title: '4. Cookies', body: 'We use cookies to track activity on our platform. You can instruct your browser to refuse all cookies, though this may affect some functionality.' },
  { title: '5. Data Retention', body: 'We retain personal data only as long as necessary to provide our services and comply with legal obligations. You may request deletion at any time by emailing contact@dekdee.co.th.' },
  { title: '6. Your Rights (PDPA Compliance)', body: "Under Thailand's Personal Data Protection Act (PDPA), you have the right to access, correct, delete, and port your personal data. Contact us at contact@dekdee.co.th to exercise these rights." },
  { title: '7. Security', body: 'We implement industry-standard security measures to protect your information. No method of transmission over the Internet is 100% secure, but we strive to use commercially acceptable means.' },
  { title: '8. Contact Us', body: 'If you have questions about this Privacy Policy, contact us at contact@dekdee.co.th or +66 2 123 4567.' },
]

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
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
