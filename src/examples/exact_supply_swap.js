"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const src_1 = require("../sdk-core/src");
async function main() {
    const api = await (0, common_1.getApiPromise)();
    const swapPromise = (0, common_1.getSwapPromiseFromApi)(api);
    const CGTtoken = src_1.Token.fromCurrencyName('CGT');
    const DOTtoken = src_1.Token.fromCurrencyName('DOT');
    console.log(CGTtoken);
    console.log(DOTtoken);
    swapPromise.availableTokens.forEach(token => console.log(token));
    const result = await api.query.dex.tradingPairStatuses.entries();
    result.forEach(([key, status]) => {
        console.log('key arguments:', key.args.map((k) => k.toJSON()));
        console.log('status:', status.toHuman());
    });
}
main();
