import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Basic</h2>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">Free</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Basic AI assistance</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>5 courses access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Limited quizzes</span>
              </li>
            </ul>
            <Link
              to="/demo"
              className="block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-indigo-600 rounded-lg shadow-md p-8 transform scale-105">
            <h2 className="text-2xl font-bold mb-4 text-white">Pro</h2>
            <p className="text-indigo-200 mb-6">Most popular choice</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$29</span>
              <span className="text-indigo-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span>Advanced AI features</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span>Unlimited courses</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span>Custom quizzes</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 mr-2" />
                <span>Progress tracking</span>
              </li>
            </ul>
            <Link
              to="/demo"
              className="block w-full text-center bg-white text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-100"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom AI solutions</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>API access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <Link
              to="/demo"
              className="block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <h4 className="font-semibold mb-2">Can I switch plans later?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards and PayPal.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Is there a free trial?</h4>
              <p className="text-gray-600">Yes, all paid plans come with a 14-day free trial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;