'use client'

import { 
  Shield, 
  UserCheck, 
  Star, 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Lock, 
  Eye,
  Heart,
  Car,
  Users,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'User Verification',
      description: 'All users go through a comprehensive verification process including ID verification and background checks.',
      details: [
        'Government ID verification',
        'Background check integration',
        'Phone number verification',
        'Email verification'
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Rating System',
      description: 'Comprehensive rating and review system helps build trust within the community.',
      details: [
        'Driver and passenger ratings',
        'Detailed review system',
        'Community feedback',
        'Trust indicators'
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Emergency Contacts',
      description: 'Share your ride details with trusted contacts for added safety.',
      details: [
        'Real-time location sharing',
        'Emergency contact alerts',
        'Ride status updates',
        'SOS button integration'
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Live Tracking',
      description: 'Real-time location tracking ensures you always know where you are.',
      details: [
        'GPS tracking',
        'Route monitoring',
        'ETA updates',
        'Location history'
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Safety Alerts',
      description: 'Instant notifications for any safety concerns or unusual activity.',
      details: [
        'Route deviation alerts',
        'Speed monitoring',
        'Emergency notifications',
        'Safety check-ins'
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'Your personal information is protected with enterprise-grade security.',
      details: [
        'End-to-end encryption',
        'GDPR compliance',
        'Secure data storage',
        'Privacy controls'
      ]
    }
  ]

  const safetyTips = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Verify Your Driver',
      description: 'Always check the driver\'s photo, name, and vehicle details before getting in.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Share Your Trip',
      description: 'Let friends and family know about your ride details and expected arrival time.'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Check the Vehicle',
      description: 'Verify the license plate and vehicle model match what\'s shown in the app.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Trust Your Instincts',
      description: 'If something doesn\'t feel right, don\'t hesitate to cancel the ride.'
    }
  ]

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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Safety is Our
            <span className="text-primary-600"> Priority</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We've built comprehensive safety features to ensure every journey is secure, 
            comfortable, and worry-free for all our users.
          </p>
        </div>
      </div>

      {/* Safety Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Safety Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multiple layers of protection to keep you safe on every journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety Tips for Travelers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple guidelines to ensure a safe and enjoyable journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyTips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card bg-red-50 border-red-200">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Support
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you ever feel unsafe or need immediate assistance, we're here to help 24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Button</h3>
                <p className="text-gray-600">Press the SOS button in the app for immediate assistance</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our safety team is available around the clock</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Authorities</h3>
                <p className="text-gray-600">Direct connection to emergency services when needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain high standards to ensure a safe and respectful community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Zero Tolerance Policy</h3>
              <p className="text-gray-600 mb-4">
                We have zero tolerance for harassment, discrimination, or any form of inappropriate behavior.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• No harassment or discrimination</li>
                <li>• No inappropriate behavior</li>
                <li>• No unsafe driving</li>
                <li>• Immediate account suspension for violations</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Reporting System</h3>
              <p className="text-gray-600 mb-4">
                Easy-to-use reporting system for any safety concerns or violations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• In-app reporting</li>
                <li>• Anonymous reporting option</li>
                <li>• Quick response time</li>
                <li>• Follow-up support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Travel with Confidence
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust Carpool for safe and secure journeys.
          </p>
          <Link href="/register" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Get Started Today
          </Link>
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