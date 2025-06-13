"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/footer"
import { MapPin, Bed, Bath, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Set your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoidGVkc3RhZ2dzIiwiYSI6ImNseTY2dDd0NTA0ZjEyaXNhZzZhZm9nenQifQ.iDsrrMc7ACdHYfUtIu2kfw'

interface Property {
  id: string
  title: string
  address: string
  price: number
  coordinates: [number, number]
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  status: string
  image: string
  link: string
  features: string[]
}

const properties: Property[] = [
  {
    id: 'zenith',
    title: 'T1-12-05 Zenith Tower',
    address: '21-23 Boulevard F.W. Raiffeisen, L-2411 Luxembourg-Gasperich',
    price: 3000,
    coordinates: [6.1319, 49.5864], // Gasperich coordinates
    bedrooms: 1,
    bathrooms: 1,
    area: 94,
    type: 'Luxury Apartment',
    status: 'Available',
    image: '/rainbow.jpeg',
    link: '/',
    features: ['12th Floor Views', 'Pool & Fitness', 'Parking', 'Furnished']
  },
  {
    id: 'liberte',
    title: 'Avenue de la Liberté',
    address: '57 Avenue de la Liberté, L-1931 Luxembourg-Gare',
    price: 1550,
    coordinates: [6.1297, 49.5967], // Gare coordinates
    bedrooms: 1,
    bathrooms: 1,
    area: 38,
    type: 'Historic Studio',
    status: 'Occupied',
    image: '/liberte/living.png',
    link: '/liberte',
    features: ['Near Train Station', 'Historic Building', 'Renovated 2017', 'Furnished']
  }
]

export default function ListingsPage() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [6.1308, 49.5915], // Center between both properties in Luxembourg
        zoom: 13
      })

      // Add markers for each property
      properties.forEach((property) => {
        // Create custom marker element
        const markerElement = document.createElement('div')
        markerElement.className = 'custom-marker'
        markerElement.style.cssText = `
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.2s ease;
        `
        
        const icon = document.createElement('div')
        icon.innerHTML = '🏠'
        icon.style.fontSize = '16px'
        markerElement.appendChild(icon)

        // Add hover effect
        markerElement.addEventListener('mouseenter', () => {
          markerElement.style.transform = 'scale(1.1)'
        })
        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)'
        })

        // Create popup content
        const popupContent = `
          <div style="padding: 12px; min-width: 250px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">
              ${property.title}
            </h3>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">
              ${property.address}
            </p>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="font-size: 18px; font-weight: bold; color: #3b82f6;">€${property.price.toLocaleString()}</span>
              <span style="font-size: 14px; color: #6b7280;">/month</span>
            </div>
            <div style="display: flex; gap: 12px; margin-bottom: 12px; font-size: 12px; color: #6b7280;">
              <span>🛏️ ${property.bedrooms} bed</span>
              <span>🚿 ${property.bathrooms} bath</span>
              <span>📐 ${property.area}m²</span>
            </div>
            <a href="${property.link}" style="
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 6px 12px;
              border-radius: 6px;
              text-decoration: none;
              font-size: 12px;
              font-weight: 500;
            ">View Details</a>
          </div>
        `

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false
        }).setHTML(popupContent)

        // Add marker to map
        new mapboxgl.Marker(markerElement)
          .setLngLat(property.coordinates)
          .setPopup(popup)
          .addTo(map.current!)

        // Add click event to select property
        markerElement.addEventListener('click', () => {
          setSelectedProperty(property)
        })
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
      
      // Add fullscreen control
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Premium Property Listings
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover exceptional rental properties in Luxembourg with interactive map exploration
            </p>
          </div>
        </div>
      </div>

      {/* Map and Listings */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Interactive Property Map
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={mapContainer} 
                  className="w-full h-[600px]"
                  style={{ minHeight: '600px' }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Property List */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Available Properties</h2>
              <p className="text-slate-600 mb-6">Click on map markers or cards to explore details</p>
            </div>

            {properties.map((property) => (
              <Card 
                key={property.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedProperty?.id === property.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedProperty(property)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant={property.status === 'Available' ? 'default' : 'destructive'}
                      className={property.status === 'Available' ? 'bg-green-600' : 'bg-red-600'}
                    >
                      {property.status}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {property.type}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{property.title}</h3>
                  <p className="text-slate-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {property.address}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-blue-600">€{property.price.toLocaleString()}</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="h-3 w-3" />
                      <span>{property.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-3 w-3" />
                      <span>{property.bathrooms} bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="h-3 w-3" />
                      <span>{property.area}m²</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={property.link}>
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:Ted@staggs.lu">
                        Contact
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
