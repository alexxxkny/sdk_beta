"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api");
const swap_promise_1 = require("./sdk-swap/src/swap-promise");
const definitions = __importStar(require("./interfaces/definitions"));
async function main() {
    const types = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});
    const wsProvider = new api_1.WsProvider('ws://127.0.0.1:9988');
    const api = await api_1.ApiPromise.create({
        provider: wsProvider,
        types: {
            ...types
        }
    });
    const CGT_symbol = api.createType('TokenSymbol', 'CGT');
    console.log(CGT_symbol.isCgt);
    console.log(CGT_symbol.isDot);
    const CGT = api.createType('CurrencyId', { Token: CGT_symbol });
    console.log(CGT.isToken);
    console.log(CGT.isDexShare);
    console.log(await api.query.tokens.totalIssuance(CGT));
    const swapPromise = new swap_promise_1.SwapPromise(api);
    swapPromise.availableTokens.forEach(token => console.log(token));
}
main();
