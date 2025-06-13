"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/ui/footer"
import ServiceBanner from "@/components/ui/service"
import { MapPin, Bed, Bath, Search, Filter, Building } from "lucide-react"
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
  category: 'rent' | 'sale'
  image: string
  link: string
  features: string[]
  energyClass: string
}

const properties: Property[] = [
  {
    id: 'zenith',
    title: 'T1-12-05 Zenith Tower',
    address: '21-23 Boulevard F.W. Raiffeisen, L-2411 Luxembourg-Gasperich',
    price: 3000,
    coordinates: [6.1319, 49.5864],
    bedrooms: 1,
    bathrooms: 1,
    area: 94,
    type: 'Luxury Apartment',
    status: 'Available',
    category: 'rent',
    image: '/rainbow.jpeg',
    link: '/zenith',
    features: ['12th Floor Views', 'Pool & Fitness', 'Parking', 'Furnished', 'High-Speed WiFi', 'Central Heating'],
    energyClass: 'A-A'
  },
  {
    id: 'liberte',
    title: 'Avenue de la Liberté Studio',
    address: '57 Avenue de la Liberté, L-1931 Luxembourg-Gare',
    price: 1550,
    coordinates: [6.1297, 49.5967],
    bedrooms: 1,
    bathrooms: 1,
    area: 38,
    type: 'Historic Studio',
    status: 'Available',
    category: 'rent',
    image: '/liberte/living.png',
    link: '/liberte',
    features: ['Near Train Station', 'Historic Building', 'Renovated 2017', 'Furnished'],
    energyClass: 'F-E'
  }
]

export default function HomePage() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [propertyCategory, setPropertyCategory] = useState<'all' | 'rent' | 'sale'>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [propertyType, setPropertyType] = useState<string>('all')
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties)

  // Filter properties based on search and filters
  useEffect(() => {
    let filtered = properties

    // Filter by category
    if (propertyCategory !== 'all') {
      filtered = filtered.filter(property => property.category === propertyCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(property => {
        const price = property.price
        switch (priceRange) {
          case 'under-2000':
            return propertyCategory === 'rent' ? price < 2000 : price < 500000
          case '2000-3000':
            return propertyCategory === 'rent' ? (price >= 2000 && price <= 3000) : (price >= 500000 && price <= 750000)
          case 'over-3000':
            return propertyCategory === 'rent' ? price > 3000 : price > 750000
          default:
            return true
        }
      })
    }

    // Filter by property type
    if (propertyType !== 'all') {
      filtered = filtered.filter(property =>
        property.type.toLowerCase().includes(propertyType.toLowerCase())
      )
    }

    setFilteredProperties(filtered)
  }, [searchQuery, propertyCategory, priceRange, propertyType])

  // Initialize map
  useEffect(() => {
    if (map.current) return

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [6.1308, 49.5915],
        zoom: 13
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right')
    }
  }, [])

  // Update map markers when filtered properties change
  useEffect(() => {
    if (!map.current) return

    // Clear existing markers
    const markers = document.querySelectorAll('.custom-marker')
    markers.forEach(marker => marker.remove())

    // Add markers for filtered properties
    filteredProperties.forEach((property) => {
      const markerElement = document.createElement('div')
      markerElement.className = 'custom-marker'
      markerElement.style.cssText = `
        width: 40px;
        height: 40px;
        background: ${property.category === 'sale' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)'};
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
      icon.innerHTML = property.category === 'sale' ? '🏡' : '🏠'
      icon.style.fontSize = '16px'
      markerElement.appendChild(icon)

      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'scale(1.1)'
      })
      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = 'scale(1)'
      })

      const popupContent = `
        <div style="padding: 12px; min-width: 250px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">
            ${property.title}
          </h3>
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">
            ${property.address}
          </p>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <span style="font-size: 18px; font-weight: bold; color: ${property.category === 'sale' ? '#10b981' : '#3b82f6'};">
              €${property.price.toLocaleString()}${property.category === 'rent' ? '/month' : ''}
            </span>
          </div>
          <div style="display: flex; gap: 12px; margin-bottom: 12px; font-size: 12px; color: #6b7280;">
            <span>🛏️ ${property.bedrooms} bed</span>
            <span>🚿 ${property.bathrooms} bath</span>
            <span>📐 ${property.area}m²</span>
          </div>
          <a href="${property.link}" style="
            display: inline-block;
            background: ${property.category === 'sale' ? '#10b981' : '#3b82f6'};
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

      new mapboxgl.Marker(markerElement)
        .setLngLat(property.coordinates)
        .setPopup(popup)
        .addTo(map.current!)

      markerElement.addEventListener('click', () => {
        setSelectedProperty(property)
      })
    })
  }, [filteredProperties])

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Search and Filters */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Brand Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Luxembourg Real Estate</h1>
            <p className="text-slate-600">Find your perfect property with our interactive map search</p>
          </div>

          {/* Main Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                placeholder="Search by address, neighborhood, city, or property type..."
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg outline-none"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Property Category */}
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button
                className={`px-4 py-2 rounded-lg ${propertyCategory === 'rent' ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
                onClick={() => setPropertyCategory('rent')}
              >
                For Rent
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${propertyCategory === 'sale' ? 'bg-green-600 text-white' : 'text-slate-600'}`}
                onClick={() => setPropertyCategory('sale')}
              >
                For Sale
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${propertyCategory === 'all' ? 'bg-slate-600 text-white' : 'text-slate-600'}`}
                onClick={() => setPropertyCategory('all')}
              >
                All
              </button>
            </div>

            {/* Price Range */}
            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-48 px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Prices</option>
              {propertyCategory === 'rent' ? (
                <>
                  <option value="under-2000">Under €2,000/month</option>
                  <option value="2000-3000">€2,000 - €3,000/month</option>
                  <option value="over-3000">Over €3,000/month</option>
                </>
              ) : (
                <>
                  <option value="under-2000">Under €500,000</option>
                  <option value="2000-3000">€500,000 - €750,000</option>
                  <option value="over-3000">Over €750,000</option>
                </>
              )}
            </select>

            {/* Property Type */}
            <select 
              value={propertyType} 
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-48 px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio</option>
              <option value="penthouse">Penthouse</option>
              <option value="house">House</option>
            </select>

            {/* Results Count */}
            <div className="text-slate-600 text-sm">
              {filteredProperties.length} properties found
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: 50% Map, 50% Listings */}
      <div className="flex h-[calc(100vh-250px)]">
        {/* Map Section - 50% */}
        <div className="w-1/2 relative">
          <div 
            ref={mapContainer} 
            className="w-full h-full"
          />
          {/* Map Legend */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 z-10">
            <h3 className="font-semibold text-sm mb-2">Map Legend</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>For Rent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>For Sale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Listings Section - 50% */}
        <div className="w-1/2 overflow-y-auto bg-slate-50">
          <div className="p-6 space-y-4">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-slate-400 mb-4">
                  <Filter className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No properties found</h3>
                <p className="text-slate-500">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              filteredProperties.map((property) => (
                <Card 
                  key={property.id} 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedProperty?.id === property.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedProperty(property)}
                >
                  <div className="flex">
                    {/* Property Image */}
                    <div className="relative w-48 h-32 flex-shrink-0">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover rounded-l-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge 
                          variant={property.status === 'Available' ? 'default' : 'destructive'}
                          className={property.status === 'Available' ? 'bg-green-600' : 'bg-red-600'}
                        >
                          {property.status}
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge 
                          variant="secondary"
                          className={property.category === 'sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                        >
                          {property.category === 'sale' ? 'For Sale' : 'For Rent'}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Property Details */}
                    <CardContent className="flex-1 p-4">
                      <div className="mb-2">
                        <h3 className="font-bold text-lg mb-1">{property.title}</h3>
                        <p className="text-slate-600 text-sm flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {property.address}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-2xl font-bold ${property.category === 'sale' ? 'text-green-600' : 'text-blue-600'}`}>
                          €{property.price.toLocaleString()}
                        </span>
                        {property.category === 'rent' && <span className="text-slate-600">/month</span>}
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2 mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Bed className="h-3 w-3" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-3 w-3" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          <span>{property.area}m²</span>
                        </div>
                        <div className="text-xs text-slate-500">
                          {property.energyClass}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {property.features.slice(0, 3).map((feature, index) => (
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
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
} 