'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const FORMSPREE_CONTACT = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT

export function ContactFormSubmit() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [topic, setTopic] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('_subject', `Contact Form: ${topic || 'General Inquiry'}`)
    data.append('topic', topic)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setTopic('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic">How can we help you? *</Label>
        <Select value={topic} onValueChange={setTopic} required>
          <SelectTrigger id="topic">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Parent Inquiry">I'm a parent looking for a school</SelectItem>
            <SelectItem value="School Listing">I want to list or update my school</SelectItem>
            <SelectItem value="Advertising">Advertising & Partnerships</SelectItem>
            <SelectItem value="Feedback">Website Feedback</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you today?"
          rows={5}
          required
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email us directly at contact@dekdee.co.th
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
