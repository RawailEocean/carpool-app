'use client'

import { 
  Users, 
  Heart, 
  Globe, 
  Car, 
  Zap,
  Building,
  Award,
  Briefcase
} from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community First',
      description: 'We prioritize building strong, supportive communities.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Human Connection',
      description: 'Technology that brings people together, not apart.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Environmental Impact',
      description: 'Committed to reducing carbon footprint through innovation.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Making transportation accessible for everyone.'
    }
  ]

  const benefits = [
    'Competitive salary and equity',
    'Flexible work arrangements',
    'Health, dental, and vision insurance',
    'Unlimited PTO',
    'Professional development budget',
    'Remote work options',
    'Team building events',
    'Mental health support'
  ]

  const openPositions = [
    {
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful, responsive user interfaces for our carpooling platform.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead product strategy and development for our core features.'
    },
    {
      title: 'Safety Operations Specialist',
      department: 'Safety',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure the safety and security of our community members.'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Develop and execute marketing strategies to grow our user base.'
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
            Join Our
            <span className="text-primary-600"> Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Help us build the future of transportation. We're looking for passionate individuals 
            who want to make a difference in how people travel and connect.
          </p>
          <Link href="#positions" className="btn-primary text-lg px-8 py-3">
            View Open Positions
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're on a mission to transform transportation by making it more social, 
              sustainable, and accessible. Every day, we work to connect people and build 
              communities through shared journeys.
            </p>
            <p className="text-lg text-gray-600">
              As a team member, you'll have the opportunity to impact millions of lives, 
              reduce environmental impact, and build technology that brings people together.
            </p>
          </div>
          <div className="card">
            <div className="text-center">
              <Building className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join Us?</h3>
              <p className="text-gray-600">
                Work on meaningful problems, build products that matter, and be part of a 
                team that's changing how people think about transportation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We take care of our team so you can focus on doing your best work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center">
              <div className="text-primary-600 mb-3 flex justify-center">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-gray-700 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div id="positions" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our team and help shape the future of transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="mr-4">{position.department}</span>
                  <span>{position.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <button className="btn-primary">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Contact Us
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