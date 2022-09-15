import { ApiPromise, WsProvider } from '@polkadot/api';
import { SwapPromise } from '../sdk-swap/src'; 

import * as definitions from '../interfaces/definitions';

const devWsEndpoint = 'ws://localhost:9988';

export function getSwapPromiseFromApi(api: ApiPromise): SwapPromise {
    return new SwapPromise(api);
}

export function getApiPromise(wsEndpoint?: string): Promise<ApiPromise> {
    const types = getTypesDefinitions();

    const wsProvider = getWsProvider(wsEndpoint || devWsEndpoint);
    return ApiPromise.create({
        provider: wsProvider,
        types: {
            ...types
        }
    });
}

function getTypesDefinitions() {
    return Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
}

function getWsProvider(wsEndpoint: string): WsProvider {
    return new WsProvider(wsEndpoint);
}
