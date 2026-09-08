import PageHeader from '../components/common/PageHeader'

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we handle information on this demo website."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> This Privacy Policy is a sample for demonstration purposes only.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-6 text-secondary">
              <p className="text-sm text-muted">Last updated: September 2026</p>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Introduction</h2>
                <p>
                  This Privacy Policy applies to this demonstration website. This website is a frontend-only project
                  and does not collect, store, process, or transmit any personal data to any backend servers or databases.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Demo Information</h2>
                <p>
                  This website displays fictional company information, properties, agents, testimonials, and contact details
                  for demonstration purposes only. No real business transactions are processed through this website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Form Submissions</h2>
                <p>
                  All forms on this website (contact, property inquiry, valuation, listing) are demonstration only.
                  Submissions are not saved, transmitted, or processed. No data is shared with third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Cookies</h2>
                <p>
                  This demo website does not use tracking cookies, analytics tools, or third-party tracking services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">External Links</h2>
                <p>
                  This website may contain links to external sites. We are not responsible for the content or privacy practices of external websites.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Children Privacy</h2>
                <p>
                  This website is not intended for children under 13. We do not knowingly collect information from children.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Changes to This Policy</h2>
                <p>
                  This Privacy Policy may be updated periodically. Any changes will be posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Disclaimer</h2>
                <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900">
                  <strong>Important:</strong> This website is a frontend demonstration project. All company information, property listings, prices, agents, testimonials, statistics, contact details, and other business information are fictional/demo content and should be replaced before any production use. The website does not represent an actual real estate transaction platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Contact</h2>
                <p>
                  For questions about this Privacy Policy, please use the contact form on the Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
