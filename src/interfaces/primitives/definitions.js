"use strict";
exports.__esModule = true;
exports["default"] = {
    types: {
        Amount: 'i128',
        TokenSymbol: {
            _enum: {
                CGT: 0,
                DOT: 2,
                QTZ: 3,
                ETH: 20
            }
        },
        DexShare: {
            _enum: {
                Token: 'TokenSymbol'
            }
        },
        CurrencyId: {
            _enum: {
                Token: 'TokenSymbol',
                DEXShare: '(DexShare, DexShare)'
            }
        },
        TradingPair: '(CurrencyId,  CurrencyId)'
    }
};
