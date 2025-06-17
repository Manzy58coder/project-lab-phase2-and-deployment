import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const heroElement = document.getElementById('home-hero');
    if (heroElement) {
      heroElement.classList.add('animate-fadeInLeft');
    }
  }, []);

  return (
    <section id="home" className="bg-cover bg-center text-white py-32 px-6" style={{ backgroundImage: "url('/assets/Smartsalesheropicture.jpg')" }}>
      <div className="max-w-4xl">
          <h1 className="text-5xl text-black font-bold mb-4 opacity-0" id="home-hero">Building Sales & Marketing Teams for Africa</h1>
          <p className="text-lg max-w-md text-black">Empowering SMEs & startups with recruitment, training & outsourced sales support.</p>
          <a href="#contact"><button className="bg-yellow-400 text-black mt-10 px-6 py-2 rounded uppercase hover:bg-yellow-500 transition">Get Started</button></a>
      </div>
    </section>
  );
};

export default Hero;                                 