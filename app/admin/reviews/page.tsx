import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Star, CheckCircle, XCircle, Clock } from 'lucide-react'
import { reviews, schools } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Manage Reviews | Admin | DekDee Thailand',
  description: 'Approve and manage user reviews.',
}

const pendingReviews = [
  {
    id: '10',
    schoolId: '1',
    author: 'Emily Watson',
    rating: 5,
    date: '2026-04-30',
    title: 'Best decision we ever made',
    content: 'Enrolling our children in this school was the best decision we have ever made. The teachers are exceptional and truly care about each student.',
    status: 'pending',
  },
  {
    id: '11',
    schoolId: '2',
    author: 'Robert Kim',
    rating: 4,
    date: '2026-04-29',
    title: 'Great facilities, room for improvement',
    content: 'The school has amazing facilities and a diverse community. Some teachers could be more engaging but overall a positive experience.',
    status: 'pending',
  },
  {
    id: '12',
    schoolId: '3',
    author: 'Lisa Chen',
    rating: 2,
    date: '2026-04-28',
    title: 'Not what we expected',
    content: 'The marketing material was better than the reality. Communication with parents could be much better.',
    status: 'pending',
  },
]

export default function AdminReviewsPage() {
  const getSchoolName = (schoolId: string) => {
    return schools.find(s => s.id === schoolId)?.name || 'Unknown School'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reviews</h1>
        <p className="mt-1 text-muted-foreground">
          Manage and moderate user reviews
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{pendingReviews.length}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">10,234</p>
              <p className="text-sm text-muted-foreground">Approved</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4.5</p>
              <p className="text-sm text-muted-foreground">Avg Rating</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search reviews..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Reviews Tabs */}
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">
            Pending
            <Badge variant="secondary" className="ml-2">
              {pendingReviews.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4 space-y-4">
          {pendingReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{review.author}</p>
                        <Badge variant="outline">{getSchoolName(review.schoolId)}</Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-featured text-featured'
                                  : 'fill-muted text-muted'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-destructive hover:text-destructive">
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject
                    </Button>
                    <Button>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-foreground">{review.title}</h4>
                  <p className="mt-2 text-muted-foreground">{review.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="approved" className="mt-4 space-y-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{review.author}</p>
                        <Badge variant="outline">{getSchoolName(review.schoolId)}</Badge>
                        <Badge className="bg-success text-success-foreground">Approved</Badge>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'fill-featured text-featured'
                                : 'fill-muted text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="mt-3 font-medium text-foreground">{review.title}</h4>
                    <p className="mt-1 text-muted-foreground">{review.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="mt-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <XCircle className="h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">No rejected reviews to display</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
