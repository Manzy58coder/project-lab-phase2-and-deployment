
import { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "The Smartsales team supported our outbound sales teams through building sales processes and training. This foundation enabled double digit growth of our paint business in 2023 which was generally a tough year for business.",
    author: "Benjamin Kimani",
    role: "CEO,Muthokinju Paints",
    image: "/assets/muthokinju.png"
  },
  {
    id: 2,
    text: "Between 2018 - 2019, the Smartsales team successfully recruited and trained a sales team (12) that acquired the first 20,000 recurring customers. Their main role involved recruiting, training and managing sales teams, as well as managing tactical partners. We recommend them for similar projects.",
    author: "Multichoice Connected Video (Showmax)",
    role: "Marketing Director",
    image: "/assets/showmaxteam.png"
  },
  {
    id: 3,
    text: "The recruitment team at Smartsales provides a solution to our problem, very quickly vetting and providing us with shortlisted sales and marketing candidates who have highly relevant experience, skills, and energy and fit our budget. As a result, in the last 12 months, they have enabled us to grow our business development team by over 50%.",
    author: "Boris Maguire",
    role: "Workpay",
    image: "/assets/workpay borise.jpg"
  },
    {
    id: 4,
    text: "The sales team faced challenges like high turnover and poor coordination. After signing up for the Mastering Business Growth program and Smart Sales' recruitment services, it resulted to zero turnover and increased revenue. This was possible thanks to the implementation of better sales processes and sales management skills learned through the program",
    author: "S.Ndegwa Kuri",
    role: "Managing Director Medix East Africa",
    image: "/assets/medix.png"
  },

    {
    id: 4,
    text: "The sales team faced challenges like high turnover and poor coordination. After signing up for the Mastering Business Growth program and Smart Sales' recruitment services, it resulted to zero turnover and increased revenue. This was possible thanks to the implementation of better sales processes and sales management skills learned through the program",
    author: "S.Ndegwa Kuri",
    role: "Managing Director Medix East Africa",
    image: "/assets/medix.png"
  }


];


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll effect with proper cleanup
  useEffect(() => {
    const startAutoScroll = () => {
      clearInterval(intervalRef.current); // Clear any existing interval
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 5000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAutoScroll();
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, [testimonials.length]); // Added dependency

  const goToTestimonial = (index) => {
    setCurrent(index);
    resetInterval();
  };

  const nextTestimonial = () => {
    goToTestimonial((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    goToTestimonial((current - 1 + testimonials.length) % testimonials.length);
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section className="py-16 bg-gray-50" ref={carouselRef}>
      {/* ... rest of your JSX remains the same ... */}
       <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         <h2 className="text-sm font-semibold text-gray-500 mb-2">Testimonials</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Client Testimonials</h1>
         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
        </div>

       <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
         <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 transition-all duration-500">
           <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">             <img 
               src={testimonials[current].image} 
               alt={testimonials[current].author}
                className="w-full h-full object-cover"
              />
           </div>
            
          <div className="text-center md:text-left">
            <FaQuoteLeft className="text-gray-300 text-2xl mb-4 mx-auto md:mx-0" />
              <p className="text-gray-700 mb-6 italic">
             {testimonials[current].text}
              </p>
             <div>
             <h4 className="font-bold text-gray-900">{testimonials[current].author}</h4>
             <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
             </div>
           </div>
        </div>

         {/* Navigation Arrows */}
         <button 
           onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"          >
           <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
             onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
           >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Indicators */}
           <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
               onClick={() => {
                 setCurrent(index);                 resetInterval();
                }}
                 className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-300'}`}
               aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
         </div>
       </div>
   </div>
    </section>
  );
};

export default Testimonials;