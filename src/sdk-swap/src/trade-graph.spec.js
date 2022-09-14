"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../sdk-core/src");
const trade_graph_1 = require("./trade-graph");
describe('trade graph', () => {
    const aca = new src_1.Token('ACA');
    const ausd = new src_1.Token('AUSD');
    const dot = new src_1.Token('DOT');
    const xbtc = new src_1.Token('XBTC');
    const renbtc = new src_1.Token('RENBTC');
    test('create trade graph', () => {
        const tradeGraph = new trade_graph_1.TradeGraph([
            new src_1.TokenPair(aca, ausd),
            new src_1.TokenPair(aca, dot),
            new src_1.TokenPair(aca, xbtc),
            new src_1.TokenPair(aca, renbtc),
            new src_1.TokenPair(dot, renbtc)
        ]);
        expect(tradeGraph.getAdj(aca)).toEqual([ausd, dot, xbtc, renbtc]);
        expect(tradeGraph.getAdj(ausd)).toEqual([aca]);
        expect(tradeGraph.getAdj(renbtc)).toEqual([aca, dot]);
    });
    test('get path should be work', () => {
        const tradeGraph = new trade_graph_1.TradeGraph([
            new src_1.TokenPair(aca, ausd),
            new src_1.TokenPair(aca, dot),
            new src_1.TokenPair(aca, xbtc),
            new src_1.TokenPair(aca, renbtc),
            new src_1.TokenPair(dot, renbtc),
            new src_1.TokenPair(dot, ausd)
        ]);
        const _dot = new src_1.Token('DOT');
        const dot2renbtc = tradeGraph.getPathes(_dot, renbtc);
        expect(dot2renbtc[0]).toEqual([_dot, aca, renbtc]);
        expect(dot2renbtc[1]).toEqual([_dot, renbtc]);
        expect(dot2renbtc[2]).toEqual([_dot, ausd, aca, renbtc]);
        const aca2ausd = tradeGraph.getPathes(aca, ausd);
        expect(aca2ausd[0]).toEqual([aca, ausd]);
        expect(aca2ausd[1]).toEqual([aca, dot, ausd]);
        expect(aca2ausd[2]).toEqual([aca, renbtc, dot, ausd]);
    });
});
