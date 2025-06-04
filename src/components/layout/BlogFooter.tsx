import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function BlogFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold text-white">
                  ThinkSpace
                </span>
                <div className="text-sm text-white/70 font-medium tracking-wider">
                  STORIES THAT MATTER
                </div>
              </div>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              Where brilliant minds converge to share ideas that shape tomorrow. 
              Join our community of thinkers, creators, and innovators.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Stay Inspired</h3>
              <p className="text-white/70">Get our best stories delivered to your inbox.</p>
              <div className="flex gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full flex-1"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Latest Stories
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-white/70 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/design" className="text-white/70 hover:text-white transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/category/business" className="text-white/70 hover:text-white transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-white/70 hover:text-white transition-colors">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-white/70 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>by the ThinkSpace team</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center text-white/50 text-sm mt-8">
          © 2024 ThinkSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}