"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapParameters = void 0;
class SwapParameters {
    constructor(mode, config) {
        this.mode = mode;
        this.midPrice = config.midPrice;
        this.priceImpact = config.priceImpact;
        this.naturalPriceImpact = config.naturalPriceImpact;
        this.path = config.path;
        this.input = config.input;
        this.output = config.output;
        this.exchangeFee = config.exchangeFee;
        this.exchangeRate = config.exchangeRate;
    }
    toChainData() {
        switch (this.mode) {
            case 'EXACT_INPUT': {
                return [
                    this.path.map((item) => item.toChainData()),
                    this.input.balance.toChainData(),
                    this.output.balance.toChainData()
                ];
            }
            case 'EXACT_OUTPUT': {
                return [
                    this.path.map((item) => item.toChainData()),
                    this.output.balance.toChainData(),
                    this.input.balance.toChainData()
                ];
            }
        }
    }
}
exports.SwapParameters = SwapParameters;
