// import '../interfaces/augment-api';
// import '../interfaces/augment-types';
// import '@polkadot/api-base/types/storage';

import { getApiPromise, getSwapPromiseFromApi, getDefaultAccountsKeyring } from './common';
import { FixedPointNumber, Token, TokenPair } from '../sdk-core/src';
import { LiquidityPoolHelper } from '../sdk-swap/src';
import BN from 'bn.js';
 
async function main() {
    const api = await getApiPromise();

    // let we have CGT-DOT token pair
    const CGT = Token.fromCurrencyName('CGT', { decimals: 18} );
    const DOT = Token.fromCurrencyName('DOT', { decimals: 10} );

    // user selected tokens
    const tokenA = CGT;
    const tokenB = DOT;
    const pair = new TokenPair(tokenA, tokenB);

    // Example account
    const [alice, ] = getDefaultAccountsKeyring();

    // getting user's share
    const dexShare = Token.fromTokens(tokenA, tokenB).toCurrencyId(api); // lp token for the pair
    const userShare = await api.query.tokens.accounts(alice.address, dexShare);

    console.log(`user's free share: ${userShare.free.toString()}`);

    // let's remove a half of the share
    const shareToRemove = userShare.free.div(new BN(2));

    // removeLiquidity
    const unsub = await api.tx.dex
        .removeLiquidity(  
            tokenA.toCurrencyId(api),
            tokenB.toCurrencyId(api),
            shareToRemove,
            0, // as user specify
            0, // as user specify
            true // TODO: ???
        )
        .signAndSend(alice, (result) => {
            console.log(`Current status is ${result.status}`);
            if (result.status.isInBlock) {
            console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
            } else if (result.status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
            unsub();
            }
        });
}

main();
