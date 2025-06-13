'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/ui/footer'
import {
  Home,
  Camera,
  FileText,
  Euro,
  Users,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield,
  TrendingUp,
  Calculator,
  ChevronRight,
  Star,
  Award,
  Target,
  Zap,
  ArrowRight
} from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  details: string[]
  tips: string[]
  timeframe: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  icon: React.ComponentType<{ className?: string }>
}

const rentSteps: Step[] = [
  {
    id: 1,
    title: 'Property Preparation & Documentation',
    description: 'Get your property ready and gather all necessary documents',
    details: [
      'Clean and declutter the entire property thoroughly',
      'Complete any necessary repairs (plumbing, electrical, cosmetic)',
      'Gather property documents: title deed, energy certificate, floor plans',
      'Obtain rental permits if required by local authorities',
      'Create an inventory list of all furnishings and fixtures',
      'Install safety equipment (smoke detectors, carbon monoxide detectors)'
    ],
    tips: [
      'First impressions matter - invest in professional cleaning',
      'Small repairs can significantly increase rental value',
      'Keep digital copies of all documents for easy sharing'
    ],
    timeframe: '1-2 weeks',
    difficulty: 'Medium',
    icon: Home
  },
  {
    id: 2,
    title: 'Professional Photography & Virtual Tour',
    description: 'Create compelling visual content to attract potential tenants',
    details: [
      'Take high-quality photos of every room during optimal lighting',
      'Capture exterior shots and building amenities',
      'Create a virtual tour or 360° photos if possible',
      'Edit photos to enhance lighting and remove personal items',
      'Take photos of important features: storage, parking, views',
      'Document any unique selling points or recent renovations'
    ],
    tips: [
      'Natural light is your best friend - shoot during golden hour',
      'Wide-angle lens can make rooms appear larger',
      'Consider hiring a professional photographer for premium properties'
    ],
    timeframe: '2-3 days',
    difficulty: 'Easy',
    icon: Camera
  },
  {
    id: 3,
    title: 'Market Research & Pricing Strategy',
    description: 'Determine competitive rental price based on market analysis',
    details: [
      'Research similar properties in your area (size, condition, amenities)',
      'Check online platforms: Immotop.lu, Athome.lu, ImmoPass.lu',
      'Consider seasonal rental market fluctuations',
      'Factor in property taxes, maintenance costs, and vacancy periods',
      'Set competitive but profitable rental price',
      'Prepare justification for your pricing (recent renovations, location benefits)'
    ],
    tips: [
      'Price slightly below market rate for faster rental',
      'Consider offering incentives like first month free',
      'Be prepared to negotiate but know your minimum acceptable price'
    ],
    timeframe: '3-5 days',
    difficulty: 'Medium',
    icon: Calculator
  },
  {
    id: 4,
    title: 'Create Compelling Property Listing',
    description: 'Write an attractive description and list on rental platforms',
    details: [
      'Write detailed property description highlighting key features',
      'Include all relevant information: size, rooms, amenities, location',
      'List nearby conveniences: transport, schools, shopping, restaurants',
      'Specify rental terms: deposit, utilities, pet policy, lease duration',
      'Upload high-quality photos and virtual tour',
      'Post on multiple platforms: Immotop.lu, Athome.lu, Facebook Marketplace'
    ],
    tips: [
      'Use keywords that tenants search for',
      'Be honest about property condition to avoid wasted viewings',
      'Update listings regularly to maintain visibility'
    ],
    timeframe: '1-2 days',
    difficulty: 'Easy',
    icon: FileText
  },
  {
    id: 5,
    title: 'Tenant Screening & Selection',
    description: 'Evaluate potential tenants and select the best candidate',
    details: [
      'Respond promptly to inquiries and schedule viewings',
      'Prepare rental application form with required information',
      'Request proof of income (3x monthly rent minimum)',
      'Check employment verification and references from previous landlords',
      'Verify identity with official documents',
      'Consider credit check for financial reliability assessment'
    ],
    tips: [
      'Trust your instincts during property viewings',
      'Verify all documents are authentic',
      'Consider requiring a guarantor for additional security'
    ],
    timeframe: '1-3 weeks',
    difficulty: 'Hard',
    icon: Users
  },
  {
    id: 6,
    title: 'Legal Documentation & Contract Signing',
    description: 'Prepare and execute the rental agreement with proper legal protection',
    details: [
      'Use standard Luxembourg rental contract template',
      'Include all agreed terms: rent, deposit, utilities, maintenance responsibilities',
      'Specify lease duration, renewal terms, and termination conditions',
      'Document property condition with detailed inventory',
      'Collect security deposit (typically 2-3 months rent)',
      'Register rental contract with local authorities if required'
    ],
    tips: [
      'Consider having contract reviewed by a lawyer',
      'Take photos during move-in inspection',
      'Keep detailed records of all transactions'
    ],
    timeframe: '3-5 days',
    difficulty: 'Hard',
    icon: Shield
  }
]

const saleSteps: Step[] = [
  {
    id: 1,
    title: 'Property Valuation & Market Analysis',
    description: 'Determine accurate market value and optimal selling strategy',
    details: [
      'Research recent sales of comparable properties in your area',
      'Consider getting professional appraisal for accurate valuation',
      'Analyze current market conditions and trends',
      'Factor in unique property features and recent improvements',
      'Calculate net proceeds after taxes, fees, and closing costs',
      'Set realistic timeline based on market conditions'
    ],
    tips: [
      'Price competitively to attract serious buyers',
      'Consider seasonal market variations',
      'Be prepared to adjust price based on market feedback'
    ],
    timeframe: '1-2 weeks',
    difficulty: 'Medium',
    icon: TrendingUp
  },
  {
    id: 2,
    title: 'Property Staging & Presentation',
    description: 'Optimize your property&apos;s appeal to potential buyers',
    details: [
      'Deep clean entire property and remove personal belongings',
      'Complete necessary repairs and touch-up paint work',
      'Stage rooms to highlight space and functionality',
      'Enhance curb appeal with landscaping and exterior maintenance',
      'Remove clutter and excess furniture to maximize space perception',
      'Add fresh flowers or plants for welcoming atmosphere'
    ],
    tips: [
      'Neutral colors appeal to broader range of buyers',
      'Good lighting can transform the feel of a space',
      'Consider professional staging for luxury properties'
    ],
    timeframe: '1-2 weeks',
    difficulty: 'Medium',
    icon: Star
  },
  {
    id: 3,
    title: 'Professional Marketing Materials',
    description: 'Create high-quality marketing content to showcase your property',
    details: [
      'Hire professional photographer or take high-quality photos',
      'Create virtual tour or video walkthrough',
      'Develop property brochure with key features and specifications',
      'Write compelling property description highlighting unique selling points',
      'Prepare floor plans and property information sheet',
      'Create social media content for broader reach'
    ],
    tips: [
      'Invest in quality photography - it&apos;s worth the cost',
      'Showcase lifestyle benefits, not just property features',
      'Use drone photography for properties with good exterior views'
    ],
    timeframe: '3-5 days',
    difficulty: 'Easy',
    icon: Camera
  },
  {
    id: 4,
    title: 'Multi-Platform Marketing Campaign',
    description: 'List your property across multiple channels for maximum exposure',
    details: [
      'List on major Luxembourg real estate websites: Immotop.lu, Athome.lu',
      'Create Facebook Marketplace and Instagram listings',
      'Consider premium listing upgrades for better visibility',
      'Network with local contacts and spread word-of-mouth',
      'Create "For Sale" signage for the property',
      'Consider open house events for increased exposure'
    ],
    tips: [
      'Refresh listings regularly to maintain visibility',
      'Respond quickly to inquiries to maintain buyer interest',
      'Track which platforms generate the most qualified leads'
    ],
    timeframe: '1-2 days',
    difficulty: 'Easy',
    icon: Target
  },
  {
    id: 5,
    title: 'Buyer Qualification & Negotiation',
    description: 'Evaluate offers and negotiate the best deal for your property',
    details: [
      'Pre-qualify potential buyers for financial capability',
      'Request proof of financing or pre-approval letters',
      'Evaluate offers based on price, terms, and buyer reliability',
      'Negotiate price, closing date, and contingencies',
      'Consider multiple offers and create competitive bidding situation',
      'Maintain detailed records of all communications and offers'
    ],
    tips: [
      'Don&apos;t automatically accept the highest offer - consider terms too',
      'Cash offers often close faster and with fewer complications',
      'Be prepared to counteroffer and negotiate terms'
    ],
    timeframe: '2-6 weeks',
    difficulty: 'Hard',
    icon: Euro
  },
  {
    id: 6,
    title: 'Legal Process & Closing',
    description: 'Complete the legal sale process and transfer ownership',
    details: [
      'Engage notary (notaire) to handle legal aspects of sale',
      'Prepare all required legal documents and certificates',
      'Coordinate property inspections and appraisals',
      'Review and sign preliminary sales agreement (compromis de vente)',
      'Complete final walkthrough with buyer before closing',
      'Attend closing meeting and transfer keys and ownership'
    ],
    tips: [
      'Choose experienced notary familiar with property transactions',
      'Keep all receipts for improvements to reduce capital gains tax',
      'Be flexible with closing dates to accommodate buyer needs'
    ],
    timeframe: '4-8 weeks',
    difficulty: 'Hard',
    icon: FileText
  }
]

export default function PropertyFlowPage() {
  const [activeTab, setActiveTab] = useState('rent')
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    )
  }

  const currentSteps = activeTab === 'rent' ? rentSteps : saleSteps

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
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
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Sell or Rent Your Property Without an Agent
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Complete step-by-step guide to successfully rent out or sell your apartment in Luxembourg. 
            Save thousands in agent fees while maintaining professional standards.
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">€5,000+</div>
              <div className="text-sm text-slate-600">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6-8</div>
              <div className="text-sm text-slate-600">Weeks Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-slate-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('rent')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'rent'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Home className="h-4 w-4" />
                Rent Your Property
              </button>
              <button
                onClick={() => setActiveTab('sell')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'sell'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                Sell Your Property
              </button>
            </div>
          </div>

          {activeTab === 'rent' && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Complete Rental Process Guide
              </h2>
              <p className="text-slate-600">
                From property preparation to tenant selection - everything you need to know
              </p>
            </div>
          )}

          {activeTab === 'sell' && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Complete Sales Process Guide
              </h2>
              <p className="text-slate-600">
                From valuation to closing - maximize your property&apos;s value
              </p>
            </div>
          )}

          {/* Progress Overview */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Your Progress
                </CardTitle>
                <CardDescription>
                  Track your completion through the {activeTab === 'rent' ? 'rental' : 'sales'} process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(completedSteps.length / currentSteps.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {completedSteps.length}/{currentSteps.length} Steps Complete
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  {currentSteps.map((step) => (
                    <div
                      key={step.id}
                      className={`text-center p-2 rounded-lg border ${
                        completedSteps.includes(step.id)
                          ? 'bg-green-50 border-green-200'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${
                        completedSteps.includes(step.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-300 text-slate-600'
                      }`}>
                        {completedSteps.includes(step.id) ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <span className="text-xs font-bold">{step.id}</span>
                        )}
                      </div>
                      <div className="text-xs font-medium">Step {step.id}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-6">
            {currentSteps.map((step) => (
              <Card key={step.id} className="overflow-hidden">
                <CardHeader className="bg-slate-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        completedSteps.includes(step.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 text-white'
                      }`}>
                        {completedSteps.includes(step.id) ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <step.icon className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">
                            Step {step.id}: {step.title}
                          </CardTitle>
                          <Badge className={getDifficultyColor(step.difficulty)}>
                            {step.difficulty}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {step.timeframe}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={completedSteps.includes(step.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleStepCompletion(step.id)}
                      className="ml-4"
                    >
                      {completedSteps.includes(step.id) ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark Complete'
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Detailed Steps
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-600" />
                        Pro Tips
                      </h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Star className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Tips */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Award className="h-5 w-5" />
                  Keys to Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Success Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Professional presentation and photography
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Competitive and realistic pricing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Prompt and professional communication
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Thorough documentation and legal compliance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Common Pitfalls to Avoid</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        Overpricing based on emotional attachment
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        Poor quality photos or inadequate staging
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        Inadequate tenant/buyer screening
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        Rushing the process without proper preparation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Join thousands of Luxembourg property owners who have successfully {activeTab === 'rent' ? 'rented' : 'sold'} their properties without paying agent fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/register">
                      Create Free Account
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                    <Link href="/">
                      Browse Properties
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
