'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Building,
  FileText,
  Calendar,
  MessageSquare,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Heart,
  Euro
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Ted</h1>
          <p className="text-slate-600 mt-1">Here&apos;s what&apos;s happening with your properties today.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Property
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              +3 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Euro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€45,231</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Property Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowDownRight className="h-3 w-3 text-red-500" />
              -5% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates on your properties and contracts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">New inquiry received</h4>
                    <span className="text-sm text-slate-500">2 min ago</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Someone is interested in Zenith Tower, Apartment 12B
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">Zenith Tower</Badge>
                    <Badge variant="outline">€2,800/month</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Contract signed</h4>
                    <span className="text-sm text-slate-500">1 hour ago</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Rental agreement completed for Liberté Studio
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">Liberté Studio</Badge>
                    <Badge variant="outline">€1,950/month</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Property viewing scheduled</h4>
                    <span className="text-sm text-slate-500">3 hours ago</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Viewing appointment set for tomorrow at 2:00 PM
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">Apartment 3B</Badge>
                    <Badge variant="outline">€3,200/month</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">New property listed</h4>
                    <span className="text-sm text-slate-500">1 day ago</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Modern 2-bedroom apartment in Kirchberg district
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">Kirchberg</Badge>
                    <Badge variant="outline">€2,650/month</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-2" variant="outline">
                <Plus className="h-4 w-4" />
                Add New Property
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <FileText className="h-4 w-4" />
                Create Contract
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Calendar className="h-4 w-4" />
                Schedule Viewing
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <MessageSquare className="h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Zenith Tower</p>
                    <p className="text-sm text-slate-500">12 inquiries this week</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm">24</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Liberté Studio</p>
                    <p className="text-sm text-slate-500">8 inquiries this week</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm">18</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Apartment 3B</p>
                    <p className="text-sm text-slate-500">6 inquiries this week</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm">15</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Contract renewal due</p>
                    <p className="text-xs text-slate-500">Tomorrow</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Property inspection</p>
                    <p className="text-xs text-slate-500">Friday</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Client meeting</p>
                    <p className="text-xs text-slate-500">Next Monday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
