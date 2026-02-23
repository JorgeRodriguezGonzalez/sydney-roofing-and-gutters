import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TestimonialWithPhotos {
  text: string;
  name: string;
  role: string;
  photos: string[];
}

// Real Google reviews - Sydney Roofing & Gutters
const testimonialsData: TestimonialWithPhotos[] = [
  {
    text: "Had a full metal roof installation done and couldn't be more impressed. The finish is clean, everything's watertight, and they even helped organise the guttering. Fast turnaround and really easy to deal with. If you're after quality roofing work, these are the people to go with.",
    name: "Ryleigh Valentine",
    role: "Google Review",
    photos: []
  },
  {
    text: "Had a couple of broken tiles after that last storm and water was coming through our ceiling. They came out quickly, replaced the damaged tiles, and even fixed some rusted flashing while they were up there. Down-to-earth blokes and no fuss. Reliable roofing services you can count on.",
    name: "Joshua Lam",
    role: "Google Review",
    photos: []
  },
  {
    text: "Good Stuff - Appreciate the team",
    name: "Shray",
    role: "Google Review",
    photos: []
  },
  {
    text: "Great service. Would recommend",
    name: "Jakey Ashley",
    role: "Google Review",
    photos: []
  },
  {
    text: "Really happy with the service, if I could give them 6 stars I would!",
    name: "Whitney Garrett",
    role: "Google Review",
    photos: []
  },
  {
    text: "Killer roof job! Bloody legend. Quick and reliable.",
    name: "Rhiannon Whelan",
    role: "Google Review",
    photos: []
  },
  {
    text: "Great job on my house. Very helpful",
    name: "Byron Sollazzo",
    role: "Google Review",
    photos: []
  },
  {
    text: "Very professional. High quality work and fast turn around. Highly recommend",
    name: "Patrick Sugden",
    role: "Google Review",
    photos: []
  },
  {
    text: "Chris was great to deal with and was on time and very professional. Highly recommend !!",
    name: "Adam Smith",
    role: "Google Review",
    photos: []
  }
];

// Colors for profile circles
const profileColors = [
  "#7C3AED", "#059669", "#DC2626", "#666666", "#DB2777",
"#EA580C", "#666666", "#65A30D", "#7C2D12"
];

const TestimonialCard = ({ testimonial, index, onHover }: { 
  testimonial: TestimonialWithPhotos, 
  index: number, 
  onHover: () => void
}) => {
  return (
    <div 
      className="p-6 rounded-lg border shadow-lg max-w-xs w-full bg-white relative transition-all duration-300 hover:shadow-xl mb-6 blueprint-hover group hover:border-primary/30" 
    >
      {/* Google Logo */}
      <div className="absolute top-4 right-4">
        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FFCA7B"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Profile, Name and Date */}
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: profileColors[index % profileColors.length] }}
        >
          {testimonial.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col">
                          <div className="font-semibold text-[#666666] text-sm">{testimonial.name}</div>
          <div className="text-muted-foreground text-xs">{testimonial.role}</div>
        </div>
      </div>

      {/* 5 Stars and Verification Badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {[...Array(5)].map((_, starIndex) => (
            <svg key={starIndex} className="w-4 h-4 text-[#F9A825] fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <div className="flex items-center">
          <img 
            src="https://cdn.trustindex.io/assets/icon/ti-verified.svg" 
            alt="Verified" 
            className="w-4 h-4"
          />
        </div>
      </div>

      {/* Review Text */}
      <div className="text-sm leading-relaxed text-muted-foreground mb-4">
        {testimonial.text}
      </div>

      {/* Photos */}
      {testimonial.photos.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {testimonial.photos.slice(0, 4).map((photo, photoIndex) => (
            <div key={photoIndex} className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={photo}
                alt={`Photo ${photoIndex + 1} from ${testimonial.name}'s review`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
          {testimonial.photos.length > 4 && (
            <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
              <span className="text-muted-foreground font-medium text-sm">
                +{testimonial.photos.length - 4}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AnimatedColumn = ({ testimonials, duration, className }: { 
  testimonials: TestimonialWithPhotos[], 
  duration: number, 
  className?: string 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-col animate-scroll"
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: isHovered ? 'paused' : 'running'
        }}
      >
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${setIndex}-${index}`}
                testimonial={testimonial}
                index={index}
                onHover={() => {}}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsNew = () => {
  const firstColumn = testimonialsData.slice(0, 3);
  const secondColumn = testimonialsData.slice(3, 6);
  const thirdColumn = testimonialsData.slice(6, 9);

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-5"></div>
      
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* Línea amarilla igual que en Services */}
          <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold architectural-heading mb-4">
            Loved by +1000 home and business owners
          </h2>
          {/* Texto con el mismo estilo que en services.tsx */}
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
            See what Newcastle homeowners are saying about our professional roofing services and 24/7 emergency response.
          </p>
        </div>

        {/* Testimonials Grid with fade mask */}
        <div className="flex justify-center gap-6 mt-16 subtle-mask-fade max-h-[740px] overflow-hidden mb-12">
          <AnimatedColumn testimonials={firstColumn} duration={25} />
          <AnimatedColumn testimonials={secondColumn} duration={30} className="hidden md:block" />
          <AnimatedColumn testimonials={thirdColumn} duration={28} className="hidden lg:block" />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 border border-gray-200 hover:bg-white hover:border-primary/30 rounded-lg p-8 max-w-2xl mx-auto transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Trusted by over +1000 happy clients
            </h3>
            <p className="text-muted-foreground mb-6">
              Our licensed roofers will inspect your roof and provide a free quote. Join hundreds of satisfied Newcastle homeowners who trust us for quality roofing work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="important" size="lg" asChild>
                <a href="tel:1300796024">
                  Get Free Roof Inspection
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button variant="professional" size="lg" asChild>
                <a
                  href="https://www.google.com/maps/place/Newcastle+Local+Roofers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More Google Reviews
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Máscara sutil para el scroll infinito */
        .subtle-mask-fade {
          mask-image: linear-gradient(
            to bottom, 
            transparent 0%, 
            rgba(0,0,0,0.2) 3%, 
            rgba(0,0,0,0.7) 8%, 
            black 12%, 
            black 88%, 
            rgba(0,0,0,0.7) 92%, 
            rgba(0,0,0,0.2) 97%, 
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom, 
            transparent 0%, 
            rgba(0,0,0,0.2) 3%, 
            rgba(0,0,0,0.7) 8%, 
            black 12%, 
            black 88%, 
            rgba(0,0,0,0.7) 92%, 
            rgba(0,0,0,0.2) 97%, 
            transparent 100%
          );
        }

        /* Animación CSS para el scroll */
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsNew;
