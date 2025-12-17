import React from 'react';
import { Scissors, Youtube, Instagram, Facebook, Book, Activity, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in pb-16">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-hindi">Hamari Pariyojnayein</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            From Waste to Wealth to Education and Health.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Featured Project */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full bg-gray-200 min-h-[400px]">
               <img 
                 src="https://picsum.photos/id/292/800/800" 
                 alt="Denim Recycling"
                 className="w-full h-full object-cover" 
               />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-4 w-max">
                FLAGSHIP PROJECT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 font-hindi">डेनिम से नई उड़ान</h2>
              <h3 className="text-xl text-gray-500 mb-6">(Denim to New Heights)</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">The Problem</h4>
                  <p className="text-gray-600">Massive environmental impact caused by fabric waste, specifically old denim.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">The Solution (Waste to Wealth)</h4>
                  <p className="text-gray-600">Recycling old denim into high-quality, durable bags and accessories.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">The Impact</h4>
                  <p className="text-gray-600">Providing livelihood to <span className="font-bold text-green-600">20+ local women</span> through free tailoring and design training.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="flex items-center gap-2 text-green-700 font-bold bg-green-50 px-4 py-2 rounded-lg w-max">
                  <Scissors size={20} />
                  Made by Swavalamban Women
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
              <Book size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-hindi">शिक्षा और जागरूकता</h3>
            <p className="text-gray-600 text-sm">
              Encouraging children towards education and organizing workshops to reduce dropout rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-hindi">स्वास्थ्य एवं योग</h3>
            <p className="text-gray-600 text-sm">
              Organizing community health camps and yoga awareness programs for a healthier society.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
              <Scissors size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-hindi">कौशल विकास</h3>
            <p className="text-gray-600 text-sm">
              Providing various employment-oriented training programs to women to make them self-reliant.
            </p>
          </div>
        </div>

        {/* Social Feed Simulation / Links */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">See Our Work in Action</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us on social media for daily updates, live sessions, and stories of change.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://youtube.com/@swavalambanfoundation" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium shadow-lg hover:shadow-red-200"
            >
              <Youtube size={20} />
              Watch on YouTube
            </a>
            
            <a 
              href="https://www.facebook.com/swavalambanfoundationvidisha" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium shadow-lg hover:shadow-blue-200"
            >
              <Facebook size={20} />
              Follow on Facebook
            </a>

            <a 
              href="https://www.instagram.com/swavalambanfoundation" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition font-medium shadow-lg hover:shadow-pink-200"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>
          </div>

          {/* Simulated Feed Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-75">
             {[10, 11, 12, 13].map((id) => (
                <div key={id} className="relative group overflow-hidden rounded-lg aspect-square">
                  <img src={`https://picsum.photos/id/${id+200}/300/300`} alt="Gallery" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <ExternalLink className="text-white" />
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;