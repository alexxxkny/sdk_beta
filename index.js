// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('ws://127.0.0.1:9988');
const api = await ApiPromise.create({
    provider: wsProvider,
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
});

const CGT_symbol = api.createType('TokenSymbol', 'CGT');
console.log(CGT_symbol);

const CGT = api.createType('CurrencyId', {Token: CGT_symbol});
console.log(CGT);

console.log(await api.query.tokens.totalIssuance(CGT));