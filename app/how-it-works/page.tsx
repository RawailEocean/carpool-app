'use client'

import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  MessageCircle,
  Shield,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: '1. Find or Post a Ride',
      description: 'Search for available rides or post your own trip to find travel companions.',
      details: [
        'Browse rides by location and date',
        'Post your own ride with details',
        'Set your price and preferences',
        'Choose your travel companions'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '2. Connect with Travelers',
      description: 'Review profiles, ratings, and preferences to find the perfect match.',
      details: [
        'View driver and passenger profiles',
        'Check ratings and reviews',
        'Read ride descriptions',
        'Verify user information'
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '3. Communicate & Coordinate',
      description: 'Use our built-in messaging to coordinate pickup, timing, and details.',
      details: [
        'In-app messaging system',
        'Coordinate pickup location',
        'Share contact information',
        'Discuss ride preferences'
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: '4. Enjoy Your Journey',
      description: 'Meet up and enjoy a shared ride with new friends and cost savings.',
      details: [
        'Meet at agreed location',
        'Share the journey together',
        'Split fuel costs automatically',
        'Build meaningful connections'
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '5. Rate & Review',
      description: 'Rate your experience and help build a trusted community.',
      details: [
        'Rate your travel companion',
        'Leave detailed reviews',
        'Build community trust',
        'Improve future matches'
      ]
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Save Money',
      description: 'Split fuel costs and reduce your transportation expenses.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Stay Safe',
      description: 'Verified users, ratings, and safety features for peace of mind.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Make Friends',
      description: 'Connect with like-minded travelers and build new relationships.'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Go Green',
      description: 'Reduce your carbon footprint by sharing rides.'
    }
  ]

  const safetyFeatures = [
    'User verification and background checks',
    'Real-time location tracking',
    'Emergency contact sharing',
    '24/7 safety support',
    'Rating and review system',
    'Community guidelines enforcement'
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
            How Carpool
            <span className="text-primary-600"> Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how easy it is to find travel companions, share rides, and build meaningful connections 
            while saving money and helping the environment.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Carpool Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Five simple steps to start your journey with new friends
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              <div className={`flex-shrink-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {step.icon}
                </div>
              </div>
              
              <div className={`flex-1 text-center lg:text-left ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Carpool?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just ride-sharing - it's about building communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Safety is Our Priority
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We've built comprehensive safety features to ensure every journey is secure, 
              comfortable, and worry-free for all our users.
            </p>
            <ul className="space-y-3">
              {safetyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="text-center">
              <Shield className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                Every user is verified, every ride is tracked, and every journey is protected 
                by our comprehensive safety system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who are already sharing rides and making new friends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </Link>
            <Link href="/safety" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Learn About Safety
            </Link>
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