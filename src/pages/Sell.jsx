import { motion } from 'framer-motion'
import { Upload, BarChart3, Target, Megaphone, Handshake, Award, Check } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import ListingForm from '../components/forms/ListingForm'
import SectionHeading from '../components/common/SectionHeading'

export default function Sell() {
  const steps = [
    { Icon: Upload, title: 'Submit Property', desc: 'Share your property details through our simple form.' },
    { Icon: BarChart3, title: 'Property Evaluation', desc: 'Our team assesses your property value.' },
    { Icon: Target, title: 'Market Analysis', desc: 'We analyze current market conditions and comparable properties.' },
    { Icon: Megaphone, title: 'Professional Marketing', desc: 'Quality marketing across multiple platforms.' },
    { Icon: Handshake, title: 'Buyer Matching', desc: 'Connect with qualified buyers looking for properties like yours.' },
    { Icon: Award, title: 'Closing Support', desc: 'Assistance with documentation and final transaction.' },
  ]

  return (
    <>
      <PageHeader
        title="Sell Your Property"
        subtitle="Partner with us to sell your property with confidence."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Sell' }]}
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> This is a demonstration website. The selling process shown is fictional.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              title="Sell Your Property With Confidence."
              subtitle="Our proven process makes selling your property simple and efficient."
            />
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-primary text-center mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                      <step.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-accent font-semibold">Step {idx + 1}</span>
                      <h4 className="font-bold text-primary mt-0.5">{step.title}</h4>
                      <p className="text-sm text-muted mt-1">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Listing Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-2">List Your Property</h3>
              <p className="text-muted mb-6">Fill out the form below to get started. All submissions are recorded as demo data.</p>
              <ListingForm />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary text-center mb-6">Why Choose Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Professional photography and marketing',
                'Wide exposure across platforms',
                'Transparent commission structure',
                'Dedicated account manager',
                'Regular updates and reports',
                'Expert negotiation support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
