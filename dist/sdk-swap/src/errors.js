"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoTradingPathError = exports.AmountTooSmall = exports.NoLiquidityPoolError = exports.InsufficientLiquidityError = void 0;
/* the output amount is larger than the liquidity pool */
class InsufficientLiquidityError extends Error {
    constructor() {
        super();
        this.name = 'InsufficientLiquidity';
        this.message = 'Insufficient Liquidity';
    }
}
exports.InsufficientLiquidityError = InsufficientLiquidityError;
/* the output amount is larger than the liquidity pool */
class NoLiquidityPoolError extends Error {
    constructor() {
        super();
        this.name = 'NoLiquidityPool';
        this.message = 'No Liquidity Pool';
    }
}
exports.NoLiquidityPoolError = NoLiquidityPoolError;
/* the input or output is too small */
class AmountTooSmall extends Error {
    constructor() {
        super();
        this.name = 'AmountTooSmall';
        this.message = 'Amount Too Samll';
    }
}
exports.AmountTooSmall = AmountTooSmall;
/* no trading path found for the swap */
class NoTradingPathError extends Error {
    constructor() {
        super();
        this.name = 'NoTradingPath';
        this.message = 'No Trading Path';
    }
}
exports.NoTradingPathError = NoTradingPathError;
