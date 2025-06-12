"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/components/ui/footer"
import ServiceBanner from "@/components/ui/service"
import { MapPin, Bed, Bath, Car, Wifi, AirVent, Shield, Phone, Mail, Euro, Waves, Dumbbell, TreePine, Home, ChevronLeft, ChevronRight, Download, FileText, Camera, Play, Sunrise, Eye, Scale, Building } from "lucide-react"
import { useState, useEffect } from "react"

export default function PropertyRental() {
  const propertyImages = [
    "/rainbow.jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.22.jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.22 (1).jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.22 (2).jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.22 (3).jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.22 (4).jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.22 (5).jpeg",
    "/WhatsApp Image 2025-05-27 at 18.43.23.jpeg"
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
    { icon: Bath, label: "1 Bathroom with WC" },
    { icon: Car, label: "Indoor Parking" },
    { icon: Home, label: "Private Cellar" },
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: AirVent, label: "Central Heating" },
    { icon: Shield, label: "Security" },
    { icon: TreePine, label: "Private Terrace" }
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
              T1-12-05 Zenith
            </h1>
            <p className="text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
              12th floor luxury apartment with panoramic views and premium amenities
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 text-slate-800">
                <Euro className="h-5 w-5" />
                <span className="font-bold text-lg">3,000</span>
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
                    <CardTitle className="text-3xl mb-2">Modern Furnished Apartment</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-lg">
                      <MapPin className="h-5 w-5" />
                      21-23 Boulevard F.W. Raiffeisen, L-2411 Luxembourg-Gasperich
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Energy Class A-A
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
                    Discover this exceptional furnished apartment T1-12-05 on the 12th floor of the prestigious Zenith building. 
                    Located in Luxembourg&apos;s dynamic Gasperich district, this stunning residence offers breathtaking panoramic views 
                    and modern luxury living at its finest.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-700 mt-4">
                    The apartment features an open-plan design with a fully equipped kitchen, separate dining area, 
                    and a spacious living room that opens onto a private terrace. The bedroom offers magnificent city views, 
                    while the modern shower room and convenient storage area complete this perfect urban home.
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
                <CardDescription>Detailed architectural plan with measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Floor Plan Preview */}
                  <div className="relative group">
                    <div className="relative aspect-video rounded-lg overflow-hidden border bg-white">
                      <Image
                        src="/Screenshot 2025-06-10 190905.png"
                        alt="Apartment T1-12-05 Floor Plan"
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    </div>
                    
                    {/* Download Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg" asChild>
                        <a href="/LCO_ARC_EXE_PDVT_T20H-T1-12-05-B-1.pdf" download="T1-12-05-Floor-Plan.pdf">
                          <Download className="h-5 w-5 mr-2" />
                          Download Floor Plan
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Floor Plan Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Layout Details</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Total Area:</span>
                          <div className="font-semibold">≈ 94.31 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Living Area:</span>
                          <div className="font-semibold">≈ 73.23 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Bedroom:</span>
                          <div className="font-semibold">≈ 16.7 m²</div>
                        </div>
                        <div>
                          <span className="text-slate-600">Terrace:</span>
                          <div className="font-semibold">≈ 21.08 m²</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Room Distribution</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Entrance Hall</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Open Kitchen</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Living/Dining Area</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Bedroom</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Bathroom with WC</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Storage/Laundry</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Private Terrace</span>
                          <span>✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Download Button */}
                  <div className="flex justify-center pt-4">
                    <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                      <a href="/LCO_ARC_EXE_PDVT_T20H-T1-12-05-B-1.pdf" download="T1-12-05-Floor-Plan.pdf">
                        <Download className="h-4 w-4 mr-2" />
                        Download Full Floor Plan (PDF)
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>



            {/* Building Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Building Amenities</CardTitle>
                <CardDescription>World-class facilities included with your rental</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Amenities Gallery */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Swimming Pool */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/amenities/_65f6c52b9c4c49_29770853.jpg"
                      alt="Luxury indoor swimming pool with panoramic windows"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Waves className="h-4 w-4" />
                        <span className="text-sm font-medium">Swimming Pool</span>
                      </div>
                      <p className="text-xs text-white/90">Indoor pool with city views</p>
                    </div>
                  </div>

                  {/* Fitness Center */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/amenities/_65f6c502c74077_00305239.jpg"
                      alt="State-of-the-art fitness center with premium equipment"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Dumbbell className="h-4 w-4" />
                        <span className="text-sm font-medium">Fitness Center</span>
                      </div>
                      <p className="text-xs text-white/90">Professional-grade equipment</p>
                    </div>
                  </div>
                </div>

                                 {/* Additional Amenity Images */}
                 <div className="grid md:grid-cols-2 gap-4 mb-6">
                   <div className="relative group overflow-hidden rounded-lg">
                     <Image
                       src="/amenities/_65f6c510082609_50321878.jpg"
                       alt="Cardio equipment area with panoramic views"
                       width={400}
                       height={300}
                       className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                     <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                       Cardio Zone
                     </div>
                   </div>

                   <div className="relative group overflow-hidden rounded-lg">
                     <Image
                       src="/amenities/_6814a9ed2f44c8_37941071.jpg"
                       alt="Relaxation and spa area with premium finishes"
                       width={400}
                       height={300}
                       className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                     <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                       Spa & Wellness
                     </div>
                   </div>
                 </div>

                {/* Amenities Features List */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Fitness & Wellness</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Dumbbell className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Professional fitness equipment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Waves className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Indoor swimming pool</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <AirVent className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Sauna & steam room</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <TreePine className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Relaxation areas</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Building Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">24/7 security & concierge</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Underground parking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Private storage spaces</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Wifi className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">High-speed internet ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Prime Gasperich Location</CardTitle>
                <CardDescription>Living above the shopping center with tram at your doorstep</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Location Highlights */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">0 min</div>
                    <div className="text-sm text-slate-600">to shopping center</div>
                    <div className="text-xs text-slate-500 mt-1">Located above</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">0 min</div>
                    <div className="text-sm text-slate-600">to tram stop</div>
                    <div className="text-xs text-slate-500 mt-1">In front of building</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-2">1 min</div>
                    <div className="text-sm text-slate-600">to park</div>
                    <div className="text-xs text-slate-500 mt-1">Green space nearby</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">8 min</div>
                    <div className="text-sm text-slate-600">to city center</div>
                    <div className="text-xs text-slate-500 mt-1">By tram</div>
                  </div>
                </div>

                {/* Gasperich Area Gallery */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Building & Shopping Center */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/gasperich/_65f6c54d3f1415_30620076.jpg"
                      alt="Zenith towers above Cloche d'Or shopping center"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Home className="h-4 w-4" />
                        <span className="text-sm font-medium">Your Building</span>
                      </div>
                      <p className="text-xs text-white/90">Above Cloche d&apos;Or shopping center</p>
                    </div>
                  </div>

                  {/* Park & Nature */}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src="/gasperich/IMG_4499.jpg"
                      alt="Beautiful park and green spaces in Gasperich"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <TreePine className="h-4 w-4" />
                        <span className="text-sm font-medium">Gasperich District</span>
                      </div>
                      <p className="text-xs text-white/90">Modern urban development with excellent infrastructure</p>
                    </div>
                  </div>
                </div>

                {/* Additional Area Images */}
                <div className="mb-8">
                  <div className="relative group overflow-hidden rounded-lg">
          <Image
                      src="/gasperich/IMG_4153.jpg"
                      alt="Modern Gasperich district with excellent connectivity"
                      width={800}
                      height={400}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">Nearby Park</span>
                      </div>
                      <p className="text-xs text-white/90">Green spaces and walking paths</p>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="w-full h-64 rounded-lg overflow-hidden border mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.6542!2d6.1319!3d49.5864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548c8b1234567%3A0x1234567890abcdef!2s21%20Boulevard%20F.W.%20Raiffeisen%2C%202411%20Luxembourg!5e0!3m2!1sen!2slu!4v1234567890123!5m2!1sen!2slu"
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
                    <h4 className="font-semibold text-lg">Convenience</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Home className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Living above Cloche d&apos;Or shopping center</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Tram stop directly in front</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <TreePine className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Beautiful park and green spaces</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Modern Gasperich district</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Connectivity</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Direct tram to city center (8 min)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Wifi className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Easy access to European institutions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Excellent road connections</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Shopping, dining & services below</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    21-23 Boulevard F.W. Raiffeisen, L-2411 Luxembourg-Gasperich
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rental Contract Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Rental Contract Preview
                </CardTitle>
                <CardDescription>Review the rental agreement terms and conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Contract Preview */}
                  <div className="relative group">
                    <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Rental Agreement Contract</h4>
                      <p className="text-slate-600 mb-4">
                        Standard Luxembourg rental contract (Contrat de Bail) for apartment T1-12-05
                      </p>
                      
                      {/* PDF Embed Preview */}
                      <div className="w-full h-96 rounded-lg overflow-hidden border bg-white mb-4">
                        <iframe
                          src="/contrat_de_bail_zenith.pdf#toolbar=1&navpanes=0&scrollbar=1"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          title="Rental Contract Preview"
                        />
                      </div>
                      
                      <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a href="/contrat_de_bail_zenith.pdf" download="Zenith_T1-12-05_Rental_Contract.pdf">
                          <Download className="h-4 w-4 mr-2" />
                          Download Full Contract (PDF)
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Contract Summary */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Contract Highlights</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Property:</span>
                          <span className="font-medium">T1-12-05, Zenith Tower</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Monthly Rent:</span>
                          <span className="font-medium">€3,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Monthly Charges:</span>
                          <span className="font-medium">€514.51</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Security Deposit:</span>
                          <span className="font-medium">€6,000 (2 months)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Lease Duration:</span>
                          <span className="font-medium">2 years renewable</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Important Terms</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Fully furnished apartment included</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>No pets allowed in the building</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>No smoking inside the apartment</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>3 months notice required for termination</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Insurance required by tenant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Legal Notice */}
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm">
                    <div className="flex items-center gap-2 text-blue-800 font-medium mb-2">
                      <Scale className="h-4 w-4" />
                      Legal Information
                    </div>
                    <p className="text-blue-700">
                      This contract follows Luxembourg rental law. All terms are legally binding. 
                      Please review carefully before signing. Professional legal advice is recommended 
                      if you have questions about any terms or conditions.
                    </p>
                  </div>
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">€3,000</div>
                  <div className="text-slate-600 mb-4">per month</div>
                  <div className="flex flex-col gap-2 mb-4">
                    <Badge variant="outline">Available Now</Badge>
                    <Badge variant="destructive" className="bg-red-600 text-white">
                      Price Non-Negotiable
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3 border-t pt-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Rent</span>
                    <span className="font-semibold">€3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Charges</span>
                    <span className="font-semibold">€514.51</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Security Deposit</span>
                    <span className="font-semibold">€6,000</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total Monthly</span>
                    <span className="text-blue-600">€3,514.51</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg text-sm">
                  <div className="font-medium mb-2">What&apos;s Included in Charges:</div>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Water & heating</li>
                    <li>• Common area maintenance</li>
                    <li>• Pool, fitness & spa access</li>
                    <li>• Building management</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-sm">
                  <div className="flex items-center gap-2 text-red-800 font-medium mb-1">
                    <Shield className="h-4 w-4" />
                    Important Notice
                  </div>
                  <p className="text-red-700">
                    The rental price is fixed and strictly non-negotiable. All terms and conditions are final.
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
                    <div className="font-semibold text-lg">Guillaume Bisdorf</div>
                    <div className="text-slate-600">Licensed Real Estate Agent</div>
                    <div className="text-sm text-slate-500">Dippach, Luxembourg</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex text-yellow-400 text-sm">★</div>
                      <span className="text-sm text-slate-600 ml-1">(0.1/5)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:ted@staggs.lu">
                      <Mail className="h-4 w-4 mr-2" />
                      ted@staggs.lu
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+352621232202">
                      <Phone className="h-4 w-4 mr-2" />
                      +352 621 232 202
                    </a>
                  </Button>
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
                  <span className="font-semibold">Furnished Apartment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Floor</span>
                  <span className="font-semibold">12th Floor</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Parking</span>
                  <span className="font-semibold">Indoor Space P2-023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Cellar</span>
                  <span className="font-semibold">Private C-15218</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Energy Class</span>
                  <span className="font-semibold text-green-600">A-A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Lease Term</span>
                  <span className="font-semibold">2 years renewable</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold">Property Highlights</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the breathtaking views and lifestyle that await you in this extraordinary penthouse
            </p>
          </div>

          {/* Featured Highlights Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Sunrise/Sunset Views */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/WhatsApp Image 2025-05-27 at 18.43.23 (5).jpeg"
                  alt="Spectacular sunrise view from terrace"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="h-5 w-5" />
                    <span className="text-sm font-medium">Golden Hour Views</span>
                  </div>
                  <h3 className="text-2xl font-bold">Spectacular Sunrises</h3>
                  <p className="text-white/90">Wake up to breathtaking sunrise views every morning</p>
                </div>
              </div>
            </Card>

            {/* Panoramic City Views */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/WhatsApp Image 2025-05-27 at 18.43.23 (2).jpeg"
                  alt="Panoramic cityscape from 12th floor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-5 w-5" />
                    <span className="text-sm font-medium">12th Floor Views</span>
                  </div>
                  <h3 className="text-2xl font-bold">Panoramic Cityscape</h3>
                  <p className="text-white/90">Endless views across Luxembourg&apos;s landscape</p>
                </div>
              </div>
            </Card>
          </div>

          {/* View Gallery */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/WhatsApp Image 2025-05-27 at 18.43.23 (1).jpeg"
                alt="Evening cityscape views"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/WhatsApp Image 2025-05-27 at 18.43.23 (3).jpeg"
                alt="Daytime panoramic views"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/WhatsApp Image 2025-05-27 at 18.43.23 (4).jpeg"
                alt="Distant horizon views"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
          <Image
                src="/WhatsApp Image 2025-05-27 at 18.43.23.jpeg"
                alt="Twilight city lights"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>

          {/* Video Section */}
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Play className="h-6 w-6" />
                Virtual Tour & Views
              </CardTitle>
              <CardDescription>
                Take a virtual walkthrough and experience the views from every angle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/WhatsApp Image 2025-05-27 at 18.43.23 (2).jpeg"
                  >
                    <source src="/WhatsApp Video 2025-05-27 at 18.43.23.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    Property Tour
                  </div>
                </div>
                
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/WhatsApp Image 2025-05-27 at 18.43.23 (5).jpeg"
                  >
                    <source src="/WhatsApp Video 2025-05-27 at 18.43.24.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    Views & Ambiance
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lifestyle Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Sunrise className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Golden Hour Living</h3>
              <p className="text-slate-600">
                Experience magical sunrises and sunsets from your private terrace with unobstructed views
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Panoramic Perspectives</h3>
              <p className="text-slate-600">
                360-degree views spanning Luxembourg&apos;s cityscape, green spaces, and distant horizons
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nature Connection</h3>
              <p className="text-slate-600">
                Stay connected to nature with views of parks, green corridors, and the changing seasons
              </p>
            </div>
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
                    src="/liberte/living.png"
                    alt="Avenue de la Liberté - Historic furnished apartment near train station"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      Historic Charm
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    Near Train Station
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Avenue de la Liberté</h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      57 Avenue de la Liberté, Luxembourg-Gare
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">€1,550</div>
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
                      <Home className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">Cellar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">≈ 38 m²</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Beautifully renovated historic furnished studio near Luxembourg train station. 
                      Perfect location with excellent transport links, just 250m from the main station and city center.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="/liberte">
                        View Property
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="mailto:ted@staggs.lu">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Make This Home?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Don&apos;t miss this opportunity to live in one of Luxembourg&apos;s most prestigious addresses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
              <a href="mailto:ted@staggs.lu">
                <Mail className="h-5 w-5 mr-2" />
                Email: ted@staggs.lu
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
