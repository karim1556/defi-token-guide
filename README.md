
# Solana DeFi Token Assistant

A unified solution for simplified token management on the Solana blockchain, featuring a multi-platform bot system (Discord & Telegram) and web dashboard.

## Features

- Multi-platform bot support (Discord & Telegram)
- Consistent command structure across platforms
- Web dashboard for token project management
- Integration with Solana blockchain

## Commands

- `/create` - Initiates a Solana token project
- `/stats` - Retrieves real-time Solana market insights
- `/help` - Provides assistance and usage guidance

## Environment Setup

1. Copy the `.env.example` file to a new file called `.env`
2. Fill in the required environment variables:

### Telegram Bot Setup

1. Create a new bot on Telegram by messaging [@BotFather](https://t.me/BotFather)
2. Follow the instructions to create a bot and receive a token
3. Set the `TELEGRAM_BOT_TOKEN` in your `.env` file
4. Set `TELEGRAM_ENABLED=true` to enable the Telegram bot

### Discord Bot Setup

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Navigate to the "Bot" tab and add a bot
4. Copy the token and set `DISCORD_BOT_TOKEN` in your `.env` file
5. Copy the application ID and set `DISCORD_CLIENT_ID` in your `.env` file
6. For development, you can set `DISCORD_GUILD_ID` to a specific server ID
7. Set `DISCORD_ENABLED=true` to enable the Discord bot

## Installation and Running

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd solana-defi-token-assistant

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the web application and bots
npm run dev
```

## Bot Features

- **Token Creation**: Guide users through creating Solana tokens
- **Market Stats**: Provide real-time Solana market insights
- **Help System**: Assist users with available commands and usage

## Web Dashboard

The web dashboard provides a user-friendly interface for:

- Token project management
- Solana market analytics
- User account management

## Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
