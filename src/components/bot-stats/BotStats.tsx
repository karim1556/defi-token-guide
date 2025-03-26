
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlatformStats from "./PlatformStats";
import CommandStats from "./CommandStats";
import UsageOverTime from "./UsageOverTime";
import UserStats from "./UserStats";
import { mockTelegramStats, mockDiscordStats } from "./mock-data";

const BotStats = () => {
  const [period, setPeriod] = useState<"day" | "week" | "month" | "year">("week");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Bot Usage Statistics</h2>
        <div className="flex space-x-2 bg-muted p-1 rounded-md">
          <button 
            className={`px-3 py-1 rounded ${period === 'day' ? 'bg-background shadow' : ''}`}
            onClick={() => setPeriod('day')}
          >
            Day
          </button>
          <button 
            className={`px-3 py-1 rounded ${period === 'week' ? 'bg-background shadow' : ''}`}
            onClick={() => setPeriod('week')}
          >
            Week
          </button>
          <button 
            className={`px-3 py-1 rounded ${period === 'month' ? 'bg-background shadow' : ''}`}
            onClick={() => setPeriod('month')}
          >
            Month
          </button>
          <button 
            className={`px-3 py-1 rounded ${period === 'year' ? 'bg-background shadow' : ''}`}
            onClick={() => setPeriod('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlatformStats telegramStats={mockTelegramStats} discordStats={mockDiscordStats} />
        <CommandStats telegramStats={mockTelegramStats} discordStats={mockDiscordStats} period={period} />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Usage Over Time</CardTitle>
          <CardDescription>Command usage frequency across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <UsageOverTime telegramStats={mockTelegramStats} discordStats={mockDiscordStats} period={period} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>User Engagement</CardTitle>
          <CardDescription>Active users and user growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="telegram">
            <TabsList className="mb-4">
              <TabsTrigger value="telegram">Telegram</TabsTrigger>
              <TabsTrigger value="discord">Discord</TabsTrigger>
            </TabsList>
            
            <TabsContent value="telegram">
              <UserStats stats={mockTelegramStats} period={period} />
            </TabsContent>
            
            <TabsContent value="discord">
              <UserStats stats={mockDiscordStats} period={period} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BotStats;
