// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, CurioPrimitivesCurrencyCurrencyId, CurioPrimitivesCurrencyDexShare, CurioPrimitivesCurrencyTokenSymbol, CurioPrimitivesTradingPair, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportScheduleLookupError, FrameSupportScheduleMaybeHashed, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassU64, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsRuntimeDbWeight, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReleases, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletCollatorSelectionCall, PalletCollatorSelectionCandidateInfo, PalletCollatorSelectionError, PalletCollatorSelectionEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyReleases, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletDexModuleCall, PalletDexModuleError, PalletDexModuleEvent, PalletDexProvisioningParameters, PalletDexTradingPairStatus, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletParachainStakingBond, PalletParachainStakingCall, PalletParachainStakingCandidateBondLessRequest, PalletParachainStakingCandidateMetadata, PalletParachainStakingCapacityStatus, PalletParachainStakingCollatorSnapshot, PalletParachainStakingCollatorStatus, PalletParachainStakingDelayedPayout, PalletParachainStakingDelegationRequestsCancelledScheduledRequest, PalletParachainStakingDelegationRequestsDelegationAction, PalletParachainStakingDelegationRequestsScheduledRequest, PalletParachainStakingDelegations, PalletParachainStakingDelegator, PalletParachainStakingDelegatorAdded, PalletParachainStakingDelegatorStatus, PalletParachainStakingError, PalletParachainStakingEvent, PalletParachainStakingInflationInflationInfo, PalletParachainStakingParachainBondConfig, PalletParachainStakingRoundInfo, PalletParachainStakingSetOrderedSet, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduledV3, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCall, PalletSocietyError, PalletSocietyEvent, PalletSocietyJudgement, PalletSocietyVote, PalletSocietyVouchingStatus, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, ParachainNodeRuntimeOriginCaller, ParachainNodeRuntimeProxyType, ParachainNodeRuntimeRuntime, ParachainNodeRuntimeSessionKeys, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeArithmeticError, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeader, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, XcmDoubleEncoded, XcmV0Junction, XcmV0JunctionBodyId, XcmV0JunctionBodyPart, XcmV0JunctionNetworkId, XcmV0MultiAsset, XcmV0MultiLocation, XcmV0Order, XcmV0OriginKind, XcmV0Response, XcmV0Xcm, XcmV1Junction, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetAssetId, XcmV1MultiassetAssetInstance, XcmV1MultiassetFungibility, XcmV1MultiassetMultiAssetFilter, XcmV1MultiassetMultiAssets, XcmV1MultiassetWildFungibility, XcmV1MultiassetWildMultiAsset, XcmV1MultilocationJunctions, XcmV1Order, XcmV1Response, XcmV1Xcm, XcmV2Instruction, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2WeightLimit, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    CurioPrimitivesCurrencyCurrencyId: CurioPrimitivesCurrencyCurrencyId;
    CurioPrimitivesCurrencyDexShare: CurioPrimitivesCurrencyDexShare;
    CurioPrimitivesCurrencyTokenSymbol: CurioPrimitivesCurrencyTokenSymbol;
    CurioPrimitivesTradingPair: CurioPrimitivesTradingPair;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportScheduleLookupError: FrameSupportScheduleLookupError;
    FrameSupportScheduleMaybeHashed: FrameSupportScheduleMaybeHashed;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
    FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
    FrameSupportWeightsPays: FrameSupportWeightsPays;
    FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
    FrameSupportWeightsPerDispatchClassU64: FrameSupportWeightsPerDispatchClassU64;
    FrameSupportWeightsPerDispatchClassWeightsPerClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReleases: PalletBalancesReleases;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionCandidateInfo: PalletCollatorSelectionCandidateInfo;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyPreimageStatus: PalletDemocracyPreimageStatus;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyReleases: PalletDemocracyReleases;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletDexModuleCall: PalletDexModuleCall;
    PalletDexModuleError: PalletDexModuleError;
    PalletDexModuleEvent: PalletDexModuleEvent;
    PalletDexProvisioningParameters: PalletDexProvisioningParameters;
    PalletDexTradingPairStatus: PalletDexTradingPairStatus;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletIndicesCall: PalletIndicesCall;
    PalletIndicesError: PalletIndicesError;
    PalletIndicesEvent: PalletIndicesEvent;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletParachainStakingBond: PalletParachainStakingBond;
    PalletParachainStakingCall: PalletParachainStakingCall;
    PalletParachainStakingCandidateBondLessRequest: PalletParachainStakingCandidateBondLessRequest;
    PalletParachainStakingCandidateMetadata: PalletParachainStakingCandidateMetadata;
    PalletParachainStakingCapacityStatus: PalletParachainStakingCapacityStatus;
    PalletParachainStakingCollatorSnapshot: PalletParachainStakingCollatorSnapshot;
    PalletParachainStakingCollatorStatus: PalletParachainStakingCollatorStatus;
    PalletParachainStakingDelayedPayout: PalletParachainStakingDelayedPayout;
    PalletParachainStakingDelegationRequestsCancelledScheduledRequest: PalletParachainStakingDelegationRequestsCancelledScheduledRequest;
    PalletParachainStakingDelegationRequestsDelegationAction: PalletParachainStakingDelegationRequestsDelegationAction;
    PalletParachainStakingDelegationRequestsScheduledRequest: PalletParachainStakingDelegationRequestsScheduledRequest;
    PalletParachainStakingDelegations: PalletParachainStakingDelegations;
    PalletParachainStakingDelegator: PalletParachainStakingDelegator;
    PalletParachainStakingDelegatorAdded: PalletParachainStakingDelegatorAdded;
    PalletParachainStakingDelegatorStatus: PalletParachainStakingDelegatorStatus;
    PalletParachainStakingError: PalletParachainStakingError;
    PalletParachainStakingEvent: PalletParachainStakingEvent;
    PalletParachainStakingInflationInflationInfo: PalletParachainStakingInflationInflationInfo;
    PalletParachainStakingParachainBondConfig: PalletParachainStakingParachainBondConfig;
    PalletParachainStakingRoundInfo: PalletParachainStakingRoundInfo;
    PalletParachainStakingSetOrderedSet: PalletParachainStakingSetOrderedSet;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduledV3: PalletSchedulerScheduledV3;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSocietyBid: PalletSocietyBid;
    PalletSocietyBidKind: PalletSocietyBidKind;
    PalletSocietyCall: PalletSocietyCall;
    PalletSocietyError: PalletSocietyError;
    PalletSocietyEvent: PalletSocietyEvent;
    PalletSocietyJudgement: PalletSocietyJudgement;
    PalletSocietyVote: PalletSocietyVote;
    PalletSocietyVouchingStatus: PalletSocietyVouchingStatus;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingCall: PalletVestingCall;
    PalletVestingError: PalletVestingError;
    PalletVestingEvent: PalletVestingEvent;
    PalletVestingReleases: PalletVestingReleases;
    PalletVestingVestingInfo: PalletVestingVestingInfo;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    ParachainNodeRuntimeOriginCaller: ParachainNodeRuntimeOriginCaller;
    ParachainNodeRuntimeProxyType: ParachainNodeRuntimeProxyType;
    ParachainNodeRuntimeRuntime: ParachainNodeRuntimeRuntime;
    ParachainNodeRuntimeSessionKeys: ParachainNodeRuntimeSessionKeys;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV0Junction: XcmV0Junction;
    XcmV0JunctionBodyId: XcmV0JunctionBodyId;
    XcmV0JunctionBodyPart: XcmV0JunctionBodyPart;
    XcmV0JunctionNetworkId: XcmV0JunctionNetworkId;
    XcmV0MultiAsset: XcmV0MultiAsset;
    XcmV0MultiLocation: XcmV0MultiLocation;
    XcmV0Order: XcmV0Order;
    XcmV0OriginKind: XcmV0OriginKind;
    XcmV0Response: XcmV0Response;
    XcmV0Xcm: XcmV0Xcm;
    XcmV1Junction: XcmV1Junction;
    XcmV1MultiAsset: XcmV1MultiAsset;
    XcmV1MultiLocation: XcmV1MultiLocation;
    XcmV1MultiassetAssetId: XcmV1MultiassetAssetId;
    XcmV1MultiassetAssetInstance: XcmV1MultiassetAssetInstance;
    XcmV1MultiassetFungibility: XcmV1MultiassetFungibility;
    XcmV1MultiassetMultiAssetFilter: XcmV1MultiassetMultiAssetFilter;
    XcmV1MultiassetMultiAssets: XcmV1MultiassetMultiAssets;
    XcmV1MultiassetWildFungibility: XcmV1MultiassetWildFungibility;
    XcmV1MultiassetWildMultiAsset: XcmV1MultiassetWildMultiAsset;
    XcmV1MultilocationJunctions: XcmV1MultilocationJunctions;
    XcmV1Order: XcmV1Order;
    XcmV1Response: XcmV1Response;
    XcmV1Xcm: XcmV1Xcm;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2TraitsOutcome: XcmV2TraitsOutcome;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
