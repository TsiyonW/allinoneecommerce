
let bot;
export class BotService{
    static startBot() {
        //let bot;
        const TelegramBot = require('node-telegram-bot-api');
        //token given from telegram botfather
        const token = process.env.BOT_TOKEN;
        console.log(token);
        if (process.env.NODE_ENV === 'production'){
            bot = new TelegramBot(token);
            bot.setWebHook(process.env.HEROKU_URL + bot.token);

        }else{
            bot = new TelegramBot(token, {polling: true})
        }
    
    
    }
}
module.exports = bot;
