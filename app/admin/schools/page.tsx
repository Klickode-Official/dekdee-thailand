import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus, Search, MoreHorizontal, Edit, Eye, Trash2, Star } from 'lucide-react'
import { schools } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Manage Schools | Admin | DekDee Thailand',
  description: 'Add, edit, and manage school listings.',
}

export default function AdminSchoolsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Schools</h1>
          <p className="mt-1 text-muted-foreground">
            Manage all school listings on the platform
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/schools/new">
            <Plus className="mr-2 h-4 w-4" />
            Add School
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search schools..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="international">International</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="islamic">Islamic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Schools Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Schools ({schools.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>School</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schools.map((school) => (
                  <TableRow key={school.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-16 overflow-hidden rounded-md">
                          <Image
                            src={school.image}
                            alt={school.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{school.name}</p>
                          <div className="flex items-center gap-2">
                            {school.featured && (
                              <Badge variant="outline" className="text-xs">Featured</Badge>
                            )}
                            {school.promoted && (
                              <Badge variant="outline" className="text-xs border-primary text-primary">Promoted</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{school.city}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="capitalize">
                        {school.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-featured text-featured" />
                        <span>{school.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({school.reviewCount})
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/schools/${school.slug}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 1-{schools.length} of {schools.length} schools
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
