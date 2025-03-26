
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqItems = [
  {
    question: "What is the Solana DeFi Token Assistant?",
    answer:
      "The Solana DeFi Token Assistant is a unified solution for simplified token management on the Solana blockchain. It combines a multi-platform bot (available on Discord and Telegram) with a web dashboard, allowing you to create, manage, and analyze Solana tokens with ease.",
  },
  {
    question: "How do I create a token on Solana?",
    answer:
      "You can create a Solana token through our web dashboard by navigating to the 'Create' page and filling out the token details form. Alternatively, you can use our bot commands by typing '/create' in our Discord or Telegram bots.",
  },
  {
    question: "What is the Solana Agent Kit?",
    answer:
      "The Solana Agent Kit is a powerful toolkit that connects AI agents to Solana protocols, enabling autonomous execution of various Solana actions. Our assistant leverages this kit for token operations, NFT management, and DeFi integrations.",
  },
  {
    question: "Is this service free to use?",
    answer:
      "We offer both free and premium tiers. The free tier includes basic token creation and management features, while the premium tier provides access to advanced analytics, AI-powered insights, and additional customization options.",
  },
  {
    question: "How secure is the Solana DeFi Token Assistant?",
    answer:
      "Security is our top priority. We implement industry-standard security measures and best practices to protect your assets and information. Our platform never stores your private keys, and all transactions require your explicit approval.",
  },
  {
    question: "What AI features are available?",
    answer:
      "Our platform uses AI to provide market insights, price predictions, and optimization recommendations for your tokens. The AI analyzes on-chain data and market trends to offer valuable insights for token creators and managers.",
  },
  {
    question: "How do I connect my wallet?",
    answer:
      "You can connect your Solana wallet by clicking the 'Connect Wallet' button in the navigation bar. We support popular wallets like Phantom, Solflare, and Backpack.",
  },
  {
    question: "Can I use the bot without the web dashboard?",
    answer:
      "Yes, our Discord and Telegram bots provide full functionality for token creation and management, allowing you to use our services without accessing the web dashboard.",
  },
];

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-down">
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Help & Support
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold">
              How Can We Help You?
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Find answers to common questions and learn how to make the most of
              the Solana DeFi Token Assistant.
            </p>
          </div>

          <div className="mb-12 animate-slide-up">
            <div className="glass-morph rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Bot Commands</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                    </svg>
                    <h3 className="text-lg font-medium">Discord</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <code className="px-2 py-1 bg-secondary rounded text-sm">
                        /create
                      </code>
                      <span className="text-sm text-muted-foreground">
                        Create a new Solana token
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <code className="px-2 py-1 bg-secondary rounded text-sm">
                        /stats
                      </code>
                      <span className="text-sm text-muted-foreground">
                        Get market insights and token statistics
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <code className="px-2 py-1 bg-secondary rounded text-sm">
                        /help
                      </code>
                      <span className="text-sm text-muted-foreground">
                        Display help information and available commands
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    <h3 className="text-lg font-medium">Telegram</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <code className="px-2 py-1 bg-secondary rounded text-sm">
                        /create
                      </code>
                      <span className="text-sm text-muted-foreground">
                        Create a new Solana token
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <code className="px-2 py-1 bg-secondary rounded text-sm">
                        /stats
                      </code>
                      <span className="text-sm text-muted-foreground">
                        Get market insights and token statistics
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <code className="px-2 py-1 bg-secondary rounded text-sm">
                        /help
                      </code>
                      <span className="text-sm text-muted-foreground">
                        Display help information and available commands
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="glass-morph rounded-xl overflow-hidden animate-scale"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                      <h3 className="text-lg font-medium">{item.question}</h3>
                      <svg
                        className="w-5 h-5 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 pt-2 text-muted-foreground">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="glass-morph rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Contact our support team or
                join our community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="neo-button px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-350 text-center"
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-350 text-center"
                >
                  Join Our Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
