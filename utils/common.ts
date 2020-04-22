
export let bot: any;

export class BotService{

    static startBot() {
        //let bot;
        const TelegramBot = require('node-telegram-bot-api');
        //token given from telegram botfather
        const token = process.env.BOT_TOKEN;
        console.log(token);
        console.log(process.env.NODE_ENV)
        if (process.env.NODE_ENV === 'production'){
            bot = new TelegramBot(token);
            bot.setWebHook('https://my-web-root.com/' + bot.token);

        }else{
            console.log('Definitly pooling')
            bot = new TelegramBot(token, {polling: true})
        }
        bot.onText(/\/start/, function (message: { chat: { id: any; }; }) {
            const chatId = message.chat.id;
          
            // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(chatId, 
                `👋Welcome, ${chatId} to @all_in_one_ecommerce_bot Here you can 🔎search, add and control your multiple ecommerce accounts. \n🆘For a detailed list of commands, use /help!`,
                {
                    replay_markup: {
                        inline_keyboard: [[
                            {
                                text: 'Search',
                                callback_data: 'search'
                            },
                            {
                                text: 'Search',
                                callback_data: 'search'
                            },
                            {
                                text: 'Search',
                                callback_data: 'search'
                            }
                        ]]
                    }
                }
                );
          });
    }
}

