
import { useState, useEffect } from 'react';

const tokens = [
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 144.23,
    change24h: 5.67,
    marketCap: '67.2B',
    logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
  },
  {
    name: 'Bonk',
    symbol: 'BONK',
    price: 0.000029,
    change24h: -2.34,
    marketCap: '1.8B',
    logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png',
  },
  {
    name: 'Raydium',
    symbol: 'RAY',
    price: 1.87,
    change24h: 3.21,
    marketCap: '456.7M',
    logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png',
  },
  {
    name: 'Orca',
    symbol: 'ORCA',
    price: 1.23,
    change24h: 1.45,
    marketCap: '301.2M',
    logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png',
  },
];

const StatsSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Market Stats
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Solana Token Insights
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Real-time data and analytics for popular tokens on the Solana blockchain.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 glass-card px-6 py-3 flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Last updated:</span>
            <span className="text-sm font-medium">{currentTime.toLocaleTimeString()}</span>
            <div className="w-2 h-2 rounded-full bg-solana-green animate-pulse"></div>
          </div>
        </div>
        
        <div className="overflow-x-auto glass-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-medium">#</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Token</th>
                <th className="px-6 py-4 text-right text-sm font-medium">Price</th>
                <th className="px-6 py-4 text-right text-sm font-medium">24h %</th>
                <th className="px-6 py-4 text-right text-sm font-medium">Market Cap</th>
                <th className="px-6 py-4 text-right text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr 
                  key={index} 
                  className="transition-colors hover:bg-primary/5 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={token.logo} 
                        alt={token.name} 
                        className="w-8 h-8 rounded-full"
                        onError={(e) => {
                          e.currentTarget.src = 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png';
                        }}
                      />
                      <div>
                        <div className="font-medium">{token.name}</div>
                        <div className="text-xs text-muted-foreground">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm">
                    ${token.price < 0.01 ? token.price.toFixed(6) : token.price.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 text-right text-sm ${token.change24h >= 0 ? 'text-solana-green' : 'text-destructive'}`}>
                    {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                  </td>
                  <td className="px-6 py-4 text-right text-sm">
                    ${token.marketCap}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/stats" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View complete market stats</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
