import { useState } from 'react'
import Button from '../common/Button'
import SuccessModal from '../common/SuccessModal'

export default function ListingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    purpose: '',
    location: '',
    area: '',
    price: '',
    description: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.propertyType) newErrors.propertyType = 'Required'
    if (!formData.purpose) newErrors.purpose = 'Required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.price.trim()) newErrors.price = 'Price is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setShowSuccess(true)
    setFormData({ name: '', email: '', phone: '', propertyType: '', purpose: '', location: '', area: '', price: '', description: '' })
  }

  const inputClass = (field) => `
    w-full px-4 py-3 text-sm bg-gray-50 border rounded-lg outline-none transition-all
    ${errors[field] ? 'border-red-400' : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20'}
  `

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className={inputClass('name')}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className={inputClass('email')}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Phone *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+92 300 1234567"
              className={inputClass('phone')}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Property Type *</label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className={inputClass('propertyType')}
            >
              <option value="">Select Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plot</option>
            </select>
            {errors.propertyType && <p className="text-xs text-red-500 mt-1">{errors.propertyType}</p>}
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Purpose *</label>
            <select
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              className={inputClass('purpose')}
            >
              <option value="">Select Purpose</option>
              <option value="Buy">Sell</option>
              <option value="Rent">Rent Out</option>
            </select>
            {errors.purpose && <p className="text-xs text-red-500 mt-1">{errors.purpose}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Location *</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="DHA Phase 6, Lahore"
              className={inputClass('location')}
            />
            {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Area</label>
            <input
              type="text"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="10 Marla / 1 Kanal"
              className={inputClass('area')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Expected Price (PKR) *</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="50000000"
              className={inputClass('price')}
            />
            {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-1.5">Description *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe your property..."
            rows={4}
            className={`${inputClass('description')} resize-none`}
          />
          {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
        </div>

        <Button type="submit" loading={loading} fullWidth size="lg">
          Submit Property Details
        </Button>
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Listing Submitted!"
        message="Your property listing has been recorded as a demo submission. Our team will contact you soon."
      />
    </>
  )
}
