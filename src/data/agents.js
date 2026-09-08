// Demo agents data - clearly marked as sample data
export const agents = [
  {
    id: '1',
    name: 'Ahmed Khan',
    role: 'Senior Property Consultant',
    phone: '+92 300 1234567',
    email: 'ahmed@lahoreprimeproperties-demo.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Sample team member profile - Replace before production. Specializes in luxury residential properties in DHA and Gulberg.',
  },
  {
    id: '2',
    name: 'Sara Malik',
    role: 'Residential Property Consultant',
    phone: '+92 300 1234568',
    email: 'sara@lahoreprimeproperties-demo.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Sample team member profile - Replace before production. Helps families find their perfect home across Lahore.',
  },
  {
    id: '3',
    name: 'Hamza Ali',
    role: 'Commercial Property Consultant',
    phone: '+92 300 1234569',
    email: 'hamza@lahoreprimeproperties-demo.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Sample team member profile - Replace before production. Expert in commercial real estate and investment opportunities.',
  },
  {
    id: '4',
    name: 'Ayesha Shah',
    role: 'Client Relations Specialist',
    phone: '+92 300 1234570',
    email: 'ayesha@lahoreprimeproperties-demo.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Sample team member profile - Replace before production. Dedicated to providing exceptional client service and support.',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Demo Client',
    role: 'Demo Testimonial',
    text: 'Excellent guidance throughout our property search. The team was professional and helped us find exactly what we were looking for.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Demo Client',
    role: 'Demo Testimonial',
    text: 'Very professional and responsive team. They made the entire buying process smooth and understandable.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Demo Client',
    role: 'Demo Testimonial',
    text: 'Made the process easy to understand. We appreciated their transparent approach and market knowledge.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Demo Client',
    role: 'Demo Testimonial',
    text: 'Outstanding service from start to finish. Highly recommend to anyone looking for property in Lahore.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Demo Client',
    role: 'Demo Testimonial',
    text: 'The team went above and beyond to help us find our dream home. Truly a premium experience.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Demo Client',
    role: 'Demo Testimonial',
    text: 'Knowledgeable, trustworthy, and always available. They made our investment journey seamless.',
    rating: 5,
  },
];

// Sample statistics - clearly marked as demo data
export const statistics = [
  { label: 'Demo Listings', value: '500+' },
  { label: 'Demo Locations', value: '20+' },
  { label: 'Sample Consultants', value: '15+' },
  { label: 'Years Demo Experience', value: '10+' },
];

export const getAgentById = (id) => agents.find(a => a.id === id);
