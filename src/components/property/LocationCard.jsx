import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

export default function LocationCard({ location }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/properties?location=${encodeURIComponent(location.name)}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={location.image}
            alt={location.name}
            loading="lazy"
            className="w-full h-full object-cover img-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="flex items-center gap-1.5 text-accent mb-1.5">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">{location.propertyCount} Properties</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
            {location.name}
          </h3>
          <p className="text-sm text-white/80 mb-3 line-clamp-2">{location.description}</p>
          <div className="flex items-center gap-1.5 text-sm text-accent font-semibold">
            Explore
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
