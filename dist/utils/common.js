"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BotService = /** @class */ (function () {
    function BotService() {
    }
    BotService.startBot = function () {
        //let bot;
        var TelegramBot = require('node-telegram-bot-api');
        //token given from telegram botfather
        var token = process.env.BOT_TOKEN;
        console.log(token);
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'production') {
            exports.bot = new TelegramBot(token);
            exports.bot.setWebHook('https://my-web-root.com/' + exports.bot.token);
        }
        else {
            console.log('Definitly pooling');
            exports.bot = new TelegramBot(token, { polling: true });
        }
        exports.bot.onText(/\/start/, function (message) {
            var chatId = message.chat.id;
            // send a message to the chat acknowledging receipt of their message
            exports.bot.sendMessage(chatId, "\uD83D\uDC4BWelcome, @" + message.chat.username + " to @all_in_one_ecommerce_bot. \nHere you can \uD83D\uDD0Esearch, and control all your ecommerce accounts at one place. \n                \nFor a detailed info, please use /help!", {
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
            });
        });
        exports.bot.onText(/\/search/, function (message) {
            var chatId = message.chat.id;
            //call the search function
        });
        exports.bot.onText(/\/add_/, function (message) {
            var chatId = message.chat.id;
        });
        exports.bot.onText(/\/my_cart/, function (message) {
            var chatId = message.chat.id;
        });
        exports.bot.onText(/\/my_wishlist/, function (message) {
            var chatId = message.chat.id;
        });
        exports.bot.onText(/\/orders/, function (message) {
            var chatId = message.chat.id;
        });
        exports.bot.onText(/\/settings/, function (message) {
            var chatId = message.chat.id;
        });
        exports.bot.onText(/\/help/, function (message) {
            var chatId = message.chat.id;
        });
        exports.bot.on('callback_query', function onCallbackQuery(callbackQuery) {
            var action = callbackQuery.data;
            var msg = callbackQuery.message;
            var opts = {
                chat_id: msg.chat.id,
                message_id: msg.message_id,
            };
            var text = ".";
            if (action === 'search') {
                text = 'search clicked';
            }
            else if (action === 'add_account') {
                text = 'add ecommerce account clicked';
            }
            exports.bot.sendMessage(opts.chat_id, text);
        });
    };
    return BotService;
}());
exports.BotService = BotService;
