import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square, Car, Check, Phone, Mail, MessageCircle, Share2, ArrowLeft, Heart } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import PropertyGallery from '../components/property/PropertyGallery'
import PropertyInquiryForm from '../components/forms/PropertyInquiryForm'
import CTASection from '../components/common/CTASection'
import Button from '../components/common/Button'
import Modal from '../components/common/Modal'
import { getPropertyBySlug, properties } from '../data/properties'
import { getAgentById } from '../data/agents'
import { siteConfig } from '../data/siteConfig'

export default function PropertyDetails() {
  const { propertySlug } = useParams()
  const navigate = useNavigate()
  const property = getPropertyBySlug(propertySlug)
  const [showInquiry, setShowInquiry] = useState(false)
  const [favorited, setFavorited] = useState(false)

  if (!property) {
    return (
      <>
        <PageHeader title="Property Not Found" subtitle="The property you're looking for may have been moved or is unavailable." />
        <section className="py-16 text-center container-x">
          <p className="text-muted mb-6">This is a demo website. Please browse our available properties.</p>
          <Button onClick={() => navigate('/properties')}>Back to Properties</Button>
        </section>
      </>
    )
  }

  const agent = getAgentById(property.agent)
  const whatsappLink = `https://wa.me/${agent?.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello, I am interested in ${property.title} (${property.priceLabel}).`)}`

  const relatedProperties = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.location === property.location))
    .slice(0, 3)

  return (
    <>
      <PageHeader
        title={property.title}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Properties', to: '/properties' },
          { label: property.type },
          { label: property.title },
        ]}
        image={property.images[0]}
      />

      <section className="py-10 md:py-14">
        <div className="container-x">
          {/* Demo Notice */}
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Demo Notice:</strong> This property listing is fictional and for demonstration purposes only. Contact information shown is sample data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <PropertyGallery images={property.images} title={property.title} />

              {/* Quick Info */}
              <div className="flex flex-wrap gap-3">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <Bed className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{property.bedrooms}</span>
                    <span className="text-muted text-sm">Beds</span>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <Bath className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{property.bathrooms}</span>
                    <span className="text-muted text-sm">Baths</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <Square className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{property.area}</span>
                </div>
                {property.parking > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <Car className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{property.parking}</span>
                    <span className="text-muted text-sm">Parking</span>
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-sm text-muted">Purpose</span>
                    <p className="font-semibold text-primary">{property.purpose === 'Buy' ? 'For Sale' : 'For Rent'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted">Type</span>
                    <p className="font-semibold text-primary">{property.type}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted">Location</span>
                    <div className="flex items-center gap-1 text-primary">
                      <MapPin className="w-4 h-4 text-accent" />
                      <p className="font-semibold">{property.location}</p>
                    </div>
                  </div>
                  {property.furnished && (
                    <div>
                      <span className="text-sm text-muted">Status</span>
                      <p className="font-semibold text-primary">Furnished</p>
                    </div>
                  )}
                </div>

                <h2 className="text-xl font-bold text-primary mb-4">Description</h2>
                <p className="text-secondary leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {property.nearby && (
                  <>
                    <h3 className="text-lg font-semibold text-primary mt-6 mb-3">Nearby</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.nearby.map((item) => (
                        <span key={item} className="px-3 py-1.5 bg-gray-100 text-secondary text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Price Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-sm text-muted mb-1">Price</p>
                  <p className="text-3xl font-bold text-accent mb-4">{property.priceLabel}</p>
                  <div className="space-y-2">
                    <Button onClick={() => setShowInquiry(true)} fullWidth>
                      Schedule a Visit
                    </Button>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" fullWidth icon={MessageCircle}>
                        Contact via WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Agent Card */}
                {agent && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-primary mb-4">Contact Agent</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <img src={agent.image} alt={agent.name} className="w-16 h-16 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-primary">{agent.name}</p>
                        <p className="text-sm text-muted">{agent.role}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-amber-100 text-amber-800 rounded-full">Demo Profile</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-secondary hover:text-accent">
                        <Phone className="w-4 h-4" />
                        {agent.phone}
                      </a>
                      <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-secondary hover:text-accent">
                        <Mail className="w-4 h-4" />
                        {agent.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Related Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProperties.map((p) => (
                  <Link key={p.id} to={`/properties/${p.slug}`} className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.images[0]} alt={p.title} loading="lazy" className="w-full h-full object-cover img-zoom" />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-accent font-medium">{p.type}</p>
                      <h3 className="font-bold text-primary mt-1">{p.title}</h3>
                      <p className="text-sm text-muted flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {p.location}
                      </p>
                      <p className="text-lg font-bold text-accent mt-2">{p.priceLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />

      {/* Inquiry Modal */}
      <Modal isOpen={showInquiry} onClose={() => setShowInquiry(false)} title="Request Property Details">
        <PropertyInquiryForm propertyTitle={property.title} />
      </Modal>
    </>
  )
}
