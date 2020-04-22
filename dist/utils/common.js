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
            exports.bot.sendMessage(chatId, "\uD83D\uDC4BWelcome, " + chatId + " to @all_in_one_ecommerce_bot Here you can \uD83D\uDD0Esearch, add and control your multiple ecommerce accounts. \n\uD83C\uDD98For a detailed list of commands, use /help!", {
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
            });
        });
    };
    return BotService;
}());
exports.BotService = BotService;
