'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const FORMSPREE_INQUIRY = process.env.NEXT_PUBLIC_FORMSPREE_INQUIRY

interface LeadCaptureFormProps {
  schoolName: string
}

export function LeadCaptureForm({ schoolName }: LeadCaptureFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [grade, setGrade] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)
    // inject the school name so it shows in Formspree inbox
    data.append('_subject', `School Inquiry: ${schoolName}`)
    data.append('school', schoolName)
    data.append('grade', grade)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_INQUIRY}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setGrade('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <Card className="border-green-500/30 bg-green-50/50 dark:bg-green-950/20">
        <CardContent className="p-6 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h3 className="mt-4 text-lg font-semibold text-foreground">Inquiry Sent!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your inquiry has been sent regarding <strong>{schoolName}</strong>. Our team will
            follow up within 24–48 hours.
          </p>
          <Button variant="outline" className="mt-4" onClick={() => setStatus('idle')}>
            Send Another Inquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Request Information</CardTitle>
        <p className="text-sm text-muted-foreground">
          Get details about <span className="font-medium text-foreground">{schoolName}</span>
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden Formspree config */}
          <input type="hidden" name="_subject" value={`School Inquiry: ${schoolName}`} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+66 XX XXX XXXX" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="grade">Grade Level Interested *</Label>
            <Select value={grade} onValueChange={setGrade} required>
              <SelectTrigger id="grade">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pre-Kindergarten">Pre-Kindergarten</SelectItem>
                <SelectItem value="Kindergarten">Kindergarten</SelectItem>
                <SelectItem value="Elementary (1-5)">Elementary (Grades 1–5)</SelectItem>
                <SelectItem value="Middle School (6-8)">Middle School (Grades 6–8)</SelectItem>
                <SelectItem value="High School (9-12)">High School (Grades 9–12)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any specific questions or information you need?"
              rows={3}
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try again or email us directly at contact@dekdee.co.th
            </p>
          )}

          <Button type="submit" className="w-full" size="lg" disabled={status === 'submitting'}>
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Inquiry
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By submitting, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </a>
            .
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
