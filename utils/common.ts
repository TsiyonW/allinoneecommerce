require('dotenv').config();

export class BotService{
    static startBot() {
    const TelegramBot = require('node-telegram-bot-api');
    //token given from telegram botfather
    const token = process.env.BOT_TOKEN;
    console.log(token);
    
    
    }
}

