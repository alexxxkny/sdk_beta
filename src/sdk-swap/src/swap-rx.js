"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRx = void 0;
const util_1 = require("@polkadot/util");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../../sdk-core/src");
const swap_base_1 = require("./swap-base");
class SwapRx extends swap_base_1.SwapBase {
    constructor(api) {
        super(api);
        this._swapper = (0, util_1.memoize)((inputToken, outputToken) => {
            return this.getTradingPaths(inputToken, outputToken).pipe((0, operators_1.switchMap)((paths) => this.getLiquidityPoolsByPath(paths).pipe((0, operators_1.withLatestFrom)((0, rxjs_1.of)(paths)))));
        });
        this.getTradingPairs().subscribe((data) => this.enableTradingPairs$.next(data));
    }
    get enableTradingPairs() {
        return this.enableTradingPairs$;
    }
    get availableTokens() {
        return this.enableTradingPairs$.pipe((0, operators_1.map)((tokenPairs) => {
            const temp = new src_1.TokenSet();
            tokenPairs.forEach((tokenPair) => {
                const [token1, token2] = tokenPair.getPair();
                temp.add(token1);
                temp.add(token2);
            });
            return temp;
        }));
    }
    getTradingPairs() {
        return this.api.query.system.events().pipe((0, operators_1.startWith)((0, src_1.mockEventRecord)('', 'EnableTradingPair')), (0, operators_1.switchMap)((events) => (0, rxjs_1.from)(events)), (0, operators_1.filter)((0, src_1.eventMethodsFilter)(['EnableTradingPair', 'ProvisioningToEnabled', 'DisableTradingPair'])), (0, operators_1.switchMap)(() => this.api.query.dex.tradingPairStatuses.entries()), (0, operators_1.map)((result) => {
            const _filterFn = (status) => status.isEnabled;
            return result
                .filter((item) => _filterFn(item[1]))
                .map((item) => src_1.TokenPair.fromCurrencies(item[0].args[0][0], item[0].args[0][1]));
        }), (0, operators_1.shareReplay)(1));
    }
    getLiquidityPoolsByPath(paths) {
        const usedTokenPairs = paths
            .reduce((acc, path) => acc.concat(this.getTokenPairsFromPath(path)), [])
            .reduce((acc, cur) => {
            const isExist = acc.find((item) => item.isEqual(cur));
            if (isExist)
                return acc;
            acc.push(cur);
            return acc;
        }, []);
        return this.api
            .queryMulti(usedTokenPairs.map((item) => [this.api.query.dex.liquidityPool, item.toTradingPair(this.api)]))
            .pipe((0, operators_1.map)((data) => {
            return usedTokenPairs.map((item, index) => {
                const liquidity = data[index];
                const pair = item.getPair();
                return {
                    token1: pair[0],
                    token2: pair[1],
                    balance1: src_1.FixedPointNumber.fromInner(liquidity[0].toString()),
                    balance2: src_1.FixedPointNumber.fromInner(liquidity[1].toString())
                };
            });
        }), (0, operators_1.shareReplay)(1));
    }
    swap(path, input, mode) {
        const inputToken = path[0];
        const outputToken = path[1];
        // clear input amount's precision information
        const _input = src_1.FixedPointNumber._fromBN(input._getInner());
        const inputAmount = mode === 'EXACT_INPUT' ? _input : src_1.FixedPointNumber.ZERO;
        const outputAmount = mode === 'EXACT_OUTPUT' ? _input : src_1.FixedPointNumber.ZERO;
        const swapper = this._swapper(inputToken, outputToken);
        return swapper.pipe((0, operators_1.map)(([liquidityPool, paths]) => {
            return this.getBestSwapResult(mode, paths, liquidityPool, [inputToken, outputToken, inputAmount, outputAmount]);
        }));
    }
}
exports.SwapRx = SwapRx;
