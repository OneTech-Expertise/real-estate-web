import { motion } from 'framer-motion'

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  light = false,
  badge,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-primary'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/80' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
