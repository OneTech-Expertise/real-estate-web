import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button'

export default function PropertyFilters({ filters, setFilters, isOpen, onClose, onReset, purposeDefault = '' }) {
  const [localFilters, setLocalFilters] = useState(filters)

  useEffect(() => {
    setLocalFilters(filters)
  }, [filters])

  const handleApply = () => {
    setFilters(localFilters)
    onClose()
  }

  const handleReset = () => {
    const reset = { purpose: purposeDefault, type: '', location: '', minPrice: '', maxPrice: '', bedrooms: '', bathrooms: '', area: '', furnished: '', featured: '' }
    setLocalFilters(reset)
    onReset?.()
  }

  const FilterContent = () => (
    <div className="space-y-5">
      {/* Purpose */}
      <div>
        <label className="block text-sm font-semibold text-primary mb-2">Property Purpose</label>
        <select
          value={localFilters.purpose}
          onChange={(e) => setLocalFilters({ ...localFilters, purpose: e.target.value })}
          className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
        >
          <option value="">Any</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
        </select>
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-semibold text-primary mb-2">Property Type</label>
        <select
          value={localFilters.type}
          onChange={(e) => setLocalFilters({ ...localFilters, type: e.target.value })}
          className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
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
        <label className="block text-sm font-semibold text-primary mb-2">Location</label>
        <select
          value={localFilters.location}
          onChange={(e) => setLocalFilters({ ...localFilters, location: e.target.value })}
          className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
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
          <option value="Askari">Askari</option>
          <option value="Raiwind Road">Raiwind Road</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Min Price</label>
          <input
            type="number"
            placeholder="Min"
            value={localFilters.minPrice}
            onChange={(e) => setLocalFilters({ ...localFilters, minPrice: e.target.value })}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Max Price</label>
          <input
            type="number"
            placeholder="Max"
            value={localFilters.maxPrice}
            onChange={(e) => setLocalFilters({ ...localFilters, maxPrice: e.target.value })}
            className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-sm font-semibold text-primary mb-2">Bedrooms</label>
        <div className="grid grid-cols-5 gap-2">
          {['', '1', '2', '3', '4'].map((b) => (
            <button
              key={b || 'any'}
              type="button"
              onClick={() => setLocalFilters({ ...localFilters, bedrooms: b })}
              className={`py-2 text-sm rounded-lg border transition-all ${
                localFilters.bedrooms === b
                  ? 'bg-accent text-primary border-accent font-semibold'
                  : 'bg-white text-secondary border-gray-200 hover:border-accent'
              }`}
            >
              {b ? `${b}+` : 'Any'}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <label className="block text-sm font-semibold text-primary mb-2">Bathrooms</label>
        <div className="grid grid-cols-4 gap-2">
          {['', '1', '2', '3'].map((b) => (
            <button
              key={b || 'any'}
              type="button"
              onClick={() => setLocalFilters({ ...localFilters, bathrooms: b })}
              className={`py-2 text-sm rounded-lg border transition-all ${
                localFilters.bathrooms === b
                  ? 'bg-accent text-primary border-accent font-semibold'
                  : 'bg-white text-secondary border-gray-200 hover:border-accent'
              }`}
            >
              {b ? `${b}+` : 'Any'}
            </button>
          ))}
        </div>
      </div>

      {/* Furnished */}
      <div>
        <label className="block text-sm font-semibold text-primary mb-2">Furnished</label>
        <select
          value={localFilters.furnished}
          onChange={(e) => setLocalFilters({ ...localFilters, furnished: e.target.value })}
          className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
        >
          <option value="">Any</option>
          <option value="true">Furnished</option>
          <option value="false">Unfurnished</option>
        </select>
      </div>

      {/* Featured */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={localFilters.featured === 'true'}
            onChange={(e) => setLocalFilters({ ...localFilters, featured: e.target.checked ? 'true' : '' })}
            className="w-4 h-4 text-accent focus:ring-accent border-gray-300 rounded"
          />
          <span className="text-sm font-medium text-secondary">Featured Only</span>
        </label>
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <Button variant="outline" onClick={handleReset} fullWidth>
          Reset
        </Button>
        <Button onClick={handleApply} fullWidth>
          Apply
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-24 bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
        <h3 className="text-lg font-bold text-primary mb-4">Filters</h3>
        <FilterContent />
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-primary/70 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Filters</h3>
                  <button
                    onClick={onClose}
                    aria-label="Close filters"
                    className="p-2 text-muted hover:text-primary rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
