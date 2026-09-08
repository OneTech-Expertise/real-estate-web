import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-20">
      <div className="container-x py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          {/* 404 Display */}
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-[150px] md:text-[200px] font-bold text-gray-100 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl md:text-6xl">🏠</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Property Not Found
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            The property you are looking for may have been moved, sold, or is unavailable in this demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/properties">
              <Button icon={Search}>Browse Properties</Button>
            </Link>
            <Link to="/">
              <Button variant="outline" icon={Home}>Back to Home</Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-muted mb-4">Or explore these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: 'Buy Properties', to: '/buy' },
                { label: 'Rent Properties', to: '/rent' },
                { label: 'New Projects', to: '/projects' },
                { label: 'Contact Us', to: '/contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-sm bg-gray-100 text-secondary rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
