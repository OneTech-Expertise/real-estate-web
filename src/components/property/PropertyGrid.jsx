import PropertyCard from './PropertyCard'

export default function PropertyGrid({ properties, favorites, onFavorite, columns = 4 }) {
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-primary mb-2">No Properties Found</h3>
        <p className="text-muted">Try adjusting your search filters to see more results.</p>
      </div>
    )
  }

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-5 md:gap-6`}>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites?.includes(property.id)}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  )
}
