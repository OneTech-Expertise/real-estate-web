import { useState } from 'react'
import Button from '../common/Button'
import SuccessModal from '../common/SuccessModal'

export default function ValuationForm() {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    condition: '',
    expectedPrice: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.type) newErrors.type = 'Required'
    if (!formData.location.trim()) newErrors.location = 'Required'
    if (!formData.area) newErrors.area = 'Required'
    if (!formData.condition) newErrors.condition = 'Required'
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
    setFormData({ type: '', location: '', area: '', bedrooms: '', bathrooms: '', condition: '', expectedPrice: '' })
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
            <label className="block text-sm font-medium text-secondary mb-1.5">Property Type *</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className={inputClass('type')}
            >
              <option value="">Select Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plot</option>
            </select>
            {errors.type && <p className="text-xs text-red-500 mt-1">{errors.type}</p>}
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

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Area (Sq Ft) *</label>
            <input
              type="number"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="2000"
              className={inputClass('area')}
            />
            {errors.area && <p className="text-xs text-red-500 mt-1">{errors.area}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Bedrooms</label>
            <input
              type="number"
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
              placeholder="3"
              className={inputClass('bedrooms')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Bathrooms</label>
            <input
              type="number"
              value={formData.bathrooms}
              onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
              placeholder="3"
              className={inputClass('bathrooms')}
            />
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Condition *</label>
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className={inputClass('condition')}
            >
              <option value="">Select</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="needs-renovation">Needs Renovation</option>
            </select>
            {errors.condition && <p className="text-xs text-red-500 mt-1">{errors.condition}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-1.5">Expected Price (PKR)</label>
            <input
              type="number"
              value={formData.expectedPrice}
              onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
              placeholder="50000000"
              className={inputClass('expectedPrice')}
            />
          </div>
        </div>

        <Button type="submit" loading={loading} fullWidth size="lg">
          Request Valuation
        </Button>

        <p className="text-xs text-muted text-center">
          Demo: This form does not generate a real market valuation.
        </p>
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Valuation Request Received"
        message="Your valuation request has been recorded as a demo submission. Our team will contact you soon."
      />
    </>
  )
}
