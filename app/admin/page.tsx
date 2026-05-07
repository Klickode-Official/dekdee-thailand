import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  School,
  Users,
  Star,
  TrendingUp,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Admin Dashboard | DekDee Thailand',
  description: 'Manage schools and listings on DekDee Thailand.',
}

const stats = [
  {
    title: 'Total Schools',
    value: '534',
    change: '+12',
    changeLabel: 'from last month',
    trend: 'up',
    icon: School,
  },
  {
    title: 'Active Users',
    value: '24,521',
    change: '+8.2%',
    changeLabel: 'from last week',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Reviews',
    value: '10,234',
    change: '+156',
    changeLabel: 'this month',
    trend: 'up',
    icon: Star,
  },
  {
    title: 'Page Views',
    value: '1.2M',
    change: '-3.1%',
    changeLabel: 'from last month',
    trend: 'down',
    icon: Eye,
  },
]

const recentSchools = [
  { id: 1, name: 'New International Academy', city: 'Bangkok', status: 'pending', date: '2026-04-30' },
  { id: 2, name: 'Bangkok British School', city: 'Bangkok', status: 'approved', date: '2026-04-29' },
  { id: 3, name: 'Thai-German School', city: 'Chiang Mai', status: 'pending', date: '2026-04-28' },
  { id: 4, name: 'Phuket Academy', city: 'Phuket', status: 'approved', date: '2026-04-27' },
]

const pendingReviews = [
  { id: 1, school: 'Bangkok International School', author: 'John D.', rating: 5 },
  { id: 2, school: 'Ruamrudee International', author: 'Sarah M.', rating: 4 },
  { id: 3, school: 'Chiang Mai International', author: 'Mike T.', rating: 3 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Welcome back, Admin. Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/schools/new">
            <Plus className="mr-2 h-4 w-4" />
            Add School
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Schools */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent School Submissions</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/schools">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSchools.map((school) => (
                <div
                  key={school.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div>
                    <p className="font-medium text-foreground">{school.name}</p>
                    <p className="text-sm text-muted-foreground">{school.city}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={school.status === 'approved' ? 'default' : 'secondary'}
                      className={
                        school.status === 'approved'
                          ? 'bg-success text-success-foreground'
                          : ''
                      }
                    >
                      {school.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Reviews */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Reviews Pending Approval</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/reviews">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingReviews.map((review) => (
                <div
                  key={review.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div>
                    <p className="font-medium text-foreground">{review.school}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">by {review.author}</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? 'fill-featured text-featured'
                                : 'fill-muted text-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reject
                    </Button>
                    <Button size="sm">Approve</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/admin/schools/new">
                <Plus className="h-6 w-6" />
                <span>Add New School</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/admin/reviews">
                <Star className="h-6 w-6" />
                <span>Manage Reviews</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/admin/schools">
                <School className="h-6 w-6" />
                <span>View All Schools</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/admin/settings">
                <TrendingUp className="h-6 w-6" />
                <span>Analytics</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
