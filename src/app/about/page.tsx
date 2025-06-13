import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/ui/footer'
import { 
  Target, 
  Users, 
  TrendingDown, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Home,
  DollarSign,
  Clock,
  Star,
  Building
} from 'lucide-react'

export default function AboutPage() {
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Mission</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Revolutionizing Real Estate in Luxembourg
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We&apos;re cutting out expensive middlemen and traditional real estate agents to create 
              the most cost-effective, technology-driven property platform in Luxembourg. 
              Direct connections, transparent pricing, and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="h-5 w-5 mr-2" />
                  Browse Properties
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register">
                  <Users className="h-5 w-5 mr-2" />
                  Join Our Platform
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* The Problem */}
            <div>
              <Badge variant="destructive" className="mb-4">The Problem</Badge>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Traditional Real Estate is Broken
              </h2>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">High Commission Fees</h3>
                    <p>Traditional agents charge 3-6% commission, adding thousands to your costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Slow, Outdated Processes</h3>
                    <p>Weeks of back-and-forth, paperwork delays, and inefficient communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Lack of Transparency</h3>
                    <p>Hidden fees, unclear pricing, and limited access to market data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Our Solution</Badge>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Direct, Digital, Efficient
              </h2>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Up to 90% Cost Reduction</h3>
                    <p>Eliminate agent commissions with our direct-to-owner platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Lightning-Fast Transactions</h3>
                    <p>AI-powered matching, instant communication, and digital contracts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Complete Transparency</h3>
                    <p>Real-time market data, clear pricing, and no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Platform Features</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Leading-Edge Technology for Luxembourg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built specifically for the Luxembourg market with cutting-edge features 
              that traditional agents simply can&apos;t match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Advanced algorithms match you with perfect properties based on your preferences, 
                  budget, and lifestyle needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Interactive Map Search</CardTitle>
                <CardDescription>
                  Explore Luxembourg with our advanced map interface, showing real-time 
                  availability, pricing, and neighborhood insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Instant Communication</CardTitle>
                <CardDescription>
                  Direct messaging with property owners, instant notifications, 
                  and real-time updates on your favorite listings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Secure Transactions</CardTitle>
                <CardDescription>
                  Bank-level security, digital contracts, and escrow services 
                  ensure safe and secure property transactions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Market Analytics</CardTitle>
                <CardDescription>
                  Real-time market data, price trends, and neighborhood analytics 
                  to help you make informed decisions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Community-Driven</CardTitle>
                <CardDescription>
                  Reviews, ratings, and community insights from real residents 
                  help you understand each neighborhood.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Luxembourg */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Luxembourg Focus</Badge>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Built for Luxembourg&apos;s Unique Market
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Luxembourg&apos;s real estate market has unique challenges - high demand, 
                limited supply, and complex regulations. We&apos;ve built our platform 
                specifically to address these challenges.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Multilingual support (EN, FR, DE, LU)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Local market expertise and insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Compliance with Luxembourg regulations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Integration with local services and utilities</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">€15,000+</div>
                  <div className="text-sm text-slate-600">Average Commission Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                  <div className="text-sm text-slate-600">Faster Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Price Transparency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Platform Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Savings Statistics */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Real Savings</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              See How Much You Can Save
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Traditional real estate agents charge hefty commissions. Our platform eliminates these costs, 
              putting thousands back in your pocket.
            </p>
          </div>

          {/* Commission Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-red-600">Traditional Agent Fees</CardTitle>
                <CardDescription>What you typically pay with agents</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">€500,000 Property Sale</span>
                    <span className="font-semibold">€500,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Agent Commission (3-6%)</span>
                    <span className="font-semibold text-red-600">€15,000 - €30,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Marketing Fees</span>
                    <span className="font-semibold text-red-600">€2,000 - €5,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Administrative Costs</span>
                    <span className="font-semibold text-red-600">€1,000 - €3,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-red-50 px-3 rounded-lg">
                    <span className="font-bold text-slate-800">Total Agent Costs</span>
                    <span className="font-bold text-red-600 text-lg">€18,000 - €38,000</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Our Platform Fees</CardTitle>
                <CardDescription>What you pay with our direct platform</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">€500,000 Property Sale</span>
                    <span className="font-semibold">€500,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Platform Fee (0.5%)</span>
                    <span className="font-semibold text-green-600">€2,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Professional Photography</span>
                    <span className="font-semibold text-green-600">€300 - €500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Legal Support (Optional)</span>
                    <span className="font-semibold text-green-600">€500 - €1,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-50 px-3 rounded-lg">
                    <span className="font-bold text-slate-800">Total Platform Costs</span>
                    <span className="font-bold text-green-600 text-lg">€3,300 - €4,000</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Savings Highlight */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-600 to-blue-600 text-white max-w-2xl mx-auto">
              <div className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Star className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Your Total Savings</h3>
                  <Star className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold mb-2">€14,000 - €34,000</div>
                <p className="text-green-100 text-lg mb-4">On a typical €500,000 property transaction</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Up to 90% savings</div>
                    <div className="text-green-100">vs traditional agents</div>
                  </div>
                  <div>
                    <div className="font-semibold">Direct ownership</div>
                    <div className="text-green-100">No middleman fees</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Benefits Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Platform Benefits</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Beyond Just Savings
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform delivers value in multiple ways, from time savings to better market insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3-4 weeks</div>
              <div className="text-sm text-slate-600 mb-2">Average time to close</div>
              <div className="text-xs text-slate-500">vs 8-12 weeks traditional</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-sm text-slate-600 mb-2">Active users</div>
              <div className="text-xs text-slate-500">Growing community</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">&lt; 2 hours</div>
              <div className="text-sm text-slate-600 mb-2">Response time</div>
              <div className="text-xs text-slate-500">Direct owner contact</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-slate-600 mb-2">Success rate</div>
              <div className="text-xs text-slate-500">Completed transactions</div>
            </div>
          </div>

          {/* Real Customer Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Real Customer Savings</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Home className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Apartment Sale</div>
                      <div className="text-sm text-slate-600">Gasperich, Luxembourg</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Property Value:</span>
                      <span className="font-semibold">€650,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Traditional Agent Cost:</span>
                      <span className="text-red-600">€19,500 - €39,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Our Platform Cost:</span>
                      <span className="text-green-600">€3,750</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total Saved:</span>
                      <span className="text-green-600">€15,750 - €35,250</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Studio Rental</div>
                      <div className="text-sm text-slate-600">Gare, Luxembourg</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monthly Rent:</span>
                      <span className="font-semibold">€1,550</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Agent Finder Fee:</span>
                      <span className="text-red-600">€1,550 - €3,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Our Platform Fee:</span>
                      <span className="text-green-600">€0</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total Saved:</span>
                      <span className="text-green-600">€1,550 - €3,100</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Luxury Penthouse</div>
                      <div className="text-sm text-slate-600">Kirchberg, Luxembourg</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Property Value:</span>
                      <span className="font-semibold">€1,200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Traditional Agent Cost:</span>
                      <span className="text-red-600">€36,000 - €72,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Our Platform Cost:</span>
                      <span className="text-green-600">€6,500</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total Saved:</span>
                      <span className="text-green-600">€29,500 - €65,500</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Future */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Vision</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              The Future of Real Estate is Here
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We&apos;re not just building a platform - we&apos;re creating the future of how 
              people buy, sell, and rent properties in Luxembourg. Join us in revolutionizing 
              the industry.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Premium Experience</h3>
                <p className="text-slate-600 text-sm">
                  Luxury-level service without the luxury price tag
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Market Leadership</h3>
                <p className="text-slate-600 text-sm">
                  Setting the standard for real estate technology in Luxembourg
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Community First</h3>
                <p className="text-slate-600 text-sm">
                  Building a platform that serves the Luxembourg community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Luxembourg residents who have already made the switch 
            to smarter, more affordable real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/">
                Browse Properties
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
