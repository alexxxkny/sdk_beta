"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedPointNumber = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const lodash_1 = require("lodash");
// generate function from BN class
function genFnFromBigNumber(fn, noRight) {
    if (noRight) {
        return function () {
            /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            return this.inner[fn]();
            /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
        };
    }
    return function (right) {
        const temp = right.clone();
        /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        this.alignPrecision(temp);
        // @ts-ignore
        return this.inner[fn](temp._getInner());
        /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
    };
}
const BN = bignumber_js_1.default.clone();
let GLOBAL_PRECISION = 18;
class FixedPointNumber {
    constructor(origin, precision = GLOBAL_PRECISION) {
        /**
         * @name isGreaterThan
         */
        this.isGreaterThan = genFnFromBigNumber('isGreaterThan', false).bind(this);
        /**
         * @name isGreaterThanOrEqualTo
         */
        this.isGreaterThanOrEqualTo = genFnFromBigNumber('isGreaterThanOrEqualTo', false).bind(this);
        /**
         * @name isLessThan
         */
        this.isLessThan = genFnFromBigNumber('isLessThan', false).bind(this);
        /**
         * @name isLessOrEqualTo
         */
        this.isLessOrEqualTo = genFnFromBigNumber('isLessThanOrEqualTo', false).bind(this);
        /**
         * @name isEqualTo
         */
        this.isEqualTo = genFnFromBigNumber('isEqualTo', false).bind(this);
        /**
         * @name isZero
         */
        this.isZero = genFnFromBigNumber('isZero', true).bind(this);
        /**
         * @name isNaN
         */
        this.isNaN = genFnFromBigNumber('isNaN', true).bind(this);
        /**
         * @name isFinaite
         */
        this.isFinaite = genFnFromBigNumber('isFinite', true).bind(this);
        /**
         * @name isNegative
         */
        this.isNegative = genFnFromBigNumber('isNegative', true).bind(this);
        /**
         * @name isPositive
         */
        this.isPositive = genFnFromBigNumber('isPositive', true).bind(this);
        // sort name
        this.add = this.plus;
        this.sub = this.minus;
        this.mul = this.times;
        this.lt = this.isLessThan;
        this.gt = this.isGreaterThan;
        this.lte = this.isLessOrEqualTo;
        this.gte = this.isGreaterThanOrEqualTo;
        this.eq = this.isEqualTo;
        if (typeof origin !== 'number' && typeof origin !== 'string')
            throw new Error('FixedPointNumber constructor should use number or string');
        this.precision = precision;
        this.inner = new BN(origin).shiftedBy(this.precision);
    }
    static setGlobalPrecision(precision = 18) {
        GLOBAL_PRECISION = precision;
    }
    /**
     * @name fromRational
     * @description constructor form inner
     */
    static fromRational(numerator, denominator, precision = 18) {
        const _numerator = numerator instanceof FixedPointNumber ? numerator._getInner() : new BN(numerator);
        const _denominator = denominator instanceof FixedPointNumber ? denominator._getInner() : new BN(denominator);
        const inner = _numerator.times(10 ** precision).div(_denominator);
        const temp = new FixedPointNumber(0, precision);
        temp._setInner(inner);
        return temp;
    }
    /**
     * @name fromInner
     * @description constructor form inner
     */
    static fromInner(origin, precision = 18) {
        const inner = new BN(origin);
        const temp = new FixedPointNumber(0, precision);
        temp._setInner(inner);
        return temp;
    }
    /**
     * @name _fromBN
     * @description constructor from BN
     */
    static _fromBN(origin, precision = 18) {
        const temp = new FixedPointNumber(0, precision);
        temp._setInner(origin);
        return temp;
    }
    // set inner directly
    _setInner(origin) {
        this.inner = origin;
    }
    // get inner
    _getInner() {
        return this.inner;
    }
    setMode(dp = 0, rm = 3) {
        BN.config({
            DECIMAL_PLACES: dp,
            ROUNDING_MODE: rm,
            EXPONENTIAL_AT: [-100, 100]
        });
    }
    /**
     * @name toNumber
     */
    toNumber(dp, rm = 3) {
        this.setMode();
        return this.inner
            .shiftedBy(-this.precision)
            .dp((0, lodash_1.isNumber)(dp) ? dp : this.precision || 8, rm)
            .toNumber();
    }
    /**
     * @name toStirng
     */
    toString(dp, rm = 3) {
        this.setMode();
        return this.inner
            .shiftedBy(-this.precision)
            .dp((0, lodash_1.isNumber)(dp) ? dp : this.precision || 8, rm)
            .toString();
    }
    /**
     * @name toChainData
     */
    toChainData() {
        return this.inner.toFixed(0, 3);
    }
    /**
     * @name trunc
     */
    trunc() {
        this.setMode();
        const DIV = 10 ** this.precision;
        const inner = this._getInner().abs().div(DIV).dp(0, 3).times(DIV);
        if (this.isNegative()) {
            return FixedPointNumber._fromBN(inner.negated());
        }
        else {
            return FixedPointNumber._fromBN(inner);
        }
    }
    /**
     * @name frac
     */
    frac() {
        const integer = this.trunc();
        const fractional = this.minus(integer);
        if (integer.isZero()) {
            return fractional;
        }
        else {
            return fractional.abs();
        }
    }
    // set b's precision to this.precision
    alignPrecision(b) {
        if (this.precision !== b.precision) {
            b.setPrecision(this.precision);
        }
    }
    /**
     * @name setPrecision
     * @description change the precision and modify the inner
     */
    setPrecision(precision) {
        const oldPrecision = this.precision;
        this.precision = precision;
        // formula: new inner = old inner / old precision * new precision
        this._setInner(this.inner.shiftedBy(this.precision - oldPrecision));
    }
    /**
     * @name forceSetPrecision
     * @description force change the precision
     */
    forceSetPrecision(precision) {
        this.precision = precision;
    }
    /**
     * @name getPrecision
     * @description get the precision
     */
    getPrecision() {
        return this.precision;
    }
    /**
     * @name abs
     * @description return a FixedPointNumber whose inner value is the absolute value
     */
    abs() {
        return FixedPointNumber._fromBN(this.inner.abs(), this.precision);
    }
    /**
     * @name plus
     * @description return a FixedPointNumber whose value is origin value plus right value
     */
    plus(right) {
        const temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.plus(temp.inner), this.precision);
    }
    /**
     * @name minus
     * @description return a FixedPointNumber whose value is origin value minus right value
     */
    minus(right) {
        const temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.minus(temp.inner), this.precision);
    }
    /**
     * @name times
     * @description return a FixedPointNumber whose value is origin value times right value
     */
    times(right) {
        const temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.times(temp.inner).shiftedBy(-this.precision), this.precision);
    }
    /**
     * @name div
     * @description return a FixedPointNumber whose value is origin value div right value
     */
    div(right) {
        const temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.shiftedBy(this.precision).div(temp.inner), this.precision);
    }
    /**
     * @name reciprocal
     */
    reciprocal() {
        return FixedPointNumber.ONE.div(this);
    }
    /**
     * @name clone
     */
    clone() {
        return FixedPointNumber.fromInner(this.inner.toString(), this.precision);
    }
    /**
     * @name min
     */
    min(...targets) {
        const temp = targets.map((item) => item.clone());
        temp.forEach((item) => this.alignPrecision(item));
        return FixedPointNumber._fromBN(bignumber_js_1.default.min.apply(null, [this.inner, ...temp.map((i) => i._getInner())]), this.precision);
    }
    /**
     * @name max
     */
    max(...targets) {
        const temp = targets.map((item) => item.clone());
        temp.forEach((item) => this.alignPrecision(item));
        return FixedPointNumber._fromBN(bignumber_js_1.default.max.apply(null, [this.inner, ...temp.map((i) => i._getInner())]), this.precision);
    }
}
exports.FixedPointNumber = FixedPointNumber;
// public div = this.div;
FixedPointNumber.ZERO = new FixedPointNumber(0);
FixedPointNumber.ONE = new FixedPointNumber(1);
FixedPointNumber.TWO = new FixedPointNumber(2);
FixedPointNumber.THREE = new FixedPointNumber(3);
FixedPointNumber.FOUR = new FixedPointNumber(4);
FixedPointNumber.FIVE = new FixedPointNumber(5);
FixedPointNumber.SIX = new FixedPointNumber(6);
FixedPointNumber.TEN = new FixedPointNumber(10);
