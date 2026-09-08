import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react'
import Button from '../common/Button'

export default function PropertySearch({ compact = false }) {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    purpose: '',
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, val]) => {
      if (val) params.append(key, val)
    })
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`bg-white rounded-2xl shadow-2xl p-4 md:p-8`}
    >
      <div className={`grid gap-3 md:gap-4 ${
        compact
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-6'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6'
      }`}>
        {/* Purpose */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5">Purpose</label>
          <select
            value={filters.purpose}
            onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="">Buy / Rent</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5">Type</label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="">All Types</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
            <option value="Plot">Plot</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5">Location</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="">All Locations</option>
            <option value="DHA Lahore">DHA Lahore</option>
            <option value="Bahria Town Lahore">Bahria Town</option>
            <option value="Gulberg">Gulberg</option>
            <option value="Model Town">Model Town</option>
            <option value="Johar Town">Johar Town</option>
            <option value="Wapda Town">Wapda Town</option>
            <option value="Garden Town">Garden Town</option>
            <option value="Cantt">Cantt</option>
            <option value="Lake City">Lake City</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5">Price Range</label>
          <select
            value={`${filters.minPrice}-${filters.maxPrice}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-')
              setFilters({ ...filters, minPrice: min, maxPrice: max })
            }}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="-">Any Price</option>
            <option value="0-5000000">Under 50 Lakh</option>
            <option value="5000000-10000000">50 Lakh - 1 Crore</option>
            <option value="10000000-30000000">1 - 3 Crore</option>
            <option value="30000000-50000000">3 - 5 Crore</option>
            <option value="50000000-100000000">5 - 10 Crore</option>
            <option value="100000000-">Above 10 Crore</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button type="submit" fullWidth className="h-[44px]">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>
    </motion.form>
  )
}
