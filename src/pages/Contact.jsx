import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import ContactForm from '../components/forms/ContactForm'
import { siteConfig } from '../data/siteConfig'

export default function Contact() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteConfig.contact.whatsapp,
      href: whatsappLink,
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: siteConfig.contact.address,
      href: null,
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: siteConfig.contact.hours,
      href: null,
    },
  ]

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our property consultants."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> All contact information shown is fictional and for demonstration only.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((item) => {
                const Wrapper = item.href ? 'a' : 'div'
                const props = item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {}
                return (
                  <Wrapper
                    key={item.label}
                    {...props}
                    className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted uppercase tracking-wider">{item.label}</p>
                        <p className="text-primary font-medium mt-0.5 break-words">{item.value}</p>
                      </div>
                    </div>
                  </Wrapper>
                )
              })}

              {/* Social Icons */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex items-center gap-2">
                  {[
                    { Icon: Facebook, label: 'Facebook' },
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Linkedin, label: 'LinkedIn' },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-gray-100 text-secondary hover:bg-accent hover:text-primary transition-colors flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                <p className="text-muted mb-6">Fill out the form below and our team will get back to you.</p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-10">
            <div className="aspect-[16/8] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                  <p className="text-primary font-semibold">Lahore, Pakistan</p>
                  <p className="text-muted text-sm mt-1">Map placeholder - Demo website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
