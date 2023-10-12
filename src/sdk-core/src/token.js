"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Token = void 0;
var util_1 = require("@polkadot/util");
var types_1 = require("./types");
var converter_1 = require("./converter");
var sort_token_1 = require("./sort-token");
var fixed_point_number_1 = require("./fixed-point-number");
var Token = /** @class */ (function () {
    function Token(name, configs) {
        // basic token informations
        this.name = name;
        this.type = (configs === null || configs === void 0 ? void 0 : configs.type) || types_1.TokenType.BASIC;
        this.display = (configs === null || configs === void 0 ? void 0 : configs.display) || (configs === null || configs === void 0 ? void 0 : configs.symbol) || name;
        this.fullname = (configs === null || configs === void 0 ? void 0 : configs.fullname) || this.display;
        this.symbol = (configs === null || configs === void 0 ? void 0 : configs.symbol) || name;
        this.decimals = (configs === null || configs === void 0 ? void 0 : configs.decimals) || (configs === null || configs === void 0 ? void 0 : configs.decimal) || 18;
        this.ed = (configs === null || configs === void 0 ? void 0 : configs.ed) || fixed_point_number_1.FixedPointNumber.ZERO;
        this.chain = configs === null || configs === void 0 ? void 0 : configs.chain;
        // foreign asset locations
        this.locations = configs === null || configs === void 0 ? void 0 : configs.locations;
    }
    Object.defineProperty(Token.prototype, "isTokenSymbol", {
        get: function () {
            return this.type === types_1.TokenType.BASIC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "isDexShare", {
        get: function () {
            return this.type === types_1.TokenType.DEX_SHARE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "decimal", {
        get: function () {
            console.warn('decimal is deprecated, please use decimals');
            return this.decimals;
        },
        enumerable: false,
        configurable: true
    });
    Token.create = function (name, configs) {
        return new Token(name, configs);
    };
    /**
     * @name fromCurrencyName
     * @description create token from curreync name
     */
    Token.fromCurrencyName = function (name, configs) {
        var type = (0, converter_1.getCurrencyTypeByName)(name);
        return new Token(name, __assign(__assign({}, configs), { type: type }));
    };
    /**
     * @name fromCurrencyId
     * @description create token from currency id
     */
    Token.fromCurrencyId = function (currency, configs) {
        return this.fromCurrencyName((0, converter_1.forceToCurrencyName)(currency), configs);
    };
    Token.fromTokenSymbol = function (token, configs) {
        return this.fromCurrencyName(token.toString(), configs);
    };
    /* create DexShareToken by Token array */
    Token.fromTokens = function (token1, token2, configs) {
        var _a = this.sort(token1, token2), _token1 = _a[0], _token2 = _a[1];
        // set token1 decimals as decimals;
        var decimals = _token1.decimals;
        var ed = _token1.ed;
        return new Token((0, converter_1.createDexShareName)(_token1.name, _token2.name), __assign({ decimals: decimals, type: types_1.TokenType.DEX_SHARE, ed: ed }, configs));
    };
    /* create DexShareToken form CombinedCurrencyId array */
    Token.fromCurrencies = function (currency1, currency2, decimals) {
        var decimals1 = Array.isArray(decimals) ? decimals[0] : decimals;
        var decimals2 = Array.isArray(decimals) ? decimals[1] : decimals;
        var token1 = Token.fromCurrencyId(currency1, { decimals: decimals1 });
        var token2 = Token.fromCurrencyId(currency2, { decimals: decimals2 });
        return Token.fromTokens(token1, token2);
    };
    /* create DexShareToken from TokenSymbol array */
    Token.fromTokenSymbols = function (currency1, currency2, decimals) {
        var decimals1 = Array.isArray(decimals) ? decimals[0] : decimals;
        var decimals2 = Array.isArray(decimals) ? decimals[1] : decimals;
        var token1 = Token.fromTokenSymbol(currency1, { decimals: decimals1 });
        var token2 = Token.fromTokenSymbol(currency2, { decimals: decimals2 });
        return Token.fromTokens(token1, token2);
    };
    Token.sortTokenNames = function () {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        var result = __spreadArray([], names, true);
        return result.sort(function (a, b) {
            return (0, sort_token_1.sortTokenByName)(a, b);
        });
    };
    Token.sortCurrencies = function () {
        var currencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            currencies[_i] = arguments[_i];
        }
        var result = __spreadArray([], currencies, true);
        var nameMap = Object.fromEntries(result.map(function (item) { return [(0, converter_1.forceToCurrencyName)(item), item]; }));
        return Object.keys(nameMap)
            .sort(function (a, b) { return (0, sort_token_1.sortTokenByName)(a, b); })
            .map(function (name) { return nameMap[name]; });
    };
    Token.sort = function () {
        var tokens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tokens[_i] = arguments[_i];
        }
        var result = __spreadArray([], tokens, true);
        var nameMap = Object.fromEntries(result.map(function (item) { return [item.name, item]; }));
        return Object.keys(nameMap)
            .sort(function (a, b) { return (0, sort_token_1.sortTokenByName)(a, b); })
            .map(function (name) { return nameMap[name]; });
    };
    Token.prototype.toCurrencyId = function (api) {
        try {
            return api.registry.createType('CurrencyId', this.toChainData());
        }
        catch (e) {
            throw new Error("can't convert ".concat(this.toChainData(), " to Trading Pair"));
        }
    };
    Token.prototype.toTradingPair = function (api) {
        (0, util_1.assert)(this.isDexShare, 'the currency is not a dex share');
        try {
            return api.registry.createType('TradingPair', __spreadArray([], (0, converter_1.unzipDexShareName)(this.name).map(function (i) { return (0, converter_1.getCurrencyObject)(i); }), true));
        }
        catch (e) {
            throw new Error("can't convert ".concat(this.toChainData(), " to Trading Pair"));
        }
    };
    Token.prototype.toDexShare = function (api) {
        try {
            (0, util_1.assert)(this.isDexShare, 'the token is not a dexShare');
            return api.registry.createType('DexShare', this.toChainData());
        }
        catch (e) {
            throw new Error("can't convert ".concat(this.toChainData(), " to DexShare"));
        }
    };
    Token.prototype.toTokenSymbol = function (api) {
        try {
            (0, util_1.assert)(this.isTokenSymbol, 'the currency is not a token symbol');
            return api.registry.createType('TokenSymbol', this.name);
        }
        catch (e) {
            throw new Error("can't convert ".concat(this.toChainData(), " to Token Symbol"));
        }
    };
    Token.prototype.clone = function () {
        return new Token(this.name, __assign({}, this));
    };
    Token.prototype.isEqual = function (target, compare) {
        if (compare) {
            return compare(this, target);
        }
        return this.name === target.name;
    };
    Token.prototype.toChainData = function () {
        return (0, converter_1.getCurrencyObject)(this.name);
    };
    Token.prototype.toString = function () {
        return this.name;
    };
    return Token;
}());
exports.Token = Token;
