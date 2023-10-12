"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const src_1 = require("../../sdk-core/src");
describe('test getSupplyAmount, getTargetAmount', () => {
    const fee = {
        numerator: src_1.FixedPointNumber.fromInner(1, 0),
        denominator: src_1.FixedPointNumber.fromInner(100, 0)
    };
    test('getSupplyAmount should work', () => {
        expect((0, utils_1.getSupplyAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(0, 0), src_1.FixedPointNumber.fromInner(0, 0), fee).toNumber()).toEqual(0);
        expect((0, utils_1.getSupplyAmount)(src_1.FixedPointNumber.fromInner(0, 0), src_1.FixedPointNumber.fromInner(20000, 0), src_1.FixedPointNumber.fromInner(0, 0), fee).toNumber()).toEqual(0);
        expect((0, utils_1.getSupplyAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(20000, 0), src_1.FixedPointNumber.fromInner(0, 0), fee).toNumber()).toEqual(0);
        expect((0, utils_1.getSupplyAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(1, 0), src_1.FixedPointNumber.fromInner(1, 0), fee).toNumber()).toEqual(0);
        expect((0, utils_1.getSupplyAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(20000, 0), src_1.FixedPointNumber.fromInner(9949, 0), fee).toNumber()).toEqual(9999);
        expect((0, utils_1.getTargetAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(20000, 0), src_1.FixedPointNumber.fromInner(9999, 0), fee).toNumber()).toEqual(9949);
        expect((0, utils_1.getSupplyAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(20000, 0), src_1.FixedPointNumber.fromInner(1801, 0), fee).toNumber()).toEqual(1000);
        expect((0, utils_1.getTargetAmount)(src_1.FixedPointNumber.fromInner(10000, 0), src_1.FixedPointNumber.fromInner(20000, 0), src_1.FixedPointNumber.fromInner(1000, 0), fee).toNumber()).toEqual(1801);
    });
});
