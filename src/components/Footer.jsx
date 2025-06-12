import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo + Description */}
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">ShoeStore</h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs">
              Step into style. Discover your perfect fit with our curated
              collection of premium shoes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
              Shop
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sneakers
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
              Help
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-gray-400 text-lg sm:text-xl">
              <a href="#" className="hover:text-white transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 border-t border-gray-700 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} ShoeStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
