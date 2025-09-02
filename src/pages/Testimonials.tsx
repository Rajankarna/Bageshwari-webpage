
import React from 'react';
import Header from '@/components/Header';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Read what our patients have to say about their experience with our healthcare services.
            </p>
          </div>
        </div>
        <TestimonialsSection />
        
        {/* Success Stories Gallery */}
        <section className="section-padding bg-white mb-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                <img 
                  src="/facility/OT-2.png" 
                  alt="Happy Patient" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Orthopaedics Surgery Success</h3>
                <p className="text-gray-600 text-sm">Patient recovered fully after complex ortho surgery with our expert medical team.</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                <img 
                  src="/facility/EMERGENCY.jpg" 
                  alt="Emergency Care" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Emergency Life-Saving Care</h3>
                <p className="text-gray-600 text-sm">Quick response and expert care saved a patient's life during critical emergency.</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                <img 
                  src="/facility/OT-4.png" 
                  alt="Maternity Care" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Safe Delivery</h3>
                <p className="text-gray-600 text-sm">Our obstetrics team ensured a safe and comfortable delivery experience.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
