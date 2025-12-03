import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
            <Zap className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Responses</h3>
            <p className="text-gray-600">Get immediate answers and solutions with our AI's lightning-fast processing capabilities.</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
            <Shield className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your data is protected with enterprise-grade security measures and end-to-end encryption.</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
            <TrendingUp className="text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Improvement</h3>
            <p className="text-gray-600">Our AI learns and evolves with every interaction, providing increasingly accurate and relevant responses.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
