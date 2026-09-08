import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Check, Send, Mail, Phone, Building, Sparkles, Calendar, Home } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import PropertyInquiryForm from '../components/forms/PropertyInquiryForm'
import Modal from '../components/common/Modal'
import Button from '../components/common/Button'
import { getProjectBySlug, projects } from '../data/projects'
import CTASection from '../components/common/CTASection'

export default function ProjectDetails() {
  const { projectSlug } = useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(projectSlug)
  const [showInquiry, setShowInquiry] = useState(false)

  if (!project) {
    return (
      <>
        <PageHeader title="Project Not Found" subtitle="The project you're looking for may not exist in this demo." />
        <section className="py-16 text-center container-x">
          <p className="text-muted mb-6">Please explore our available projects.</p>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </section>
      </>
    )
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <>
      <PageHeader
        title={project.name}
        subtitle={project.location}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: project.name },
        ]}
        image={project.image}
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> This project page is fictional and for demonstration purposes only. Pricing, amenities, and availability shown are sample data.
          </p>
        </div>
      </div>

      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Status & Quick Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
                    project.status === 'Available' ? 'bg-green-100 text-green-800' :
                    project.status === 'Under Development' ? 'bg-amber-100 text-amber-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-primary mb-3">Project Overview</h2>
                <p className="text-secondary leading-relaxed mb-4">{project.description}</p>
                <p className="text-secondary leading-relaxed">{project.overview}</p>
              </div>

              {/* Image Gallery */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4">Project Gallery</h2>
                <div className="grid grid-cols-2 gap-3">
                  {project.images.slice(0, 4).map((img, idx) => (
                    <div key={idx} className={`overflow-hidden rounded-lg ${idx === 0 ? 'col-span-2' : ''}`}>
                      <img
                        src={img}
                        alt={`${project.name} - Image ${idx + 1}`}
                        loading="lazy"
                        className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${idx === 0 ? 'aspect-[2/1]' : 'aspect-square'}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4">Project Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-secondary">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-secondary">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Types */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4">Available Property Types</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.propertySizes.map((size) => (
                    <div key={size} className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-lg">
                      <Home className="w-4 h-4 text-accent" />
                      <span className="text-sm text-secondary">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Plan Placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4">Payment Plan</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> This is a demo project. Detailed payment plans should be obtained directly from the developer or authorized sales office.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Project Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-sm text-muted mb-1">Starting From</p>
                  <p className="text-3xl font-bold text-accent mb-4">{project.startingPrice}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-secondary">
                      <Building className="w-4 h-4 text-accent" />
                      {project.propertyTypes.join(', ')}
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <MapPin className="w-4 h-4 text-accent" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <Calendar className="w-4 h-4 text-accent" />
                      {project.status}
                    </div>
                  </div>
                  <Button onClick={() => setShowInquiry(true)} fullWidth>
                    Inquire About Project
                  </Button>
                </div>

                {/* Inquiry Card */}
                <div className="bg-primary rounded-xl p-6 text-white">
                  <h3 className="font-bold mb-3">Get More Information</h3>
                  <p className="text-sm text-white/80 mb-4">Contact us for brochures, floor plans, and pricing details.</p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+923001234567" className="flex items-center gap-2 text-white/90 hover:text-accent">
                      <Phone className="w-4 h-4" />
                      +92 300 1234567
                    </a>
                    <a href="mailto:hello@lahoreprimeproperties-demo.com" className="flex items-center gap-2 text-white/90 hover:text-accent">
                      <Mail className="w-4 h-4" />
                      hello@lahoreprimeproperties-demo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <Link key={p.id} to={`/projects/${p.slug}`} className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover img-zoom" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-primary">{p.name}</h3>
                      <p className="text-sm text-muted flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {p.location}
                      </p>
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
      <Modal isOpen={showInquiry} onClose={() => setShowInquiry(false)} title="Inquire About This Project">
        <PropertyInquiryForm propertyTitle={project.name} />
      </Modal>
    </>
  )
}
