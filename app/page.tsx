import Link from 'next/link'
import { CheckCircleIcon, SparklesIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <SparklesIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Test Git Webhooks</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Cleaning
              <span className="text-blue-600 block">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the difference with our professional cleaning services. We deliver spotless results 
              for homes and businesses across the city with reliable, eco-friendly solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cleaning Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine years of experience with modern techniques to deliver exceptional cleaning results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee on all our cleaning services. We're not happy until you are.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <SparklesIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                We use environmentally safe products that are effective yet gentle on your family and pets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Always On Time</h3>
              <p className="text-gray-600">
                Punctuality is our priority. We arrive on schedule and complete work within agreed timeframes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Complete peace of mind with our comprehensive insurance coverage and bonded team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">Residential Cleaning</h3>
                <p className="mb-6 opacity-90">
                  Regular house cleaning, deep cleaning, and move-in/move-out services for your home.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Weekly, bi-weekly, monthly service</li>
                  <li>• Kitchen & bathroom deep clean</li>
                  <li>• Dusting and vacuuming</li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">Commercial Cleaning</h3>
                <p className="mb-6 opacity-90">
                  Professional office cleaning and commercial space maintenance services.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Daily office maintenance</li>
                  <li>• Restroom sanitization</li>
                  <li>• Floor care and carpet cleaning</li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">Specialized Services</h3>
                <p className="mb-6 opacity-90">
                  Window cleaning, carpet cleaning, and post-construction cleanup services.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Window washing inside & out</li>
                  <li>• Carpet & upholstery cleaning</li>
                  <li>• Post-construction cleanup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free quote today and discover why hundreds of customers trust us with their cleaning needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <SparklesIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">Test Git Webhooks</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Test Git Webhooks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}