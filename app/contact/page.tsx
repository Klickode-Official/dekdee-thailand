import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import { ContactFormSubmit } from '@/components/contact-form-submit'

export const metadata: Metadata = {
  title: 'Contact DekDee Thailand | Get In Touch',
  description:
    "Contact the DekDee team for school listing inquiries, partnerships, advertising, or general support. We're here to help families find the best schools in Thailand.",
}

const contactDetails = [
  { icon: Mail,  label: 'Email',        value: 'contact@dekdee.co.th', href: 'mailto:contact@dekdee.co.th' },
  { icon: Phone, label: 'Phone',        value: '+66 2 123 4567',         href: 'tel:+6621234567' },
  { icon: MapPin,label: 'Address',      value: '123 Sukhumvit Rd, Bangkok 10110, Thailand', href: '#' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 9:00 AM – 6:00 PM ICT', href: '#' },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              We&apos;d love to hear from you
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you&apos;re a parent with a question, a school wanting to list, or a brand
              looking to advertise — we&apos;re here.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground">Contact Information</h2>
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <a
                        href={href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}

                <Card className="mt-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-5">
                    <MessageSquare className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground">List Your School</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Are you a school administrator? Add your school to our directory and reach
                      thousands of families.
                    </p>
                    <a
                      href="/list-school"
                      className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Get Started
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-foreground mb-6">Send us a message</h2>
                    <ContactFormSubmit />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
