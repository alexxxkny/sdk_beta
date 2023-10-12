"use strict";
exports.__esModule = true;
exports.TokenBalance = void 0;
var fixed_point_number_1 = require("./fixed-point-number");
var TokenBalance = /** @class */ (function () {
    function TokenBalance(token, balance) {
        this._token = token;
        this._balance = balance || fixed_point_number_1.FixedPointNumber.ZERO;
    }
    Object.defineProperty(TokenBalance.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenBalance.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    TokenBalance.prototype.clone = function () {
        return new TokenBalance(this._token.clone(), this._balance.clone());
    };
    return TokenBalance;
}());
exports.TokenBalance = TokenBalance;
