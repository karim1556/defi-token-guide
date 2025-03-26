
import { BotStatistics } from "./types";

export const mockTelegramStats: BotStatistics = {
  platform: "telegram",
  totalUsers: 2547,
  activeUsers: 876,
  newUsers: 142,
  totalCommands: 12543,
  commandUsage: {
    create: 3241,
    stats: 7865,
    help: 1437,
  },
  dailyActivity: Array.from({ length: 30 }, (_, i) => ({
    date: `2023-06-${(i + 1).toString().padStart(2, '0')}`,
    commands: Math.floor(Math.random() * 300) + 100,
    users: Math.floor(Math.random() * 150) + 50,
  })),
};

export const mockDiscordStats: BotStatistics = {
  platform: "discord",
  totalUsers: 1893,
  activeUsers: 624,
  newUsers: 98,
  totalCommands: 9876,
  commandUsage: {
    create: 2187,
    stats: 6432,
    help: 1257,
  },
  servers: 42,
  dailyActivity: Array.from({ length: 30 }, (_, i) => ({
    date: `2023-06-${(i + 1).toString().padStart(2, '0')}`,
    commands: Math.floor(Math.random() * 250) + 80,
    users: Math.floor(Math.random() * 120) + 40,
  })),
};
