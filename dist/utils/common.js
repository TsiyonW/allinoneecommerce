"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var BotService = /** @class */ (function () {
    function BotService() {
    }
    BotService.startBot = function () {
        var TelegramBot = require('node-telegram-bot-api');
        var token = process.env.BOT_TOKEN;
        console.log(token);
        // Created instance of TelegramBot
        // Create a bot that uses 'polling' to fetch new updates
        var bot = new TelegramBot(token, { polling: true });
        bot.on('message', function (message) {
            var chatId = message.chat.id;
            // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(chatId, 'Received your message');
        });
    };
    return BotService;
}());
exports.BotService = BotService;
