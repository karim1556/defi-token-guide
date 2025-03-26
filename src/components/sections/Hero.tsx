
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-solana-blue opacity-20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="flex flex-col justify-center space-y-8 animate-slide-up">
          <div>
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Solana Token Management
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Simplified Token Management on <span className="text-primary">Solana</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Create, manage, and analyze Solana tokens with our intelligent DeFi assistant.
              Designed for developers and token creators.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/create" 
              className="neo-button px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-350 text-center"
            >
              Create Token
            </Link>
            <Link 
              to="/stats" 
              className="px-6 py-3 rounded-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-350 text-center"
            >
              View Stats
            </Link>
          </div>
          
          <div className="flex items-center space-x-8 pt-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300+</span>
              <span className="text-sm text-muted-foreground">Tokens Created</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">5K+</span>
              <span className="text-sm text-muted-foreground">Daily Users</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">99%</span>
              <span className="text-sm text-muted-foreground">Success Rate</span>
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center lg:justify-end animate-slide-left">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full opacity-70 filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -right-4 w-72 h-72 bg-solana-blue rounded-full opacity-70 filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
            
            <div className="relative glass-morph rounded-2xl p-6 shadow-xl">
              <div className="absolute -top-10 left-10 w-20 h-20 glass-morph rounded-xl flex items-center justify-center transform rotate-12 animate-float">
                <svg className="w-10 h-10 text-solana-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" fill="currentColor"/>
                  <path d="M4 11C4 10.4477 4.44772 10 5 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H5C4.44772 14 4 13.5523 4 13V11Z" fill="currentColor"/>
                  <path d="M5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H5Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-10 right-10 w-20 h-20 glass-morph rounded-xl flex items-center justify-center transform -rotate-12 animate-float animation-delay-4000">
                <svg className="w-10 h-10 text-solana-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="currentColor"/>
                  <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold">Create Solana Token</h3>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Token Name</label>
                  <input 
                    type="text" 
                    placeholder="My Awesome Token" 
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Token Symbol</label>
                  <input 
                    type="text" 
                    placeholder="MAT" 
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total Supply</label>
                  <input 
                    type="text" 
                    placeholder="1,000,000" 
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Decimals</label>
                  <input 
                    type="number" 
                    placeholder="9" 
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                </div>
                
                <button className="w-full mt-2 neo-button px-4 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-350">
                  Create Token
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
