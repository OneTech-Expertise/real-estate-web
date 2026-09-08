import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, Grid, List } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import PropertyGrid from '../components/property/PropertyGrid'
import PropertyFilters from '../components/property/PropertyFilters'
import Button from '../components/common/Button'
import { properties } from '../data/properties'

export default function Properties() {
  const [searchParams] = useSearchParams()
  const [favorites, setFavorites] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  const [filters, setFilters] = useState({
    purpose: searchParams.get('purpose') || '',
    type: searchParams.get('type') || '',
    location: searchParams.get('location') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: '',
    area: '',
    furnished: '',
    featured: '',
  })

  const filteredProperties = useMemo(() => {
    let result = [...properties]

    if (filters.purpose) result = result.filter((p) => p.purpose === filters.purpose)
    if (filters.type) result = result.filter((p) => p.type === filters.type)
    if (filters.location) result = result.filter((p) => p.location.toLowerCase().includes(filters.location.toLowerCase()))
    if (filters.minPrice) result = result.filter((p) => p.price >= Number(filters.minPrice))
    if (filters.maxPrice) result = result.filter((p) => p.price <= Number(filters.maxPrice))
    if (filters.bedrooms) result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms))
    if (filters.featured === 'true') result = result.filter((p) => p.featured)

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'area':
        result.sort((a, b) => {
          const aNum = parseInt(a.area.replace(/[^0-9]/g, ''))
          const bNum = parseInt(b.area.replace(/[^0-9]/g, ''))
          return bNum - aNum
        })
        break
      default:
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    }

    return result
  }, [filters, sortBy])

  const handleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    )
  }

  const resetFilters = () => {
    setFilters({ purpose: '', type: '', location: '', minPrice: '', maxPrice: '', bedrooms: '', bathrooms: '', area: '', furnished: '', featured: '' })
  }

  const hasActiveFilters = Object.values(filters).some((v) => v !== '')

  return (
    <>
      <PageHeader
        title="All Properties"
        subtitle="Browse our complete collection of properties across Lahore."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Properties' }]}
      />

      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <PropertyFilters
              filters={filters}
              setFilters={setFilters}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
              onReset={resetFilters}
            />

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-accent transition-colors"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                    {hasActiveFilters && (
                      <span className="w-5 h-5 rounded-full bg-accent text-primary text-xs flex items-center justify-center font-semibold">
                        {Object.values(filters).filter(Boolean).length}
                      </span>
                    )}
                  </button>
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-primary">{filteredProperties.length}</span> properties found
                  </p>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="area">Largest Area</option>
                </select>
              </div>

              {/* Active Filters Tags */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.entries(filters).map(([key, val]) => {
                    if (!val) return null
                    return (
                      <button
                        key={key}
                        onClick={() => setFilters((prev) => ({ ...prev, [key]: '' }))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors"
                      >
                        {val}
                        <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-xs">×</span>
                      </button>
                    )
                  })}
                  <button
                    onClick={resetFilters}
                    className="px-3 py-1.5 text-sm text-muted hover:text-primary transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Property Grid */}
              {filteredProperties.length > 0 ? (
                <PropertyGrid properties={filteredProperties} favorites={favorites} onFavorite={handleFavorite} columns={3} />
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-primary mb-2">No Properties Found</h3>
                  <p className="text-muted mb-6">Try adjusting your search filters to see more results.</p>
                  <Button onClick={resetFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
