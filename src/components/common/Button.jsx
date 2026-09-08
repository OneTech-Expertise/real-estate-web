import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  ...props
}) {
  const variants = {
    primary: 'bg-accent text-primary hover:bg-accent-dark font-semibold shadow-sm hover:shadow-md',
    secondary: 'bg-secondary text-white hover:bg-primary',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary',
    ghost: 'text-secondary hover:text-primary hover:bg-gray-100',
    light: 'bg-white text-primary hover:bg-gray-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  const baseStyles = `
    inline-flex items-center justify-center gap-2 rounded-lg
    transition-all duration-200 cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  const content = (
    <>
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: disabled || loading ? 1 : 1.02 }} whileTap={{ scale: disabled || loading ? 1 : 0.98 }}>
        <Link to={disabled ? '#' : to} className={baseStyles} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseStyles}
      {...props}
    >
      {content}
    </motion.button>
  )
}
