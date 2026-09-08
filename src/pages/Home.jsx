import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, Award, Users, Briefcase, TrendingUp, House, Building2, Building, Square, Sparkles, FolderKanban } from 'lucide-react'
import Hero from '../components/layout/Hero'
import SectionHeading from '../components/common/SectionHeading'
import PropertyGrid from '../components/property/PropertyGrid'
import LocationCard from '../components/property/LocationCard'
import FeatureCard from '../components/common/FeatureCard'
import TestimonialCard from '../components/common/TestimonialCard'
import CTASection from '../components/common/CTASection'
import Button from '../components/common/Button'
import { properties, getFeaturedProperties } from '../data/properties'
import { locations } from '../data/locations'
import { testimonials, statistics } from '../data/agents'

export default function Home() {
  const [favorites, setFavorites] = useState([])
  const featured = getFeaturedProperties().slice(0, 4)

  const handleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    )
  }

  const categories = [
    {
      title: 'Houses',
      description: 'Browse beautiful family homes',
      Icon: House,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
      link: '/properties?type=House',
    },
    {
      title: 'Apartments',
      description: 'Modern apartment living',
      Icon: Building,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
      link: '/properties?type=Apartment',
    },
    {
      title: 'Commercial',
      description: 'Office & retail spaces',
      Icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      link: '/properties?type=Commercial',
    },
    {
      title: 'Plots',
      description: 'Land & plot listings',
      Icon: Square,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
      link: '/properties?type=Plot',
    },
    {
      title: 'Luxury',
      description: 'Premium luxury properties',
      Icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      link: '/properties?type=Villa',
    },
    {
      title: 'New Projects',
      description: 'Upcoming developments',
      Icon: FolderKanban,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      link: '/projects',
    },
  ]

  const features = [
    {
      icon: ShieldCheck,
      title: 'Verified Listings',
      description: 'All properties are carefully verified to ensure accurate information and legitimate ownership.',
    },
    {
      icon: MapPin,
      title: 'Local Market Expertise',
      description: 'Deep knowledge of Lahore neighborhoods, pricing trends, and market dynamics.',
    },
    {
      icon: Users,
      title: 'Professional Consultants',
      description: 'Experienced property consultants dedicated to understanding your specific needs.',
    },
    {
      icon: Award,
      title: 'Transparent Guidance',
      description: 'Clear, honest communication throughout your property journey with no hidden fees.',
    },
    {
      icon: Briefcase,
      title: 'Personalized Service',
      description: 'Tailored property recommendations based on your preferences and requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Support',
      description: 'Strategic advice for property investment, helping you make informed decisions.',
    },
  ]

  return (
    <>
      <Hero />

      {/* Featured Properties */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <SectionHeading
              title="Featured Properties"
              subtitle="Explore some of our most sought-after properties in Lahore."
              center={false}
            />
            <Link to="/properties" className="hidden md:inline-block">
              <Button variant="outline">View All Properties</Button>
            </Link>
          </div>

          <PropertyGrid properties={featured} favorites={favorites} onFavorite={handleFavorite} columns={4} />

          <div className="md:hidden text-center mt-8">
            <Link to="/properties">
              <Button variant="outline" fullWidth>View All Properties</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            badge="Browse By Type"
            title="Explore Property Categories"
            subtitle="Find the right property type for your needs."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                <Link to={cat.link} className="block relative overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <cat.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{cat.title}</h3>
                    <p className="text-sm text-white/85 mb-3">{cat.description}</p>
                    <span className="text-sm text-accent font-semibold inline-flex items-center gap-1">
                      Explore
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            badge="Our Difference"
            title="Why Choose Lahore Prime Properties?"
            subtitle="Six reasons clients trust us with their property journey."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <FeatureCard key={feature.title} {...feature} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
        </div>
        <div className="relative container-x">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/20 text-accent mb-4">
              Sample Data - For Demonstration Only
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            badge="Locations"
            title="Popular Locations in Lahore"
            subtitle="Discover properties in Lahore's most desirable neighborhoods."
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {locations.map((location) => (
              <LocationCard key={location.name} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Sample testimonials from our demo client database."
          />

          <div className="mt-4 text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
              Demo Testimonials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            subtitle="A simple, transparent process from search to closing."
          />

          <div className="mt-12 relative">
            {/* Vertical line for mobile, horizontal for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200" />
            <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4">
              {[
                { step: '01', title: 'Search', desc: 'Browse listings' },
                { step: '02', title: 'Shortlist', desc: 'Save favorites' },
                { step: '03', title: 'Consultation', desc: 'Get expert advice' },
                { step: '04', title: 'Property Visit', desc: 'See in person' },
                { step: '05', title: 'Documentation', desc: 'Paperwork support' },
                { step: '06', title: 'Closing', desc: 'Finalize the deal' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center"
                >
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-lg md:text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="md:mt-2">
                    <h3 className="font-bold text-primary text-base md:text-lg">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
