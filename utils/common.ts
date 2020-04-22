
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
        bot.onText(/\/start/, function (message: any) {
            const chatId = message.chat.id;
          
            // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(
                chatId, 
                `👋Welcome, @${message.chat.username} to @all_in_one_ecommerce_bot. \nHere you can 🔎search, and control all your ecommerce accounts at one place. 
                \nFor a detailed info, please use /help!`,
                {
                    'reply_markup': {
                        inline_keyboard: [
                            [
                              {
                                text: 'Search',
                                // we shall check for this value when we listen
                                // for "callback_query"
                                callback_data: 'search'
                              },
                              {
                                  text: 'Add e-commerce account',
                                  callback_data: 'add_account'
                              }
                            ]
                          ]
                    }
                 } );
          });
          bot.onText(/\/search/, function (message: any) {
            const chatId = message.chat.id;

            //call the search function
          });

          bot.onText(/\/add_/, function (message: any) {
            const chatId = message.chat.id;
          });

          bot.onText(/\/my_cart/, function (message: any) {
            const chatId = message.chat.id;
          });

          bot.onText(/\/my_wishlist/, function (message: any) {
            const chatId = message.chat.id;
          });

          bot.onText(/\/orders/, function (message: any) {
            const chatId = message.chat.id;
          });

          bot.onText(/\/settings/, function (message: any) {
            const chatId = message.chat.id;
          });

          bot.onText(/\/help/, function (message: any) {
            const chatId = message.chat.id;
          });
          bot.on('callback_query', function onCallbackQuery(callbackQuery: any) {
            const action = callbackQuery.data;
            const msg = callbackQuery.message;
            const opts = {
              chat_id: msg.chat.id,
              message_id: msg.message_id,
            };
            let text = ".";
          
            if (action === 'search') {
              text = 'search clicked';
            }
            else if(action === 'add_account'){
                text = 'add ecommerce account clicked';
            }
          
            bot.sendMessage(opts.chat_id, text);
          });
    }
}

