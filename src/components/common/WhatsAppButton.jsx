import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

export default function WhatsAppButton() {
  const phoneNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')
  const message = encodeURIComponent(siteConfig.whatsappMessage)
  const link = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 flex items-center justify-center w-14 h-14 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contact on WhatsApp</span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping" aria-hidden="true" />
    </motion.a>
  )
}
