import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

export default function AgentCard({ agent }) {
  const whatsappLink = `https://wa.me/${agent.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello, I would like to inquire about a property.`)}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 text-center"
    >
      <div className="p-6">
        <div className="relative w-28 h-28 mx-auto mb-4">
          <img
            src={agent.image}
            alt={agent.name}
            loading="lazy"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-2">
          Demo Profile
        </span>
        <h3 className="text-lg font-bold text-primary mb-1">{agent.name}</h3>
        <p className="text-sm text-muted mb-3">{agent.role}</p>
        <p className="text-xs text-muted mb-4 line-clamp-2">{agent.bio}</p>

        <div className="flex items-center justify-center gap-2">
          <a
            href={`tel:${agent.phone}`}
            className="p-2 rounded-lg bg-gray-100 text-secondary hover:bg-accent hover:text-primary transition-colors"
            aria-label={`Call ${agent.name}`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="p-2 rounded-lg bg-gray-100 text-secondary hover:bg-accent hover:text-primary transition-colors"
            aria-label={`Email ${agent.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-100 text-secondary hover:bg-[#25D366] hover:text-white transition-colors"
            aria-label={`WhatsApp ${agent.name}`}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
