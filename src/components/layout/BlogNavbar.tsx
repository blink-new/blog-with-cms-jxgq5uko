import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Moon, Sun, Settings, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function BlogNavbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 gradient-bg rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold gradient-text">
                  ThinkSpace
                </span>
                <div className="text-xs text-muted-foreground font-medium tracking-wider">
                  STORIES THAT MATTER
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-purple-500 transition-colors" />
              <Input
                placeholder="Search for stories, authors, topics..."
                className="pl-12 pr-4 py-3 bg-muted/30 border-muted-foreground/20 rounded-full focus:bg-background focus:border-purple-500/50 transition-all duration-300 text-base"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-muted/50">
              <Search className="w-5 h-5" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted/50 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Admin Link */}
            <Link to="/admin">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50 transition-all duration-300">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>

            {/* CTA Button */}
            <Button className="hidden sm:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Write Story
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-muted/50">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}