import Link from "next/link"
import { Button } from "./button"

export default function Footer() {
  return (
    <footer className="bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg text-slate-800 mb-4">Staggs Real Estate</h3>
            <p className="text-slate-600 text-sm mb-4">
              Find your perfect property in Luxembourg with our premium real estate services.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-slate-800">Home</Link></li>
              <li><Link href="/listings" className="hover:text-slate-800">All Properties</Link></li>
              <li><Link href="/zenith" className="hover:text-slate-800">Zenith Tower</Link></li>
              <li><Link href="/liberte" className="hover:text-slate-800">Liberté Studio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p>📧 Ted@staggs.lu</p>
              <p>📱 +352 621 123 456</p>
              <p>📍 Luxembourg City</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-6 text-center">
          <p className="text-slate-600 text-sm">
            &copy; 2025 Ted Staggs Real Estate. All rights reserved. | Luxury rentals in Luxembourg
          </p>
        </div>
      </div>
    </footer>
  )
}
