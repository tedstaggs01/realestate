"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/ui/footer"
import { MapPin, Bed, Bath, Search, Filter, Building, X, ChevronDown } from "lucide-react"
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
  const mobileMapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const mobileMap = useRef<mapboxgl.Map | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [propertyCategory, setPropertyCategory] = useState<'all' | 'rent' | 'sale'>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [propertyType, setPropertyType] = useState<string>('all')
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties)
  const [showFilters, setShowFilters] = useState(false)
  const [isMapView, setIsMapView] = useState(false)
  const [showMobilePropertyDetails, setShowMobilePropertyDetails] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'lb', name: 'Lëtzebuergesch', flag: '🇱🇺' }
  ]

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

  // Initialize desktop map
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

  // Initialize mobile map when switching to map view
  useEffect(() => {
    if (!isMapView) {
      // Cleanup mobile map when switching away from map view
      if (mobileMap.current) {
        mobileMap.current.remove()
        mobileMap.current = null
      }
      return
    }

    if (mobileMap.current) return

    if (mobileMapContainer.current) {
      mobileMap.current = new mapboxgl.Map({
        container: mobileMapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [6.1308, 49.5915],
        zoom: 13
      })

      // Add navigation controls
      mobileMap.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
      mobileMap.current.addControl(new mapboxgl.FullscreenControl(), 'top-right')

      // Update markers for the new mobile map
      updateMapMarkers(mobileMap.current)
    }
  }, [isMapView])

  // Cleanup function to define updateMapMarkers outside useEffect
  const updateMapMarkers = useCallback((mapInstance: mapboxgl.Map) => {
    if (!mapInstance) return

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
        transform-origin: center;
        position: relative;
      `
      
      const icon = document.createElement('div')
      icon.innerHTML = property.category === 'sale' ? '🏡' : '🏠'
      icon.style.fontSize = '16px'
      markerElement.appendChild(icon)

      // Create hover popup
      const hoverPopup = document.createElement('div')
      hoverPopup.className = 'hover-popup'
      hoverPopup.style.cssText = `
        position: absolute;
        bottom: 55px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        padding: 0;
        min-width: 280px;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        pointer-events: auto;
        border: 1px solid #e5e7eb;
      `

      hoverPopup.innerHTML = `
        <div style="position: relative;">
          <img 
            src="${property.image}" 
            alt="${property.title}"
            style="width: 100%; height: 120px; object-fit: cover; border-radius: 12px 12px 0 0;"
          />
          <div style="position: absolute; top: 8px; right: 8px;">
            <span style="
              background: ${property.category === 'sale' ? '#10b981' : '#3b82f6'};
              color: white;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 11px;
              font-weight: 600;
            ">
              ${property.category === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
        </div>
        </div>
        <div style="padding: 12px;">
          <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #1f2937; line-height: 1.3;">
            ${property.title}
          </h3>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280; line-height: 1.2;">
            📍 ${property.address}
          </p>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 16px; font-weight: bold; color: ${property.category === 'sale' ? '#10b981' : '#3b82f6'};">
              €${property.price.toLocaleString()}${property.category === 'rent' ? '/mo' : ''}
              </div>
            <div style="display: flex; gap: 8px; font-size: 11px; color: #6b7280;">
              <span>🛏️ ${property.bedrooms}</span>
              <span>🚿 ${property.bathrooms}</span>
              <span>📐 ${property.area}m²</span>
            </div>
          </div>
        </div>
      `

      markerElement.appendChild(hoverPopup)

      let hoverTimeout: NodeJS.Timeout | null = null

      // Hover events for the popup with improved handling
      const showPopup = () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout)
          hoverTimeout = null
        }
        markerElement.style.transform = 'scale(1.1)'
        hoverPopup.style.opacity = '1'
        hoverPopup.style.visibility = 'visible'
      }

      const hidePopup = () => {
        hoverTimeout = setTimeout(() => {
          markerElement.style.transform = 'scale(1)'
          hoverPopup.style.opacity = '0'
          hoverPopup.style.visibility = 'hidden'
        }, 100) // Small delay to prevent flickering
      }

      // Mouse events for marker
      markerElement.addEventListener('mouseenter', showPopup)
      markerElement.addEventListener('mouseleave', hidePopup)

      // Mouse events for popup to keep it visible when hovering over it
      hoverPopup.addEventListener('mouseenter', showPopup)
      hoverPopup.addEventListener('mouseleave', hidePopup)

      // Click popup (existing functionality)
      const clickPopupContent = `
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

      const clickPopup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(clickPopupContent)

      new mapboxgl.Marker(markerElement)
        .setLngLat(property.coordinates)
        .setPopup(clickPopup)
        .addTo(mapInstance)

      markerElement.addEventListener('click', () => {
        setSelectedProperty(property)
        setShowMobilePropertyDetails(true)
      })
    })
  }, [filteredProperties, setSelectedProperty, setShowMobilePropertyDetails])

  // Update map markers when filtered properties change
  useEffect(() => {
    // Update both desktop and mobile maps
    if (map.current) updateMapMarkers(map.current)
    if (mobileMap.current) updateMapMarkers(mobileMap.current)
  }, [filteredProperties, updateMapMarkers])

  // Update markers when switching to map view
  useEffect(() => {
    if (isMapView && map.current) {
      updateMapMarkers(map.current)
    }
  }, [isMapView, updateMapMarkers])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (showLanguageDropdown && !target.closest('.language-selector')) {
        setShowLanguageDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showLanguageDropdown])

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-4 py-3">
          {/* Brand and Toggle */}
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-slate-800">Luxembourg Real Estate</h1>
            <div className="flex items-center gap-2">
              {/* Language Selector - Mobile */}
              <div className="relative language-selector">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center gap-1 px-2"
                >
                  <span className="text-base">{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code)
                          setShowLanguageDropdown(false)
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg ${
                          selectedLanguage === language.code ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
                        }`}
                      >
                        <span className="text-base">{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                      </div>
                )}
                  </div>

              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
                  </div>
                </div>

          {/* Mobile Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 focus:border-blue-500 rounded-lg outline-none"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
                     </div>

          {/* Mobile Category Toggle */}
          <div className="flex bg-slate-100 rounded-lg p-1 mb-3">
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${propertyCategory === 'rent' ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
              onClick={() => setPropertyCategory('rent')}
            >
              Rent
            </button>
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${propertyCategory === 'sale' ? 'bg-green-600 text-white' : 'text-slate-600'}`}
              onClick={() => setPropertyCategory('sale')}
            >
              Sale
            </button>
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${propertyCategory === 'all' ? 'bg-slate-600 text-white' : 'text-slate-600'}`}
              onClick={() => setPropertyCategory('all')}
            >
              All
            </button>
                   </div>

          {/* Map/List Toggle */}
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${!isMapView ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}
              onClick={() => setIsMapView(false)}
            >
              List
            </button>
            <button
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${isMapView ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}
              onClick={() => setIsMapView(true)}
            >
              Map
            </button>
                     </div>

          {/* Results Count */}
          <div className="text-center text-sm text-slate-600 mt-2">
            {filteredProperties.length} properties found
                   </div>
                 </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="border-t bg-white p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                <X className="h-4 w-4" />
              </Button>
                      </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Price Range</label>
                <select 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <select 
                  value={propertyType} 
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="studio">Studio</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="house">House</option>
                </select>
                    </div>
                  </div>
                  
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => {
                  setPriceRange('all')
                  setPropertyType('all')
                  setPropertyCategory('all')
                  setSearchQuery('')
                }}
              >
                Clear All
              </Button>
              <Button 
                size="sm" 
                className="flex-1"
                onClick={() => setShowFilters(false)}
              >
                Apply
              </Button>
                      </div>
                      </div>
        )}
                      </div>
      
      {/* Desktop Header */}
      <div className="hidden lg:block bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Top Bar with Brand and Auth Buttons */}
          <div className="flex items-center justify-between mb-6">
            {/* Language Selector - Desktop */}
            <div className="relative language-selector">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center gap-2"
              >
                <span className="text-base">{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                <span className="hidden sm:inline">{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {showLanguageDropdown && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setSelectedLanguage(language.code)
                        setShowLanguageDropdown(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                        selectedLanguage === language.code ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </button>
                  ))}
                  </div>
              )}
                </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
                    </div>
                  </div>

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
                  
      {/* Mobile Content */}
      <div className="lg:hidden">
        {isMapView ? (
          /* Mobile Map View */
          <div className="relative h-[calc(100vh-140px)]">
            <div 
              ref={mobileMapContainer} 
              className="w-full h-full"
            />
            {/* Map Legend */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
              <h3 className="font-semibold text-xs mb-2">Legend</h3>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Rent</span>
                      </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Sale</span>
                      </div>
                      </div>
                      </div>

            {/* Mobile Property Details Bottom Sheet */}
            {showMobilePropertyDetails && selectedProperty && (
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-2xl z-30 max-h-[50vh] overflow-y-auto">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg">{selectedProperty.title}</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowMobilePropertyDetails(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                </div>
                
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xl font-bold ${selectedProperty.category === 'sale' ? 'text-green-600' : 'text-blue-600'}`}>
                      €{selectedProperty.price.toLocaleString()}
                    </span>
                    {selectedProperty.category === 'rent' && <span className="text-slate-600">/month</span>}
                </div>

                  <p className="text-slate-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {selectedProperty.address}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="h-3 w-3" />
                      <span>{selectedProperty.bedrooms} bed</span>
                      </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-3 w-3" />
                      <span>{selectedProperty.bathrooms} bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="h-3 w-3" />
                      <span>{selectedProperty.area}m²</span>
                      </div>
                    </div>
                    
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={selectedProperty.link}>
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:Ted@staggs.lu">
                        Contact
                      </a>
                    </Button>
                        </div>
                        </div>
                        </div>
            )}
                        </div>
        ) : (
          /* Mobile List View */
          <div className="overflow-y-auto">
            <div className="p-4 space-y-4">
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
                    className="cursor-pointer transition-all duration-200 hover:shadow-lg"
                    onClick={() => setSelectedProperty(property)}
                  >
                    {/* Mobile Property Card */}
                    <div>
                      {/* Property Image */}
                      <div className="relative w-full h-48">
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
                        <div className="absolute top-3 right-3">
                          <Badge 
                            variant="secondary"
                            className={property.category === 'sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                          >
                            {property.category === 'sale' ? 'For Sale' : 'For Rent'}
                          </Badge>
                  </div>
                    </div>
                      
                      {/* Property Details */}
                      <CardContent className="p-4">
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
                </div>
            </Card>
                ))
              )}
          </div>
        </div>
        )}
      </div>

      {/* Desktop Content: 50% Map, 50% Listings */}
      <div className="hidden lg:flex h-[calc(100vh-250px)]">
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
          <div className="p-6">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-slate-400 mb-4">
                  <Filter className="h-12 w-12 mx-auto" />
            </div>
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No properties found</h3>
                <p className="text-slate-500">Try adjusting your search criteria or filters</p>
            </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {filteredProperties.map((property) => (
                  <Link key={property.id} href={property.link}>
                    <Card 
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        selectedProperty?.id === property.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                      }`}
                      onClick={() => setSelectedProperty(property)}
                    >
                      <div>
                        {/* Property Image */}
                        <div className="relative w-full h-24">
              <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                          <div className="absolute top-1 right-1">
                            <Badge 
                              variant="secondary"
                              className={`text-xs ${property.category === 'sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}
                            >
                              {property.category === 'sale' ? 'Sale' : 'Rent'}
                            </Badge>
                  </div>
                </div>
                
                        {/* Property Details */}
                        <div className="p-2">
                          <div className="mb-1">
                            <h3 className="font-bold text-xs mb-1 line-clamp-1">{property.title}</h3>
                            <p className="text-slate-600 text-xs flex items-center gap-1 line-clamp-1">
                              <MapPin className="h-2 w-2 flex-shrink-0" />
                              {property.address}
                            </p>
                  </div>
                          
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm font-bold ${property.category === 'sale' ? 'text-green-600' : 'text-blue-600'}`}>
                              €{property.price.toLocaleString()}
                            </span>
                            {property.category === 'rent' && <span className="text-slate-600 text-xs">/mo</span>}
            </div>
            
                          <div className="grid grid-cols-3 gap-1 text-xs">
                            <div className="flex items-center gap-1">
                              <Bed className="h-2 w-2" />
                              <span>{property.bedrooms}</span>
              </div>
                            <div className="flex items-center gap-1">
                              <Bath className="h-2 w-2" />
                              <span>{property.bathrooms}</span>
            </div>
                            <div className="flex items-center gap-1">
                              <Building className="h-2 w-2" />
                              <span>{property.area}m²</span>
              </div>
            </div>
          </div>
        </div>
                    </Card>
                  </Link>
                ))}
      </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}