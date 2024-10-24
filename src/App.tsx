import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BookOpen, Users, Trophy, MapPin, Mail, Phone, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hazrat Shah Waliullah</h1>
            <p className="text-xl md:text-2xl mb-8">Career Guidance And Coaching Academy</p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced educators dedicated to your success</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Batch Size</h3>
              <p className="text-gray-600">Personalized attention in small, focused groups</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistent track record of student achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="text-sm text-blue-600 font-semibold">Oct 24, 2024</span>
              <h3 className="text-xl font-bold mt-2">New Batch Starting Soon</h3>
              <p className="text-gray-600 mt-2">Registration open for new batch. Limited seats available.</p>
              {/* to add pdf */}
{/*               <a href="your pdf file url link" rel="noopener noreferrer" style={{ color: 'red' }}> Click here to view pdf </a>  */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
       <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Location</h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.799926136674!2d77.27730907550311!3d28.695630975630372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzQ0LjMiTiA3N8KwMTYnNDcuNiJF!5e0!3m2!1sen!2sin!4v1729767855358!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Madarsa Islamia Arabia Talimul Quran, Street No.23B Vijay Park, Delhi 110053, Near Tayyaba Masjid</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span>contact@excellenceacademy.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
       

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Hazrat Shah Waliullah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
