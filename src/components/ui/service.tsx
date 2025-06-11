import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Globe, ArrowRight, Star } from "lucide-react"

export default function ServiceBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <Globe className="h-6 w-6" />
                  <span className="font-semibold text-lg">Property Website Services</span>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    Want a Beautiful Website for Your Apartment?
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Reach out if you want a professional website like this one to showcase your property. 
                    We create stunning, responsive websites that help you attract quality tenants and 
                    present your apartment in the best possible light.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>Professional Design</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>Mobile Responsive</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                    asChild
                  >
                    <a href="mailto:Ted@staggs.lu?subject=Website Service Inquiry">
                      Get Your Website
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6"
                    asChild
                  >
                    <a href="tel:+352621232202">
                      Call: +352 621 232 202
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Custom Property Websites</h4>
                  <p className="text-slate-600">
                    Professional, modern websites tailored to showcase your unique property
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-blue-600">Photo Galleries</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-purple-600">Floor Plans</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-green-600">Contact Forms</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-orange-600">Mobile Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
