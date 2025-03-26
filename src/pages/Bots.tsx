
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/toast";

const Bots = () => {
  const { toast } = useToast();
  const [telegramEnabled, setTelegramEnabled] = useState(false);
  const [discordEnabled, setDiscordEnabled] = useState(false);
  const [telegramToken, setTelegramToken] = useState("");
  const [discordToken, setDiscordToken] = useState("");
  const [discordClientId, setDiscordClientId] = useState("");
  const [discordGuildId, setDiscordGuildId] = useState("");

  const handleSaveTelegram = () => {
    // In a real app, you would save this to your backend/database
    toast({
      title: "Telegram Bot Settings Saved",
      description: telegramEnabled 
        ? "Telegram bot has been enabled with the provided token." 
        : "Telegram bot has been disabled.",
    });
  };

  const handleSaveDiscord = () => {
    // In a real app, you would save this to your backend/database
    toast({
      title: "Discord Bot Settings Saved",
      description: discordEnabled 
        ? "Discord bot has been enabled with the provided credentials." 
        : "Discord bot has been disabled.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-slide-down">
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Bot Configuration
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold">
              Configure Your Bots
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Set up your Telegram and Discord bots to interact with users across multiple platforms.
            </p>
          </div>

          <Alert className="mb-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5 text-amber-600 dark:text-amber-500"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <AlertTitle className="text-amber-800 dark:text-amber-500">Important</AlertTitle>
            <AlertDescription className="text-amber-700 dark:text-amber-400">
              In a production environment, you should store your bot tokens securely on the server side. 
              This demo is for configuration purposes only.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="telegram" className="mb-10">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="telegram">Telegram Bot</TabsTrigger>
              <TabsTrigger value="discord">Discord Bot</TabsTrigger>
            </TabsList>
            
            <TabsContent value="telegram">
              <Card className="glass-morph">
                <CardHeader>
                  <CardTitle>Telegram Bot Configuration</CardTitle>
                  <CardDescription>
                    Configure your Telegram bot to interact with users on Telegram.
                  </CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Switch 
                      checked={telegramEnabled} 
                      onCheckedChange={setTelegramEnabled} 
                      id="telegram-enabled" 
                    />
                    <Label htmlFor="telegram-enabled">
                      {telegramEnabled ? "Enabled" : "Disabled"}
                    </Label>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="telegram-token">Bot Token</Label>
                    <Input 
                      id="telegram-token" 
                      type="password" 
                      value={telegramToken}
                      onChange={(e) => setTelegramToken(e.target.value)}
                      placeholder="Enter your Telegram bot token" 
                      disabled={!telegramEnabled}
                    />
                    <p className="text-xs text-muted-foreground">
                      You can get a bot token by talking to <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@BotFather</a> on Telegram.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveTelegram}>
                    Save Telegram Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="discord">
              <Card className="glass-morph">
                <CardHeader>
                  <CardTitle>Discord Bot Configuration</CardTitle>
                  <CardDescription>
                    Configure your Discord bot to interact with users on Discord.
                  </CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Switch 
                      checked={discordEnabled} 
                      onCheckedChange={setDiscordEnabled} 
                      id="discord-enabled" 
                    />
                    <Label htmlFor="discord-enabled">
                      {discordEnabled ? "Enabled" : "Disabled"}
                    </Label>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="discord-token">Bot Token</Label>
                    <Input 
                      id="discord-token" 
                      type="password"
                      value={discordToken}
                      onChange={(e) => setDiscordToken(e.target.value)}
                      placeholder="Enter your Discord bot token" 
                      disabled={!discordEnabled}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discord-client-id">Client ID</Label>
                    <Input 
                      id="discord-client-id" 
                      value={discordClientId}
                      onChange={(e) => setDiscordClientId(e.target.value)}
                      placeholder="Enter your Discord application client ID" 
                      disabled={!discordEnabled}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discord-guild-id">Guild ID (Optional)</Label>
                    <Input 
                      id="discord-guild-id" 
                      value={discordGuildId}
                      onChange={(e) => setDiscordGuildId(e.target.value)}
                      placeholder="For development, enter a specific guild ID" 
                      disabled={!discordEnabled}
                    />
                    <p className="text-xs text-muted-foreground">
                      For development, you can specify a guild ID to make slash commands update instantly.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveDiscord}>
                    Save Discord Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="animate-slide-up space-y-6">
            <h2 className="text-2xl font-semibold">Bot Commands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>/create</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Initiates a Solana token creation process, guiding users through the required parameters.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>/stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Retrieves real-time Solana market insights and token statistics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>/help</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides assistance and usage guidance for all available commands.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bots;
