import { getApiPromise, getSwapPromiseFromApi } from './common';
import { FixedPointNumber, Token, TokenPair } from '../sdk-core/src';

import { lastValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
 
async function main() {
    const api = await getApiPromise();

    const swapPromise = getSwapPromiseFromApi(api);

    // const CGTtoken = Token.fromCurrencyName('CGT', { decimals: 18 });
    // const DOTtoken = Token.fromCurrencyName('DOT', { decimals: 10 });

    // console.log(CGTtoken);
    // console.log(DOTtoken);

    // const statuses = await api.query.dex.tradingPairStatuses.entries();

    // statuses.forEach(([key, status]) => {
    //     console.log(key.args[0][0].asToken.toString());
    //     console.log(key.args[0][1].toJSON());
    //     console.log(TokenPair.fromCurrencies(key.args[0][0], key.args[0][1]));
    //   });

    // console.log(lastValueFrom(swapPromise.getTradingPaths(CGTtoken, DOTtoken)));

    //swapPromise.availableTokens.subscribe(value => console.log(value));

    const tokens = await lastValueFrom(swapPromise.availableTokens.pipe(take(2)));
    const CGT = tokens.values()[0];
    const DOT = tokens.values()[2];

    console.log(CGT);
    console.log(DOT);

    const path = await lastValueFrom(swapPromise.getTradingPaths(CGT, DOT).pipe(take(1)));

    const params = await swapPromise.swap([CGT, DOT], new FixedPointNumber(100), 'EXACT_INPUT');

    console.log(`midPrice: ${params?.midPrice}`);
    console.log(`priceImpact: ${params?.priceImpact}`);
    console.log(`naturalPriceImpact: ${params?.naturalPriceImpact}`);
    console.log(`input: ${params?.input.token.name} ${params?.input.balance}`);
    console.log(`output: ${params?.output.token.name} ${params?.output.balance}`);
    console.log(`exchangeFee: ${params?.exchangeFee}`);
    console.log(`exchangeRate: ${params?.exchangeRate}`);

    //console.log(api.createType('TradingPair', [{token: "CGT"}, {token: "DOT"}]));
}

main();
