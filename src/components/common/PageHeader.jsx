import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumb, image }) {
  const defaultImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80'

  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image || defaultImage}
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient-strong" />
      </div>
      <div className="relative container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {breadcrumb && (
            <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
              {breadcrumb.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {item.to ? (
                    <Link to={item.to} className="hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                  {idx < breadcrumb.length - 1 && <ChevronRight className="w-4 h-4" />}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/80">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
