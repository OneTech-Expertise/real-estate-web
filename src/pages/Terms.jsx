import PageHeader from '../components/common/PageHeader'

export default function Terms() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Terms and conditions for using this demo website."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Terms' }]}
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> These Terms of Service are a sample for demonstration purposes only.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-6 text-secondary">
              <p className="text-sm text-muted">Last updated: September 2026</p>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Acceptance of Terms</h2>
                <p>
                  By accessing this website, you agree to be bound by these Terms of Service. This is a demonstration website,
                  and use of this site is for viewing and testing purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Demo Website Disclaimer</h2>
                <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900">
                  <strong>Important:</strong> This website is a frontend demonstration project. All company information, property listings, prices, agents, testimonials, statistics, contact details, and other business information are fictional/demo content. Nothing on this website represents an actual real estate transaction platform, and no business transactions can be conducted through this site. All content should be replaced before any production use.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Use of Content</h2>
                <p>
                  All content on this website, including text, images, logos, and design, is for demonstration purposes.
                  Users should not rely on any information presented here for actual property decisions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Intellectual Property</h2>
                <p>
                  The design and layout of this demo website are intended for educational and demonstration purposes.
                  Property images are sourced from royalty-free image providers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">User Conduct</h2>
                <p>
                  Users agree to use this website for lawful purposes only and not to engage in any activity that could damage, disable, or impair the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Limitation of Liability</h2>
                <p>
                  This website is provided "as is" without warranties of any kind. The developers are not liable for any damages arising from the use of this demonstration website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Modifications</h2>
                <p>
                  These Terms may be updated at any time. Continued use of the website constitutes acceptance of any changes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Governing Law</h2>
                <p>
                  These Terms are governed by applicable laws. Any disputes will be handled in the appropriate jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Contact</h2>
                <p>
                  For questions about these Terms, please use the contact form on the Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
