"use strict";
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
exports.getPromiseOrAtQuery = exports.getSubscribeOrAtQuery = void 0;
var getSubscribeOrAtQuery = function (query, at) {
    return (function () {
        var _a;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (at)
            (_a = query).at.apply(_a, __spreadArray([at], params, false));
        return query.apply(void 0, params);
    });
};
exports.getSubscribeOrAtQuery = getSubscribeOrAtQuery;
var getPromiseOrAtQuery = function (query, at) {
    return (function () {
        var _a;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (at)
            (_a = query).at.apply(_a, __spreadArray([at], params, false));
        return query.apply(void 0, params);
    });
};
exports.getPromiseOrAtQuery = getPromiseOrAtQuery;
