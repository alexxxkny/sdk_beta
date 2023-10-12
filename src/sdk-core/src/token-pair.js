"use strict";
exports.__esModule = true;
exports.TokenPair = void 0;
var token_1 = require("./token");
var util_1 = require("@polkadot/util");
// class for store token pair
var TokenPair = /** @class */ (function () {
    function TokenPair(token1, token2) {
        (0, util_1.assert)(!token1.isEqual(token2), "can't create token pair by equal tokens.");
        var _a = token_1.Token.sort(token1, token2), _token1 = _a[0], _token2 = _a[1];
        this.token1 = _token1;
        this.token2 = _token2;
        this.origin = [token1, token2];
    }
    TokenPair.fromCurrencyId = function (currency) {
        (0, util_1.assert)(currency.isDexShare, 'TokenPair.fromCurrencyId should receive CurrencyId which is DexShare');
        var _a = currency.asDexShare, currency1 = _a[0], currency2 = _a[1];
        return new TokenPair(token_1.Token.fromCurrencyId(currency1), token_1.Token.fromCurrencyId(currency2));
    };
    TokenPair.fromCurrencies = function (currency1, currency2) {
        return new TokenPair(token_1.Token.fromCurrencyId(currency1), token_1.Token.fromCurrencyId(currency2));
    };
    TokenPair.fromTrandingPair = function (tradingPair) {
        var currency1 = tradingPair[0], currency2 = tradingPair[1];
        return TokenPair.fromCurrencies(currency1, currency2);
    };
    TokenPair.prototype.getOrigin = function () {
        return this.origin;
    };
    TokenPair.prototype.getPair = function () {
        return [this.token1, this.token2];
    };
    TokenPair.prototype.isEqual = function (pair, compare) {
        return pair.token1.isEqual(this.token1, compare) && pair.token2.isEqual(this.token2, compare);
    };
    TokenPair.prototype.toChainData = function () {
        return [this.token1.toChainData(), this.token2.toChainData()];
    };
    TokenPair.prototype.toTradingPair = function (api) {
        return api.createType('TradingPair', this.toChainData());
    };
    return TokenPair;
}());
exports.TokenPair = TokenPair;
