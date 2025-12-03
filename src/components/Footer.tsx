import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Product</h4>
            <ul>
              <li><a href="/" className="hover:text-white">Features</a></li>
              <li><a href="/" className="hover:text-white">Pricing</a></li>
              <li><a href="/" className="hover:text-white">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul>
              <li><a href="/" className="hover:text-white">About Us</a></li>
              <li><a href="/" className="hover:text-white">Contact</a></li>
              <li><a href="/" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <ul>
              <li><a href="/" className="hover:text-white">Documentation</a></li>
              <li><a href="/" className="hover:text-white">Support</a></li>
              <li><a href="/" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul>
              <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 AI Chat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
