
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { createBotManager } from "@/bots";

const Bots = () => {
  const [telegramToken, setTelegramToken] = useState("");
  const [telegramEnabled, setTelegramEnabled] = useState(false);
  const [telegramWebhookUrl, setTelegramWebhookUrl] = useState("");
  
  const [discordToken, setDiscordToken] = useState("");
  const [discordClientId, setDiscordClientId] = useState("");
  const [discordGuildId, setDiscordGuildId] = useState("");
  const [discordEnabled, setDiscordEnabled] = useState(false);
  
  const [loading, setLoading] = useState(false);
  
  const handleStartBots = async () => {
    setLoading(true);
    
    try {
      // Create bot manager with provided configuration
      const botManager = createBotManager(
        {
          token: telegramToken,
          enabled: telegramEnabled,
          webhookUrl: telegramWebhookUrl || undefined,
        },
        {
          token: discordToken,
          clientId: discordClientId,
          guildId: discordGuildId || undefined,
          enabled: discordEnabled,
        }
      );
      
      // Start bot services
      await botManager.start();
      
      toast({
        title: "Bots Started",
        description: "Bot services have been started successfully.",
      });
    } catch (error) {
      console.error("Failed to start bots:", error);
      toast({
        title: "Error",
        description: "Failed to start bot services. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Bot Configuration</h1>
      
      <Tabs defaultValue="telegram">
        <TabsList className="mb-4">
          <TabsTrigger value="telegram">Telegram Bot</TabsTrigger>
          <TabsTrigger value="discord">Discord Bot</TabsTrigger>
        </TabsList>
        
        <TabsContent value="telegram">
          <Card>
            <CardHeader>
              <CardTitle>Telegram Bot Configuration</CardTitle>
              <CardDescription>Configure your Telegram bot settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="telegram-enabled">Enable Telegram Bot</Label>
                <Switch 
                  id="telegram-enabled" 
                  checked={telegramEnabled} 
                  onCheckedChange={setTelegramEnabled} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telegram-token">Bot Token</Label>
                <Input 
                  id="telegram-token" 
                  placeholder="Enter your Telegram bot token" 
                  value={telegramToken} 
                  onChange={(e) => setTelegramToken(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telegram-webhook">Webhook URL (Optional)</Label>
                <Input 
                  id="telegram-webhook" 
                  placeholder="Enter webhook URL for production" 
                  value={telegramWebhookUrl} 
                  onChange={(e) => setTelegramWebhookUrl(e.target.value)} 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="discord">
          <Card>
            <CardHeader>
              <CardTitle>Discord Bot Configuration</CardTitle>
              <CardDescription>Configure your Discord bot settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="discord-enabled">Enable Discord Bot</Label>
                <Switch 
                  id="discord-enabled" 
                  checked={discordEnabled} 
                  onCheckedChange={setDiscordEnabled} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discord-token">Bot Token</Label>
                <Input 
                  id="discord-token" 
                  placeholder="Enter your Discord bot token" 
                  value={discordToken} 
                  onChange={(e) => setDiscordToken(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discord-client-id">Client ID</Label>
                <Input 
                  id="discord-client-id" 
                  placeholder="Enter your Discord application client ID" 
                  value={discordClientId} 
                  onChange={(e) => setDiscordClientId(e.target.value)} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discord-guild-id">Guild ID (Optional)</Label>
                <Input 
                  id="discord-guild-id" 
                  placeholder="Enter development server ID" 
                  value={discordGuildId} 
                  onChange={(e) => setDiscordGuildId(e.target.value)} 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6">
        <Button 
          onClick={handleStartBots} 
          disabled={loading}
          className="w-full md:w-auto"
        >
          {loading ? "Starting Bots..." : "Start Bot Services"}
        </Button>
      </div>
    </div>
  );
};

export default Bots;
