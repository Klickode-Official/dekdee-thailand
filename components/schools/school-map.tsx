'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { School } from '@/lib/data'

interface SchoolMapProps {
  schools: School[]
  className?: string
}

export function SchoolMap({ schools, className = '' }: SchoolMapProps) {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [MapContainer, setMapContainer] = useState<React.ComponentType<{ children: React.ReactNode; center: [number, number]; zoom: number; className?: string; scrollWheelZoom?: boolean }> | null>(null)
  const [TileLayer, setTileLayer] = useState<React.ComponentType<{ attribution: string; url: string }> | null>(null)
  const [Marker, setMarker] = useState<React.ComponentType<{ position: [number, number]; eventHandlers: { click: () => void }; icon?: unknown }> | null>(null)
  const [Popup, setPopup] = useState<React.ComponentType<{ children: React.ReactNode }> | null>(null)

  useEffect(() => {
    // Dynamically import leaflet components to avoid SSR issues
    const loadLeaflet = async () => {
      const L = await import('leaflet')
      const { MapContainer: MC, TileLayer: TL, Marker: M, Popup: P } = await import('react-leaflet')
      
      // Fix default marker icon
      delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })
      
      setMapContainer(() => MC as unknown as React.ComponentType<{ children: React.ReactNode; center: [number, number]; zoom: number; className?: string; scrollWheelZoom?: boolean }>)
      setTileLayer(() => TL as unknown as React.ComponentType<{ attribution: string; url: string }>)
      setMarker(() => M as unknown as React.ComponentType<{ position: [number, number]; eventHandlers: { click: () => void }; icon?: unknown }>)
      setPopup(() => P as unknown as React.ComponentType<{ children: React.ReactNode }>)
    }
    
    loadLeaflet()
  }, [])

  // Calculate center of all schools
  const center: [number, number] = schools.length > 0
    ? [
        schools.reduce((sum, s) => sum + s.coordinates.lat, 0) / schools.length,
        schools.reduce((sum, s) => sum + s.coordinates.lng, 0) / schools.length,
      ]
    : [13.7563, 100.5018] // Default to Bangkok

  const formatFees = (fees: School['fees']) => {
    const formatter = new Intl.NumberFormat('en-US')
    return `${formatter.format(fees.min / 1000)}K - ${formatter.format(fees.max / 1000)}K THB/yr`
  }

  if (!MapContainer || !TileLayer || !Marker || !Popup) {
    return (
      <div className={`flex items-center justify-center bg-muted rounded-xl ${className}`} style={{ minHeight: '400px' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <MapPin className="h-8 w-8 animate-pulse" />
          <p>Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css"
      />
      <MapContainer
        center={center}
        zoom={6}
        className="h-full w-full rounded-xl"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {schools.map((school) => (
          <Marker
            key={school.id}
            position={[school.coordinates.lat, school.coordinates.lng]}
            eventHandlers={{
              click: () => setSelectedSchool(school),
            }}
          >
            <Popup>
              <div className="p-1">
                <p className="font-semibold">{school.name}</p>
                <p className="text-sm text-muted-foreground">{school.city}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Selected School Card */}
      {selectedSchool && (
        <Card className="absolute bottom-4 left-4 right-4 z-[1000] max-w-sm shadow-xl md:left-4 md:right-auto">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {selectedSchool.featured && (
                    <Badge className="bg-featured text-featured-foreground text-xs">Featured</Badge>
                  )}
                  {selectedSchool.admissionOpen && (
                    <Badge className="bg-success text-success-foreground text-xs">Open</Badge>
                  )}
                </div>
                <h3 className="mt-1 font-semibold text-foreground line-clamp-1">
                  {selectedSchool.name}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{selectedSchool.location}</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-featured text-featured" />
                    <span className="text-sm font-medium">{selectedSchool.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{formatFees(selectedSchool.fees)}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={`/schools/${selectedSchool.slug}`}>View Details</Link>
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setSelectedSchool(null)}>
                    Close
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 shrink-0"
                onClick={() => setSelectedSchool(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
