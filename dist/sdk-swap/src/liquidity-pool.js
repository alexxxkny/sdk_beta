"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidityPoolHelper = void 0;
const src_1 = require("../../sdk-core/src");
/**
 * The Helper for liquidity to ex
 */
class LiquidityPoolHelper {
    constructor(state) {
        const [token0, token1] = src_1.Token.sort(state.token0, state.token1);
        const [amount0, amount1] = state.token0.isEqual(token0) ? [state.pool0, state.pool1] : [state.pool1, state.pool0];
        this.token0 = token0;
        this.token1 = token1;
        this.pool0 = amount0;
        this.pool1 = amount1;
    }
    estimateAddLiquidity(params) {
        const { totalShare, maxAmountA, maxAmountB, tokenA } = params;
        // sort input by ordered tokens
        const [maxAmount0, maxAmount1] = this.token0.isEqual(tokenA) ? [maxAmountA, maxAmountB] : [maxAmountB, maxAmountA];
        totalShare.forceSetPrecision(18);
        maxAmount0.forceSetPrecision(18);
        maxAmount1.forceSetPrecision(18);
        let pool0Increment = src_1.FixedPointNumber.ZERO;
        let pool1Increment = src_1.FixedPointNumber.ZERO;
        let incrementShare = src_1.FixedPointNumber.ZERO;
        if (totalShare.isZero()) {
            const exchangeRate0 = src_1.FixedPointNumber.ONE;
            const exchagneRate1 = src_1.FixedPointNumber.fromRational(maxAmount0, maxAmount1);
            const sharesFromToken0 = exchangeRate0.mul(maxAmount0);
            const sharesFromToken1 = exchagneRate1.mul(maxAmount1);
            const initialShares = sharesFromToken0.add(sharesFromToken1);
            pool0Increment = maxAmount0;
            pool1Increment = maxAmount1;
            incrementShare = initialShares;
        }
        else {
            const exchangeRate01 = src_1.FixedPointNumber.fromRational(this.pool1, this.pool0);
            const inputExchangeRate01 = src_1.FixedPointNumber.fromRational(maxAmount1, maxAmount0);
            if (inputExchangeRate01.lte(exchangeRate01)) {
                const exchangeRate10 = src_1.FixedPointNumber.fromRational(this.pool0, this.pool1);
                const amount0 = exchangeRate10.mul(maxAmount1);
                const _incrementShare = src_1.FixedPointNumber.fromRational(amount0, this.pool0).mul(totalShare);
                pool0Increment = amount0;
                pool1Increment = maxAmount1;
                incrementShare = _incrementShare;
            }
            else {
                const amount1 = exchangeRate01.mul(maxAmount0);
                const _incrementShare = src_1.FixedPointNumber.fromRational(amount1, this.pool1).mul(totalShare);
                pool0Increment = maxAmount0;
                pool1Increment = amount1;
                incrementShare = _incrementShare;
            }
        }
        pool0Increment.forceSetPrecision(this.token0.decimals);
        pool1Increment.forceSetPrecision(this.token1.decimals);
        incrementShare.forceSetPrecision(this.token0.decimals);
        return {
            incrementA: this.token0.isEqual(tokenA) ? pool0Increment : pool1Increment,
            incrementB: this.token0.isEqual(tokenA) ? pool1Increment : pool0Increment,
            incrementShare
        };
    }
}
exports.LiquidityPoolHelper = LiquidityPoolHelper;
