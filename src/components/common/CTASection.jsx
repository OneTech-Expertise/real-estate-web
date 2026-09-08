import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'

export default function CTASection({ title, subtitle, primaryLink, primaryLabel, secondaryLink, secondaryLabel }) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
        </div>
      </div>
      <div className="relative container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title || 'Ready to Find Your Next Property?'}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {subtitle || 'Let our property consultants help you explore the right opportunities.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryLink || '/properties'}>
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                {primaryLabel || 'Explore Properties'}
              </Button>
            </Link>
            <Link to={secondaryLink || '/contact'}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                {secondaryLabel || 'Contact Us'}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
