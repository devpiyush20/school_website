import React from 'react';
import ContactComponent from '@/components/Contact';

const Page = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row gap-8">
      {/* Left section with address and mobile numbers */}
      <div className="md:w-1/2 text-center text-slate-800 m-10">
        <div className="mb-8 bg-gray-100 p-10">
          <h2 className="text-2xl font-bold mb-4">Address :-</h2>
          <p className="text-2xl font-bold">Manakpur</p>
          <p className="text-2xl font-bold">Bulandshr, Uttar Pradesh 203409</p>
        </div>
        <ContactComponent />
      </div>

      {/* Right section with map */}
      <div className="md:w-1/2 m-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.57648094135!2d77.9049760754935!3d28.432033575774874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca19eff7305a5%3A0xcfc038af3fff5d18!2sBABU%20Banarasi%20Das%20Janta%20Inter%20college!5e0!3m2!1sen!2sin!4v1713521325238!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
