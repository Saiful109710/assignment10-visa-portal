import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-16 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Website Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">VisaPortal</h2>
            <p className="text-lg text-gray-300">
              Your one-stop platform for fast and reliable visa application services.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-300">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:support@visaportal.com" className="hover:text-orange-400 transition-colors">
                  support@visaportal.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-orange-400 transition-colors">
                  +1 234-567-890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>Location:</span>
                <address className="not-italic">
                  123 Visa Street, City, Country
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-300">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/visaportal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-2xl hover:text-orange-400 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/visaportal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-2xl hover:text-orange-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/visaportal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl hover:text-orange-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/visaportal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl hover:text-orange-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-300">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-orange-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VisaPortal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
