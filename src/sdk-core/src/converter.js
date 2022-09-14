"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forceToCurrencyName = exports.getCurrencyObject = exports.getDexShareCurrencyObject = exports.getBasicCurrencyObject = exports.getCurrencyTypeByName = exports.unzipDexShareName = exports.isDexShareName = exports.createDexShareName = exports.isBasicToken = void 0;
const errors_1 = require("./errors");
const token_1 = require("./token");
const types_1 = require("./types");
/**
 *  we set a name with a prefix to all types of tokens for easy passing and use.
 *  e.g.
 *  { DexShare: [{ Token: KAR }, { Token: KSM }] } is lp://KAR/KSM
 *  { stableAsset: 0 } is sa://0
 *  { foreignAsset: 0 } is fa://0
 *  { ERC20: '0x100000000' } is erc20://0x10000
 *  we can also combine these name for complex types
 *  e.g.
 *  lp://${encode(lp://KAR/KSM)}/${encode(sa://0)} is { DexShare: [ { DexShare: [{ Token: 'KAR' }, { Token: 'KSM}] }, { stableAsset: 0 } ] }
 */
function isBasicToken(name) {
    return name.search('//') < 0;
}
exports.isBasicToken = isBasicToken;
// for dex share
function createDexShareName(name1, name2) {
    return `lp://${encodeURIComponent(name1)}/${encodeURIComponent(name2)}`;
}
exports.createDexShareName = createDexShareName;
function isDexShareName(name) {
    return name.startsWith('lp://');
}
exports.isDexShareName = isDexShareName;
/**
 * @name unzipDexShareName
 * @description unzip dex share name to two token name, e.g. lp://KAR/KSM -> [KAR, KSM];
 */
function unzipDexShareName(name) {
    if (!isDexShareName(name))
        throw new errors_1.NotDexShareName(name);
    const reg = /^lp:\/\/([^/]*)?\/([^/]*)$/;
    const result = reg.exec(name);
    if (!result)
        throw new errors_1.NotDexShareName(name);
    return [decodeURIComponent(result[1]), decodeURIComponent(result[2])];
}
exports.unzipDexShareName = unzipDexShareName;
function getCurrencyTypeByName(name) {
    if (isDexShareName(name))
        return types_1.TokenType.DEX_SHARE;
    return types_1.TokenType.BASIC;
}
exports.getCurrencyTypeByName = getCurrencyTypeByName;
function getBasicCurrencyObject(name) {
    return { Token: name };
}
exports.getBasicCurrencyObject = getBasicCurrencyObject;
function getDexShareCurrencyObject(name) {
    const inner = (name) => {
        if (isDexShareName(name)) {
            const [name1, name2] = unzipDexShareName(name);
            return { DexShare: [inner(name1), inner(name2)] };
        }
        return getBasicCurrencyObject(name);
    };
    return inner(name);
}
exports.getDexShareCurrencyObject = getDexShareCurrencyObject;
function getCurrencyObject(name) {
    if (isDexShareName(name))
        return getDexShareCurrencyObject(name);
    return getBasicCurrencyObject(name);
}
exports.getCurrencyObject = getCurrencyObject;
/**
 * @name forceToCurrencyName
 * @description convert `maybeCurrency` to currency name
 */
function forceToCurrencyName(target) {
    try {
        if (typeof target === 'string')
            return target;
        if (Array.isArray(target))
            return createDexShareName(target[0], target[1]);
        if (target instanceof token_1.Token)
            return target.toString();
        return target.toString();
    }
    catch (e) {
        throw new errors_1.ConvertToCurrencyNameFailed(target);
    }
}
exports.forceToCurrencyName = forceToCurrencyName;
// export function forceToCurrencyId(api: AnyApi, target: MaybeCurrency): AcalaPrimitivesCurrencyCurrencyId {
//   try {
//     const name = forceToCurrencyName(target);
//     return api.registry.createType('AcalaPrimitivesCurrencyCurrencyId', getCurrencyObject(name));
//   } catch (e) {
//     throw new ConvertToCurrencyIdFailed(target);
//   }
// }
// export const forceToTokenSymbolCurrencyId = (
//   api: AnyApi,
//   target: string | Token | AcalaPrimitivesCurrencyCurrencyId | AcalaPrimitivesCurrencyTokenSymbol
// ): AcalaPrimitivesCurrencyCurrencyId => {
//   const name = target.toString();
//   return forceToCurrencyId(api, name);
// };
// export const forceToDexShareCurrencyId = (
//   api: AnyApi,
//   target: [string, string] | AcalaPrimitivesCurrencyCurrencyId
// ): AcalaPrimitivesCurrencyCurrencyId => {
//   let name = '';
//   if (isArray(target)) {
//     name = createDexShareName(target[0], target[1]);
//   } else {
//     name = forceToCurrencyName(target);
//   }
//   return forceToCurrencyId(api, name);
// };
