import { Telegraf } from 'telegraf';
import { CommandType, executeCommand } from './commands';
import { TelegramConfig } from './types';

export class TelegramBot {
  private bot: Telegraf;
  private config: TelegramConfig;
  
  constructor(config: TelegramConfig) {
    this.config = config;
    this.bot = new Telegraf(this.config.token);
    
    // Setup commands
    this.setupCommands();
  }
  
  private setupCommands() {
    // Register commands with descriptions
    this.bot.telegram.setMyCommands([
      { command: CommandType.CREATE, description: 'Create a new Solana token' },
      { command: CommandType.STATS, description: 'Get Solana market insights' },
      { command: CommandType.HELP, description: 'Show help information' },
    ]);
    
    // Handle commands
    this.bot.command(CommandType.CREATE, async (ctx) => {
      const result = await executeCommand(CommandType.CREATE);
      ctx.reply(result.text, { parse_mode: 'Markdown' });
    });
    
    this.bot.command(CommandType.STATS, async (ctx) => {
      const result = await executeCommand(CommandType.STATS);
      ctx.reply(result.text, { parse_mode: 'Markdown' });
    });
    
    this.bot.command(CommandType.HELP, async (ctx) => {
      const result = await executeCommand(CommandType.HELP);
      ctx.reply(result.text, { parse_mode: 'Markdown' });
    });
    
    // Default handler for unknown commands
    this.bot.on('text', (ctx) => {
      ctx.reply('I don\'t understand that command. Type /help to see available commands.');
    });
  }
  
  public async start() {
    if (!this.config.enabled) {
      console.log('Telegram bot is disabled. Skipping startup.');
      return;
    }
    
    try {
      // If webhook URL is provided, use webhook mode
      if (this.config.webhookUrl) {
        console.log(`Starting Telegram bot in webhook mode: ${this.config.webhookUrl}`);
        await this.bot.telegram.setWebhook(this.config.webhookUrl);
      } else {
        // Otherwise use polling mode
        console.log('Starting Telegram bot in polling mode');
        await this.bot.launch();
      }
      console.log('Telegram bot started successfully');
    } catch (error) {
      console.error('Failed to start Telegram bot:', error);
    }
  }
  
  public async stop() {
    console.log('Stopping Telegram bot');
    this.bot.stop();
  }
}

// Default export factory function
export default (config: TelegramConfig) => new TelegramBot(config);
