'use client'

import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Car,
  HelpCircle,
  BookOpen,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function HelpPage() {
  const categories = [
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Getting Started',
      description: 'Learn how to use Carpool for the first time'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety & Security',
      description: 'Information about our safety features'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Account & Profile',
      description: 'Manage your account and profile settings'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Payments & Billing',
      description: 'Questions about payments and subscriptions'
    }
  ]

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Click "Get Started" on our homepage and follow the registration process. You\'ll need to provide your email, phone number, and choose whether you want to be a driver, passenger, or both.'
    },
    {
      question: 'How does ride matching work?',
      answer: 'Our AI-powered system matches drivers and passengers based on route compatibility, preferences, and availability. You can search for rides or post your own trip.'
    },
    {
      question: 'How is the cost calculated?',
      answer: 'Fuel costs are automatically calculated based on distance, current fuel prices, and split equally between all passengers. The app handles all calculations transparently.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'We have user verification, rating systems, emergency contacts, live tracking, and 24/7 safety support. All users are verified and rated by the community.'
    },
    {
      question: 'Can I cancel a ride?',
      answer: 'Yes, you can cancel rides up to 2 hours before departure. Cancellation policies may vary depending on the driver\'s preferences.'
    },
    {
      question: 'How do I report a safety concern?',
      answer: 'Use the in-app reporting feature, email us at safety@carpool.com, or call our emergency line at +1 (555) 999-8888 for immediate assistance.'
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
            How Can We
            <span className="text-primary-600"> Help?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions, learn how to use Carpool, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Help Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the information you need quickly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our support team is here to help you 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="btn-primary">Start Chat</button>
          </div>

          <div className="card text-center">
            <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Call us at +1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Available 24/7</p>
          </div>

          <div className="card text-center">
            <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us an email for detailed help</p>
            <Link href="/contact" className="btn-primary">Send Email</Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who are already sharing rides and making new friends.
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