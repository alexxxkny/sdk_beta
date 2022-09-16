import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { KeyringPair } from '@polkadot/keyring/types';
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

export function getDefaultAccountsKeyring(): KeyringPair[] {
    const keyring = new Keyring({ type: 'sr25519'});

    const alice = keyring.addFromUri('//Alice');
    const bob = keyring.addFromUri('//Bob');
    const eve = keyring.addFromUri('//Eve');
    const charlie = keyring.addFromUri('//Charlie');

    return [alice, bob, eve, charlie];
}

function getTypesDefinitions() {
    return Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
}

function getWsProvider(wsEndpoint: string): WsProvider {
    return new WsProvider(wsEndpoint);
}

