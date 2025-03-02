
import { useScrollReveal } from '@/utils/animations';

const About = () => {
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollReveal();
  const { ref: imageRef, isIntersecting: imageVisible } = useScrollReveal();
  
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 ease-out ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Ardisia Design Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs mb-2">
                  Our Approach
                </span>
                <h3 className="text-white text-xl font-medium">Design with Purpose</h3>
              </div>
            </div>
          </div>
          
          <div 
            ref={sectionRef}
            className={`transition-all duration-1000 delay-300 ease-out ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="space-y-6">
              <h2 className="heading-lg">Our Philosophy, Our Passion</h2>
              <p className="body-base text-muted-foreground">
                At Ardisia Design, we believe that exceptional design transcends aesthetics—it enhances lives and nurtures well-being. Our approach combines creative vision with technical precision to create spaces that are both beautiful and functional.
              </p>
              <p className="body-base text-muted-foreground">
                Every project begins with a deep understanding of our clients' needs, aspirations, and the unique characteristics of each space. We then craft tailored solutions that seamlessly integrate with the environment and stand the test of time.
              </p>
              
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-primary/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium">Quality</h3>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-primary/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium">Innovation</h3>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white shadow-sm">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-primary/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 8H5C3.93913 8 2.92172 8.42143 2.17157 9.17157C1.42143 9.92172 1 10.9391 1 12C1 13.0609 1.42143 14.0783 2.17157 14.8284C2.92172 15.5786 3.93913 16 5 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium">Sustainability</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/about" className="button-primary">
                  Learn More About Us
                </a>
                <a href="/team" className="button-secondary">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
