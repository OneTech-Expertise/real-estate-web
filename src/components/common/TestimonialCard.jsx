import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
    >
      <Quote className="absolute top-4 right-4 w-10 h-10 text-accent/15" />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <Star key={idx} className="w-4 h-4 text-accent fill-accent" />
        ))}
      </div>

      <p className="text-secondary leading-relaxed mb-5 italic">"{testimonial.text}"</p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  )
}
