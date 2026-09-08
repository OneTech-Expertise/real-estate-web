import { motion } from 'framer-motion'
import { ArrowRight, Home, TrendingUp, Users, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import PropertySearch from '../property/PropertySearch'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] md:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Luxury Property"
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient-strong" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-x w-full pt-20 md:pt-24">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-accent border border-accent/30 backdrop-blur-sm">
              Lahore's Premium Real Estate Consultancy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5"
          >
            Find Your Place.
            <br />
            <span className="text-accent">Build Your Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl"
          >
            Discover premium homes, apartments, commercial spaces, and investment opportunities across Lahore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Link to="/properties">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Explore Properties
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                List Your Property
              </Button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-white"
          >
            {[
              { Icon: Home, label: '500+', sub: 'Demo Listings' },
              { Icon: MapPin, label: '20+', sub: 'Locations' },
              { Icon: Users, label: '15+', sub: 'Sample Consultants' },
              { Icon: TrendingUp, label: '10+', sub: 'Years Experience' },
            ].map(({ Icon, label, sub }) => (
              <div key={sub} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold">{label}</p>
                  <p className="text-xs text-white/70">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Search Panel - fixed visible position */}
      <div className="relative z-20 pb-8 md:pb-10">
        <div className="container-x">
          <PropertySearch />
        </div>
      </div>
    </section>
  )
}
