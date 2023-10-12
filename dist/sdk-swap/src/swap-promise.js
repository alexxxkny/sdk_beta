"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapPromise = void 0;
const util_1 = require("@polkadot/util");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../../sdk-core/src");
const src_2 = require("../../sdk-core/src");
const swap_base_1 = require("./swap-base");
class SwapPromise extends swap_base_1.SwapBase {
    constructor(api) {
        super(api);
        this.getLiquidityPoolsByPath = (0, util_1.memoize)((paths) => {
            const usedTokenPairs = paths
                .reduce((acc, path) => {
                acc = acc.concat(this.getTokenPairsFromPath(path));
                return acc;
            }, [])
                .reduce((acc, cur) => {
                const isExist = acc.find((item) => item.isEqual(cur));
                if (isExist)
                    return acc;
                acc.push(cur);
                return acc;
            }, []);
            return (0, rxjs_1.from)(this.api.queryMulti(usedTokenPairs.map((item) => [this.api.query.dex.liquidityPool, item.toTradingPair(this.api)]))).pipe((0, operators_1.map)((data) => {
                return usedTokenPairs.map((item, index) => {
                    const liquidity = data[index];
                    const pair = item.getPair();
                    return {
                        token1: pair[0],
                        token2: pair[1],
                        balance1: src_2.FixedPointNumber.fromInner(liquidity[0].toString()),
                        balance2: src_2.FixedPointNumber.fromInner(liquidity[1].toString())
                    };
                });
            }), (0, operators_1.shareReplay)(1));
        });
        this.swapper = (0, util_1.memoize)((inputToken, outputToken) => {
            return this.enableTradingPairs$.pipe((0, operators_1.filter)((i) => i.length !== 0), (0, operators_1.switchMap)(() => {
                return this.getTradingPaths(inputToken, outputToken).pipe((0, operators_1.switchMap)((paths) => this.getLiquidityPoolsByPath(paths).pipe((0, operators_1.withLatestFrom)((0, rxjs_1.of)(paths)))), (0, operators_1.shareReplay)(1));
            }));
        });
        this._getTradingPairs();
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
    getEnableTradingPairs() {
        return (0, rxjs_1.lastValueFrom)(this.enableTradingPairs$);
    }
    _getTradingPairs() {
        const inner = async () => {
            const result = await this.api.query.dex.tradingPairStatuses.entries();
            this.enableTradingPairs$.next(result
                .filter(([, status]) => status.isEnabled)
                .map((item) => src_1.TokenPair.fromCurrencies(item[0].args[0][0], item[0].args[0][1])));
        };
        inner();
        this.api.query.system.events((result) => {
            for (const event of result) {
                if ((0, src_1.eventMethodsFilter)(['EnableTradingPair', 'ProvisioningToEnabled', 'DisableTradingPair'])(event)) {
                    inner();
                }
            }
        });
    }
    getTradingPairs() {
        return this.enableTradingPairs$;
    }
    async swap(path, input, mode) {
        const inputToken = path[0];
        const outputToken = path[1];
        // clear input amount's precision information
        const _input = src_2.FixedPointNumber._fromBN(input._getInner());
        const inputAmount = mode === 'EXACT_INPUT' ? _input : src_2.FixedPointNumber.ZERO;
        const outputAmount = mode === 'EXACT_OUTPUT' ? _input : src_2.FixedPointNumber.ZERO;
        const swapper = this.swapper(inputToken, outputToken);
        const result = await swapper
            .pipe((0, operators_1.filter)(([liquidityPool]) => liquidityPool.length !== 0), (0, operators_1.map)(([liquidityPool, paths]) => {
            return this.getBestSwapResult(mode, paths, liquidityPool, [
                inputToken,
                outputToken,
                inputAmount,
                outputAmount
            ]);
        }), (0, operators_1.take)(1))
            .toPromise();
        return result;
    }
}
exports.SwapPromise = SwapPromise;
