import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Modal from './Modal'
import Button from './Button'

export default function SuccessModal({ isOpen, onClose, title = 'Thank You!', message = 'Your submission has been recorded as a demo.' }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="text-center py-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4"
        >
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-muted mb-6">{message}</p>
        <Button onClick={onClose} variant="primary">Close</Button>
      </div>
    </Modal>
  )
}
