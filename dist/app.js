"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var express_1 = __importDefault(require("express"));
var schema_1 = require("./utils/schema");
var user_resolver_1 = __importDefault(require("./types/user/user.resolver"));
var ecommerceaccount_resolver_1 = __importDefault(require("./types/ecommerceaccount/ecommerceaccount.resolver"));
var cart_resolver_1 = __importDefault(require("./types/cart/cart.resolver"));
var lodash_1 = require("lodash");
var common_1 = require("./utils/common");
require('dotenv').config();
var bodyParser = require('body-parser');
var bot = require('./utils/common');
var app = express_1.default();
app.use(bodyParser.json());
//let bot = new BotService();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var server;
    return __generator(this, function (_a) {
        common_1.BotService.startBot();
        server = new apollo_server_express_1.ApolloServer({
            typeDefs: schema_1.schemas,
            resolvers: lodash_1.merge({}, user_resolver_1.default, cart_resolver_1.default, ecommerceaccount_resolver_1.default)
        });
        server.applyMiddleware({ app: app });
        app.listen({ port: 8000 }, function () {
            console.log("Server ready at http://localhost:8000" + server.graphqlPath);
        });
        return [2 /*return*/];
    });
}); })();
