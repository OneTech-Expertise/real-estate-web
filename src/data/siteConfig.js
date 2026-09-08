// Site configuration and company information
export const siteConfig = {
  name: 'Lahore Prime Properties',
  tagline: 'Find Your Place. Build Your Future.',
  description: 'Your trusted property partner in Lahore. We offer premium homes, apartments, commercial spaces, and investment opportunities.',
  company: {
    name: 'Lahore Prime Properties',
    type: 'Real Estate & Property Consultants',
    location: 'Lahore, Pakistan',
    established: '2015',
  },
  contact: {
    phone: '+92 300 1234567',
    whatsapp: '+92 300 1234567',
    email: 'hello@lahoreprimeproperties-demo.com',
    address: 'Office 12, Business Avenue, Gulberg, Lahore, Pakistan',
    hours: 'Monday–Saturday, 10:00 AM–7:00 PM',
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
  whatsappMessage: 'Hello Lahore Prime Properties, I would like to inquire about a property.',
};

export const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whappMessage || 'Hello, I would like to inquire about a property.')}`;
