// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Balance, BlockNumber } from 'polkadotjs_test/interfaces/runtime';

/** @name ProvisionParameters */
export interface ProvisionParameters extends Struct {
  readonly minContribution: ITuple<[Balance, Balance]>;
  readonly targetProvision: ITuple<[Balance, Balance]>;
  readonly accumulatedProvision: ITuple<[Balance, Balance]>;
  readonly notBefore: BlockNumber;
}

/** @name TradingPairStatus */
export interface TradingPairStatus extends Enum {
  readonly isDisabled: boolean;
  readonly isProvisioning: boolean;
  readonly asProvisioning: ProvisionParameters;
  readonly isEnabled: boolean;
  readonly type: 'Disabled' | 'Provisioning' | 'Enabled';
}

export type PHANTOM_DEX = 'dex';
