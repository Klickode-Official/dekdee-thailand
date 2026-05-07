import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { schools } = await request.json()

    if (!schools || !Array.isArray(schools)) {
      return NextResponse.json(
        { error: 'Invalid payload. Expected { "schools": [...] }' },
        { status: 400 }
      )
    }

    // Insert schools
    // We map over the incoming data to make sure it matches the database schema.
    const records = schools.map((s: any) => ({
      name: s.name,
      slug: s.slug || s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      location: s.location,
      city: s.city,
      lat: s.coordinates?.lat || s.lat || 0,
      lng: s.coordinates?.lng || s.lng || 0,
      curriculum: s.curriculum || [],
      fee_min: s.fees?.min || s.fee_min || null,
      fee_max: s.fees?.max || s.fee_max || null,
      fee_currency: s.fees?.currency || s.fee_currency || 'THB',
      rating: s.rating || 0,
      review_count: s.reviewCount || s.review_count || 0,
      image: s.image || '',
      description: s.description || '',
      facilities: s.facilities || [],
      featured: s.featured || false,
      promoted: s.promoted || false,
      type: s.type || 'private',
      students: s.students || null,
      established: s.established || null,
      admission_open: s.admissionOpen !== undefined ? s.admissionOpen : true,
    }))

    const { data, error } = await supabase
      .from('schools')
      .insert(records)
      .select()

    if (error) {
      console.error('Error inserting schools:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(
      { message: `Successfully imported ${data.length} schools.`, data },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('Import exception:', err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}
