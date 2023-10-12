"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortTokenByName = exports.getTokenTypeWeight = void 0;
const definitions_1 = __importDefault(require("../../interfaces/primitives/definitions"));
const converter_1 = require("./converter");
const types_1 = require("./types");
const TOKEN_TYPE_WEIGHTS = {
    [types_1.TokenType.BASIC]: 9,
    [types_1.TokenType.DEX_SHARE]: 8
};
function getTokenTypeWeight(name) {
    return 1000 * (TOKEN_TYPE_WEIGHTS[(0, converter_1.getCurrencyTypeByName)(name)] || 0);
}
exports.getTokenTypeWeight = getTokenTypeWeight;
const TOKEN_SORT = definitions_1.default.types.TokenSymbol._enum;
function sortTokenByName(a, b) {
    const weightA = getTokenTypeWeight(a);
    const weightB = getTokenTypeWeight(b);
    if (weightA !== weightB) {
        return weightB - weightA;
    }
    if ((0, converter_1.isBasicToken)(a) && (0, converter_1.isBasicToken)(b)) {
        return TOKEN_SORT[a] - TOKEN_SORT[b];
    }
    if ((0, converter_1.isDexShareName)(a) && (0, converter_1.isDexShareName)(b)) {
        const [a0, a1] = (0, converter_1.unzipDexShareName)(a);
        const [b0, b1] = (0, converter_1.unzipDexShareName)(b);
        const [result0, result1] = [sortTokenByName(a0, a1), sortTokenByName(b0, b1)];
        if (a0 === b0)
            return result1;
        return result0;
    }
    return 0;
}
exports.sortTokenByName = sortTokenByName;
