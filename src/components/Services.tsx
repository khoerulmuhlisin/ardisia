
import { useScrollReveal } from '@/utils/animations';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Landscape Architecture',
    description: 'Creating sustainable, aesthetic, and functional outdoor spaces that harmonize with nature and enhance the surrounding environment.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    link: '/services/landscape-architecture'
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Crafting luxurious and harmonious indoor environments tailored to each client\'s needs, preferences, and lifestyle.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    link: '/services/interior-design'
  },
  {
    id: 3,
    title: '3D Visualization & Animation',
    description: 'High-quality renderings and walkthroughs that bring designs to life before construction, allowing clients to experience their space in advance.',
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    link: '/services/3d-visualization'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const { ref, isIntersecting } = useScrollReveal();
  const delay = index * 100;
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-sm hover-lift transition-all duration-1000 delay-${delay} ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="image-hover h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="heading-sm mb-3 text-stone-800">{service.title}</h3>
        <p className="text-stone-600 mb-6">{service.description}</p>
        <Link 
          to={service.link} 
          className="inline-flex items-center text-stone-700 font-medium hover:underline"
        >
          Let's Discuss Your Project
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, isIntersecting } = useScrollReveal();
  
  return (
    <section id="services" className="section-padding bg-stone-50">
      <div className="container-width">
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="heading-lg mb-4 text-stone-800">Our Expertise</h2>
          <p className="body-lg text-stone-600">
            With years of experience and a passion for design, we offer comprehensive services to transform your vision into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
