'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  Home,
  Building,
  FileText,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  Plus,
  ChevronDown,
  ChevronRight,
  Calendar,
  MessageSquare,
  Star,
  Archive,
  Filter
} from 'lucide-react'

interface SidebarProps {
  className?: string
}

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string | number
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Properties',
    href: '/dashboard/properties',
    icon: Building,
    badge: 12,
    children: [
      { title: 'All Properties', href: '/dashboard/properties', icon: Building },
      { title: 'For Rent', href: '/dashboard/properties/rent', icon: Building },
      { title: 'For Sale', href: '/dashboard/properties/sale', icon: Building },
      { title: 'Favorites', href: '/dashboard/properties/favorites', icon: Star },
      { title: 'Archived', href: '/dashboard/properties/archived', icon: Archive },
    ]
  },
  {
    title: 'Contracts',
    href: '/dashboard/contracts',
    icon: FileText,
    badge: 3,
    children: [
      { title: 'Active Contracts', href: '/dashboard/contracts/active', icon: FileText },
      { title: 'Pending', href: '/dashboard/contracts/pending', icon: FileText },
      { title: 'Completed', href: '/dashboard/contracts/completed', icon: FileText },
      { title: 'Templates', href: '/dashboard/contracts/templates', icon: FileText },
    ]
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Messages',
    href: '/dashboard/messages',
    icon: MessageSquare,
    badge: 5,
  },
  {
    title: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
  },
  {
    title: 'Clients',
    href: '/dashboard/clients',
    icon: Users,
  },
]

const bottomNavigation: NavItem[] = [
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    href: '/dashboard/help',
    icon: HelpCircle,
  },
]

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(['Properties', 'Contracts'])

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.title)
    const active = isActive(item.href)

    return (
      <div key={item.title}>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            asChild={!hasChildren}
            onClick={hasChildren ? () => toggleExpanded(item.title) : undefined}
            className={cn(
              "w-full justify-start gap-3 h-9 px-3 font-normal",
              level > 0 && "ml-6 w-[calc(100%-1.5rem)]",
              active && "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700",
              !active && "text-slate-700 hover:bg-slate-100"
            )}
          >
            {!hasChildren ? (
              <Link href={item.href} className="flex items-center gap-3 w-full">
                <item.icon className={cn("h-4 w-4", active && "text-blue-600")} />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ) : (
              <>
                <item.icon className={cn("h-4 w-4", active && "text-blue-600")} />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                    {item.badge}
                  </Badge>
                )}
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                )}
              </>
            )}
          </Button>
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex h-full w-64 flex-col border-r bg-white", className)}>
      {/* Quick Actions */}
      <div className="p-4 border-b">
        <Button className="w-full gap-2" size="sm">
          <Plus className="h-4 w-4" />
          New Property
        </Button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-1">
          {navigation.map(item => renderNavItem(item))}
        </div>

        {/* Quick Filters */}
        <div className="mt-8">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
            <Filter className="h-3 w-3" />
            Quick Filters
          </div>
          <div className="mt-2 space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3 h-8 px-3 font-normal text-slate-600">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Available Properties
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3 h-8 px-3 font-normal text-slate-600">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Pending Contracts
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3 h-8 px-3 font-normal text-slate-600">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              Urgent Tasks
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
            Recent Activity
          </div>
          <div className="mt-2 space-y-2">
            <div className="px-3 py-2 text-sm">
              <div className="font-medium text-slate-900">New inquiry</div>
              <div className="text-xs text-slate-500">Zenith Tower - 2 min ago</div>
            </div>
            <div className="px-3 py-2 text-sm">
              <div className="font-medium text-slate-900">Contract signed</div>
              <div className="text-xs text-slate-500">Liberté Studio - 1 hour ago</div>
            </div>
            <div className="px-3 py-2 text-sm">
              <div className="font-medium text-slate-900">Property viewed</div>
              <div className="text-xs text-slate-500">Apartment 3B - 2 hours ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t p-4">
        <div className="space-y-1">
          {bottomNavigation.map(item => renderNavItem(item))}
        </div>
      </div>
    </div>
  )
}
