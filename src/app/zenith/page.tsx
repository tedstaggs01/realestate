"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/components/ui/footer"
import ServiceBanner from "@/components/ui/service"
import { MapPin, Bed, Bath, Car, Wifi, AirVent, Shield, Phone, Mail, Euro, Waves, Dumbbell, TreePine, Home, ChevronLeft, ChevronRight, Download, FileText, Camera, Play } from "lucide-react"
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
                        <IconComponent className="h-6 w-6 text-blue-600" />
                        <span className="font-medium text-sm">{feature.label}</span>
                      </div>
                    )
                  })}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Description</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Discover luxury living at its finest in this stunning 12th-floor apartment in the prestigious Zenith Tower. 
                      This modern, fully-furnished unit offers breathtaking panoramic views of Luxembourg City and features 
                      premium amenities including access to the building&apos;s fitness center, swimming pool, and 24/7 concierge service.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Features & Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>94m² living space</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Floor-to-ceiling windows</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Premium kitchen appliances</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Private terrace with city views</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Indoor parking space</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Private cellar storage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>High-speed fiber internet</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>24/7 security & concierge</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Building Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Building Amenities</CardTitle>
                <CardDescription>Premium facilities available to all residents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Waves className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Swimming Pool</h4>
                      <p className="text-sm text-slate-600">Indoor heated pool with city views</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Dumbbell className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Fitness Center</h4>
                      <p className="text-sm text-slate-600">State-of-the-art gym equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">24/7 Security</h4>
                      <p className="text-sm text-slate-600">Concierge and security services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Car className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Parking</h4>
                      <p className="text-sm text-slate-600">Underground secure parking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TreePine className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Garden Terrace</h4>
                      <p className="text-sm text-slate-600">Rooftop garden and lounge area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wifi className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">High-Speed Internet</h4>
                      <p className="text-sm text-slate-600">Fiber optic connection included</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Transport */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Location & Transport</CardTitle>
                <CardDescription>Perfectly connected to Luxembourg&apos;s key areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Public Transport</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm">Tram: Gasperich-Lycée (2 min walk)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm">Bus: Multiple lines nearby</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm">Train: Luxembourg Central (15 min)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Distances</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">City Center: 10 minutes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">Luxembourg Airport: 15 minutes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">Kirchberg Business District: 20 minutes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rental Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Rental Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Monthly Costs</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Base Rent</span>
                        <span className="font-semibold">€2,700</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Charges (incl. utilities)</span>
                        <span className="font-semibold">€300</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Total Monthly</span>
                          <span className="font-bold text-lg text-blue-600">€3,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Terms & Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Security deposit: 2 months rent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Minimum lease: 12 months</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Available: Immediately</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Furnished: Yes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Pets: Upon request</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Agent */}
            <Card id="contact-section">
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
                <CardDescription>Get in touch for viewings and inquiries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/agent-photo.jpg" alt="Ted Staggs" />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">GM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">Ted Staggs</h3>
                    <p className="text-slate-600">Senior Property Consultant</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:+352621232202" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +352 621 232 202
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="mailto:gregory.muller@staggs.lu" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      ted@staggs.lu
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Property Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="font-bold text-xl text-blue-600">94m²</div>
                    <div className="text-sm text-slate-600">Living Space</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="font-bold text-xl text-blue-600">12th</div>
                    <div className="text-sm text-slate-600">Floor</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="font-bold text-xl text-blue-600">2018</div>
                    <div className="text-sm text-slate-600">Built</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="font-bold text-xl text-blue-600">A-A</div>
                    <div className="text-sm text-slate-600">Energy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
                <CardDescription>Download property information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/floor-plan.pdf" download>
                    <FileText className="h-4 w-4 mr-2" />
                    Floor Plan (PDF)
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/energy-certificate.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Energy Certificate
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/property-brochure.pdf" download>
                    <FileText className="h-4 w-4 mr-2" />
                    Property Brochure
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Virtual Tour */}
            <Card>
              <CardHeader>
                <CardTitle>Virtual Experience</CardTitle>
                <CardDescription>Explore the property remotely</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <a href="#virtual-tour" className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    360° Virtual Tour
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href="#video-tour" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Video Walkthrough
                  </a>
                </Button>
              </CardContent>
            </Card>
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
