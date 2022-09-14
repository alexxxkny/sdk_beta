"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotERC20TokenName = exports.NotLiquidCrowdloanName = exports.NotForeignAssetName = exports.NotStableAssetPoolName = exports.NotDexShareName = exports.ConvertToCurrencyNameFailed = exports.ConvertToCurrencyIdFailed = exports.MethodNotFound = void 0;
class MethodNotFound extends Error {
    constructor(section, method) {
        super();
        this.section = section;
        this.method = method;
        this.message = `can't find ${section}.${method} in api`;
        this.name = 'MethodNotFound';
    }
}
exports.MethodNotFound = MethodNotFound;
class ConvertToCurrencyIdFailed extends Error {
    constructor(origin) {
        super();
        this.name = 'convertToCurrencyIdFailed';
        this.message = `convert to currency id failed ${origin.toString()}`;
    }
}
exports.ConvertToCurrencyIdFailed = ConvertToCurrencyIdFailed;
class ConvertToCurrencyNameFailed extends Error {
    constructor(origin) {
        super();
        this.name = 'convertToCurrencyNameFailed';
        this.message = `convert to currency name failed ${origin.toString()}`;
    }
}
exports.ConvertToCurrencyNameFailed = ConvertToCurrencyNameFailed;
class NotDexShareName extends Error {
    constructor(origin) {
        super();
        this.name = 'notDexShare';
        this.message = `${origin} is not dex share name`;
    }
}
exports.NotDexShareName = NotDexShareName;
class NotStableAssetPoolName extends Error {
    constructor(origin) {
        super();
        this.name = 'notStableAssetPoolId';
        this.message = `${origin} is not stable asset pool name`;
    }
}
exports.NotStableAssetPoolName = NotStableAssetPoolName;
class NotForeignAssetName extends Error {
    constructor(origin) {
        super();
        this.name = 'notForeignAssetName';
        this.message = `${origin} is not foreign asset name`;
    }
}
exports.NotForeignAssetName = NotForeignAssetName;
class NotLiquidCrowdloanName extends Error {
    constructor(origin) {
        super();
        this.name = 'notLiquidCrowdloan';
        this.message = `${origin} is not liquid crowdloan asset name`;
    }
}
exports.NotLiquidCrowdloanName = NotLiquidCrowdloanName;
class NotERC20TokenName extends Error {
    constructor(origin) {
        super();
        this.name = 'notERC20Token';
        this.message = `${origin} is not erc20 token name`;
    }
}
exports.NotERC20TokenName = NotERC20TokenName;
