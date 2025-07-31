'use client'

import { useState, useEffect } from 'react'
import { 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  DollarSign, 
  Car, 
  Plus,
  Filter,
  MessageCircle,
  Star,
  User,
  LogOut,
  X,
  Edit,
  Trash2
} from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

interface Ride {
  id: string
  driver: {
    name: string
    rating: number
    avatar: string
  }
  from: string
  to: string
  date: string
  time: string
  price: number
  availableSeats: number
  vehicle: string
  description: string
}

interface PostedRide {
  id: string
  from: string
  to: string
  date: string
  time: string
  price: number
  seats: number
  vehicle: string
  description: string
  status: 'active' | 'completed' | 'cancelled'
  requests: number
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'search' | 'my-rides' | 'profile'>('search')
  const [fromLocation, setFromLocation] = useState('')
  const [toLocation, setToLocation] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [showPostRideModal, setShowPostRideModal] = useState(false)
  const [postedRides, setPostedRides] = useState<PostedRide[]>([])
  
  // Post ride form state
  const [postRideForm, setPostRideForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    price: '',
    seats: '',
    vehicle: '',
    description: ''
  })

  // Load posted rides from localStorage on component mount
  useEffect(() => {
    const savedRides = localStorage.getItem('postedRides')
    if (savedRides) {
      try {
        const parsedRides = JSON.parse(savedRides)
        setPostedRides(parsedRides)
      } catch (error) {
        console.error('Error loading posted rides from localStorage:', error)
      }
    }
  }, [])

  // Save posted rides to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('postedRides', JSON.stringify(postedRides))
  }, [postedRides])

  // Mock data for demonstration
  const availableRides: Ride[] = [
    {
      id: '1',
      driver: {
        name: 'Sarah Johnson',
        rating: 4.8,
        avatar: '/api/placeholder/40/40'
      },
      from: 'Downtown',
      to: 'Airport',
      date: '2024-01-15',
      time: '08:00',
      price: 25,
      availableSeats: 3,
      vehicle: 'Toyota Camry 2022',
      description: 'Heading to the airport for a business trip. Happy to share the ride and costs!'
    },
    {
      id: '2',
      driver: {
        name: 'Mike Chen',
        rating: 4.9,
        avatar: '/api/placeholder/40/40'
      },
      from: 'University District',
      to: 'Shopping Mall',
      date: '2024-01-15',
      time: '14:30',
      price: 15,
      availableSeats: 2,
      vehicle: 'Honda Civic 2021',
      description: 'Going shopping, would love some company and to split gas costs.'
    },
    {
      id: '3',
      driver: {
        name: 'Emma Davis',
        rating: 4.7,
        avatar: '/api/placeholder/40/40'
      },
      from: 'Suburbs',
      to: 'City Center',
      date: '2024-01-16',
      time: '09:15',
      price: 20,
      availableSeats: 4,
      vehicle: 'Ford Escape 2023',
      description: 'Daily commute to work. Prefer quiet passengers who enjoy good conversation.'
    }
  ]

  const handleSearch = () => {
    if (!fromLocation || !toLocation) {
      toast.error('Please enter both departure and destination locations')
      return
    }
    toast.success('Searching for rides...')
  }

  const handleRequestRide = (rideId: string) => {
    toast.success('Ride request sent! The driver will contact you soon.')
  }

  const handlePostRide = () => {
    if (!postRideForm.from || !postRideForm.to || !postRideForm.date || !postRideForm.time || !postRideForm.price || !postRideForm.seats) {
      toast.error('Please fill in all required fields')
      return
    }
    
    const newRide: PostedRide = {
      id: Date.now().toString(),
      from: postRideForm.from,
      to: postRideForm.to,
      date: postRideForm.date,
      time: postRideForm.time,
      price: parseFloat(postRideForm.price),
      seats: parseInt(postRideForm.seats),
      vehicle: postRideForm.vehicle,
      description: postRideForm.description,
      status: 'active',
      requests: 0
    }
    
    setPostedRides(prev => [newRide, ...prev])
    toast.success('Ride posted successfully!')
    setShowPostRideModal(false)
    
    // Reset form
    setPostRideForm({
      from: '',
      to: '',
      date: '',
      time: '',
      price: '',
      seats: '',
      vehicle: '',
      description: ''
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setPostRideForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDeleteRide = (rideId: string) => {
    setPostedRides(prev => prev.filter(ride => ride.id !== rideId))
    toast.success('Ride deleted successfully!')
  }

  const handleEditRide = (rideId: string) => {
    const ride = postedRides.find(r => r.id === rideId)
    if (ride) {
      setPostRideForm({
        from: ride.from,
        to: ride.to,
        date: ride.date,
        time: ride.time,
        price: ride.price.toString(),
        seats: ride.seats.toString(),
        vehicle: ride.vehicle,
        description: ride.description
      })
      setShowPostRideModal(true)
      // Remove the old ride
      setPostedRides(prev => prev.filter(r => r.id !== rideId))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Carpool</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowPostRideModal(true)}
                className="btn-primary flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Post a Ride
              </button>
              <div className="relative">
                <User className="w-6 h-6 text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Post Ride Modal */}
      {showPostRideModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Post a Ride</h2>
              <button 
                onClick={() => setShowPostRideModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From *</label>
                <input
                  type="text"
                  placeholder="Departure location"
                  value={postRideForm.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  className="input-field"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To *</label>
                <input
                  type="text"
                  placeholder="Destination location"
                  value={postRideForm.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                  <input
                    type="date"
                    value={postRideForm.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                  <input
                    type="time"
                    value={postRideForm.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price per person *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="number"
                      placeholder="0"
                      value={postRideForm.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="input-field pl-8"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available seats *</label>
                  <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="8"
                    value={postRideForm.seats}
                    onChange={(e) => handleInputChange('seats', e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle</label>
                <input
                  type="text"
                  placeholder="e.g., Toyota Camry 2022"
                  value={postRideForm.vehicle}
                  onChange={(e) => handleInputChange('vehicle', e.target.value)}
                  className="input-field"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Tell passengers about your ride..."
                  value={postRideForm.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="input-field"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={handlePostRide}
                  className="flex-1 btn-primary"
                >
                  Post Ride
                </button>
                <button
                  onClick={() => setShowPostRideModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find a Ride</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="From where?"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="To where?"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <button
              onClick={handleSearch}
              className="btn-primary flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-6">
          <button
            onClick={() => setActiveTab('search')}
            className={`pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'search'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Available Rides
          </button>
          <button
            onClick={() => setActiveTab('my-rides')}
            className={`pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'my-rides'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            My Rides ({postedRides.length})
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Profile
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'search' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Available Rides ({availableRides.length})
              </h3>
              <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <Filter className="w-4 h-4 mr-1" />
                Filter
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {availableRides.map((ride) => (
                <div key={ride.id} className="card hover:shadow-lg transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-900">{ride.driver.name}</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{ride.driver.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">${ride.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-medium">{ride.from}</span>
                      <span className="mx-2">→</span>
                      <span className="font-medium">{ride.to}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(ride.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{ride.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Car className="w-4 h-4 mr-2" />
                      <span>{ride.vehicle}</span>
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      <span>{ride.availableSeats} seats available</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{ride.description}</p>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleRequestRide(ride.id)}
                      className="flex-1 btn-primary flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Ride
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'my-rides' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                My Posted Rides ({postedRides.length})
              </h3>
              <button 
                onClick={() => setShowPostRideModal(true)}
                className="btn-primary flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Post New Ride
              </button>
            </div>

            {postedRides.length === 0 ? (
              <div className="card">
                <div className="text-center py-8">
                  <Car className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">You haven't posted any rides yet.</p>
                  <button 
                    onClick={() => setShowPostRideModal(true)}
                    className="btn-primary mt-4"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Post Your First Ride
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {postedRides.map((ride) => (
                  <div key={ride.id} className="card hover:shadow-lg transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Your Ride</h4>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          ride.status === 'active' ? 'bg-green-100 text-green-800' :
                          ride.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">${ride.price}</div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-medium">{ride.from}</span>
                        <span className="mx-2">→</span>
                        <span className="font-medium">{ride.to}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(ride.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        <span>{ride.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Car className="w-4 h-4 mr-2" />
                        <span>{ride.vehicle || 'Vehicle not specified'}</span>
                        <Users className="w-4 h-4 ml-4 mr-2" />
                        <span>{ride.seats} seats available</span>
                      </div>
                    </div>

                    {ride.description && (
                      <p className="text-sm text-gray-600 mb-4">{ride.description}</p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <MessageCircle className="w-4 h-4 inline mr-1" />
                        {ride.requests} requests
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditRide(ride.id)}
                          className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteRide(ride.id)}
                          className="px-3 py-1 text-sm border border-red-300 rounded text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">John Doe</h4>
                  <p className="text-gray-600">john.doe@example.com</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.9 (23 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="input-field" defaultValue="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle</label>
                  <input type="text" className="input-field" defaultValue="Toyota Camry 2020" />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button className="btn-primary">Save Changes</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 