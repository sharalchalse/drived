import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Driv</span>
              <span className="text-2xl font-bold text-yellow-400">Ed</span>
            </div>
            <p className="text-gray-400 text-sm">Learn Driving the Right Way.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-yellow-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-yellow-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-yellow-400 transition-colors">
                  Testimonials
                </Link>
              </li>
        
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#faq" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:contact@drived.com" className="hover:text-yellow-400 transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="tel:+918169891400" className="hover:text-yellow-400 transition-colors">
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/the_drived?igsh=bGczMjUzYmFqc3Zo" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/the_drived?igsh=bGczMjUzYmFqc3Zo" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.instagram.com/the_drived?igsh=bGczMjUzYmFqc3Zo" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/snehal-chaudhari/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} DrivEd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
