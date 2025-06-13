import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/ui/footer'
import { 
  Code, 
  Database, 
  TrendingUp, 
  Users, 
  Home, 
  Shield, 
  Zap, 
  Globe, 
  Search,
  Bell,
  CreditCard,
  FileText,
  MessageSquare,
  Calendar,
  BarChart3,
  Key,
  CheckCircle,
  ArrowRight,
  Copy,
  ExternalLink
} from 'lucide-react'

export default function APIPage() {
  const apiEndpoints = [
    {
      category: "Market Data & Analytics",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "blue",
      endpoints: [
        { method: "GET", path: "/api/v1/market/prices", description: "Get current market prices by area" },
        { method: "GET", path: "/api/v1/market/trends", description: "Historical price trends and forecasts" },
        { method: "GET", path: "/api/v1/market/analytics", description: "Comprehensive market analytics" },
        { method: "GET", path: "/api/v1/market/neighborhoods", description: "Neighborhood statistics and insights" },
        { method: "GET", path: "/api/v1/market/demand", description: "Supply and demand metrics" },
        { method: "GET", path: "/api/v1/market/comparables", description: "Comparable property analysis" }
      ]
    },
    {
      category: "Property Management",
      icon: <Home className="h-6 w-6" />,
      color: "green",
      endpoints: [
        { method: "GET", path: "/api/v1/properties", description: "List all properties with filters" },
        { method: "POST", path: "/api/v1/properties", description: "Create new property listing" },
        { method: "GET", path: "/api/v1/properties/{id}", description: "Get property details" },
        { method: "PUT", path: "/api/v1/properties/{id}", description: "Update property information" },
        { method: "DELETE", path: "/api/v1/properties/{id}", description: "Remove property listing" },
        { method: "GET", path: "/api/v1/properties/{id}/photos", description: "Get property photos" },
        { method: "POST", path: "/api/v1/properties/{id}/photos", description: "Upload property photos" },
        { method: "GET", path: "/api/v1/properties/{id}/virtual-tour", description: "Get virtual tour data" }
      ]
    },
    {
      category: "Search & Discovery",
      icon: <Search className="h-6 w-6" />,
      color: "purple",
      endpoints: [
        { method: "GET", path: "/api/v1/search", description: "Advanced property search" },
        { method: "GET", path: "/api/v1/search/suggestions", description: "Search autocomplete suggestions" },
        { method: "GET", path: "/api/v1/search/saved", description: "User's saved searches" },
        { method: "POST", path: "/api/v1/search/save", description: "Save search criteria" },
        { method: "GET", path: "/api/v1/filters", description: "Available search filters" },
        { method: "GET", path: "/api/v1/map/properties", description: "Properties for map display" }
      ]
    },
    {
      category: "User Management",
      icon: <Users className="h-6 w-6" />,
      color: "orange",
      endpoints: [
        { method: "POST", path: "/api/v1/auth/register", description: "User registration" },
        { method: "POST", path: "/api/v1/auth/login", description: "User authentication" },
        { method: "POST", path: "/api/v1/auth/logout", description: "User logout" },
        { method: "GET", path: "/api/v1/users/profile", description: "Get user profile" },
        { method: "PUT", path: "/api/v1/users/profile", description: "Update user profile" },
        { method: "GET", path: "/api/v1/users/preferences", description: "Get user preferences" },
        { method: "PUT", path: "/api/v1/users/preferences", description: "Update user preferences" },
        { method: "GET", path: "/api/v1/users/favorites", description: "Get user's favorite properties" }
      ]
    },
    {
      category: "Messaging & Communication",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "teal",
      endpoints: [
        { method: "GET", path: "/api/v1/messages", description: "Get user messages" },
        { method: "POST", path: "/api/v1/messages", description: "Send new message" },
        { method: "GET", path: "/api/v1/messages/{id}", description: "Get message details" },
        { method: "PUT", path: "/api/v1/messages/{id}/read", description: "Mark message as read" },
        { method: "GET", path: "/api/v1/conversations", description: "Get user conversations" },
        { method: "POST", path: "/api/v1/conversations", description: "Start new conversation" }
      ]
    },
    {
      category: "Notifications",
      icon: <Bell className="h-6 w-6" />,
      color: "red",
      endpoints: [
        { method: "GET", path: "/api/v1/notifications", description: "Get user notifications" },
        { method: "PUT", path: "/api/v1/notifications/{id}/read", description: "Mark notification as read" },
        { method: "POST", path: "/api/v1/notifications/preferences", description: "Update notification preferences" },
        { method: "POST", path: "/api/v1/notifications/push/subscribe", description: "Subscribe to push notifications" },
        { method: "DELETE", path: "/api/v1/notifications/push/unsubscribe", description: "Unsubscribe from push notifications" }
      ]
    },
    {
      category: "Payments & Subscriptions",
      icon: <CreditCard className="h-6 w-6" />,
      color: "indigo",
      endpoints: [
        { method: "GET", path: "/api/v1/subscriptions", description: "Get user subscription details" },
        { method: "POST", path: "/api/v1/subscriptions/create", description: "Create new subscription" },
        { method: "PUT", path: "/api/v1/subscriptions/update", description: "Update subscription plan" },
        { method: "DELETE", path: "/api/v1/subscriptions/cancel", description: "Cancel subscription" },
        { method: "GET", path: "/api/v1/payments/history", description: "Payment history" },
        { method: "POST", path: "/api/v1/payments/process", description: "Process payment" },
        { method: "GET", path: "/api/v1/invoices", description: "Get user invoices" }
      ]
    },
    {
      category: "Documents & Legal",
      icon: <FileText className="h-6 w-6" />,
      color: "slate",
      endpoints: [
        { method: "GET", path: "/api/v1/documents", description: "Get user documents" },
        { method: "POST", path: "/api/v1/documents/upload", description: "Upload document" },
        { method: "GET", path: "/api/v1/documents/{id}", description: "Download document" },
        { method: "POST", path: "/api/v1/contracts/generate", description: "Generate contract template" },
        { method: "GET", path: "/api/v1/contracts/{id}", description: "Get contract details" },
        { method: "PUT", path: "/api/v1/contracts/{id}/sign", description: "Sign contract digitally" }
      ]
    },
    {
      category: "Appointments & Viewings",
      icon: <Calendar className="h-6 w-6" />,
      color: "pink",
      endpoints: [
        { method: "GET", path: "/api/v1/appointments", description: "Get user appointments" },
        { method: "POST", path: "/api/v1/appointments", description: "Schedule new appointment" },
        { method: "PUT", path: "/api/v1/appointments/{id}", description: "Update appointment" },
        { method: "DELETE", path: "/api/v1/appointments/{id}", description: "Cancel appointment" },
        { method: "GET", path: "/api/v1/availability/{propertyId}", description: "Get property viewing availability" },
        { method: "POST", path: "/api/v1/viewings/request", description: "Request property viewing" }
      ]
    },
    {
      category: "Reports & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "emerald",
      endpoints: [
        { method: "GET", path: "/api/v1/reports/property-performance", description: "Property performance metrics" },
        { method: "GET", path: "/api/v1/reports/user-activity", description: "User activity analytics" },
        { method: "GET", path: "/api/v1/reports/market-insights", description: "Market insights report" },
        { method: "GET", path: "/api/v1/reports/revenue", description: "Revenue analytics" },
        { method: "GET", path: "/api/v1/analytics/dashboard", description: "Dashboard analytics data" },
        { method: "GET", path: "/api/v1/analytics/trends", description: "Platform usage trends" }
      ]
    }
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800'
      case 'POST': return 'bg-blue-100 text-blue-800'
      case 'PUT': return 'bg-orange-100 text-orange-800'
      case 'DELETE': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      teal: 'bg-teal-100 text-teal-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      slate: 'bg-slate-100 text-slate-600',
      pink: 'bg-pink-100 text-pink-600',
      emerald: 'bg-emerald-100 text-emerald-600'
    }
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Luxembourg Real Estate
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Developer API</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Powerful Real Estate API
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Access comprehensive market data, property information, and platform features 
              through our robust RESTful API. Built for developers, by developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#documentation">
                  <Code className="h-5 w-5 mr-2" />
                  View Documentation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">
                  <Key className="h-5 w-5 mr-2" />
                  Get API Key
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">API Features</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our API provides access to real-time market data, property listings, 
              user management, and advanced analytics for the Luxembourg real estate market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Real-time Data</CardTitle>
                <CardDescription>
                  Access live market data, property prices, and trends updated in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Enterprise-grade security with 99.9% uptime and comprehensive authentication.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>High Performance</CardTitle>
                <CardDescription>
                  Optimized for speed with response times under 100ms and global CDN.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>RESTful Design</CardTitle>
                <CardDescription>
                  Clean, intuitive REST API with comprehensive documentation and examples.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section id="documentation" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">API Reference</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Complete API Documentation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints organized by category. 
              Each endpoint includes detailed parameters, response formats, and examples.
            </p>
          </div>

          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(category.color)}`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription>
                        {category.endpoints.length} endpoints available
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                        <div className="flex items-center gap-3">
                          <Badge className={`${getMethodColor(endpoint.method)} font-mono text-xs`}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono text-slate-700 bg-slate-100 px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600">{endpoint.description}</span>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800">Authentication</Badge>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Secure API Access
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                All API endpoints require authentication using API keys. 
                Get your API key by registering for an account and accessing your developer dashboard.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">API Key Authentication</h3>
                    <p className="text-slate-600">Secure your requests with unique API keys</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Rate Limiting</h3>
                    <p className="text-slate-600">Fair usage policies with generous limits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">HTTPS Only</h3>
                    <p className="text-slate-600">All API calls encrypted with TLS 1.3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Example Request</h3>
                <Button size="sm" variant="ghost" className="text-white hover:bg-slate-800">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`curl -X GET "https://api.luxembourg-realestate.com/v1/properties" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
              </pre>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2 text-slate-300">Response</h4>
                <pre className="text-xs text-green-400 overflow-x-auto">
                  <code>{`{
  "data": [
    {
      "id": "prop_123",
      "title": "Modern Apartment in Gasperich",
      "price": 650000,
      "currency": "EUR",
      "type": "apartment",
      "bedrooms": 2,
      "bathrooms": 1,
      "area": 85,
      "location": {
        "city": "Luxembourg",
        "district": "Gasperich",
        "coordinates": [6.1319, 49.5764]
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1247
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">API Pricing</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Developer-Friendly Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start building for free, then scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle>Free Tier</CardTitle>
                <div className="text-3xl font-bold text-slate-800 mt-2">€0</div>
                <CardDescription>Perfect for testing and development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    1,000 API calls/month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Basic market data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Property search
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Community support
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl border-2 border-blue-200">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-blue-100 text-blue-800">Most Popular</Badge>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold text-slate-800 mt-2">€49</div>
                <CardDescription>For growing applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    50,000 API calls/month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Real-time notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Start Professional
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold text-slate-800 mt-2">Custom</div>
                <CardDescription>For large-scale applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Unlimited API calls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Dedicated support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    SLA guarantee
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your API key today and start integrating Luxembourg&apos;s most comprehensive 
            real estate data into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Get API Key Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="#documentation">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Full Docs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
