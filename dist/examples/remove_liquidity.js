"use strict";
// import '../interfaces/augment-api';
// import '../interfaces/augment-types';
// import '@polkadot/api-base/types/storage';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const src_1 = require("../sdk-core/src");
const bn_js_1 = __importDefault(require("bn.js"));
async function main() {
    const api = await (0, common_1.getApiPromise)();
    // let we have CGT-DOT token pair
    const CGT = src_1.Token.fromCurrencyName('CGT', { decimals: 18 });
    const DOT = src_1.Token.fromCurrencyName('DOT', { decimals: 10 });
    // user selected tokens
    const tokenA = CGT;
    const tokenB = DOT;
    const pair = new src_1.TokenPair(tokenA, tokenB);
    // Example account
    const [alice,] = (0, common_1.getDefaultAccountsKeyring)();
    // getting user's share
    const dexShare = src_1.Token.fromTokens(tokenA, tokenB).toCurrencyId(api); // lp token for the pair
    const userShare = await api.query.tokens.accounts(alice.address, dexShare);
    console.log(`user's free share: ${userShare.free.toString()}`);
    // let's remove a half of the share
    const shareToRemove = userShare.free.div(new bn_js_1.default(2));
    // removeLiquidity
    const unsub = await api.tx.dex
        .removeLiquidity(tokenA.toCurrencyId(api), tokenB.toCurrencyId(api), shareToRemove, 0, // as user specify
    0, // as user specify
    true // TODO: ???
    )
        .signAndSend(alice, (result) => {
        console.log(`Current status is ${result.status}`);
        if (result.status.isInBlock) {
            console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
        }
        else if (result.status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
            unsub();
        }
    });
}
main();
