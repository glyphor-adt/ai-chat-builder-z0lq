import React from 'react'

function Hero() {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unlock the Power of AI Conversations</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">Experience seamless, intelligent communication with our AI-powered chat application. Automate tasks, gain insights, and revolutionize your workflow.</p>
          <div className="flex justify-center space-x-4">
            <a href="/signup" className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Start Free Trial</a>
            <a href="/demo" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300" aria-label="Request Demo">Request Demo</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
