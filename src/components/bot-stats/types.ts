
export interface BotStatistics {
  platform: "telegram" | "discord";
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  totalCommands: number;
  commandUsage: {
    create: number;
    stats: number;
    help: number;
  };
  servers?: number; // Only for Discord
  dailyActivity: {
    date: string;
    commands: number;
    users: number;
  }[];
}
