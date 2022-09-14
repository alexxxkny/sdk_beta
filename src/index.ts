import { ApiPromise, WsProvider } from '@polkadot/api';
import { SwapPromise } from './sdk-swap/src/swap-promise';

import { TokenSymbol, CurrencyId } from './interfaces/types';

import * as definitions from './interfaces/definitions';

async function main() {
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const wsProvider = new WsProvider('ws://127.0.0.1:9988');
    const api = await ApiPromise.create({
        provider: wsProvider,
        types: {
            ...types
        }
    });

    const CGT_symbol: TokenSymbol = api.createType('TokenSymbol', 'CGT');
    console.log(CGT_symbol.isCgt);
    console.log(CGT_symbol.isDot);

    const CGT: CurrencyId = api.createType('CurrencyId', {Token: CGT_symbol});
    console.log(CGT.isToken);
    console.log(CGT.isDexShare);

    console.log(await api.query.tokens.totalIssuance(CGT));

    const swapPromise = new SwapPromise(api);

    swapPromise.availableTokens.forEach(token => console.log(token));
}

main();