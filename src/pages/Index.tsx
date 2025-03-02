
import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    document.title = 'Ardisia Design | Crafting Timeless, Elegant Spaces';
  }, []);
  
  return (
    <MainLayout>
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />
    </MainLayout>
  );
};

export default Index;
