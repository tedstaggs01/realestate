'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Activity, 
  Wifi, 
  Database, 
  ExternalLink,
  Github,
  MessageCircle
} from 'lucide-react'

export default function DashboardFooter() {
  return (
    <footer className="border-t bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Status Indicators */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-slate-600">All systems operational</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Activity className="h-3 w-3" />
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              <span>Connected</span>
            </div>
            <div className="flex items-center gap-1">
              <Database className="h-3 w-3" />
              <span>Synced</span>
            </div>
          </div>
        </div>

        {/* Quick Links & Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Version 2.1.0</span>
            <span>•</span>
            <Link 
              href="/dashboard/help" 
              className="hover:text-slate-700 transition-colors"
            >
              Help
            </Link>
            <span>•</span>
            <Link 
              href="/dashboard/feedback" 
              className="hover:text-slate-700 transition-colors"
            >
              Feedback
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
