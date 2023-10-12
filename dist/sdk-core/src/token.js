"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const util_1 = require("@polkadot/util");
const types_1 = require("./types");
const converter_1 = require("./converter");
const sort_token_1 = require("./sort-token");
const fixed_point_number_1 = require("./fixed-point-number");
class Token {
    constructor(name, configs) {
        // basic token informations
        this.name = name;
        this.type = configs?.type || types_1.TokenType.BASIC;
        this.display = configs?.display || configs?.symbol || name;
        this.fullname = configs?.fullname || this.display;
        this.symbol = configs?.symbol || name;
        this.decimals = configs?.decimals || configs?.decimal || 18;
        this.ed = configs?.ed || fixed_point_number_1.FixedPointNumber.ZERO;
        this.chain = configs?.chain;
        // foreign asset locations
        this.locations = configs?.locations;
    }
    get isTokenSymbol() {
        return this.type === types_1.TokenType.BASIC;
    }
    get isDexShare() {
        return this.type === types_1.TokenType.DEX_SHARE;
    }
    get decimal() {
        console.warn('decimal is deprecated, please use decimals');
        return this.decimals;
    }
    static create(name, configs) {
        return new Token(name, configs);
    }
    /**
     * @name fromCurrencyName
     * @description create token from curreync name
     */
    static fromCurrencyName(name, configs) {
        const type = (0, converter_1.getCurrencyTypeByName)(name);
        return new Token(name, { ...configs, type });
    }
    /**
     * @name fromCurrencyId
     * @description create token from currency id
     */
    static fromCurrencyId(currency, configs) {
        return this.fromCurrencyName((0, converter_1.forceToCurrencyName)(currency), configs);
    }
    static fromTokenSymbol(token, configs) {
        return this.fromCurrencyName(token.toString(), configs);
    }
    /* create DexShareToken by Token array */
    static fromTokens(token1, token2, configs) {
        const [_token1, _token2] = this.sort(token1, token2);
        // set token1 decimals as decimals;
        const decimals = _token1.decimals;
        const ed = _token1.ed;
        return new Token((0, converter_1.createDexShareName)(_token1.name, _token2.name), {
            decimals,
            type: types_1.TokenType.DEX_SHARE,
            ed,
            ...configs
        });
    }
    /* create DexShareToken form CombinedCurrencyId array */
    static fromCurrencies(currency1, currency2, decimals) {
        const decimals1 = Array.isArray(decimals) ? decimals[0] : decimals;
        const decimals2 = Array.isArray(decimals) ? decimals[1] : decimals;
        const token1 = Token.fromCurrencyId(currency1, { decimals: decimals1 });
        const token2 = Token.fromCurrencyId(currency2, { decimals: decimals2 });
        return Token.fromTokens(token1, token2);
    }
    /* create DexShareToken from TokenSymbol array */
    static fromTokenSymbols(currency1, currency2, decimals) {
        const decimals1 = Array.isArray(decimals) ? decimals[0] : decimals;
        const decimals2 = Array.isArray(decimals) ? decimals[1] : decimals;
        const token1 = Token.fromTokenSymbol(currency1, { decimals: decimals1 });
        const token2 = Token.fromTokenSymbol(currency2, { decimals: decimals2 });
        return Token.fromTokens(token1, token2);
    }
    static sortTokenNames(...names) {
        const result = [...names];
        return result.sort((a, b) => {
            return (0, sort_token_1.sortTokenByName)(a, b);
        });
    }
    static sortCurrencies(...currencies) {
        const result = [...currencies];
        const nameMap = Object.fromEntries(result.map((item) => [(0, converter_1.forceToCurrencyName)(item), item]));
        return Object.keys(nameMap)
            .sort((a, b) => (0, sort_token_1.sortTokenByName)(a, b))
            .map((name) => nameMap[name]);
    }
    static sort(...tokens) {
        const result = [...tokens];
        const nameMap = Object.fromEntries(result.map((item) => [item.name, item]));
        return Object.keys(nameMap)
            .sort((a, b) => (0, sort_token_1.sortTokenByName)(a, b))
            .map((name) => nameMap[name]);
    }
    toCurrencyId(api) {
        try {
            return api.registry.createType('CurrencyId', this.toChainData());
        }
        catch (e) {
            throw new Error(`can't convert ${this.toChainData()} to Trading Pair`);
        }
    }
    toTradingPair(api) {
        (0, util_1.assert)(this.isDexShare, 'the currency is not a dex share');
        try {
            return api.registry.createType('TradingPair', [
                ...(0, converter_1.unzipDexShareName)(this.name).map((i) => (0, converter_1.getCurrencyObject)(i))
            ]);
        }
        catch (e) {
            throw new Error(`can't convert ${this.toChainData()} to Trading Pair`);
        }
    }
    toDexShare(api) {
        try {
            (0, util_1.assert)(this.isDexShare, 'the token is not a dexShare');
            return api.registry.createType('DexShare', this.toChainData());
        }
        catch (e) {
            throw new Error(`can't convert ${this.toChainData()} to DexShare`);
        }
    }
    toTokenSymbol(api) {
        try {
            (0, util_1.assert)(this.isTokenSymbol, 'the currency is not a token symbol');
            return api.registry.createType('TokenSymbol', this.name);
        }
        catch (e) {
            throw new Error(`can't convert ${this.toChainData()} to Token Symbol`);
        }
    }
    clone() {
        return new Token(this.name, { ...this });
    }
    isEqual(target, compare) {
        if (compare) {
            return compare(this, target);
        }
        return this.name === target.name;
    }
    toChainData() {
        return (0, converter_1.getCurrencyObject)(this.name);
    }
    toString() {
        return this.name;
    }
}
exports.Token = Token;
