'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, X, ChevronDown, Heart, User, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Schools', href: '/schools' },
  {
    name: 'Categories',
    href: '#',
    children: [
      { name: 'International Schools', href: '/schools?type=international' },
      { name: 'Private Schools', href: '/schools?type=private' },
      { name: 'Islamic Schools', href: '/schools?type=islamic' },
      { name: 'Budget Schools', href: '/schools?budget=low' },
    ],
  },
  { name: 'Compare', href: '/compare' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'th'>('en')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="DekDee Thailand" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 text-muted-foreground hover:text-foreground">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          )}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden gap-1.5 text-muted-foreground sm:flex"
            onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm">{language === 'en' ? 'EN' : 'TH'}</span>
          </Button>

          {/* Favorites */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-muted-foreground sm:flex"
            asChild
          >
            <Link href="/favorites">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Link>
          </Button>

          {/* Sign In */}
          <Button variant="ghost" size="sm" className="hidden text-muted-foreground sm:flex" asChild>
            <Link href="/admin">
              <User className="mr-1.5 h-4 w-4" />
              Sign In
            </Link>
          </Button>

          {/* CTA Button */}
          <Button size="sm" className="hidden sm:flex" asChild>
            <Link href="/list-school">List Your School</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'border-b border-border bg-background lg:hidden',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  {item.name}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block rounded-md px-6 py-2 text-sm text-foreground hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
          <div className="flex items-center gap-2 border-t border-border pt-3">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            </Button>
            <Button size="sm" className="flex-1" asChild>
              <Link href="/list-school" onClick={() => setMobileMenuOpen(false)}>List School</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
