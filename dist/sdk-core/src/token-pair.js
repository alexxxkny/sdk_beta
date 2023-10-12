"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPair = void 0;
const token_1 = require("./token");
const util_1 = require("@polkadot/util");
// class for store token pair
class TokenPair {
    constructor(token1, token2) {
        (0, util_1.assert)(!token1.isEqual(token2), "can't create token pair by equal tokens.");
        const [_token1, _token2] = token_1.Token.sort(token1, token2);
        this.token1 = _token1;
        this.token2 = _token2;
        this.origin = [token1, token2];
    }
    static fromCurrencyId(currency) {
        (0, util_1.assert)(currency.isDexShare, 'TokenPair.fromCurrencyId should receive CurrencyId which is DexShare');
        const [currency1, currency2] = currency.asDexShare;
        return new TokenPair(token_1.Token.fromCurrencyId(currency1), token_1.Token.fromCurrencyId(currency2));
    }
    static fromCurrencies(currency1, currency2) {
        return new TokenPair(token_1.Token.fromCurrencyId(currency1), token_1.Token.fromCurrencyId(currency2));
    }
    static fromTrandingPair(tradingPair) {
        const [currency1, currency2] = tradingPair;
        return TokenPair.fromCurrencies(currency1, currency2);
    }
    getOrigin() {
        return this.origin;
    }
    getPair() {
        return [this.token1, this.token2];
    }
    isEqual(pair, compare) {
        return pair.token1.isEqual(this.token1, compare) && pair.token2.isEqual(this.token2, compare);
    }
    toChainData() {
        return [this.token1.toChainData(), this.token2.toChainData()];
    }
    toTradingPair(api) {
        return api.createType('TradingPair', this.toChainData());
    }
}
exports.TokenPair = TokenPair;
