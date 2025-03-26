
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Create', path: '/create' },
    { name: 'Stats', path: '/stats' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-350 px-8 py-4',
        isScrolled 
          ? 'glass-morph shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-350 hover:scale-[1.02]"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-solana-purple to-solana-green rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">S</span>
            </div>
          </div>
          <span className="text-lg font-semibold">Solana DeFi Assistant</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-350',
                location.pathname === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="neo-button px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-350">
            Connect Wallet
          </button>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
