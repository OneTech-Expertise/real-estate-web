import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Logo({ size = 'default' }) {
  const sizes = {
    small: { container: 'h-10', text: 'text-lg', icon: 'w-8 h-8' },
    default: { container: 'h-12', text: 'text-xl', icon: 'w-10 h-10' },
    large: { container: 'h-16', text: 'text-2xl', icon: 'w-12 h-12' },
  }

  const s = sizes[size]

  return (
    <Link to="/" className={`flex items-center gap-3 ${s.container}`}>
      <motion.div
        className={`${s.icon} flex items-center justify-center rounded-lg bg-accent`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full p-1.5 text-primary" fill="currentColor">
          <path d="M20 4L6 14v18a4 4 0 0 0 4 4h8v-10h8v10h8a4 4 0 0 0 4-4V14L20 4z"/>
          <rect x="16" y="20" width="8" height="6" rx="1" fill="currentColor" opacity="0.3"/>
        </svg>
      </motion.div>
      <div className="flex flex-col">
        <span className={`font-bold text-primary leading-tight ${s.text}`}>
          Lahore Prime
        </span>
        <span className="text-xs text-muted tracking-wider uppercase">Properties</span>
      </div>
    </Link>
  )
}
