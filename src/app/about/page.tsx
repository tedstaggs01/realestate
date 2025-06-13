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
  Star
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-sm text-slate-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                  <div className="text-sm text-slate-600">Faster Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Transparency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Availability</div>
                </div>
              </div>
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
