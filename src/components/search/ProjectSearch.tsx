
import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  slug: string;
}

interface ProjectSearchProps {
  projects: Project[];
  onSearch: (results: Project[]) => void;
}

const ProjectSearch = ({ projects, onSearch }: ProjectSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      onSearch(projects);
      return;
    }
    
    const results = projects.filter(project => 
      project.title.toLowerCase().includes(term.toLowerCase()) || 
      project.type.toLowerCase().includes(term.toLowerCase())
    );
    
    onSearch(results);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(projects);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-stone-400" />
        </div>
        
        <Input
          type="text"
          placeholder="Search projects by name or type..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className={`pl-10 pr-10 py-2 border rounded-full transition-all focus:ring-2 ${
            isActive 
              ? 'ring-2 ring-stone-300 border-stone-400' 
              : 'border-stone-200 focus:border-stone-400'
          }`}
        />
        
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="absolute inset-y-0 right-3 flex items-center"
          >
            <X className="h-4 w-4 text-stone-400 hover:text-stone-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectSearch;
