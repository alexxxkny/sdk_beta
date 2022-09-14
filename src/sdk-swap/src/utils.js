"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupplyAmount = exports.getTargetAmount = void 0;
const src_1 = require("../../sdk-core/src");
// get how much target amount will be got fro specific supply amount and price impact
function getTargetAmount(supplyPool, targetPool, supplyAmount, exchangeFee) {
    if (supplyAmount.isZero() || supplyPool.isZero() || targetPool.isZero())
        return src_1.FixedPointNumber.ZERO;
    const supplyAmountWithFee = supplyAmount.times(exchangeFee.denominator.minus(exchangeFee.numerator));
    const numerator = supplyAmountWithFee.times(targetPool);
    const denominator = supplyPool.times(exchangeFee.denominator).plus(supplyAmountWithFee);
    if (denominator.isZero())
        return src_1.FixedPointNumber.ZERO;
    return numerator.div(denominator);
}
exports.getTargetAmount = getTargetAmount;
// get how much supply amount will be paid for specific target amount
function getSupplyAmount(supplyPool, targetPool, targetAmount, exchangeFee) {
    if (targetAmount.isZero() || supplyPool.isZero() || targetPool.isZero())
        return src_1.FixedPointNumber.ZERO;
    const { numerator: feeNumerator, denominator: feeDenominator } = exchangeFee;
    const numerator = supplyPool.times(targetAmount).times(feeDenominator);
    const denominator = targetPool
        .minus(targetAmount)
        .times(feeDenominator.minus(feeNumerator))
        .max(src_1.FixedPointNumber.ZERO);
    if (denominator.isZero())
        return src_1.FixedPointNumber.ZERO;
    return src_1.FixedPointNumber.fromInner(numerator.div(denominator)._getInner().toNumber() + 1, numerator.getPrecision());
}
exports.getSupplyAmount = getSupplyAmount;
