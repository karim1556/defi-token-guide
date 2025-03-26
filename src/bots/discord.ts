
import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } from 'discord.js';
import { CommandType, executeCommand } from './commands';
import { DiscordConfig } from './types';

export class DiscordBot {
  private client: Client;
  private config: DiscordConfig;
  private rest: REST;
  
  constructor(config: DiscordConfig) {
    this.config = config;
    
    // Initialize client with intents
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
      ],
    });
    
    this.rest = new REST({ version: '10' }).setToken(this.config.token);
    
    // Register event handlers
    this.setupEvents();
  }
  
  private async registerCommands() {
    const commands = [
      new SlashCommandBuilder()
        .setName(CommandType.CREATE)
        .setDescription('Create a new Solana token'),
      new SlashCommandBuilder()
        .setName(CommandType.STATS)
        .setDescription('Get Solana market insights'),
      new SlashCommandBuilder()
        .setName(CommandType.HELP)
        .setDescription('Show help information'),
    ].map(command => command.toJSON());
    
    try {
      console.log('Started refreshing Discord application (/) commands');
      
      // If guildId is provided, register commands to specific guild (faster for development)
      if (this.config.guildId) {
        await this.rest.put(
          Routes.applicationGuildCommands(this.config.clientId, this.config.guildId),
          { body: commands }
        );
        console.log(`Successfully registered commands to guild ${this.config.guildId}`);
      } else {
        // Global commands (takes up to an hour to propagate)
        await this.rest.put(
          Routes.applicationCommands(this.config.clientId),
          { body: commands }
        );
        console.log('Successfully registered global commands');
      }
    } catch (error) {
      console.error('Error registering Discord commands:', error);
    }
  }
  
  private setupEvents() {
    // Ready event
    this.client.once('ready', () => {
      console.log(`Discord bot logged in as ${this.client.user?.tag}`);
      this.registerCommands();
    });
    
    // Interaction event (slash commands)
    this.client.on('interactionCreate', async (interaction) => {
      if (!interaction.isCommand()) return;
      
      const { commandName } = interaction;
      
      // Handle commands
      if (Object.values(CommandType).includes(commandName as CommandType)) {
        await interaction.deferReply();
        const result = await executeCommand(commandName as CommandType);
        await interaction.editReply(result.text);
      }
    });
    
    // Error handling
    this.client.on('error', (error) => {
      console.error('Discord bot error:', error);
    });
  }
  
  public async start() {
    if (!this.config.enabled) {
      console.log('Discord bot is disabled. Skipping startup.');
      return;
    }
    
    try {
      await this.client.login(this.config.token);
      console.log('Discord bot started successfully');
    } catch (error) {
      console.error('Failed to start Discord bot:', error);
    }
  }
  
  public async stop() {
    console.log('Stopping Discord bot');
    this.client.destroy();
  }
}

// Default export factory function
export default (config: DiscordConfig) => new DiscordBot(config);
