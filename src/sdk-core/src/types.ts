import { CurrencyId } from '../../interfaces';
import { ApiPromise, ApiRx } from '@polkadot/api';
import { AccountId } from '@polkadot/types/interfaces';
import { Codec, Observable } from '@polkadot/types/types';
import { Token } from './token';

export type AnyApi = ApiPromise | ApiRx;

export type ObOrPromiseResult<T extends AnyApi, R> = T extends ApiRx ? Observable<R> : Promise<R>;

export type MaybeCurrency =
  | number
  | string
  | CurrencyId
  | Token
  | Codec
  | [string, string];

export type MaybeAccount = string | AccountId | Codec;

export enum TokenType {
  'BASIC',
  'DEX_SHARE'
}

/**
 * CurrencyObject is an object which can as parameters in api.registry.createType('CurrencyId', ...).
 * we can simple pass CurrencyObject to any call as CurrencyId type
 */
export type CurrencyObject =
  | { Token: string }
  | { DexShare: [CurrencyObject, CurrencyObject] };
