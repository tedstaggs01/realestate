'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/ui/footer'
import { 
  FileText, 
  Download, 
  Send, 
  Save,
  ArrowLeft,
  Calendar,
  Euro,
  User,
  Building
} from 'lucide-react'

interface ContractData {
  contractType: string
  propertyAddress: string
  propertyType: string
  rentAmount: string
  depositAmount: string
  startDate: string
  endDate: string
  landlordName: string
  landlordAddress: string
  landlordPhone: string
  landlordEmail: string
  tenantName: string
  tenantAddress: string
  tenantPhone: string
  tenantEmail: string
  specialConditions: string
  utilities: string
  furnished: string
  pets: string
  smoking: string
}

export default function ContractGeneratorPage() {
  const [contractData, setContractData] = useState<ContractData>({
    contractType: '',
    propertyAddress: '',
    propertyType: '',
    rentAmount: '',
    depositAmount: '',
    startDate: '',
    endDate: '',
    landlordName: '',
    landlordAddress: '',
    landlordPhone: '',
    landlordEmail: '',
    tenantName: '',
    tenantAddress: '',
    tenantPhone: '',
    tenantEmail: '',
    specialConditions: '',
    utilities: '',
    furnished: '',
    pets: '',
    smoking: ''
  })

  const handleInputChange = (field: keyof ContractData, value: string) => {
    setContractData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const generateContract = () => {
    // Contract generation logic would go here
    console.log('Generating contract with data:', contractData)
  }

  const downloadContract = () => {
    // PDF download logic would go here
    console.log('Downloading contract...')
  }

  const saveContract = () => {
    // Save to database logic would go here
    console.log('Saving contract...')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-800">Contract Generator</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={saveContract}>
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline" onClick={downloadContract}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button onClick={generateContract}>
                <Send className="h-4 w-4 mr-2" />
                Generate Contract
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* Left Side - Contract Preview */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b bg-slate-50">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Contract Preview</h2>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  {contractData.contractType || 'Select Type'}
                </Badge>
              </div>
            </div>
            
            <div className="p-8 overflow-y-auto h-full bg-white" style={{ fontFamily: 'serif' }}>
              <div className="max-w-none prose prose-slate">
                {/* Contract Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">
                    {contractData.contractType === 'rental' ? 'RENTAL AGREEMENT' : 
                     contractData.contractType === 'sale' ? 'PURCHASE AGREEMENT' : 
                     'REAL ESTATE CONTRACT'}
                  </h1>
                  <p className="text-slate-600">Luxembourg Real Estate Platform</p>
                </div>

                {/* Property Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-800">Property Information</h3>
                  <div className="bg-slate-50 p-4 rounded">
                    <p><strong>Address:</strong> {contractData.propertyAddress || '[Property Address]'}</p>
                    <p><strong>Type:</strong> {contractData.propertyType || '[Property Type]'}</p>
                    <p><strong>Furnished:</strong> {contractData.furnished || '[Furnished Status]'}</p>
                  </div>
                </div>

                {/* Parties Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-800">Parties</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        {contractData.contractType === 'sale' ? 'Seller' : 'Landlord'}
                      </h4>
                      <p><strong>Name:</strong> {contractData.landlordName || '[Name]'}</p>
                      <p><strong>Address:</strong> {contractData.landlordAddress || '[Address]'}</p>
                      <p><strong>Phone:</strong> {contractData.landlordPhone || '[Phone]'}</p>
                      <p><strong>Email:</strong> {contractData.landlordEmail || '[Email]'}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">
                        {contractData.contractType === 'sale' ? 'Buyer' : 'Tenant'}
                      </h4>
                      <p><strong>Name:</strong> {contractData.tenantName || '[Name]'}</p>
                      <p><strong>Address:</strong> {contractData.tenantAddress || '[Address]'}</p>
                      <p><strong>Phone:</strong> {contractData.tenantPhone || '[Phone]'}</p>
                      <p><strong>Email:</strong> {contractData.tenantEmail || '[Email]'}</p>
                    </div>
                  </div>
                </div>

                {/* Financial Terms */}
                {contractData.contractType === 'rental' && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-slate-800">Financial Terms</h3>
                    <div className="bg-slate-50 p-4 rounded">
                      <p><strong>Monthly Rent:</strong> €{contractData.rentAmount || '[Amount]'}</p>
                      <p><strong>Security Deposit:</strong> €{contractData.depositAmount || '[Amount]'}</p>
                      <p><strong>Utilities:</strong> {contractData.utilities || '[Utilities Information]'}</p>
                    </div>
                  </div>
                )}

                {/* Term Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-800">Term</h3>
                  <div className="bg-slate-50 p-4 rounded">
                    <p><strong>Start Date:</strong> {contractData.startDate || '[Start Date]'}</p>
                    <p><strong>End Date:</strong> {contractData.endDate || '[End Date]'}</p>
                  </div>
                </div>

                {/* Special Conditions */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-800">Special Conditions</h3>
                  <div className="bg-slate-50 p-4 rounded">
                    <p><strong>Pets:</strong> {contractData.pets || '[Pet Policy]'}</p>
                    <p><strong>Smoking:</strong> {contractData.smoking || '[Smoking Policy]'}</p>
                    {contractData.specialConditions && (
                      <div className="mt-3">
                        <strong>Additional Conditions:</strong>
                        <p className="mt-1 whitespace-pre-wrap">{contractData.specialConditions}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Signatures */}
                <div className="mt-12 pt-8 border-t">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="mb-4"><strong>{contractData.contractType === 'sale' ? 'Seller' : 'Landlord'} Signature:</strong></p>
                      <div className="border-b border-slate-300 h-12 mb-2"></div>
                      <p className="text-sm text-slate-600">Date: _______________</p>
                    </div>
                    <div>
                      <p className="mb-4"><strong>{contractData.contractType === 'sale' ? 'Buyer' : 'Tenant'} Signature:</strong></p>
                      <div className="border-b border-slate-300 h-12 mb-2"></div>
                      <p className="text-sm text-slate-600">Date: _______________</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Inputs */}
          <div className="space-y-6 overflow-y-auto">
            {/* Contract Type */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Contract Type
                </CardTitle>
                <CardDescription>Select the type of contract you want to generate</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={contractData.contractType} onValueChange={(value: string) => handleInputChange('contractType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select contract type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental">Rental Agreement</SelectItem>
                    <SelectItem value="sale">Purchase Agreement</SelectItem>
                    <SelectItem value="lease">Commercial Lease</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Property Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Property Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="propertyAddress">Property Address</Label>
                  <Input
                    id="propertyAddress"
                    value={contractData.propertyAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('propertyAddress', e.target.value)}
                    placeholder="123 Main Street, Luxembourg City"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select value={contractData.propertyType} onValueChange={(value: string) => handleInputChange('propertyType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="furnished">Furnished Status</Label>
                  <Select value={contractData.furnished} onValueChange={(value: string) => handleInputChange('furnished', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select furnished status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fully-furnished">Fully Furnished</SelectItem>
                      <SelectItem value="partially-furnished">Partially Furnished</SelectItem>
                      <SelectItem value="unfurnished">Unfurnished</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Financial Information */}
            {contractData.contractType === 'rental' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5" />
                    Financial Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="rentAmount">Monthly Rent (€)</Label>
                    <Input
                      id="rentAmount"
                      type="number"
                      value={contractData.rentAmount}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('rentAmount', e.target.value)}
                      placeholder="1500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="depositAmount">Security Deposit (€)</Label>
                    <Input
                      id="depositAmount"
                      type="number"
                      value={contractData.depositAmount}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('depositAmount', e.target.value)}
                      placeholder="3000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="utilities">Utilities</Label>
                    <Select value={contractData.utilities} onValueChange={(value: string) => handleInputChange('utilities', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select utilities arrangement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="included">Included in rent</SelectItem>
                        <SelectItem value="excluded">Tenant pays separately</SelectItem>
                        <SelectItem value="partial">Partially included</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Date Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Contract Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={contractData.startDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('startDate', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={contractData.endDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('endDate', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Landlord/Seller Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {contractData.contractType === 'sale' ? 'Seller' : 'Landlord'} Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="landlordName">Full Name</Label>
                  <Input
                    id="landlordName"
                    value={contractData.landlordName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('landlordName', e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="landlordAddress">Address</Label>
                  <Input
                    id="landlordAddress"
                    value={contractData.landlordAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('landlordAddress', e.target.value)}
                    placeholder="456 Owner Street, Luxembourg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="landlordPhone">Phone</Label>
                    <Input
                      id="landlordPhone"
                      value={contractData.landlordPhone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('landlordPhone', e.target.value)}
                      placeholder="+352 123 456 789"
                    />
                  </div>
                  <div>
                    <Label htmlFor="landlordEmail">Email</Label>
                    <Input
                      id="landlordEmail"
                      type="email"
                      value={contractData.landlordEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('landlordEmail', e.target.value)}
                      placeholder="owner@example.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tenant/Buyer Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {contractData.contractType === 'sale' ? 'Buyer' : 'Tenant'} Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="tenantName">Full Name</Label>
                  <Input
                    id="tenantName"
                    value={contractData.tenantName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('tenantName', e.target.value)}
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="tenantAddress">Address</Label>
                  <Input
                    id="tenantAddress"
                    value={contractData.tenantAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('tenantAddress', e.target.value)}
                    placeholder="789 Tenant Avenue, Luxembourg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tenantPhone">Phone</Label>
                    <Input
                      id="tenantPhone"
                      value={contractData.tenantPhone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('tenantPhone', e.target.value)}
                      placeholder="+352 987 654 321"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tenantEmail">Email</Label>
                    <Input
                      id="tenantEmail"
                      type="email"
                      value={contractData.tenantEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('tenantEmail', e.target.value)}
                      placeholder="tenant@example.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Conditions */}
            <Card>
              <CardHeader>
                <CardTitle>Special Conditions & Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pets">Pet Policy</Label>
                    <Select value={contractData.pets} onValueChange={(value: string) => handleInputChange('pets', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="allowed">Pets Allowed</SelectItem>
                        <SelectItem value="not-allowed">No Pets</SelectItem>
                        <SelectItem value="with-approval">With Approval</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="smoking">Smoking Policy</Label>
                    <Select value={contractData.smoking} onValueChange={(value: string) => handleInputChange('smoking', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select smoking policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="allowed">Smoking Allowed</SelectItem>
                        <SelectItem value="not-allowed">No Smoking</SelectItem>
                        <SelectItem value="outdoor-only">Outdoor Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="specialConditions">Additional Conditions</Label>
                  <Textarea
                    id="specialConditions"
                    value={contractData.specialConditions}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('specialConditions', e.target.value)}
                    placeholder="Enter any additional terms, conditions, or special arrangements..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
