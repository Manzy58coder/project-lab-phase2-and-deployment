import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-yellow-400 py-20 px-6">
      <h2 className="text-3xl font-bold mb-4 mx-auto ">About Us</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg">An East African-based sales company that builds B2B sales teams for fast-growing small and medium businesses solving some of the biggest problems facing Africa today.</p>
      
          <p className="text-lg mt-4">
          Our team brings over 20 years of experience in recruiting sales personnel across various industries in Kenya and the wider East Africa region. We specialize in developing and managing sales teams for a range of sectors, including FMCG, Beverage, Telco, Technology, Start-ups, Hardware, and Insurance.
          </p>
      
          <p className="text-lg mt-4">
          At Smart Sales, we are committed to empowering businesses by transforming mindsets and building essential sales skills through our customized Learning & Development programs. We utilize our proprietary MPS model (Mindset, Processes, Skills) to ensure comprehensive sales team development.
          </p>
      
          <p className="text-lg mt-4">
          Ultimately, we aim to make a significant impact by addressing the unemployment challenge in Africa, enabling SMEs to thrive and contribute to economic growth.
          </p>
          
                 
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Meet the Founder</h2>
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQFhk_oem0EG7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1606080374251?e=2147483647&v=beta&t=nph0b6UwsnBJ0sp4AeWW9YcEc-yFQntrhuXn7XCf4q8" alt="Founder" className="rounded-2xl shadow w-full h-auto object-cover" />
          <p className="mt-4">Edward Ndegwa | Smart Sales Kenya | Mastering Business Growth - East Africa</p>
        </div>
      </div>
         <div class="container mx-auto px-4 py-16 max-w-6xl">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          
            <div class="w-full md:w-1/2 relative">
                <div class=" rounded-xl overflow-hidden aspect-video relative">
            
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-auto h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all cursor-pointer">
                            
                            <iframe width="700" height="315" src="https://www.youtube.com/embed/mhStRaueV_A?si=vtn_YJTlvXcnkZMj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                    <span class="text-sm font-medium text-gray-700">Ndegwa |Founder(Smartsales)</span>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We empower small business owners</h1>
                
                <p class="text-gray-600 mb-6">We  provides expert recruitment, customized training, and outsourced sales teams eliminating guesswork and turnover. Founders gain a scalable, data-driven sales process while freeing up time to focus on growth. With SmartSales, businesses build high-performing teams that consistently hit targets.
                
                </p>
                
                <div class="mb-8">
                    <blockquote class="text-xl font-medium text-gray-800 mb-2">"Making an impact, together"</blockquote>
                    <p class="text-gray-500 font-medium">Socialy Founder</p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p class="text-gray-700 italic">
                        ""SmartSales transformed our revenue game! Their trained sales team tripled our conversions in just 3 months, while their recruitment service helped us replace underperformers with top talent. Now we scale predictably no more founder led sales chaos!"
                    </p>
                </div>
            </div>
        </div>
    </div>

<div class="container mx-auto px-4 py-12 max-w-4xl">
    <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Our Process Workflow</h1>
    
    <div class="relative">
        <div class="space-y-12 pl-8 md:pl-12">
            
            <div class="relative flex transform hover:-translate-y-1 transition-all duration-300">
                {/* <div class="absolute -left-8 md:-left-12 top-0 w-8 h-8 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white font-bold z-10">
                    1
                </div> */}
                  <div class="flex-shrink-0 w-12 h-12 rounded-full border-4 border-gray-500 flex items-center justify-center bg-white">
                        <span class="text-gray-600 font-bold text-lg">1</span>
                    </div>
                <div class="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg p-6 ml-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Consultation</h2>
                    <p class="text-gray-600">Schedule a consultation to discuss your business goals and digital marketing needs with our team.</p>
                </div>
            </div>

            
            <div class="relative flex transform hover:-translate-y-1 transition-all duration-300 md:ml-24">
                {/* <div class="absolute -left-8 md:-left-12 top-0 w-8 h-8 rounded-full border-4 border-white bg-purple-600 flex items-center justify-center text-white font-bold z-10">
                    2
                </div> */}
                  <div class="flex-shrink-0 w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white">
                        <span class="text-blue-600 font-bold text-lg">2</span>
                    </div>
                <div class="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg p-6 ml-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Strategy Development</h2>
                    <p class="text-gray-600">Our team will develop a customized digital marketing strategy tailored to your business.</p>
                </div>
            </div>

          
            <div class="relative flex transform hover:-translate-y-1 transition-all duration-300">
                {/* <div class="absolute -left-8 md:-left-12 top-0 w-8 h-8 rounded-full border-4 border-white bg-green-600 flex items-center justify-center text-white font-bold z-10">
                    3
                </div> */}
                  <div class="flex-shrink-0 w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white">
                        <span class="text-blue-600 font-bold text-lg">3</span>
                    </div>
                <div class="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg p-6 ml-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Implementation</h2>
                    <p class="text-gray-600">We will put the strategy into action and launch your digital marketing campaigns.</p>
                </div>
            </div>

          
            <div class="relative flex transform hover:-translate-y-1 transition-all duration-300 md:ml-24">
                {/* <div class="absolute -left-8 md:-left-12 top-0 w-8 h-8 rounded-full border-4 border-white bg-yellow-600 flex items-center justify-center text-white font-bold z-10">
                    4
                </div> */}
                  <div class="flex-shrink-0 w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white">
                        <span class="text-blue-600 font-bold text-lg">4</span>
                    </div>
                <div class="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg p-6 ml-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Monitoring & Optimization</h2>
                    <p class="text-gray-600">We continually monitor and optimize your campaigns to maximize results and ROI.</p>
                </div>
            </div>
            <div class="relative flex transform hover:-translate-y-1 transition-all duration-300">
                {/* <div class="absolute -left-8 md:-left-12 top-0 w-8 h-8 rounded-full border-4 border-white bg-red-600 flex items-center justify-center text-white font-bold z-10">
                    5
                </div> */}
                  <div class="flex-shrink-0 w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white">
                        <span class="text-blue-600 font-bold text-lg">5</span>
                    </div>
                <div class="flex-1 bg-white rounded-lg shadow-md hover:shadow-lg p-6 ml-4">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Reporting & Analysis</h2>
                    <p class="text-gray-600">We provide regular reports and analysis on campaign performance.</p>
                </div>
            </div>
        </div>
    </div>
</div>
     
      
    </section>
  );
};

export default About;