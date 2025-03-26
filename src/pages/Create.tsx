
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    supply: "",
    decimals: "9",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to Solana and create the token
    console.log("Creating token with data:", formData);
    // Show a success message
    alert("This is a demo. In a real app, this would create a Solana token!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-slide-down">
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Create Token
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Launch Your Solana Token</h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Fill out the form below to create your own token on the Solana blockchain.
              Our assistant will guide you through the process.
            </p>
          </div>

          <div className="glass-morph rounded-2xl p-8 animate-scale">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Token Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Solana DeFi Token"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                  <p className="text-xs text-muted-foreground">
                    The full name of your token
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="symbol" className="text-sm font-medium">
                    Token Symbol <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="symbol"
                    name="symbol"
                    type="text"
                    required
                    value={formData.symbol}
                    onChange={handleChange}
                    placeholder="e.g., SDT"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                  <p className="text-xs text-muted-foreground">
                    A short ticker symbol (2-5 characters recommended)
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="supply" className="text-sm font-medium">
                    Total Supply <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="supply"
                    name="supply"
                    type="text"
                    required
                    value={formData.supply}
                    onChange={handleChange}
                    placeholder="e.g., 1000000"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                  <p className="text-xs text-muted-foreground">
                    The total number of tokens to create
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="decimals" className="text-sm font-medium">
                    Decimals <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="decimals"
                    name="decimals"
                    type="number"
                    required
                    min="0"
                    max="9"
                    value={formData.decimals}
                    onChange={handleChange}
                    placeholder="e.g., 9"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  />
                  <p className="text-xs text-muted-foreground">
                    Number of decimal places (9 recommended for Solana)
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your token and its purpose..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Optional: Provide details about your token's purpose and use cases
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Logo URL
                </label>
                <input
                  id="image"
                  name="image"
                  type="url"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/token-logo.png"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                />
                <p className="text-xs text-muted-foreground">
                  Optional: Link to your token's logo image (recommended size: 200x200)
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="neo-button w-full px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-350"
                >
                  Create Token
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Note: This is a demo. In a real application, this would connect to a wallet
                  and create a real Solana token.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
