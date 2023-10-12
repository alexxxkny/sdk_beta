"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSet = void 0;
class TokenSet {
    constructor() {
        this._list = [];
    }
    values() {
        return this._list;
    }
    add(target) {
        const isExist = !!this._list.find((item) => item.isEqual(target));
        if (!isExist) {
            this._list.push(target);
        }
    }
    delete(target) {
        const index = this._list.findIndex((item) => item.isEqual(target));
        if (index !== -1) {
            this._list.splice(index, 1);
        }
    }
    clear() {
        this._list = [];
    }
}
exports.TokenSet = TokenSet;
