"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const src_1 = require("../sdk-core/src");
async function main() {
    const api = await (0, common_1.getApiPromise)();
    const swapPromise = (0, common_1.getSwapPromiseFromApi)(api);
    // let we have CGT-DOT token pair
    const CGT = src_1.Token.fromCurrencyName('CGT', { decimals: 18 });
    const DOT = src_1.Token.fromCurrencyName('DOT', { decimals: 10 });
    // user selected input and output tokens
    const inputToken = DOT;
    const outputToken = CGT;
    // user entered the desired output amount
    // !!! Precision (second arg) should be equal to token decimals if the value will be used as token amount !!!
    const outputAmount = new src_1.FixedPointNumber(100, outputToken.decimals);
    // calculate swap parameters
    const swapParams = await swapPromise.swap([inputToken, outputToken], outputAmount, 'EXACT_OUTPUT');
    // i guess there will not be this case because we will only have enabled trading pairs
    if (!swapParams) {
        console.log('unable to swap');
        return;
    }
    // Show info for the user 
    // Especially priceImpact and output
    console.log(`midPrice: ${swapParams?.midPrice}`);
    console.log(`priceImpact: ${swapParams?.priceImpact}`);
    console.log(`naturalPriceImpact: ${swapParams?.naturalPriceImpact}`);
    console.log(`input: ${swapParams?.input.token.name} ${swapParams?.input.balance}`);
    console.log(`output: ${swapParams?.output.token.name} ${swapParams?.output.balance}`);
    console.log(`exchangeFee: ${swapParams?.exchangeFee}`);
    console.log(`exchangeRate: ${swapParams?.exchangeRate}`);
    // if user didn't specify the other one
    const maxInputAmount = swapParams.input.balance;
    // Example account
    const [alice,] = (0, common_1.getDefaultAccountsKeyring)();
    // Chain data
    console.log('Chain data');
    console.log(`Input token: ${swapParams.input.token.toChainData()}`);
    console.log(`Output token: ${swapParams.output.token.toChainData()}`);
    console.log(`Input amount: ${swapParams.input.balance.toChainData()}`);
    console.log(`Maximum supply amount: ${maxInputAmount.toChainData()}`);
    //Make a swap after user vconfirmation
    const unsub = await api.tx.dex
        .swapWithExactTarget([
        swapParams.input.token.toChainData(),
        swapParams.output.token.toChainData()
    ], swapParams.input.balance.toChainData(), maxInputAmount.toChainData())
        .signAndSend(alice, (result) => {
        console.log(`Current status is ${result.status}`);
        if (result.status.isInBlock) {
            console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
        }
        else if (result.status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
            unsub();
        }
    });
}
main();
