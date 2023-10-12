"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapBase = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../../sdk-core/src");
const utils_1 = require("./utils");
const trade_graph_1 = require("./trade-graph");
const swap_parameters_1 = require("./swap-parameters");
const errors_1 = require("./errors");
const MINIMUM_AMOUNT = 1;
const ONE = src_1.FixedPointNumber.ONE;
function calculateExchangeFeeRate(path, fee) {
    return ONE.minus(path.slice(1).reduce((acc) => {
        return acc.times(ONE.minus(fee));
    }, ONE));
}
class SwapBase {
    constructor(api) {
        this.api = api;
        this.constants = this.queryConstants();
        this.enableTradingPairs$ = new rxjs_1.BehaviorSubject([]);
    }
    get config() {
        return this.constants;
    }
    queryConstants() {
        const exchangeFee = this.api.consts.dex.getExchangeFee;
        return {
            tradingPathLimit: parseInt(this.api?.consts?.dex?.tradingPathLimit?.toString() || '3'),
            fee: {
                denominator: new src_1.FixedPointNumber(exchangeFee[1].toString()),
                numerator: new src_1.FixedPointNumber(exchangeFee[0].toString())
            }
        };
    }
    getTokenPairsFromPath(path) {
        const temp = path.slice();
        // push undefined as tail sentinel
        temp.push(undefined);
        return temp.reduce((acc, cur, current) => {
            if (!cur || !temp[current + 1])
                return acc;
            acc.push(new src_1.TokenPair(cur, temp[current + 1]));
            return acc;
        }, []);
    }
    isTradingPairEnable(currency1, currency2, enablePairs) {
        const temp = new src_1.TokenPair(currency1, currency2);
        return !!enablePairs.find((item) => item.isEqual(temp));
    }
    // check all token pairs is enable which used by the path
    isPathUseable(path, enablePairs) {
        const tokenPairs = this.getTokenPairsFromPath(path);
        const invalidated = tokenPairs.filter((item) => {
            const [token1, token2] = item.getPair();
            return !this.isTradingPairEnable(token1, token2, enablePairs);
        });
        return invalidated.length === 0;
    }
    getTradingPaths(input, output) {
        return this.enableTradingPairs$.pipe((0, operators_1.map)((pairs) => {
            const tradeGraph = new trade_graph_1.TradeGraph(pairs);
            let paths = tradeGraph.getPathes(input, output, this.constants.tradingPathLimit);
            paths = paths.filter((path) => this.isPathUseable(path, pairs));
            if (paths.length === 0)
                throw new errors_1.NoTradingPathError();
            return paths;
        }));
    }
    sortLiquidityPoolWithTokenOrder(pool, token1) {
        return pool.token1.isEqual(token1) ? [pool.balance1, pool.balance2] : [pool.balance2, pool.balance1];
    }
    getOutputAmountWithExactInput(inputToken, outputToken, inputAmount, outputAmount, path, liquidityPools) {
        const result = {
            inputToken,
            outputToken,
            path,
            inputAmount,
            outputAmount
        };
        for (let i = 0; i < path.length - 1; i++) {
            const pair = new src_1.TokenPair(path[i], path[i + 1]);
            const [token1, token2] = pair.getPair();
            const pool = liquidityPools.find((item) => item.token1.isEqual(token1) && item.token2.isEqual(token2));
            if (!pool)
                throw new errors_1.NoLiquidityPoolError();
            const [supply, target] = this.sortLiquidityPoolWithTokenOrder(pool, path[i]);
            if (supply.isZero() || target.isZero())
                throw new errors_1.InsufficientLiquidityError();
            const outputAmount = (0, utils_1.getTargetAmount)(supply, target, i === 0 ? result.inputAmount : result.outputAmount, this.constants.fee);
            if (inputAmount._getInner().toNumber() < MINIMUM_AMOUNT)
                throw new errors_1.AmountTooSmall();
            if (outputAmount._getInner().toNumber() < MINIMUM_AMOUNT)
                throw new errors_1.AmountTooSmall();
            if (outputAmount.isZero())
                throw new errors_1.InsufficientLiquidityError();
            result.outputAmount = outputAmount;
        }
        const midPrice = this.calculateMidPrice(path, liquidityPools);
        return this.transformToSwapResult({
            ...result,
            midPrice,
            priceImpact: this.calculatePriceImpact(midPrice, result.inputAmount, result.outputAmount)
        });
    }
    getInputAmountWithExactOutput(inputToken, outputToken, inputAmount, outputAmount, path, liquidityPools) {
        const result = {
            inputToken,
            outputToken,
            path,
            inputAmount,
            outputAmount
        };
        for (let i = path.length - 1; i > 0; i--) {
            const pair = new src_1.TokenPair(path[i], path[i - 1]);
            const [token1, token2] = pair.getPair();
            const pool = liquidityPools.find((item) => item.token1.isEqual(token1) && item.token2.isEqual(token2));
            if (!pool)
                throw new errors_1.NoLiquidityPoolError();
            const [supply, target] = this.sortLiquidityPoolWithTokenOrder(pool, path[i - 1]);
            if (supply.isZero() || target.isZero())
                throw new errors_1.InsufficientLiquidityError();
            const inputAmount = (0, utils_1.getSupplyAmount)(supply, target, i === path.length - 1 ? result.outputAmount : result.inputAmount, this.constants.fee);
            if (outputAmount._getInner().toNumber() < MINIMUM_AMOUNT)
                throw new errors_1.AmountTooSmall();
            if (inputAmount._getInner().toNumber() < MINIMUM_AMOUNT)
                throw new errors_1.AmountTooSmall();
            if (inputAmount.isZero())
                throw new errors_1.InsufficientLiquidityError();
            result.inputAmount = inputAmount;
        }
        const midPrice = this.calculateMidPrice(path, liquidityPools);
        return this.transformToSwapResult({
            ...result,
            midPrice,
            priceImpact: this.calculatePriceImpact(midPrice, result.inputAmount, result.outputAmount)
        });
    }
    calculateExchangeFee(path, input, fee, decimal) {
        const rate = calculateExchangeFeeRate(path, fee.numerator.div(fee.denominator));
        const data = input.times(rate);
        data.forceSetPrecision(decimal);
        return { fee: data, rate };
    }
    calculateMidPrice(path, pools) {
        const prices = [];
        for (let i = 0; i < path.length - 1; i++) {
            const pair = new src_1.TokenPair(path[i], path[i + 1]);
            const [token1, token2] = pair.getPair();
            const pool = pools.find((item) => item.token1.isEqual(token1) && item.token2.isEqual(token2));
            if (!pool)
                throw new errors_1.NoLiquidityPoolError();
            const [balance1, balance2] = this.sortLiquidityPoolWithTokenOrder(pool, path[i]);
            prices.push(balance2.div(balance1));
        }
        return prices.slice(1).reduce((acc, cur) => {
            return acc.times(cur);
        }, prices[0]);
    }
    calculatePriceImpact(midPrice, inputAmount, outputAmount) {
        const temp = midPrice.times(inputAmount);
        return temp.minus(outputAmount).div(temp);
    }
    transformToSwapResult(result) {
        const { inputAmount, inputToken, outputAmount, outputToken, path, ...others } = result;
        const _inputAmount = inputAmount.clone();
        const _outputAmount = outputAmount.clone();
        _inputAmount.forceSetPrecision(inputToken.decimals);
        _outputAmount.forceSetPrecision(outputToken.decimals);
        const { fee: exchangeFee, rate: exchangeRate } = this.calculateExchangeFee(path, inputAmount, this.config.fee, inputToken.decimals);
        return {
            exchangeFee,
            exchangeRate,
            input: new src_1.TokenBalance(inputToken, _inputAmount),
            output: new src_1.TokenBalance(outputToken, _outputAmount),
            path,
            naturalPriceImpact: others.priceImpact.sub(exchangeRate).max(src_1.FixedPointNumber.ZERO),
            ...others
        };
    }
    getBestSwapResult(mode, paths, liquidityPools, baseParams) {
        const swapResult = paths.map((path) => {
            const params = [...baseParams, path, liquidityPools];
            try {
                return [
                    null,
                    mode === 'EXACT_INPUT'
                        ? this.getOutputAmountWithExactInput(...params)
                        : this.getInputAmountWithExactOutput(...params)
                ];
            }
            catch (e) {
                return [e, null];
            }
        });
        const swapResultsLen = swapResult.length;
        const result = swapResult.reduce((preResult, [error, result], i) => {
            if (!preResult && error && i === swapResultsLen - 1) {
                throw error;
            }
            if (!result)
                return preResult;
            if (result && preResult) {
                if (mode === 'EXACT_INPUT' && preResult.output.balance.gt(result.output.balance))
                    return preResult;
                if (mode === 'EXACT_OUTPUT' && preResult.input.balance.lt(result.input.balance))
                    return preResult;
            }
            return result;
        }, swapResult?.[0]?.[1]);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return new swap_parameters_1.SwapParameters(mode, result);
    }
}
exports.SwapBase = SwapBase;
