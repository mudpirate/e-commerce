import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ShoeStore</h2>
          <p className="text-sm text-gray-400">
            Step into style. Discover your perfect fit with our curated
            collection of premium shoes.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Sneakers</a>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShoeStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
