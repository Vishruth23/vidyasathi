import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Languages, Video, LineChart, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Education with AI-Powered Learning
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Personalized learning experiences for students and powerful tools for educators
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/demo"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-gray-600">
                Personalized learning paths and intelligent content recommendations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Languages className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-gray-600">
                Learn in your preferred language with AI translation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Video className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Content</h3>
              <p className="text-gray-600">
                Engaging videos, quizzes, and interactive learning materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Education?</h2>
          <p className="text-xl mb-8">Join thousands of educators and students already using VidyaSathi</p>
          <Link
            to="/demo"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;