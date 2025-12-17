import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Recycle, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-gray-900 overflow-hidden">
        {/* Background Image - Tailoring/Empowerment Context */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551854269-93c5d7945db8?auto=format&fit=crop&q=80")' }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white font-hindi text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            आओ आत्मनिर्भर बनें
          </h2>
          <p className="text-green-100 text-lg md:text-2xl mb-8 max-w-2xl font-light">
            Empowering communities through Education, Women Empowerment, and Sustainability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-all duration-300"
            >
              Hamare Bare Mein Janne
            </Link>
            <Link 
              to="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Sahyog Karein
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Key Impact Areas</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-green-50 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-green-100 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-hindi">महिला सशक्तिकरण</h3>
              <p className="text-gray-600 mb-4">
                Women Empowerment through skill development and livelihood generation.
              </p>
              <Link to="/projects" className="text-blue-900 font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-blue-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-900">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-hindi">शिक्षा</h3>
              <p className="text-gray-600 mb-4">
                Education awareness and workshops for children to build a brighter future.
              </p>
              <Link to="/projects" className="text-blue-900 font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-teal-50 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-teal-100 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-700">
                <Recycle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-hindi">पर्यावरण संरक्षण</h3>
              <p className="text-gray-600 mb-4">
                Turning waste into wealth. Our "Denim se Nai Udaan" initiative.
              </p>
              <Link to="/projects" className="text-blue-900 font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-green-800 text-white text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <blockquote className="font-hindi text-2xl md:text-3xl font-light italic leading-relaxed">
            "हमारा सपना है—एक ऐसा समाज बनाना जहाँ हर हाथ में हुनर हो और हर व्यक्ति 'आत्मनिर्भर' बने।"
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;