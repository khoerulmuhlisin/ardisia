
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useScrollReveal } from '@/utils/animations';
import ProjectSearch from './search/ProjectSearch';

// Define project types
const projectTypes = ['All', 'Landscape', 'Interior', '3D Visualization', 'Mixed'];

// Enhanced project data with more projects for each category
const projects = [
  {
    id: 1,
    title: 'Modern Garden Villa',
    type: 'Landscape',
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'modern-garden-villa'
  },
  {
    id: 2,
    title: 'Urban Apartment Design',
    type: 'Interior',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'urban-apartment-design'
  },
  {
    id: 3,
    title: 'Luxury Hotel Landscape',
    type: 'Landscape',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'luxury-hotel-landscape'
  },
  {
    id: 4,
    title: 'Corporate Office Space',
    type: 'Interior',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'corporate-office-space'
  },
  {
    id: 5,
    title: 'Residential Complex 3D',
    type: '3D Visualization',
    image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'residential-complex-3d'
  },
  {
    id: 6,
    title: 'Mountain View Resort',
    type: 'Mixed',
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'mountain-view-resort'
  },
  // Additional Landscape projects
  {
    id: 7,
    title: 'Zen Garden Retreat',
    type: 'Landscape',
    image: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'zen-garden-retreat'
  },
  {
    id: 8,
    title: 'Coastal Landscape Design',
    type: 'Landscape',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'coastal-landscape-design'
  },
  // Additional Interior projects
  {
    id: 9,
    title: 'Modern Loft Renovation',
    type: 'Interior',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'modern-loft-renovation'
  },
  {
    id: 10,
    title: 'Minimalist Home Design',
    type: 'Interior',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'minimalist-home-design'
  },
  // Additional 3D Visualization projects
  {
    id: 11,
    title: 'Urban Development Concept',
    type: '3D Visualization',
    image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'urban-development-concept'
  },
  {
    id: 12,
    title: 'Futuristic Skyscraper',
    type: '3D Visualization',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'futuristic-skyscraper'
  },
  // Additional Mixed projects
  {
    id: 13,
    title: 'Eco-Friendly Complex',
    type: 'Mixed',
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'eco-friendly-complex'
  },
  {
    id: 14,
    title: 'Boutique Hotel Design',
    type: 'Mixed',
    image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    slug: 'boutique-hotel-design'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const { ref, isIntersecting } = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      className={`group transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <Link to={`/portfolio/${project.slug}`} className="block overflow-hidden rounded-lg">
        <div className="relative image-hover aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs mb-2">
                {project.type}
              </span>
              <h3 className="text-white text-xl font-medium">{project.title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeFilter, setActiveFilter] = useState(categoryParam || 'All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchResults, setSearchResults] = useState(projects);
  const { ref, isIntersecting } = useScrollReveal();
  
  useEffect(() => {
    // Update active filter when URL parameter changes
    if (categoryParam) {
      const validCategory = projectTypes.find(type => 
        type.toLowerCase() === categoryParam.toLowerCase()
      );
      setActiveFilter(validCategory || 'All');
    }
  }, [categoryParam]);
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(searchResults);
    } else {
      setFilteredProjects(searchResults.filter(project => project.type === activeFilter));
    }
  }, [activeFilter, searchResults]);
  
  const handleSearch = (results: typeof projects) => {
    setSearchResults(results);
    if (activeFilter === 'All') {
      setFilteredProjects(results);
    } else {
      setFilteredProjects(results.filter(project => project.type === activeFilter));
    }
  };
  
  return (
    <section id="portfolio" className="section-padding bg-stone-100">
      <div className="container-width">
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="heading-lg mb-4 text-stone-800">Our Work Speaks for Itself</h2>
          <p className="body-lg text-stone-600">
            We bring creativity, expertise, and passion to every project, ensuring that each space we design exceeds expectations and stands the test of time.
          </p>
        </div>
        
        {/* Search Component */}
        <ProjectSearch projects={projects} onSearch={handleSearch} />
        
        {/* Filter Controls */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 p-1 border border-stone-200 rounded-full">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-5 py-2 text-sm rounded-full transition-all ${
                  activeFilter === type 
                    ? 'bg-stone-800 text-white shadow-sm' 
                    : 'hover:bg-stone-100 text-stone-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-stone-500 text-lg">No projects found. Try a different search term or category.</p>
            </div>
          )}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-md transition-colors"
          >
            View All Projects
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
    </section>
  );
};

export default Portfolio;
