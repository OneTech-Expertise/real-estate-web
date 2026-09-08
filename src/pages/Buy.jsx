import { useState, useMemo } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import PropertyGrid from '../components/property/PropertyGrid'
import PropertyFilters from '../components/property/PropertyFilters'
import Button from '../components/common/Button'
import { properties } from '../data/properties'

export default function Buy() {
  const [favorites, setFavorites] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  const [filters, setFilters] = useState({
    purpose: 'Buy',
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    furnished: '',
    featured: '',
  })

  const filteredProperties = useMemo(() => {
    let result = properties.filter((p) => p.purpose === 'Buy')

    if (filters.type) result = result.filter((p) => p.type === filters.type)
    if (filters.location) result = result.filter((p) => p.location.toLowerCase().includes(filters.location.toLowerCase()))
    if (filters.minPrice) result = result.filter((p) => p.price >= Number(filters.minPrice))
    if (filters.maxPrice) result = result.filter((p) => p.price <= Number(filters.maxPrice))
    if (filters.bedrooms) result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms))
    if (filters.featured === 'true') result = result.filter((p) => p.featured)

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price); break
      case 'price-high':
        result.sort((a, b) => b.price - a.price); break
      default:
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    }
    return result
  }, [filters, sortBy])

  const handleFavorite = (id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id])
  }

  const resetFilters = () => {
    setFilters({ purpose: 'Buy', type: '', location: '', minPrice: '', maxPrice: '', bedrooms: '', bathrooms: '', area: '', furnished: '', featured: '' })
  }

  return (
    <>
      <PageHeader
        title="Properties for Sale"
        subtitle="Find your dream home from our collection of premium properties for sale in Lahore."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Buy' }]}
      />

      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row gap-8">
            <PropertyFilters
              filters={filters}
              setFilters={setFilters}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
              onReset={resetFilters}
              purposeDefault="Buy"
            />

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-accent transition-colors"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </button>
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-primary">{filteredProperties.length}</span> properties for sale
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
                </select>
              </div>

              {filteredProperties.length > 0 ? (
                <PropertyGrid properties={filteredProperties} favorites={favorites} onFavorite={handleFavorite} columns={3} />
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-primary mb-2">No Properties Found</h3>
                  <p className="text-muted mb-6">Try adjusting your search filters.</p>
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
