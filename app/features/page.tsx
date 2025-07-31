'use client'

import { 
  Users, 
  DollarSign, 
  Shield, 
  Clock, 
  MapPin, 
  MessageCircle, 
  Star, 
  Car, 
  Smartphone,
  Globe,
  Heart,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Find Companionship',
      description: 'Connect with fellow travelers and enjoy the journey together. Make new friends while traveling.',
      details: [
        'Match with compatible travelers',
        'Build meaningful connections',
        'Share stories and experiences',
        'Create lasting friendships'
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Split Fuel Costs',
      description: 'Automatically calculate and split fuel costs between passengers. Save money while traveling.',
      details: [
        'Automatic cost calculation',
        'Fair split between passengers',
        'Transparent pricing',
        'No hidden fees'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Verified',
      description: 'All users are verified and rated for your safety and peace of mind.',
      details: [
        'User verification system',
        'Rating and review system',
        'Background checks',
        'Emergency contacts'
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Post rides in advance or find last-minute travel companions.',
      details: [
        'Advance booking',
        'Last-minute rides',
        'Flexible departure times',
        'Route customization'
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Smart Matching',
      description: 'AI-powered matching system connects you with the perfect travel companions.',
      details: [
        'Route-based matching',
        'Preference alignment',
        'Compatibility scoring',
        'Real-time availability'
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Real-time Chat',
      description: 'Communicate with your travel companions before and during the journey.',
      details: [
        'In-app messaging',
        'Voice messages',
        'Location sharing',
        'Ride coordination'
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Rating System',
      description: 'Rate and review your travel companions to build a trusted community.',
      details: [
        'Driver ratings',
        'Passenger ratings',
        'Detailed reviews',
        'Community trust'
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Vehicle Information',
      description: 'Get detailed information about vehicles and available seats.',
      details: [
        'Vehicle details',
        'Seat availability',
        'Comfort features',
        'Safety features'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App',
      description: 'Access all features on the go with our mobile-optimized platform.',
      details: [
        'Responsive design',
        'Push notifications',
        'GPS integration',
        'Offline capabilities'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Community',
      description: 'Join a worldwide community of travelers and drivers.',
      details: [
        'Multi-language support',
        'Global coverage',
        'Cultural exchange',
        'International travel'
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint by sharing rides and reducing vehicles on the road.',
      details: [
        'Carbon footprint reduction',
        'Environmental impact tracking',
        'Green travel options',
        'Sustainability goals'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Booking',
      description: 'Book rides instantly with our streamlined booking process.',
      details: [
        'One-click booking',
        'Instant confirmation',
        'Payment integration',
        'Booking management'
      ]
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
            Powerful Features for
            <span className="text-primary-600"> Modern Carpooling</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover all the features that make Carpool the perfect platform for shared rides, 
            cost-sharing, and building meaningful connections on the road.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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

      {/* CTA Section */}
      <div className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who are already enjoying these amazing features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
              View Pricing
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