export default {
    types: {
        TokenSymbol: {
            _enum: ['CGT', 'DOT', 'QTZ', 'ETH']
        },
        DexShare: {
            _enum: {
                Token: 'TokenSymbol'
            }
        },
        CurrencyId: {
            _enum: {
                Token: 'TokenSymbol',
                DexShare: '(DexShare, DexShare)'
            }
        }
    }
}