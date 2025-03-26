
// Common types for both Discord and Telegram bots

export interface CommandResult {
  text: string;
  success: boolean;
  attachments?: any[];
}

export type CommandHandler = (params: Record<string, any>) => Promise<CommandResult>;

export interface BotConfig {
  token: string;
  enabled: boolean;
}

export interface DiscordConfig extends BotConfig {
  clientId: string;
  guildId?: string;
}

export interface TelegramConfig extends BotConfig {
  webhookUrl?: string;
}
