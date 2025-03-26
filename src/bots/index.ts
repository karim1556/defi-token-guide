
import telegramBotFactory, { TelegramBot } from './telegram';
import discordBotFactory, { DiscordBot } from './discord';
import { DiscordConfig, TelegramConfig } from './types';

export class BotManager {
  private telegramBot: TelegramBot | null = null;
  private discordBot: DiscordBot | null = null;
  
  constructor(
    private telegramConfig: TelegramConfig,
    private discordConfig: DiscordConfig
  ) {}
  
  public async start() {
    console.log('Starting bot services...');
    
    // Start Telegram bot if enabled
    if (this.telegramConfig.enabled) {
      this.telegramBot = telegramBotFactory(this.telegramConfig);
      await this.telegramBot.start();
    }
    
    // Start Discord bot if enabled
    if (this.discordConfig.enabled) {
      this.discordBot = discordBotFactory(this.discordConfig);
      await this.discordBot.start();
    }
    
    console.log('All enabled bot services started');
  }
  
  public async stop() {
    console.log('Stopping bot services...');
    
    // Stop Telegram bot if running
    if (this.telegramBot) {
      await this.telegramBot.stop();
    }
    
    // Stop Discord bot if running
    if (this.discordBot) {
      await this.discordBot.stop();
    }
    
    console.log('All bot services stopped');
  }
}

// Config example (in a real app, load from environment variables)
const defaultConfig = {
  telegram: {
    token: 'YOUR_TELEGRAM_BOT_TOKEN',
    enabled: false,
    webhookUrl: undefined,
  },
  discord: {
    token: 'YOUR_DISCORD_BOT_TOKEN',
    clientId: 'YOUR_DISCORD_CLIENT_ID',
    enabled: false,
    guildId: undefined,
  },
};

// Helper to create a bot manager
export const createBotManager = (
  telegramConfig: Partial<TelegramConfig> = {},
  discordConfig: Partial<DiscordConfig> = {}
) => {
  return new BotManager(
    { ...defaultConfig.telegram, ...telegramConfig },
    { ...defaultConfig.discord, ...discordConfig }
  );
};

export default createBotManager;
