export default {
    types: {
      ProvisionParameters: {
        minContribution: '(Balance, Balance)',
        targetProvision: '(Balance, Balance)',
        accumulatedProvision: '(Balance, Balance)',
        notBefore: 'BlockNumber'
      },
      TradingPairStatus: {
        _enum: {
          Disabled: 'Null',
          Provisioning: 'ProvisionParameters',
          Enabled: 'Null'
        }
      }
    }
  };