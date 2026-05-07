'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  School,
  Star,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import { useState } from 'react'

const sidebarLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Schools', href: '/admin/schools', icon: School },
  { name: 'Reviews', href: '/admin/reviews', icon: Star },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 flex-shrink-0 border-r border-border bg-card lg:block">
        <div className="sticky top-0 flex h-screen flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-semibold text-foreground">Admin Panel</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium text-foreground">Admin User</p>
                <p className="truncate text-xs text-muted-foreground">admin@edufind.co.th</p>
              </div>
            </div>
            <Button variant="ghost" className="mt-2 w-full justify-start text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card">
            <div className="flex h-16 items-center justify-between border-b border-border px-6">
              <Link href="/admin" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">E</span>
                </div>
                <span className="font-semibold text-foreground">Admin</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="space-y-1 p-4">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-card px-4 lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">E</span>
            </div>
            <span className="font-semibold text-foreground">Admin</span>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="border-b border-border bg-card px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/admin" className="hover:text-foreground">Admin</Link>
            {pathname !== '/admin' && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground capitalize">
                  {pathname.split('/').pop()}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
