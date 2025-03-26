
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotStatistics } from "./types";

interface PlatformStatsProps {
  telegramStats: BotStatistics;
  discordStats: BotStatistics;
}

const PlatformStats: React.FC<PlatformStatsProps> = ({ telegramStats, discordStats }) => {
  const totalUsers = telegramStats.totalUsers + discordStats.totalUsers;
  const totalCommands = telegramStats.totalCommands + discordStats.totalCommands;
  const totalServers = discordStats.servers;
  
  const telegramPercentage = Math.round((telegramStats.totalUsers / totalUsers) * 100) || 0;
  const discordPercentage = Math.round((discordStats.totalUsers / totalUsers) * 100) || 0;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2 text-center">
            <span className="text-muted-foreground text-sm">Total Users</span>
            <div className="text-3xl font-bold">{totalUsers.toLocaleString()}</div>
          </div>
          <div className="space-y-2 text-center">
            <span className="text-muted-foreground text-sm">Commands Used</span>
            <div className="text-3xl font-bold">{totalCommands.toLocaleString()}</div>
          </div>
          <div className="space-y-2 text-center">
            <span className="text-muted-foreground text-sm">Discord Servers</span>
            <div className="text-3xl font-bold">{totalServers.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Telegram</span>
              <span className="text-sm text-muted-foreground">
                {telegramStats.totalUsers.toLocaleString()} users ({telegramPercentage}%)
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full" 
                style={{ width: `${telegramPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Discord</span>
              <span className="text-sm text-muted-foreground">
                {discordStats.totalUsers.toLocaleString()} users ({discordPercentage}%)
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 rounded-full" 
                style={{ width: `${discordPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformStats;
