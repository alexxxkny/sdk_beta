"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("./token");
describe('token', () => {
    const t1 = new token_1.Token('DOT', { decimals: 18 });
    test('token constructor should work', () => {
        expect(t1.name).toEqual('DOT');
        expect(t1.decimals).toEqual(18);
    });
    test('clone tokens should work', () => {
        const t2 = t1.clone();
        expect(t2.name).toEqual('DOT');
        expect(t2.decimals).toEqual(18);
    });
    test('fromCurrencyId set default token decimal should work', () => {
        const mockACA = { asToken: { toString: () => 'ACA' }, isToken: true };
        const mockAUSD = { asToken: { toString: () => 'AUSD' }, isToken: true };
        const mockDOT = { asToken: { toString: () => 'DOT' }, isToken: true };
        expect(token_1.Token.fromCurrencyId(mockACA).name).toEqual('ACA');
        expect(token_1.Token.fromCurrencyId(mockAUSD).name).toEqual('AUSD');
        expect(token_1.Token.fromCurrencyId(mockDOT).name).toEqual('DOT');
    });
    test('toChainData should work', () => {
        expect(t1.toChainData()).toEqual({ Token: 'DOT' });
    });
    test('isEqual should work', () => {
        const t2 = t1.clone();
        const t3 = new token_1.Token('DOT', { decimals: 17 });
        const t4 = new token_1.Token('AUSD', { decimals: 18 });
        expect(t1.isEqual(t2)).toEqual(true);
        expect(t1.isEqual(t3, (i, j) => i.name === j.name && i.decimals === j.decimals)).toEqual(false);
        expect(t1.isEqual(t4)).toEqual(false);
    });
    test('toString should work', () => {
        expect(t1.toString()).toEqual('DOT');
    });
    test('sort tokens should work', () => {
        const aca = new token_1.Token('ACA');
        const dot = new token_1.Token('DOT');
        const acaausd = new token_1.Token('lp://ACA/AUSD');
        const fa0 = new token_1.Token('fa://0');
        const fa1 = new token_1.Token('fa://1');
        const sa0 = new token_1.Token('sa://0');
        const sa1 = new token_1.Token('sa://1');
        // basic symbol & basic symbol
        expect(token_1.Token.sort(aca, dot)).toEqual([aca, dot]);
        expect(token_1.Token.sort(dot, aca)).toEqual([aca, dot]);
        // basic symbol & lp
        expect(token_1.Token.sort(acaausd, aca)).toEqual([aca, acaausd]);
        expect(token_1.Token.sort(aca, acaausd)).toEqual([aca, acaausd]);
        // basic symbol & foregin asset
        expect(token_1.Token.sort(aca, fa0)).toEqual([aca, fa0]);
        expect(token_1.Token.sort(fa0, aca)).toEqual([aca, fa0]);
        // foregin asset & foregin asset
        expect(token_1.Token.sort(fa1, fa0)).toEqual([fa0, fa1]);
        expect(token_1.Token.sort(fa0, fa1)).toEqual([fa0, fa1]);
        // basic symbol & stable pool
        expect(token_1.Token.sort(aca, sa0)).toEqual([aca, sa0]);
        expect(token_1.Token.sort(sa0, aca)).toEqual([aca, sa0]);
        // stable pool & stable pool
        expect(token_1.Token.sort(sa1, sa0)).toEqual([sa0, sa1]);
        expect(token_1.Token.sort(sa0, sa1)).toEqual([sa0, sa1]);
        // foregin & stable pool
        expect(token_1.Token.sort(fa1, sa0)).toEqual([sa0, fa1]);
        expect(token_1.Token.sort(sa0, fa1)).toEqual([sa0, fa1]);
    });
});
