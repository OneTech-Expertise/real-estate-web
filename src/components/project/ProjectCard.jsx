import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

const statusColors = {
  'Available': 'bg-green-100 text-green-800',
  'Under Development': 'bg-amber-100 text-amber-800',
  'Launching Soon': 'bg-blue-100 text-blue-800',
}

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

        {/* Status Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold rounded-full ${statusColors[project.status] || 'bg-gray-100 text-gray-800'}`}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-muted mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{project.location}</span>
        </div>

        <Link to={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
            {project.name}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.propertyTypes.map((type) => (
            <span key={type} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-secondary rounded-full">
              {type}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-muted">Starting from</p>
            <p className="text-lg font-bold text-accent">{project.startingPrice}</p>
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            View Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
