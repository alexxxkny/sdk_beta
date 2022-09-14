"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBalance = void 0;
const fixed_point_number_1 = require("./fixed-point-number");
class TokenBalance {
    constructor(token, balance) {
        this._token = token;
        this._balance = balance || fixed_point_number_1.FixedPointNumber.ZERO;
    }
    get token() {
        return this._token;
    }
    get balance() {
        return this._balance;
    }
    clone() {
        return new TokenBalance(this._token.clone(), this._balance.clone());
    }
}
exports.TokenBalance = TokenBalance;
