import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">CRYPTO & Co</h2>
        </div>

        {/* Home/About Section */}
        <div className="md:col-span-1">
        
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Buy NFTs</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Sell NFTs</a></li>
          </ul>
        </div>

        {/* Market Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium mb-3">Market</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300 transition">Browse NFTs</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Buy NFTs</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Sell NFTs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium mb-3">Contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300 transition">Email</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Twitter</a></li>
          </ul>
        </div>

        {/* Newsletter Section - now a separate column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium mb-3">Join our newsletter</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border border-gray-600 rounded-l-lg p-2 w-full focus:outline-none focus:border-gray-400"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded-r-lg px-4 py-2">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;