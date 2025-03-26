
const About = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-right">
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              About
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Unified Solution for Token Management
            </h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
              <p>
                The Solana DeFi Token Assistant leverages the Solana Agent Kit to provide a comprehensive 
                solution for token management on the Solana blockchain, making it accessible to both 
                beginners and experienced DeFi enthusiasts.
              </p>
              <p>
                Our platform combines powerful multi-platform bot capabilities with a futuristic web 
                dashboard, allowing you to create, manage, and analyze Solana tokens with ease. 
              </p>
              <p>
                With a focus on AI-driven insights and intuitive design, we're revolutionizing how 
                users interact with Solana's DeFi ecosystem.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="glass-card p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Token Creation</h3>
                  <p className="text-sm text-muted-foreground">Quick & simple process</p>
                </div>
              </div>
              
              <div className="glass-card p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Security First</h3>
                  <p className="text-sm text-muted-foreground">Your assets, protected</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-slide-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-solana-blue/20 rounded-3xl filter blur-3xl"></div>
            <div className="relative glass-card p-6 rounded-2xl shadow-xl">
              <div className="aspect-video bg-background rounded-lg overflow-hidden flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">S</span>
                        </div>
                        <span className="font-medium">Solana Agent Kit</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-solana-green/10 text-solana-green text-xs font-medium">
                        Connected
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-border"></div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Network</span>
                        <span className="text-sm font-medium">Solana Mainnet</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Status</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-solana-green"></div>
                          <span className="text-sm font-medium">Active</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Agents</span>
                        <span className="text-sm font-medium">5 Connected</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-border"></div>
                    
                    <div className="glass-card p-4 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Last Command</span>
                        <span className="text-sm text-primary">/create</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Token created successfully. Transaction ID: 4Zpf...8mKt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">AI-Powered Insights</h3>
                  <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">
                    Updating live
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The Solana Agent Kit is processing market data to provide insights on your token's performance.
                </p>
                <div className="w-full bg-secondary rounded-full h-1.5 mt-2">
                  <div className="bg-primary h-1.5 rounded-full w-[75%] animate-pulse-slow"></div>
                </div>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Processing data</span>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
