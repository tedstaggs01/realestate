import Link from "next/link"
import { Button } from "./button"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand & Made in Luxembourg */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <h3 className="font-semibold text-xl text-slate-900">Luxembourg RE.</h3>
              <div className="flex items-center space-x-1.5 px-2 py-1 bg-slate-50 rounded-full border border-slate-200">
                <div className="w-4 h-3 relative overflow-hidden rounded-sm">
                  {/* Luxembourg Flag */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                  <div className="absolute top-1 left-0 w-full h-1 bg-white"></div>
                  <div className="absolute top-2 left-0 w-full h-1 bg-blue-500"></div>
                </div>
                <span className="text-xs font-medium text-slate-600">Made in Luxembourg</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Premium real estate platform connecting you to Luxembourg&apos;s finest properties.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col space-y-3">
              <h4 className="text-sm font-medium text-slate-900">Product</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Properties</Link>
                <Link href="/zenith" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Zenith Tower</Link>
                <Link href="/liberte" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Liberté Studio</Link>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="text-sm font-medium text-slate-900">Company</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</Link>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
                <Link href="/careers" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Careers</Link>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="text-sm font-medium text-slate-900">Legal</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Privacy</Link>
                <Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Terms</Link>
                <Link href="/cookies" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Cookies</Link>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
              <Link href="/register">Get started</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-sm text-slate-500">
              © 2025 Luxembourg RE. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/status" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">Status</Link>
              <Link href="/security" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">Security</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="mailto:hello@luxembourgre.com" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
              ted@staggs.lu
            </Link>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <span className="text-sm text-slate-500">+352 621 232 202</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
