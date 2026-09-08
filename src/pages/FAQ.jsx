import { Link } from 'react-router-dom'
import { HelpCircle, MessageCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import FAQAccordion from '../components/forms/FAQAccordion'
import Button from '../components/common/Button'

export default function FAQ() {
  const faqs = [
    {
      question: 'How can I search for a property?',
      answer: 'You can search for properties using our search panel on the homepage, or by browsing our Properties page. Use filters to narrow down by location, property type, price range, and bedrooms. Our Buy and Rent pages offer quick filtering by purpose.',
    },
    {
      question: 'Do you help with property buying?',
      answer: 'Yes. Our team provides guidance throughout the property buying process, from search and shortlisting to property visits, documentation, and closing. Submit a property inquiry on any listing page to get started.',
    },
    {
      question: 'Do you handle rental properties?',
      answer: 'Yes, we list and assist with rental properties across Lahore. Browse our Rent page for available listings, or contact us with your requirements and we will help find suitable options.',
    },
    {
      question: 'Can I list my property?',
      answer: 'Yes. Visit our Sell page and fill out the listing form. This is a demo website, so submissions are not stored - they are for demonstration purposes only.',
    },
    {
      question: 'Can I request a property valuation?',
      answer: 'Yes. Visit our Valuation page and fill out the form with your property details. Our team will review your submission. Note: This is a demo site, and no real market valuation is generated.',
    },
    {
      question: 'Do you offer commercial properties?',
      answer: 'Yes, we list commercial properties including offices, shops, and retail spaces across Lahore. Filter by Commercial type in our Properties page.',
    },
    {
      question: 'Can I schedule a property visit?',
      answer: 'Yes, you can request a property visit through the Schedule a Visit button on any property details page. Our consultants will arrange a visit at a convenient time.',
    },
    {
      question: 'Are the listings on this website real?',
      answer: 'No. This is a demonstration website. All property listings, prices, agents, and company information are fictional and for demonstration purposes only. Do not make any decisions based on this content.',
    },
    {
      question: 'How can I contact an agent?',
      answer: 'Each property details page has agent contact information including phone and email. You can also use the WhatsApp button at the bottom right of any page for quick inquiries.',
    },
    {
      question: 'Can property prices change?',
      answer: 'In real-world property markets, yes. Property prices vary based on market conditions, location trends, and property specifics. Since this is a demo site, the prices shown are sample data only.',
    },
  ]

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
      />

      {/* Demo Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-x py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Notice:</strong> This website is a demonstration. All content, listings, and information are sample data for demo purposes only.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Got Questions?"
              subtitle="We have answers to the most common questions."
            />

            <div className="mt-10">
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Still Have Questions */}
            <div className="mt-12 bg-primary rounded-2xl p-8 text-center text-white">
              <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Cannot find the answer you are looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button icon={MessageCircle}>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
