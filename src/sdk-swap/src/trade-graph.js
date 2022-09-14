"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeGraph = void 0;
const lodash_1 = require("lodash");
class TradeGraph {
    constructor(data) {
        this.adj = {};
        for (const item of data) {
            const [token1, token2] = item.getPair();
            (0, lodash_1.set)(this.adj, token1.name, [...(this.adj[token1.name] || []), token2]);
            (0, lodash_1.set)(this.adj, token2.name, [...(this.adj[token2.name] || []), token1]);
        }
    }
    getAdj(token) {
        return this.adj[token.toString()];
    }
    getPathes(start, end, lengthLimit) {
        const result = [];
        const path = [start];
        const searchList = [(this.adj[start.name] || []).slice()];
        while (path.length > 0) {
            const searchListHead = searchList.pop() || [];
            if (searchListHead.length > 0) {
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                const firstNode = searchListHead.shift();
                path.push(firstNode);
                searchList.push(searchListHead);
                let nextSearchPathItem = (this.adj[firstNode.name] || []).slice();
                if (nextSearchPathItem.length > 0) {
                    nextSearchPathItem = nextSearchPathItem.filter((m) => {
                        return !path.find((n) => n.isEqual(m));
                    });
                    searchList.push(nextSearchPathItem);
                }
            }
            else {
                path.pop();
            }
            if (path.length > 0 && path[path.length - 1].isEqual(end)) {
                result.push([...path]);
                path.pop();
                searchList.pop();
            }
        }
        return result.filter((item) => (lengthLimit ? item.length <= lengthLimit : true));
    }
}
exports.TradeGraph = TradeGraph;
