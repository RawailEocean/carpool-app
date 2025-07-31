'use client'

import { Car } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Carpool</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/login" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: January 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the Carpool platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-600">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Carpool provides a platform that connects drivers and passengers for shared rides. Our service includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ride matching and coordination</li>
                <li>Payment processing and cost splitting</li>
                <li>User verification and safety features</li>
                <li>Communication tools between users</li>
                <li>Location and route services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">As a user of Carpool, you agree to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Treat other users with respect and courtesy</li>
                <li>Report any safety concerns immediately</li>
                <li>Not use the service for illegal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Safety and Conduct</h2>
              <p className="text-gray-600 mb-4">
                Carpool is committed to maintaining a safe environment for all users. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Follow all traffic laws and safety regulations</li>
                <li>Maintain appropriate behavior during rides</li>
                <li>Not engage in harassment or discrimination</li>
                <li>Report any incidents or concerns</li>
                <li>Cooperate with safety investigations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment and Fees</h2>
              <p className="text-gray-600 mb-4">
                Users agree to pay all applicable fees for services provided through the platform. Payment terms include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Automatic cost calculation and splitting</li>
                <li>Secure payment processing</li>
                <li>Transparent fee structure</li>
                <li>Refund policies as applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our data collection and usage practices are outlined in our Privacy Policy.
              </p>
              <p className="text-gray-600">
                By using our service, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Carpool provides a platform for connecting users but is not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>User conduct during rides</li>
                <li>Vehicle maintenance or safety</li>
                <li>Traffic accidents or incidents</li>
                <li>Disputes between users</li>
                <li>Third-party services or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account at any time for violations of these terms or for any other reason at our discretion.
              </p>
              <p className="text-gray-600">
                You may terminate your account at any time by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              </p>
              <p className="text-gray-600">
                Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Email: legal@carpool.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Carpool Street, Tech City, TC 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">Carpool</span>
              </div>
              <p className="text-gray-400">
                Connecting travelers for shared rides and meaningful journeys.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Carpool. All rights reserved By Rawail Ahmed.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 