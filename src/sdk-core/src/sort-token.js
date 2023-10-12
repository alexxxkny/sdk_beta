"use strict";
var _a;
exports.__esModule = true;
exports.sortTokenByName = exports.getTokenTypeWeight = void 0;
var definitions_1 = require("../../interfaces/primitives/definitions");
var converter_1 = require("./converter");
var types_1 = require("./types");
var TOKEN_TYPE_WEIGHTS = (_a = {},
    _a[types_1.TokenType.BASIC] = 9,
    _a[types_1.TokenType.DEX_SHARE] = 8,
    _a);
function getTokenTypeWeight(name) {
    return 1000 * (TOKEN_TYPE_WEIGHTS[(0, converter_1.getCurrencyTypeByName)(name)] || 0);
}
exports.getTokenTypeWeight = getTokenTypeWeight;
var TOKEN_SORT = definitions_1["default"].types.TokenSymbol._enum;
function sortTokenByName(a, b) {
    var weightA = getTokenTypeWeight(a);
    var weightB = getTokenTypeWeight(b);
    if (weightA !== weightB) {
        return weightB - weightA;
    }
    if ((0, converter_1.isBasicToken)(a) && (0, converter_1.isBasicToken)(b)) {
        return TOKEN_SORT[a] - TOKEN_SORT[b];
    }
    if ((0, converter_1.isDexShareName)(a) && (0, converter_1.isDexShareName)(b)) {
        var _a = (0, converter_1.unzipDexShareName)(a), a0 = _a[0], a1 = _a[1];
        var _b = (0, converter_1.unzipDexShareName)(b), b0 = _b[0], b1 = _b[1];
        var _c = [sortTokenByName(a0, a1), sortTokenByName(b0, b1)], result0 = _c[0], result1 = _c[1];
        if (a0 === b0)
            return result1;
        return result0;
    }
    return 0;
}
exports.sortTokenByName = sortTokenByName;
