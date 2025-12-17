import React from 'react';
import { ShieldCheck, Target, Eye, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pb-16">
      {/* Header */}
      <div className="bg-green-50 py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-hindi">Hamare Bare Mein</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent. Service-oriented. Self-reliant.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/1183/800/600" 
              alt="Community Meeting" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-hindi">कौन हैं हम?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-hindi">
              स्वावलम्बन फाउंडेशन, विदिशा (M.P.) एक पंजीकृत गैर-लाभकारी संस्था है (Reg No: 01/05/01/38444/22), जो 26 जनवरी 2022 से समाज सेवा में समर्पित है।
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are dedicated to creating positive change through Education, Women Empowerment, and Environment Protection. Our foundation is built on the pillars of transparency and service.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <span className="block text-3xl font-bold text-green-600 mb-1">2022</span>
                <span className="text-sm text-gray-500">Established</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <span className="block text-3xl font-bold text-green-600 mb-1">20+</span>
                <span className="text-sm text-gray-500">Women Empowered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500">
            <Eye className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 font-hindi">
              "हमारा सपना है—एक ऐसा समाज बनाना जहाँ हर हाथ में हुनर हो और हर व्यक्ति 'आत्मनिर्भर' बने।"
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <Target className="w-10 h-10 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 font-hindi">
              शिक्षा (Education), महिला सशक्तिकरण (Women Empowerment), और पर्यावरण संरक्षण (Environment Protection) के जरिए सकारात्मक बदलाव लाना।
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500">
            <ShieldCheck className="w-10 h-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Key Values</h3>
            <ul className="text-gray-600 space-y-2 font-hindi">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> पारदर्शिता (Transparency)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> सेवा भाव (Service)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> आत्मनिर्भरता (Self-reliance)</li>
            </ul>
          </div>
        </div>

        {/* Team / Legal */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Legal & Registration</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We operate with complete transparency. Swavalamban Foundation is fully compliant with government regulations. 
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-2 bg-white rounded-full shadow-sm text-green-700 font-medium border border-green-200">
                Reg No: 01/05/01/38444/22
              </span>
              <span className="px-6 py-2 bg-white rounded-full shadow-sm text-green-700 font-medium border border-green-200">
                CSR-1: CSR00095903
              </span>
              <span className="px-6 py-2 bg-white rounded-full shadow-sm text-green-700 font-medium border border-green-200">
                12A & 80G Compliant
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;