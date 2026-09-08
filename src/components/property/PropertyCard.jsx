import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Bed, Bath, Square, MapPin, Eye } from 'lucide-react'

export default function PropertyCard({ property, onFavorite, isFavorite = false }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[currentImage]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover img-zoom"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {property.featured && (
            <span className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            property.purpose === 'Buy' ? 'bg-primary text-white' : 'bg-blue-600 text-white'
          }`}>
            For {property.purpose}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            onFavorite?.(property.id)
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-muted hover:text-red-500 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Image Dots (if multiple images) */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {property.images.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentImage(idx)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5">
        {/* Type Badge */}
        <span className="text-xs font-medium text-accent uppercase tracking-wide">
          {property.type}
        </span>

        {/* Title */}
        <Link to={`/properties/${property.slug}`}>
          <h3 className="mt-1.5 text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-1.5 mt-2 text-muted">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">{property.location}</span>
        </div>

        {/* Property Features */}
        <div className="flex items-center gap-4 mt-3 text-sm text-muted">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4" />
            <span className="truncate">{property.area}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <p className="text-lg font-bold text-accent">{property.priceLabel}</p>
          <Link
            to={`/properties/${property.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <Eye className="w-4 h-4" />
            View
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
