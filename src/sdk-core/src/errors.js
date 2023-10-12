"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NotERC20TokenName = exports.NotLiquidCrowdloanName = exports.NotForeignAssetName = exports.NotStableAssetPoolName = exports.NotDexShareName = exports.ConvertToCurrencyNameFailed = exports.ConvertToCurrencyIdFailed = exports.MethodNotFound = void 0;
var MethodNotFound = /** @class */ (function (_super) {
    __extends(MethodNotFound, _super);
    function MethodNotFound(section, method) {
        var _this = _super.call(this) || this;
        _this.section = section;
        _this.method = method;
        _this.message = "can't find ".concat(section, ".").concat(method, " in api");
        _this.name = 'MethodNotFound';
        return _this;
    }
    return MethodNotFound;
}(Error));
exports.MethodNotFound = MethodNotFound;
var ConvertToCurrencyIdFailed = /** @class */ (function (_super) {
    __extends(ConvertToCurrencyIdFailed, _super);
    function ConvertToCurrencyIdFailed(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'convertToCurrencyIdFailed';
        _this.message = "convert to currency id failed ".concat(origin.toString());
        return _this;
    }
    return ConvertToCurrencyIdFailed;
}(Error));
exports.ConvertToCurrencyIdFailed = ConvertToCurrencyIdFailed;
var ConvertToCurrencyNameFailed = /** @class */ (function (_super) {
    __extends(ConvertToCurrencyNameFailed, _super);
    function ConvertToCurrencyNameFailed(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'convertToCurrencyNameFailed';
        _this.message = "convert to currency name failed ".concat(origin.toString());
        return _this;
    }
    return ConvertToCurrencyNameFailed;
}(Error));
exports.ConvertToCurrencyNameFailed = ConvertToCurrencyNameFailed;
var NotDexShareName = /** @class */ (function (_super) {
    __extends(NotDexShareName, _super);
    function NotDexShareName(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'notDexShare';
        _this.message = "".concat(origin, " is not dex share name");
        return _this;
    }
    return NotDexShareName;
}(Error));
exports.NotDexShareName = NotDexShareName;
var NotStableAssetPoolName = /** @class */ (function (_super) {
    __extends(NotStableAssetPoolName, _super);
    function NotStableAssetPoolName(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'notStableAssetPoolId';
        _this.message = "".concat(origin, " is not stable asset pool name");
        return _this;
    }
    return NotStableAssetPoolName;
}(Error));
exports.NotStableAssetPoolName = NotStableAssetPoolName;
var NotForeignAssetName = /** @class */ (function (_super) {
    __extends(NotForeignAssetName, _super);
    function NotForeignAssetName(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'notForeignAssetName';
        _this.message = "".concat(origin, " is not foreign asset name");
        return _this;
    }
    return NotForeignAssetName;
}(Error));
exports.NotForeignAssetName = NotForeignAssetName;
var NotLiquidCrowdloanName = /** @class */ (function (_super) {
    __extends(NotLiquidCrowdloanName, _super);
    function NotLiquidCrowdloanName(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'notLiquidCrowdloan';
        _this.message = "".concat(origin, " is not liquid crowdloan asset name");
        return _this;
    }
    return NotLiquidCrowdloanName;
}(Error));
exports.NotLiquidCrowdloanName = NotLiquidCrowdloanName;
var NotERC20TokenName = /** @class */ (function (_super) {
    __extends(NotERC20TokenName, _super);
    function NotERC20TokenName(origin) {
        var _this = _super.call(this) || this;
        _this.name = 'notERC20Token';
        _this.message = "".concat(origin, " is not erc20 token name");
        return _this;
    }
    return NotERC20TokenName;
}(Error));
exports.NotERC20TokenName = NotERC20TokenName;
