import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../common/Logo'
import Button from '../common/Button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties', hasDropdown: true },
  { label: 'Buy', to: '/buy' },
  { label: 'Rent', to: '/rent' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const propertyLinks = [
  { label: 'All Properties', to: '/properties' },
  { label: 'Buy Property', to: '/buy' },
  { label: 'Rent Property', to: '/rent' },
  { label: 'New Projects', to: '/projects' },
  { label: 'Sell Property', to: '/sell' },
  { label: 'Property Valuation', to: '/valuation' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsPropertiesOpen(false)
  }, [location])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsPropertiesOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-md shadow-sm py-4'
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Logo size={isScrolled ? 'small' : 'default'} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.to} className="relative">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname.startsWith('/properties') || location.pathname.startsWith('/buy') || location.pathname.startsWith('/rent')
                        ? 'text-accent'
                        : isScrolled ? 'text-secondary hover:text-primary' : 'text-secondary hover:text-primary'
                    }`}
                    onMouseEnter={() => setIsPropertiesOpen(true)}
                    onMouseLeave={() => setIsPropertiesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === link.to
                        ? 'text-accent'
                        : isScrolled ? 'text-secondary hover:text-primary' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isPropertiesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsPropertiesOpen(true)}
                        onMouseLeave={() => setIsPropertiesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {propertyLinks.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block px-4 py-2.5 text-sm text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button to="/sell" size="sm">
              List Your Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary hover:bg-gray-100' : 'text-primary hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-8">
                  <Logo size="small" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-muted hover:text-primary rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.to}>
                      <Link
                        to={link.to}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          location.pathname === link.to
                            ? 'bg-accent/10 text-accent'
                            : 'text-secondary hover:bg-gray-50 hover:text-primary'
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.hasDropdown && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                          {propertyLinks.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className={`block py-2 text-sm rounded-lg transition-colors ${
                                location.pathname === item.to
                                  ? 'text-accent font-medium'
                                  : 'text-muted hover:text-primary'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button to="/sell" fullWidth>
                    List Your Property
                  </Button>
                </div>
                <div className="mt-6 space-y-3">
                  <Link to="/contact" className="block text-sm text-muted hover:text-primary">
                    Contact Us
                  </Link>
                  <Link to="/faq" className="block text-sm text-muted hover:text-primary">
                    FAQ
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
