"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromiseOrAtQuery = exports.getSubscribeOrAtQuery = void 0;
const getSubscribeOrAtQuery = (query, at) => {
    return ((...params) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (at)
            query.at(at, ...params);
        return query(...params);
    });
};
exports.getSubscribeOrAtQuery = getSubscribeOrAtQuery;
const getPromiseOrAtQuery = (query, at) => {
    return ((...params) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (at)
            query.at(at, ...params);
        return query(...params);
    });
};
exports.getPromiseOrAtQuery = getPromiseOrAtQuery;
