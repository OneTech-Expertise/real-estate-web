import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import AgentCard from '../components/common/AgentCard'
import CTASection from '../components/common/CTASection'
import { agents } from '../data/agents'

export default function Agents() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet our professional property consultants."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Agents' }]}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> All team profiles shown are fictional and for demonstration purposes only. Replace with actual team members before production.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeading
            badge="Our Consultants"
            title="Sample Team"
            subtitle="Meet our demo team members. These profiles are fictional and should be replaced before production."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-bold text-primary mb-2">Important Notice</h3>
            <p className="text-sm text-muted">
              The team members shown above are fictional demo profiles created for this website demonstration.
              Any resemblance to actual persons is purely coincidental. Before using this website in any capacity,
              all profiles should be replaced with accurate information about actual team members, including
              their qualifications, experience, and contact details.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Join Our Team?"
        subtitle="We are always looking for talented professionals to join our consultancy."
        primaryLink="/contact"
        primaryLabel="Contact Us"
      />
    </>
  )
}
