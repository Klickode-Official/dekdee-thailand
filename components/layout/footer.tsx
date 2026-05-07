import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  schools: {
    title: 'Schools',
    links: [
      { name: 'International Schools', href: '/schools?type=international' },
      { name: 'Private Schools', href: '/schools?type=private' },
      { name: 'Islamic Schools', href: '/schools?type=islamic' },
      { name: 'Budget Schools', href: '/schools?budget=low' },
      { name: 'Compare Schools', href: '/compare' },
    ],
  },
  locations: {
    title: 'Locations',
    links: [
      { name: 'Bangkok', href: '/schools?city=Bangkok' },
      { name: 'Phuket', href: '/schools?city=Phuket' },
      { name: 'Chiang Mai', href: '/schools?city=Chiang Mai' },
      { name: 'Pattaya', href: '/schools?city=Pattaya' },
      { name: 'All Locations', href: '/schools' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'School Rankings', href: '/schools?sort=rating' },
      { name: 'Curriculum Guide', href: '/blog/ib-vs-british-curriculum-thailand' },
      { name: 'Admission Tips', href: '/blog/thailand-school-admission-timeline' },
      { name: 'FAQ', href: '/contact' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'List Your School', href: '/list-school' },
      { name: 'Advertise', href: '/advertise' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-foreground">
                Stay Updated on Thailand Education
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Get the latest school news, rankings, and tips delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="DekDee Thailand" className="h-16 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted guide to finding the best schools in Thailand. Helping families make informed education decisions since 2020.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold text-foreground">{section.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
          <a href="mailto:contact@dekdee.co.th" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
            <span>contact@dekdee.co.th</span>
          </a>
          <a href="tel:+6621234567" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            <span>+66 2 123 4567</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Bangkok, Thailand</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DekDee Thailand. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
