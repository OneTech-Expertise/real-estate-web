import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import ProjectCard from '../components/project/ProjectCard'
import CTASection from '../components/common/CTASection'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <PageHeader
        title="New Projects"
        subtitle="Explore upcoming and under-construction developments across Lahore."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> All project information is fictional and for demonstration purposes only.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <SectionHeading
            badge="Upcoming Developments"
            title="Featured Projects"
            subtitle="Discover premium new developments in Lahore's most sought-after locations."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plan Disclaimer */}
      <section className="py-10 bg-gray-50">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-primary mb-3">About Project Information</h3>
            <p className="text-muted">
              All project details, pricing, amenities, and payment information shown on this demo website are fictional.
              Actual projects should be verified with authorized developers and property consultants before making any decisions.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in a Project?"
        subtitle="Contact our team for more information about upcoming developments."
        primaryLink="/contact"
        primaryLabel="Contact Us"
        secondaryLink="/projects"
        secondaryLabel="View All Projects"
      />
    </>
  )
}
