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
exports.FixedPointNumber = void 0;
var bignumber_js_1 = require("bignumber.js");
var lodash_1 = require("lodash");
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
        var temp = right.clone();
        /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        this.alignPrecision(temp);
        // @ts-ignore
        return this.inner[fn](temp._getInner());
        /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-ts-comment */
    };
}
var BN = bignumber_js_1["default"].clone();
var GLOBAL_PRECISION = 18;
var FixedPointNumber = /** @class */ (function () {
    function FixedPointNumber(origin, precision) {
        if (precision === void 0) { precision = GLOBAL_PRECISION; }
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
    FixedPointNumber.setGlobalPrecision = function (precision) {
        if (precision === void 0) { precision = 18; }
        GLOBAL_PRECISION = precision;
    };
    /**
     * @name fromRational
     * @description constructor form inner
     */
    FixedPointNumber.fromRational = function (numerator, denominator, precision) {
        if (precision === void 0) { precision = 18; }
        var _numerator = numerator instanceof FixedPointNumber ? numerator._getInner() : new BN(numerator);
        var _denominator = denominator instanceof FixedPointNumber ? denominator._getInner() : new BN(denominator);
        var inner = _numerator.times(Math.pow(10, precision)).div(_denominator);
        var temp = new FixedPointNumber(0, precision);
        temp._setInner(inner);
        return temp;
    };
    /**
     * @name fromInner
     * @description constructor form inner
     */
    FixedPointNumber.fromInner = function (origin, precision) {
        if (precision === void 0) { precision = 18; }
        var inner = new BN(origin);
        var temp = new FixedPointNumber(0, precision);
        temp._setInner(inner);
        return temp;
    };
    /**
     * @name _fromBN
     * @description constructor from BN
     */
    FixedPointNumber._fromBN = function (origin, precision) {
        if (precision === void 0) { precision = 18; }
        var temp = new FixedPointNumber(0, precision);
        temp._setInner(origin);
        return temp;
    };
    // set inner directly
    FixedPointNumber.prototype._setInner = function (origin) {
        this.inner = origin;
    };
    // get inner
    FixedPointNumber.prototype._getInner = function () {
        return this.inner;
    };
    FixedPointNumber.prototype.setMode = function (dp, rm) {
        if (dp === void 0) { dp = 0; }
        if (rm === void 0) { rm = 3; }
        BN.config({
            DECIMAL_PLACES: dp,
            ROUNDING_MODE: rm,
            EXPONENTIAL_AT: [-100, 100]
        });
    };
    /**
     * @name toNumber
     */
    FixedPointNumber.prototype.toNumber = function (dp, rm) {
        if (rm === void 0) { rm = 3; }
        this.setMode();
        return this.inner
            .shiftedBy(-this.precision)
            .dp((0, lodash_1.isNumber)(dp) ? dp : this.precision || 8, rm)
            .toNumber();
    };
    /**
     * @name toStirng
     */
    FixedPointNumber.prototype.toString = function (dp, rm) {
        if (rm === void 0) { rm = 3; }
        this.setMode();
        return this.inner
            .shiftedBy(-this.precision)
            .dp((0, lodash_1.isNumber)(dp) ? dp : this.precision || 8, rm)
            .toString();
    };
    /**
     * @name toChainData
     */
    FixedPointNumber.prototype.toChainData = function () {
        return this.inner.toFixed(0, 3);
    };
    /**
     * @name trunc
     */
    FixedPointNumber.prototype.trunc = function () {
        this.setMode();
        var DIV = Math.pow(10, this.precision);
        var inner = this._getInner().abs().div(DIV).dp(0, 3).times(DIV);
        if (this.isNegative()) {
            return FixedPointNumber._fromBN(inner.negated());
        }
        else {
            return FixedPointNumber._fromBN(inner);
        }
    };
    /**
     * @name frac
     */
    FixedPointNumber.prototype.frac = function () {
        var integer = this.trunc();
        var fractional = this.minus(integer);
        if (integer.isZero()) {
            return fractional;
        }
        else {
            return fractional.abs();
        }
    };
    // set b's precision to this.precision
    FixedPointNumber.prototype.alignPrecision = function (b) {
        if (this.precision !== b.precision) {
            b.setPrecision(this.precision);
        }
    };
    /**
     * @name setPrecision
     * @description change the precision and modify the inner
     */
    FixedPointNumber.prototype.setPrecision = function (precision) {
        var oldPrecision = this.precision;
        this.precision = precision;
        // formula: new inner = old inner / old precision * new precision
        this._setInner(this.inner.shiftedBy(this.precision - oldPrecision));
    };
    /**
     * @name forceSetPrecision
     * @description force change the precision
     */
    FixedPointNumber.prototype.forceSetPrecision = function (precision) {
        this.precision = precision;
    };
    /**
     * @name getPrecision
     * @description get the precision
     */
    FixedPointNumber.prototype.getPrecision = function () {
        return this.precision;
    };
    /**
     * @name abs
     * @description return a FixedPointNumber whose inner value is the absolute value
     */
    FixedPointNumber.prototype.abs = function () {
        return FixedPointNumber._fromBN(this.inner.abs(), this.precision);
    };
    /**
     * @name plus
     * @description return a FixedPointNumber whose value is origin value plus right value
     */
    FixedPointNumber.prototype.plus = function (right) {
        var temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.plus(temp.inner), this.precision);
    };
    /**
     * @name minus
     * @description return a FixedPointNumber whose value is origin value minus right value
     */
    FixedPointNumber.prototype.minus = function (right) {
        var temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.minus(temp.inner), this.precision);
    };
    /**
     * @name times
     * @description return a FixedPointNumber whose value is origin value times right value
     */
    FixedPointNumber.prototype.times = function (right) {
        var temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.times(temp.inner).shiftedBy(-this.precision), this.precision);
    };
    /**
     * @name div
     * @description return a FixedPointNumber whose value is origin value div right value
     */
    FixedPointNumber.prototype.div = function (right) {
        var temp = right.clone();
        this.alignPrecision(temp);
        this.setMode();
        return FixedPointNumber._fromBN(this.inner.shiftedBy(this.precision).div(temp.inner), this.precision);
    };
    /**
     * @name reciprocal
     */
    FixedPointNumber.prototype.reciprocal = function () {
        return FixedPointNumber.ONE.div(this);
    };
    /**
     * @name clone
     */
    FixedPointNumber.prototype.clone = function () {
        return FixedPointNumber.fromInner(this.inner.toString(), this.precision);
    };
    /**
     * @name min
     */
    FixedPointNumber.prototype.min = function () {
        var _this = this;
        var targets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targets[_i] = arguments[_i];
        }
        var temp = targets.map(function (item) { return item.clone(); });
        temp.forEach(function (item) { return _this.alignPrecision(item); });
        return FixedPointNumber._fromBN(bignumber_js_1["default"].min.apply(null, __spreadArray([this.inner], temp.map(function (i) { return i._getInner(); }), true)), this.precision);
    };
    /**
     * @name max
     */
    FixedPointNumber.prototype.max = function () {
        var _this = this;
        var targets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targets[_i] = arguments[_i];
        }
        var temp = targets.map(function (item) { return item.clone(); });
        temp.forEach(function (item) { return _this.alignPrecision(item); });
        return FixedPointNumber._fromBN(bignumber_js_1["default"].max.apply(null, __spreadArray([this.inner], temp.map(function (i) { return i._getInner(); }), true)), this.precision);
    };
    // public div = this.div;
    FixedPointNumber.ZERO = new FixedPointNumber(0);
    FixedPointNumber.ONE = new FixedPointNumber(1);
    FixedPointNumber.TWO = new FixedPointNumber(2);
    FixedPointNumber.THREE = new FixedPointNumber(3);
    FixedPointNumber.FOUR = new FixedPointNumber(4);
    FixedPointNumber.FIVE = new FixedPointNumber(5);
    FixedPointNumber.SIX = new FixedPointNumber(6);
    FixedPointNumber.TEN = new FixedPointNumber(10);
    return FixedPointNumber;
}());
exports.FixedPointNumber = FixedPointNumber;
