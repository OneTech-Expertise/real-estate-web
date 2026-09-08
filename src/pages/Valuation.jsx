import { motion } from 'framer-motion'
import { TrendingUp, Home, BarChart3, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import ValuationForm from '../components/forms/ValuationForm'

export default function Valuation() {
  const benefits = [
    { Icon: TrendingUp, title: 'Market Insights', desc: 'Based on current market trends' },
    { Icon: Home, title: 'Comparable Sales', desc: 'Analysis of similar properties' },
    { Icon: BarChart3, title: 'Professional Assessment', desc: 'Expert evaluation of your property' },
  ]

  return (
    <>
      <PageHeader
        title="Property Valuation"
        subtitle="Get an estimate of your property's market value."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Valuation' }]}
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> This is a demonstration. No real market valuation is generated. Form submissions are recorded as demo data only.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Know Your Property Market Value.
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Request a professional property valuation from our team. Submit your property details and our consultants will review your information.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg order-2 lg:order-1"
              >
                <h3 className="text-xl font-bold text-primary mb-5">Request Valuation</h3>
                <ValuationForm />
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">How Valuation Works</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Submit your property information and our team will review it carefully. We consider various factors including location, size, condition, and current market conditions.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                        <benefit.Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{benefit.title}</h4>
                        <p className="text-sm text-muted">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="font-semibold text-primary mb-3">What You Get</h4>
                  <ul className="space-y-2">
                    {[
                      'Professional property assessment',
                      'Market position analysis',
                      'Recommended pricing range',
                      'Expert consultation',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
