import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import Logo from '../common/Logo'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-md">
              {siteConfig.description}
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/agents" className="text-white/70 hover:text-accent transition-colors">Agents</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/sell" className="text-white/70 hover:text-accent transition-colors">Sell Property</Link></li>
              <li><Link to="/valuation" className="text-white/70 hover:text-accent transition-colors">Property Valuation</Link></li>
            </ul>
          </div>

          {/* Properties Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Properties</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/buy" className="text-white/70 hover:text-accent transition-colors">Buy</Link></li>
              <li><Link to="/rent" className="text-white/70 hover:text-accent transition-colors">Rent</Link></li>
              <li><Link to="/properties?type=House" className="text-white/70 hover:text-accent transition-colors">Houses</Link></li>
              <li><Link to="/properties?type=Apartment" className="text-white/70 hover:text-accent transition-colors">Apartments</Link></li>
              <li><Link to="/properties?type=Commercial" className="text-white/70 hover:text-accent transition-colors">Commercial</Link></li>
              <li><Link to="/properties?type=Plot" className="text-white/70 hover:text-accent transition-colors">Plots</Link></li>
            </ul>
          </div>

          {/* Locations & Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Locations</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li><Link to="/properties?location=DHA Lahore" className="text-white/70 hover:text-accent transition-colors">DHA</Link></li>
              <li><Link to="/properties?location=Gulberg" className="text-white/70 hover:text-accent transition-colors">Gulberg</Link></li>
              <li><Link to="/properties?location=Bahria Town Lahore" className="text-white/70 hover:text-accent transition-colors">Bahria Town</Link></li>
              <li><Link to="/properties?location=Model Town" className="text-white/70 hover:text-accent transition-colors">Model Town</Link></li>
              <li><Link to="/properties?location=Johar Town" className="text-white/70 hover:text-accent transition-colors">Johar Town</Link></li>
            </ul>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-accent transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-white/40">Demo website - all content is fictional.</span>
          </p>
          <div className="flex items-center gap-2">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Youtube, label: 'YouTube' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
