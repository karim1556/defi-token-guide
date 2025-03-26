
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock data for our demo
const mockTokens = [
  {
    name: "Solana",
    symbol: "SOL",
    price: 144.23,
    change24h: 5.67,
    volume24h: "2.1B",
    marketCap: "67.2B",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
  },
  {
    name: "Bonk",
    symbol: "BONK",
    price: 0.000029,
    change24h: -2.34,
    volume24h: "142.3M",
    marketCap: "1.8B",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png",
  },
  {
    name: "Raydium",
    symbol: "RAY",
    price: 1.87,
    change24h: 3.21,
    volume24h: "65.8M",
    marketCap: "456.7M",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png",
  },
  {
    name: "Orca",
    symbol: "ORCA",
    price: 1.23,
    change24h: 1.45,
    volume24h: "47.2M",
    marketCap: "301.2M",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png",
  },
  {
    name: "Jito",
    symbol: "JTO",
    price: 3.56,
    change24h: 0.78,
    volume24h: "38.9M",
    marketCap: "410.5M",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JitoExchAB9wBbHU5UuPMkBhRvwv5Gs9Vu8qLabs3PV/logo.png",
  },
  {
    name: "Marinade",
    symbol: "MNDE",
    price: 0.14,
    change24h: -0.92,
    volume24h: "3.1M",
    marketCap: "28.7M",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png",
  },
  {
    name: "Pyth Network",
    symbol: "PYTH",
    price: 0.67,
    change24h: 2.14,
    volume24h: "23.4M",
    marketCap: "402.1M",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3/logo.png",
  },
  {
    name: "Star Atlas",
    symbol: "ATLAS",
    price: 0.0041,
    change24h: -1.23,
    volume24h: "2.8M",
    marketCap: "89.2M",
    logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png",
  },
];

const Stats = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  }>({
    key: "marketCap",
    direction: "descending",
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredTokens = mockTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 animate-slide-down">
            <div>
              <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                Statistics
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold">
                Solana Token Market
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Detailed analytics and market data for tokens on the Solana blockchain.
                Track prices, market cap, volume, and more.
              </p>
            </div>

            <div className="mt-6 md:mt-0 glass-card px-6 py-3 flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Last updated:</span>
              <span className="text-sm font-medium">
                {currentTime.toLocaleTimeString()}
              </span>
              <div className="w-2 h-2 rounded-full bg-solana-green animate-pulse"></div>
            </div>
          </div>

          <div className="mb-6 glass-card p-4 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search tokens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="px-4 py-2 glass-card rounded-lg flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-solana-green"></div>
                  <span className="text-sm font-medium">Solana: $144.23</span>
                </div>
                <div className="px-4 py-2 glass-card rounded-lg flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-sm font-medium">Market: $76.5B</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto glass-card animate-scale">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-medium">#</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    <button
                      className="flex items-center space-x-1"
                      onClick={() => requestSort("name")}
                    >
                      <span>Token</span>
                      {sortConfig.key === "name" && (
                        <span>
                          {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium">
                    <button
                      className="flex items-center space-x-1 ml-auto"
                      onClick={() => requestSort("price")}
                    >
                      <span>Price</span>
                      {sortConfig.key === "price" && (
                        <span>
                          {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium">
                    <button
                      className="flex items-center space-x-1 ml-auto"
                      onClick={() => requestSort("change24h")}
                    >
                      <span>24h %</span>
                      {sortConfig.key === "change24h" && (
                        <span>
                          {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium">
                    <button
                      className="flex items-center space-x-1 ml-auto"
                      onClick={() => requestSort("volume24h")}
                    >
                      <span>Volume (24h)</span>
                      {sortConfig.key === "volume24h" && (
                        <span>
                          {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium">
                    <button
                      className="flex items-center space-x-1 ml-auto"
                      onClick={() => requestSort("marketCap")}
                    >
                      <span>Market Cap</span>
                      {sortConfig.key === "marketCap" && (
                        <span>
                          {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedTokens.map((token, index) => (
                  <tr
                    key={token.symbol}
                    className="transition-colors hover:bg-primary/5 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-6 py-4 text-sm">{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={token.logo}
                          alt={token.name}
                          className="w-8 h-8 rounded-full"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png";
                          }}
                        />
                        <div>
                          <div className="font-medium">{token.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {token.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm">
                      $
                      {token.price < 0.01
                        ? token.price.toFixed(6)
                        : token.price.toFixed(2)}
                    </td>
                    <td
                      className={`px-6 py-4 text-right text-sm ${
                        token.change24h >= 0
                          ? "text-solana-green"
                          : "text-destructive"
                      }`}
                    >
                      {token.change24h >= 0 ? "+" : ""}
                      {token.change24h.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 text-right text-sm">
                      ${token.volume24h}
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Market Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Total Market Cap
                  </span>
                  <span className="text-sm font-medium">$76.5B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    24h Volume
                  </span>
                  <span className="text-sm font-medium">$2.4B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Solana Dominance
                  </span>
                  <span className="text-sm font-medium">87.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Active Tokens
                  </span>
                  <span className="text-sm font-medium">500+</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Top Gainers (24h)</h3>
              <div className="space-y-3">
                {mockTokens
                  .filter((t) => t.change24h > 0)
                  .sort((a, b) => b.change24h - a.change24h)
                  .slice(0, 4)
                  .map((token) => (
                    <div key={token.symbol} className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={token.logo}
                          alt={token.name}
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-sm">{token.symbol}</span>
                      </div>
                      <span className="text-sm text-solana-green">
                        +{token.change24h.toFixed(2)}%
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Top Losers (24h)</h3>
              <div className="space-y-3">
                {mockTokens
                  .filter((t) => t.change24h < 0)
                  .sort((a, b) => a.change24h - b.change24h)
                  .slice(0, 4)
                  .map((token) => (
                    <div key={token.symbol} className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={token.logo}
                          alt={token.name}
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-sm">{token.symbol}</span>
                      </div>
                      <span className="text-sm text-destructive">
                        {token.change24h.toFixed(2)}%
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">AI Insights</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Market sentiment is currently bullish with increasing trading volume
                  across the Solana ecosystem.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-solana-green"></div>
                  <span className="text-sm">Bullish market sentiment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Increased developer activity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-solana-blue"></div>
                  <span className="text-sm">Rising transaction volume</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stats;
