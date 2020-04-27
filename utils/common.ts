import { getSearchResults, removeItem, removeUser, emptySavedItem, register, getUser, getItems, saveItem } from './request';

export let bot: any;

export class BotService{

    static startBot() {
        let data: any;
        
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
                \nFor a detailed info, please use /help!`);
          });



          //on '/search' command
          
          bot.onText(/\/search(.+)/, async (message: any, match: any) => {
            const chatId = message.chat.id;
            const item = match[1]
            console.log("nbjhnbj", item)
            console.log(item)
            const retunData: any = await getSearchResults(item)
            const data_length: any = retunData['data']['search'].length;
            data = retunData['data']['search'];
            var options = {
              reply_markup: JSON.stringify({
                   inline_keyboard: data.map((x: any, xi:any) => ([{
                       text: `Search result- ${x.item} ${x.unitPrice}`,
                       callback_data: String(xi),
                   }])),
             })}
            bot.sendMessage(chatId, `Search done! found ${data_length} items.`, options);
            
            
          });
          

          //on '/saved_items' command
          bot.onText(/\/saved_items/, async (message: any) => {
            const chatId = message.chat.id;
            const items: any = await getItems(chatId.toString());
            console.log("saved:", items.data)
            //get saved items with chat id
          });


          bot.onText(/\/delete_account/, async (message: any) => {
            const chatId = message.chat.id.toString();
            // const removeAcc: any = await removeUser(chatId);
            
          });

          // on '/help' command
          bot.onText(/\/help/, function (message: any) {
            const chatId = message.chat.id.toString();
            bot.sendMessage(chatId, `Welcome to the help message.\n Commands\n 
/start - to register and start using this bot 
/search - search an item
/saved_items - to view saved items
/help - to view this message
/clear_saved - to remove saved items
/delete_account - to remove you account on this bot`);
            //send some message
          });


          bot.on('callback_query', async function onCallbackQuery(callbackQuery: any) {
            const action = callbackQuery.data;
            const chatId = callbackQuery.from.id;
            const msg = callbackQuery.message;
            console.log(callbackQuery, Number(action))
            const opts = {
              chat_id: msg.chat.id.toString(),
              message_id: msg.message_id,
            };
            
              if(typeof(Number(action)) === "number"){
                const selected: any = data[Number(action)];
                console.log(selected)
                
                bot.sendPhoto(chatId, selected.image,{
                  caption: `Item: ${selected.item}\nSite: ${selected.site}\nPrice: ${selected.unitPrice}\nDescription: ${selected.description} `,
                  'reply_markup': JSON.stringify({
                    inline_keyboard: [
                        [
                          {
                            text: 'View Site',
                            callback_data: 'view_site'
                          },
                          {
                              text: 'Save Item',
                              callback_data: selected.image,
                          }
                        ]
                      ]
                
                } )
              })
              }
            
            else if(action === "save_item"){
          
                // bot.sendMessage(opts.chat_id, text);
              }
            
          else if(action === "remove_item"){
          
            // bot.sendMessage(opts.chat_id, text);
          }
        })
    }
}
