import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 max-w-6xl mx-auto">

      <div class="container mx-auto px-4 py-16 max-w-7xl">
        <div class="text-center mb-16">
            <h2 class="text-sm font-semibold text-primary mb-2">Our Services</h2>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission Is
                <span class="text-primary">Building Sales Excellence for Africa’s SMEs</span>
                
            </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div class="bg-white p-8 rounded-lg shadow-md hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
                <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                    <i class="fas fa-shield-alt text-gray-600 text-xl group-hover:text-yellow-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Mastering Business Growth (MBG) Program</h3>
                <p class="text-gray-600">
                    Equips founders with sales leadership skills.
                </p>
                <a href="#" class="text-yellow-600 font-medium flex items-center">
                    Read More <span class="ml-2 text-xl"></span>
                </a>
            </div>

            
            <div class="bg-white p-8 rounded-lg shadow-md hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
                <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                    <i class="fas fa-server text-gray-600 text-xl group-hover:text-yellow-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Specialized Sales Recruitment</h3>
  
                <p class="text-gray-600">Matches businesses with pre-vetted sales talent.
                </p>
                <a href="#" class="text-yellow-600 font-medium flex items-center">
                    Read More <span class="ml-2 text-xl"></span>
                </a>
            </div>

          
            <div class="bg-white p-8 rounded-lg shadow-md hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
                <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                    <i class="fas fa-headset text-gray-600 text-xl group-hover:text-yellow-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Custom Sales Training & Coaching</h3>
                <p class="text-gray-600">Upskill teams with tailored programs.
                </p>
                <a href="#" class="text-yellow-600 font-medium flex items-center">
                    Read More <span class="ml-2 text-xl"></span>
                </a>
            </div>

                  <div class="bg-white p-8 rounded-lg shadow-md hover:bg-yellow-50 hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
                <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                    <i class="fas fa-cloud text-gray-600 text-xl group-hover:text-yellow-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Outsourced Sales Teams</h3>
                <p class="text-gray-600">
                    Provides ready-to-deploy sales reps managed by SmartSales.
                </p>
                <a href="#" class="text-yellow-600 font-medium flex items-center">
                    Read More <span class="ml-2 text-xl"></span>
                </a>
            </div>
         
        </div>
    </div>
    
    
    </section>
  );
};

export default Services;