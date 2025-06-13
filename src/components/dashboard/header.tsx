'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  Plus,
  Command,
  Home,
  Building,
  FileText,
  BarChart3
} from 'lucide-react'

interface DashboardHeaderProps {
  user?: {
    name: string
    email: string
    avatar?: string
  }
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [notifications] = useState(3) // Mock notification count

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center px-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Building className="h-5 w-5 text-white" />
            </div>
            <span className="hidden font-semibold text-slate-900 sm:inline-block">
              Luxembourg RE
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard" className="gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/properties" className="gap-2">
                <Building className="h-4 w-4" />
                Properties
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/contracts" className="gap-2">
                <FileText className="h-4 w-4" />
                Contracts
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/analytics" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
            </Button>
          </nav>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search properties, contracts..."
              className="pl-10 bg-slate-50 border-0 focus-visible:ring-1 focus-visible:ring-slate-300"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600">
                <Command className="h-3 w-3" />
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Quick Actions */}
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New Property</span>
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>
          </div>

          {/* Settings */}
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100 transition-colors"
            >
              <Avatar className="h-7 w-7">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="text-xs">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="hidden text-left sm:block">
                <div className="text-sm font-medium text-slate-900">
                  {user?.name || 'User'}
                </div>
                <div className="text-xs text-slate-500">
                  {user?.email || 'user@example.com'}
                </div>
              </div>
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg">
                <div className="flex items-center gap-3 p-2 mb-2 border-b">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>
                      {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{user?.name || 'User'}</div>
                    <div className="text-xs text-slate-500">{user?.email || 'user@example.com'}</div>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 mb-1">
                  <User className="h-4 w-4" />
                  Profile Settings
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 mb-1">
                  <Settings className="h-4 w-4" />
                  Account Settings
                </Button>
                <div className="border-t my-2" />
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
