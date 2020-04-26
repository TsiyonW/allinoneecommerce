import { getSearchResults } from './request';
import { register } from './request';
import { getUser } from './request';
import { getItems } from './request'



export let bot: any;

export class BotService{

    static startBot() {
      
        const TelegramBot = require('node-telegram-bot-api');

        //token given from telegram botfather
        const token = process.env.BOT_TOKEN;
        console.log(token)

        if (process.env.NODE_ENV === 'production'){
            bot = new TelegramBot(token);
            bot.setWebHook('' + bot.token); //use webhooks in production

        }else{
            //otherwise use polling for faster experiance
            bot = new TelegramBot(token, {polling: true})
        }

        //on start command
        bot.onText(/\/start/, async (message: any) => {

            const chatId: string = message.chat.id.toString();
            let reg_user : any = await register(chatId);
            console.log("await", reg_user)
            
            // send a message to the chat 
            bot.sendMessage( chatId, 
                `👋Welcome, @${message.chat.username} to @all_in_one_ecommerce_bot. \nHere you can 🔎search from multiple sites and save items for later use. 
                \nFor a detailed info, please use /help!`,
                {
                    'reply_markup': {
                        inline_keyboard: [
                            [
                              {
                                text: 'Search',
                                callback_data: 'search'
                              },
                              {
                                  text: 'Saved Items',
                                  callback_data: 'saved_items'
                              }
                            ]
                          ]
                    }
                 } );
          });

          //on '/search' command
          bot.onText(/\/search (.+)/, async (message: any, match: any) => {
            const chatId = message.chat.id.toString();
            const item = match[1]
            
            console.log(await getSearchResults(item));
            
          });

          //on '/saved_items' command
          bot.onText(/\/saved_items/, async (message: any) => {
            const chatId = message.chat.id.toString();
            const items: any = await getItems(chatId);
            console.log(items.data)
            //get saved items with chat id
          });

          // on '/help' command
          bot.onText(/\/help/, function (message: any) {
            const chatId = message.chat.id.toString();
            //send some message
          });


          bot.on('callback_query', function onCallbackQuery(callbackQuery: any) {
            const action = callbackQuery.data;
            const msg = callbackQuery.message;
            const opts = {
              chat_id: msg.chat.id.toString(),
              message_id: msg.message_id,
            };
            let text = ".";
          
            if (action === 'search') {
              text = 'search clicked';
            }
            else if(action === 'add_item'){
                text = 'add ecommerce account clicked';
            }else if(action === 'saved_items'){

            }else if(action === "remove_item")
          
            bot.sendMessage(opts.chat_id, text);
          });
    }
}
