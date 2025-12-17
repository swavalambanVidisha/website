import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CreditCard, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="animate-fade-in pb-16">
      {/* Header */}
      <div className="bg-green-600 text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-hindi">Sampark aur Sahyog</h1>
          <p className="text-green-100 max-w-2xl mx-auto">
            Get in touch with us or support our cause to make a difference.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info & Donation */}
          <div className="space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-hindi">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">Address</h3>
                    <p className="text-gray-600 text-sm">Plot No. 35, RMP Nagar Phase-1,<br/>Vidisha, Madhya Pradesh - 464001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">Phone</h3>
                    <p className="text-gray-600 text-sm">+91 9752899000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">Email</h3>
                    <p className="text-gray-600 text-sm">swavalamban2022@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">Office Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Sat (10:00 AM - 6:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Card */}
            <div className="bg-blue-50 rounded-xl shadow-md p-8 border border-blue-100">
               <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                 <CreditCard /> Support Our Cause
               </h2>
               
               <div className="bg-white rounded-lg p-6 mb-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                   <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Account Name</p>
                      <p className="font-semibold text-gray-800 mb-3">Swavalamban Foundation Vidisha</p>
                      
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Bank</p>
                      <p className="font-semibold text-gray-800 mb-3">UCO Bank</p>

                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Account Number</p>
                      <p className="font-semibold text-gray-800 mb-3 font-mono text-lg">00100210002353</p>

                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">IFSC Code</p>
                      <p className="font-semibold text-gray-800 font-mono">UCBA0000010</p>
                   </div>
                   <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
                     {/* QR Code Placeholder */}
                     <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
                       <span className="text-gray-500 text-xs text-center p-2">UPI QR Code<br/>(Image Placeholder)</span>
                     </div>
                     <span className="text-xs text-gray-500 mt-2">Scan to Donate</span>
                   </div>
                 </div>
               </div>

               <div className="flex items-center gap-2 text-green-700 bg-green-100 p-3 rounded-md text-sm">
                 <CheckCircle size={16} />
                 <span>All donations are tax-exempt under Section 80G.</span>
               </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-900 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Involved</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Whether you want to volunteer, partner with us, or have a query, fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Rahul Kumar"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="rahul@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Reason to Connect</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="I would like to volunteer..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>

              {submitted && (
                <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center mt-4">
                  Message sent successfully! We will contact you soon.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;