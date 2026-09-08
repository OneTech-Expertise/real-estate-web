import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Home as HomeIcon, TrendingUp } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import { agents, statistics } from '../data/agents'
import AgentCard from '../components/common/AgentCard'
import CTASection from '../components/common/CTASection'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Your trusted property partner in Lahore."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> This is a demonstration website. All company information, history, and team details are fictional.
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-accent font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-5">
                Your Trusted Property Partner in Lahore.
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Lahore Prime Properties is a fictional real estate consultancy created for demonstration purposes. The website showcases how a modern real estate agency might present premium properties across Lahore, Pakistan.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Our demo platform includes property listings, project showcases, agent profiles, and consultation services. All content is sample data and should be replaced before any production use.
              </p>
              <p className="text-muted leading-relaxed">
                We designed this site to demonstrate premium user experience, responsive design, and professional presentation in the real estate industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Modern property"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted">Years Demo Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x">
          <SectionHeading
            title="Our Principles"
            subtitle="The foundation of our service approach."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Target, title: 'Mission', desc: 'To provide transparent, professional, and personalized property services that help clients make informed decisions.' },
              { Icon: Eye, title: 'Vision', desc: 'To be recognized as a trusted name in Lahore real estate, known for integrity, expertise, and client satisfaction.' },
              { Icon: Heart, title: 'Our Approach', desc: 'We focus on understanding each client unique needs, providing honest guidance, and delivering exceptional service at every step.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="inline-flex w-16 h-16 rounded-xl bg-accent/10 items-center justify-center mb-4 text-accent">
                  <item.Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-3">
              Sample Data
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">By The Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeading
            title="Why Clients Choose Us"
            subtitle="What sets our service apart."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { Icon: HomeIcon, title: 'Wide Selection', desc: 'Access to a diverse range of properties across Lahore prime locations.' },
              { Icon: Users, title: 'Expert Team', desc: 'Knowledgeable consultants with deep understanding of local markets.' },
              { Icon: Award, title: 'Quality Service', desc: 'Professional guidance and support throughout your property journey.' },
              { Icon: TrendingUp, title: 'Market Insights', desc: 'Up-to-date information on market trends and property values.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <item.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full mb-3">
              Sample Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Meet Our Team</h2>
            <p className="text-muted max-w-2xl mx-auto">Sample profiles shown for demonstration. Replace with actual team members before production use.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/agents">
              <Button variant="outline">View Full Team</Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
