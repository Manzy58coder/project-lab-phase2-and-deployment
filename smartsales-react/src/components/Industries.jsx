import React from 'react';

const Industries = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Trusted Industries</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow hover:scale-105 transition text-center">
          <img src="/assets/showmax.jpg" alt="FMCG" className="rounded mb-2 h-40 w-full object-cover" />
          <p className="font-semibold">Showmax</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:scale-105 transition text-center">
          <img src="/assets/workpay.png" alt="Telco" className="rounded mb-2 h-40 w-full object-cover" />
          <p className="font-semibold">Workpay</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:scale-105 transition text-center">
          <img src="/assets/isbn.png" alt="Tech" className="rounded mb-2 h-40 w-full object-cover" />
          <p className="font-semibold">ISBI</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:scale-105 transition text-center">
          <img src="/assets/medix.png" alt="Insurance" className="rounded mb-2 h-40 w-full object-cover" />
          <p className="font-semibold">Medix East Africa Limited</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:scale-105 transition text-center">
          <img src="/assets/muthokinju.png" alt="Hardware" className="rounded mb-2 h-40 w-full object-cover" />
          <p className="font-semibold">Muthokinju Paints</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:scale-105 transition text-center">
          <img src="/assets/dpo.jpg" alt="Startups" className="rounded mb-2 h-40 w-full object-cover" />
          <p className="font-semibold">DPO pay</p>
        </div>
      </div>
    </section>
  );
};

export default Industries;