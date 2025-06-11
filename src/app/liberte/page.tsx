"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/components/ui/footer"
import ServiceBanner from "@/components/ui/service"
import { MapPin, Bed, Bath, Car, AirVent, Shield, Phone, Mail, Euro, TreePine, Home, ChevronLeft, ChevronRight, FileText, Train, Building } from "lucide-react"
import { useState, useEffect } from "react"

export default function PropertyRental() {
  const propertyImages = [
    "/liberte/living.png",
    "/liberte/living2.png", 
    "/liberte/bedroom.png",
    "/liberte/bedroom1.png",
    "/liberte/bedroom2.png",
    "/liberte/bedroom3.png",
    "/liberte/bedroom4.png",
    "/liberte/kitchen.png",
    "/liberte/kitchen2.png",
    "/liberte/kitchen3.png",
    "/liberte/bathroom.png",
    "/liberte/bathroom1.png",
    "/liberte/bathroom2.png",
    "/liberte/building.png",
    "/liberte/area.jpg",
    "/liberte/area1.jpg",
    "/liberte/area3.jpg",
    "/liberte/street.jpeg"
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  // Scroll to contact section function
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, propertyImages.length])

  // Pause auto-play when user interacts
  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false)
    action()
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const propertyFeatures = [
    { icon: Bed, label: "1 Bedroom" },
    { icon: Bath, label: "1 Bathroom en-suite" },
    { icon: Home, label: "Private Cellar 8m²" },
    { icon: Building, label: "Historic Building" },
    { icon: AirVent, label: "Electric Heating" },
    { icon: Shield, label: "Elevator Access" },
    { icon: TreePine, label: "Shared Laundry" },
    { icon: Train, label: "Near Train Station" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Custom Carousel */}
      <div className="relative h-screen overflow-hidden">
        {/* Main Image */}
        <div className="relative h-full">
        <Image
            src={propertyImages[currentImageIndex]}
            alt={`Property view ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Navigation Buttons - Fixed for mobile */}
        <button
          onClick={() => handleManualNavigation(prevImage)}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-3 md:p-3 shadow-lg transition-all duration-200 z-50 touch-manipulation select-none"
          style={{ 
            minWidth: '48px', 
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
          type="button"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={() => handleManualNavigation(nextImage)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-3 md:p-3 shadow-lg transition-all duration-200 z-50 touch-manipulation select-none"
          style={{ 
            minWidth: '48px', 
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
          type="button"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        
        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualNavigation(() => setCurrentImageIndex(index))}
              className={`w-1 h-1 rounded-full transition-all duration-200 touch-manipulation select-none ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              style={{
                minWidth: '24px',
                minHeight: '24px',
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              type="button"
            />
          ))}
        </div>
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 max-w-4xl px-6">
            <Badge variant="secondary" className="mb-4 bg-white/90 text-slate-800">
              Luxury Rental Available
            </Badge>
            <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
              Avenue de la Liberté
            </h1>
            <p className="text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
              Beautifully renovated furnished apartment in historic building near Luxembourg train station
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 text-slate-800">
                <Euro className="h-5 w-5" />
                <span className="font-bold text-lg">1,550</span>
                <span className="text-sm">/month</span>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" onClick={scrollToContact}>
              Contact Agent
            </Button>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Property Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">Historic Furnished Studio Apartment</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-lg">
                      <MapPin className="h-5 w-5" />
                      57 Avenue de la Liberté, L-1931 Luxembourg-Gare
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Energy Class F-E
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {propertyFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-sm">{feature.label}</span>
                      </div>
                    )
                  })}
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-slate-700">
                    Discover this exceptional furnished 1-room apartment with approximately 38m² of living space, 
                    completely renovated in 2017 and located in a historic building on Avenue de la Liberté. 
                    This charming residence combines historic character with modern comfort.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-700 mt-4">
                    The apartment is located on the 3rd floor with elevator access and features a bright living space 
                    with fully equipped kitchen, a comfortable bedroom with built-in wardrobes, and an en-suite bathroom 
                    with shower. The property includes double-glazed wooden windows (mandatory on Avenue de la Liberté), 
                    engineered wood flooring, and ceramic tiles in the bathroom.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Image Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Property Gallery</CardTitle>
                <CardDescription>Explore every corner of your future home</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {propertyImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => setCurrentImageIndex(index)}
        >
          <Image
                        src={image}
                        alt={`Property view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 border-4 border-blue-500 rounded-lg" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floor Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Floor Plan & Layout
                </CardTitle>
                <CardDescription>Detailed apartment layout with room dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Floor Plan Preview */}
                  <div className="relative group">
                    <div className="relative aspect-video rounded-lg overflow-hidden border bg-white">
                      <Image
                        src="/liberte/plan.png"
                        alt="Avenue de la Liberté Floor Plan"
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    </div>
                  </div>
                  
                  {/* Floor Plan Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Layout Details</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Total Area:</span>
                          <div className="font-semibold">≈ 38 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Living Room:</span>
                          <div className="font-semibold">≈ 22 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Bedroom:</span>
                          <div className="font-semibold">≈ 11.5 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Bathroom:</span>
                          <div className="font-semibold">≈ 4.5 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Cellar:</span>
                          <div className="font-semibold">≈ 8 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Floor:</span>
                          <div className="font-semibold">3rd with elevator</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Room Features</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Living Room with Kitchen</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Ceramic Hob & Oven</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Refrigerator</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Bedroom with Built-in Wardrobes</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">En-suite Bathroom</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Shower, Sink & WC</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Private Cellar</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Shared Laundry Room</span>
                          <span>✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Prime Gare Location</CardTitle>
                <CardDescription>Historic Avenue de la Liberté near Luxembourg Central Station</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Location Highlights */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">250m</div>
                    <div className="text-sm text-slate-600">to train station</div>
                    <div className="text-xs text-slate-500 mt-1">Luxembourg Gare</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">&lt;250m</div>
                    <div className="text-sm text-slate-600">to tram stops</div>
                    <div className="text-xs text-slate-500 mt-1">Multiple lines</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-2">1.2km</div>
                    <div className="text-sm text-slate-600">to city center</div>
                    <div className="text-xs text-slate-500 mt-1">Walking distance</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">300m</div>
                    <div className="text-sm text-slate-600">to Zitha Clinic</div>
                    <div className="text-xs text-slate-500 mt-1">Medical center</div>
                  </div>
                </div>

                {/* Area Gallery */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Building & Street */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/liberte/building.png"
                      alt="Historic building on Avenue de la Liberté"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="h-4 w-4" />
                        <span className="text-sm font-medium">Historic Building</span>
                      </div>
                      <p className="text-xs text-white/90">Beautiful architecture on prestigious avenue</p>
                    </div>
                  </div>

                  {/* Street View */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/liberte/street.jpeg"
                      alt="Avenue de la Liberté street view"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">Avenue de la Liberté</span>
                      </div>
                      <p className="text-xs text-white/90">Prime location in Luxembourg-Gare</p>
                    </div>
                  </div>
                </div>

                {/* Additional Area Images */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/liberte/area.jpg"
                      alt="Gare district amenities and shops"
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                      Local Amenities
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/liberte/area1.jpg"
                      alt="Transportation hub and connectivity"
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                      Transport Hub
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/liberte/area3.jpg"
                      alt="Gare neighborhood dining and shopping"
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                      Shopping & Dining
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="w-full h-64 rounded-lg overflow-hidden border mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.3421!2d6.1297!3d49.5967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548b8a1234567%3A0x1234567890abcdef!2s57%20Avenue%20de%20la%20Libert%C3%A9%2C%201931%20Luxembourg!5e0!3m2!1sen!2slu!4v1234567890123!5m2!1sen!2slu"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Location Benefits */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Transportation</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Train className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Train station 250m away</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Tram stops under 250m</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Direct connection to Kirchberg</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Highway access A1-A3-A6 (4km)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Local Amenities</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Home className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Post office and medical offices</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <TreePine className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Shops, restaurants and bars</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Zitha Clinic nearby (300m)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Airport 8km away</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    57 Avenue de la Liberté, L-1931 Luxembourg-Gare
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Euro className="h-6 w-6" />
                  Rental Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">€1,550</div>
                  <div className="text-slate-600 mb-4">per month</div>
                  <div className="flex flex-col gap-2 mb-4">
                    <Badge variant="destructive" className="bg-red-500 text-white">
                      Already Occupied - Not Available
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3 border-t pt-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Rent</span>
                    <span className="font-semibold">€1,550</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Charges Included</span>
                    <span className="font-semibold">€200</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total Monthly</span>
                    <span className="text-blue-600">€1,750</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg text-sm">
                  <div className="font-medium mb-2">Included in Charges:</div>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Electricity (heating)</li>
                    <li>• Water supply</li>
                    <li>• Common area maintenance</li>
                    <li>• Building management</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm">
                  <div className="flex items-center gap-2 text-blue-800 font-medium mb-1">
                    <Shield className="h-4 w-4" />
                    Renovation Info
                  </div>
                  <p className="text-blue-700">
                    Completely renovated in 2017 with modern amenities while preserving historic character.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" onClick={scrollToContact}>
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Agent
                </Button>
              </CardFooter>
            </Card>

            {/* Agent Card */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl">Property Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/api/placeholder/64/64" />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                      TS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">Ted Staggs</div>
                    <div className="text-slate-600">Real Estate Agent</div>
                    <div className="text-sm text-slate-500">Property Management</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>
                      <span className="text-sm text-slate-600 ml-1">(4.9/5)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:Ted@staggs.lu">
                      <Mail className="h-4 w-4 mr-2" />
                      Ted@staggs.lu
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+352621232202">
                      <Phone className="h-4 w-4 mr-2" />
                      +352 621 232 202
                    </a>
                  </Button>
                </div>
                
                <div className="mt-4 text-xs text-slate-500 text-center">
                  Luxembourg Real Estate<br />
                  Property Management Services<br />
                  Tel. +352 621 232 202
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Property Type</span>
                  <span className="font-semibold">Furnished Studio</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Floor</span>
                  <span className="font-semibold">3rd with Elevator</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Living Area</span>
                  <span className="font-semibold">≈ 38 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Cellar</span>
                  <span className="font-semibold">≈ 8 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Energy Class</span>
                  <span className="font-semibold text-orange-600">F-E</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Windows</span>
                  <span className="font-semibold">Double-glazed Wood</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Renovated</span>
                  <span className="font-semibold">2017</span>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Inquiry */}
            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-slate-600">Purchase Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-500 mb-2">
                  Interested in buying this property?
                </p>
                <p className="text-xs text-slate-600">
                  Price is negotiable - only serious offers above <span className="font-semibold">€650,000</span> considered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Properties Section */}
      <div className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Other Premium Properties</h2>
            <p className="text-lg text-slate-600">Discover more exceptional rental opportunities in Luxembourg</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Property Image */}
                <div className="relative aspect-video md:aspect-square">
                  <Image
                    src="/rainbow.jpeg"
                    alt="Zenith T1-12-05 - Luxury apartment with panoramic views"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      Luxury Rental
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    12th Floor Views
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">T1-12-05 Zenith Tower</h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Boulevard F.W. Raiffeisen, Gasperich
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">€3,000</div>
                    <div className="text-slate-600">per month</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">1 Bedroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">1 Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">Parking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">≈ 94 m²</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Luxury furnished apartment on the 12th floor with breathtaking panoramic views, 
                      premium amenities including pool and fitness center, located above Cloche d&apos;Or shopping center.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/">
                        View Property
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="mailto:Ted@staggs.lu">
                        Contact Agent
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div id="contact-section" className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Interested in This Property?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Contact our experienced agent to discuss availability and viewing arrangements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
              <a href="mailto:Ted@staggs.lu">
                <Mail className="h-5 w-5 mr-2" />
                Email: Ted@staggs.lu
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-black" asChild>
              <a href="tel:+352621232202">
                <Phone className="h-5 w-5 mr-2" />
                Call: +352 621 232 202
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Banner */}
      <ServiceBanner />

      {/* Footer */}
      <Footer />
    </div>
  )
}
