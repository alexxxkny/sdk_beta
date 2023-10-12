"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultAccountsKeyring = exports.getApiPromise = exports.getSwapPromiseFromApi = void 0;
const api_1 = require("@polkadot/api");
const src_1 = require("../sdk-swap/src");
const definitions = __importStar(require("../interfaces/definitions"));
const devWsEndpoint = 'ws://localhost:9988';
function getSwapPromiseFromApi(api) {
    return new src_1.SwapPromise(api);
}
exports.getSwapPromiseFromApi = getSwapPromiseFromApi;
function getApiPromise(wsEndpoint) {
    const types = getTypesDefinitions();
    const wsProvider = getWsProvider(wsEndpoint || devWsEndpoint);
    return api_1.ApiPromise.create({
        provider: wsProvider,
        types: {
            ...types
        }
    });
}
exports.getApiPromise = getApiPromise;
function getDefaultAccountsKeyring() {
    const keyring = new api_1.Keyring({ type: 'sr25519' });
    const alice = keyring.addFromUri('//Alice');
    const bob = keyring.addFromUri('//Bob');
    const eve = keyring.addFromUri('//Eve');
    const charlie = keyring.addFromUri('//Charlie');
    return [alice, bob, eve, charlie];
}
exports.getDefaultAccountsKeyring = getDefaultAccountsKeyring;
function getTypesDefinitions() {
    return Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});
}
function getWsProvider(wsEndpoint) {
    return new api_1.WsProvider(wsEndpoint);
}
