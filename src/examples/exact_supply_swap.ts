import { getApiPromise, getSwapPromiseFromApi } from './common';
import { Token } from '../sdk-core/src';
 
async function main() {
    const api = await getApiPromise();

    const swapPromise = getSwapPromiseFromApi(api);

    const CGTtoken = Token.fromCurrencyName('CGT', { decimals: 18 });
    const DOTtoken = Token.fromCurrencyName('DOT', { decimals: 10 });

    console.log(CGTtoken);
    console.log(DOTtoken);

    swapPromise.availableTokens.forEach(token => console.log(token));

    const result = await api.query.dex.tradingPairStatuses.entries();
    result.forEach(([key, status]) => {
        console.log('key arguments:', key.args.map((k) => k.toJSON()));
        console.log('status:', status.toHuman());
    });
}

main();