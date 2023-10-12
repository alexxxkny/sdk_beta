"use strict";
exports.__esModule = true;
exports.TokenSet = void 0;
var TokenSet = /** @class */ (function () {
    function TokenSet() {
        this._list = [];
    }
    TokenSet.prototype.values = function () {
        return this._list;
    };
    TokenSet.prototype.add = function (target) {
        var isExist = !!this._list.find(function (item) { return item.isEqual(target); });
        if (!isExist) {
            this._list.push(target);
        }
    };
    TokenSet.prototype["delete"] = function (target) {
        var index = this._list.findIndex(function (item) { return item.isEqual(target); });
        if (index !== -1) {
            this._list.splice(index, 1);
        }
    };
    TokenSet.prototype.clear = function () {
        this._list = [];
    };
    return TokenSet;
}());
exports.TokenSet = TokenSet;
