"use strict";
// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable sort-keys */
exports.default = {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: 'u32',
        consumers: 'u32',
        providers: 'u32',
        sufficients: 'u32',
        data: 'PalletBalancesAccountData'
    },
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: 'u128',
        reserved: 'u128',
        miscFrozen: 'u128',
        feeFrozen: 'u128'
    },
    /**
     * Lookup7: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU64: {
        normal: 'u64',
        operational: 'u64',
        mandatory: 'u64'
    },
    /**
     * Lookup11: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: 'Vec<SpRuntimeDigestDigestItem>'
    },
    /**
     * Lookup13: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: 'Bytes',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Consensus: '([u8;4],Bytes)',
            Seal: '([u8;4],Bytes)',
            PreRuntime: '([u8;4],Bytes)',
            __Unused7: 'Null',
            RuntimeEnvironmentUpdated: 'Null'
        }
    },
    /**
     * Lookup16: frame_system::EventRecord<parachain_node_runtime::Event, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: 'FrameSystemPhase',
        event: 'Event',
        topics: 'Vec<H256>'
    },
    /**
     * Lookup18: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: 'FrameSupportWeightsDispatchInfo',
            },
            ExtrinsicFailed: {
                dispatchError: 'SpRuntimeDispatchError',
                dispatchInfo: 'FrameSupportWeightsDispatchInfo',
            },
            CodeUpdated: 'Null',
            NewAccount: {
                account: 'AccountId32',
            },
            KilledAccount: {
                account: 'AccountId32',
            },
            Remarked: {
                _alias: {
                    hash_: 'hash',
                },
                sender: 'AccountId32',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup19: frame_support::weights::DispatchInfo
     **/
    FrameSupportWeightsDispatchInfo: {
        weight: 'u64',
        class: 'FrameSupportWeightsDispatchClass',
        paysFee: 'FrameSupportWeightsPays'
    },
    /**
     * Lookup20: frame_support::weights::DispatchClass
     **/
    FrameSupportWeightsDispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * Lookup21: frame_support::weights::Pays
     **/
    FrameSupportWeightsPays: {
        _enum: ['Yes', 'No']
    },
    /**
     * Lookup22: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: 'Null',
            CannotLookup: 'Null',
            BadOrigin: 'Null',
            Module: 'SpRuntimeModuleError',
            ConsumerRemaining: 'Null',
            NoProviders: 'Null',
            TooManyConsumers: 'Null',
            Token: 'SpRuntimeTokenError',
            Arithmetic: 'SpRuntimeArithmeticError',
            Transactional: 'SpRuntimeTransactionalError'
        }
    },
    /**
     * Lookup23: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: 'u8',
        error: '[u8;4]'
    },
    /**
     * Lookup24: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    /**
     * Lookup25: sp_runtime::ArithmeticError
     **/
    SpRuntimeArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * Lookup26: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: ['LimitReached', 'NoLayer']
    },
    /**
     * Lookup27: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: 'AccountId32',
                index: 'u32',
            },
            IndexFreed: {
                index: 'u32',
            },
            IndexFrozen: {
                index: 'u32',
                who: 'AccountId32'
            }
        }
    },
    /**
     * Lookup28: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: 'Null',
            ValidationFunctionApplied: {
                relayChainBlockNum: 'u32',
            },
            ValidationFunctionDiscarded: 'Null',
            UpgradeAuthorized: {
                codeHash: 'H256',
            },
            DownwardMessagesReceived: {
                count: 'u32',
            },
            DownwardMessagesProcessed: {
                weightUsed: 'u64',
                dmqHead: 'H256'
            }
        }
    },
    /**
     * Lookup29: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: 'AccountId32',
                freeBalance: 'u128',
            },
            DustLost: {
                account: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            BalanceSet: {
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            Reserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
            },
            Deposit: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Withdraw: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup30: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ['Free', 'Reserved']
    },
    /**
     * Lookup31: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: 'AccountId32',
                actualFee: 'u128',
                tip: 'u128'
            }
        }
    },
    /**
     * Lookup32: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustLost: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Reserved: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                status: 'FrameSupportTokensMiscBalanceStatus',
            },
            BalanceSet: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            TotalIssuanceSet: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                freeAmount: 'u128',
                reservedAmount: 'u128',
            },
            Deposited: {
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockSet: {
                lockId: '[u8;8]',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockRemoved: {
                lockId: '[u8;8]',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                who: 'AccountId32'
            }
        }
    },
    /**
     * Lookup33: curio_primitives::currency::CurrencyId
     **/
    CurioPrimitivesCurrencyCurrencyId: {
        _enum: {
            Token: 'CurioPrimitivesCurrencyTokenSymbol',
            DexShare: '(CurioPrimitivesCurrencyDexShare,CurioPrimitivesCurrencyDexShare)'
        }
    },
    /**
     * Lookup34: curio_primitives::currency::TokenSymbol
     **/
    CurioPrimitivesCurrencyTokenSymbol: {
        _enum: ['CGT', '__Unused1', 'DOT', 'QTZ', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', 'ETH']
    },
    /**
     * Lookup35: curio_primitives::currency::DexShare
     **/
    CurioPrimitivesCurrencyDexShare: {
        _enum: {
            Token: 'CurioPrimitivesCurrencyTokenSymbol'
        }
    },
    /**
     * Lookup37: pallet_parachain_staking::pallet::Event<T>
     **/
    PalletParachainStakingEvent: {
        _enum: {
            NewRound: {
                startingBlock: 'u32',
                round: 'u32',
                selectedCollatorsNumber: 'u32',
                totalBalance: 'u128',
            },
            JoinedCollatorCandidates: {
                account: 'AccountId32',
                amountLocked: 'u128',
                newTotalAmtLocked: 'u128',
            },
            CollatorChosen: {
                round: 'u32',
                collatorAccount: 'AccountId32',
                totalExposedAmount: 'u128',
            },
            CandidateBondLessRequested: {
                candidate: 'AccountId32',
                amountToDecrease: 'u128',
                executeRound: 'u32',
            },
            CandidateBondedMore: {
                candidate: 'AccountId32',
                amount: 'u128',
                newTotalBond: 'u128',
            },
            CandidateBondedLess: {
                candidate: 'AccountId32',
                amount: 'u128',
                newBond: 'u128',
            },
            CandidateWentOffline: {
                candidate: 'AccountId32',
            },
            CandidateBackOnline: {
                candidate: 'AccountId32',
            },
            CandidateScheduledExit: {
                exitAllowedRound: 'u32',
                candidate: 'AccountId32',
                scheduledExit: 'u32',
            },
            CancelledCandidateExit: {
                candidate: 'AccountId32',
            },
            CancelledCandidateBondLess: {
                candidate: 'AccountId32',
                amount: 'u128',
                executeRound: 'u32',
            },
            CandidateLeft: {
                exCandidate: 'AccountId32',
                unlockedAmount: 'u128',
                newTotalAmtLocked: 'u128',
            },
            DelegationDecreaseScheduled: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                amountToDecrease: 'u128',
                executeRound: 'u32',
            },
            DelegationIncreased: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                amount: 'u128',
                inTop: 'bool',
            },
            DelegationDecreased: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                amount: 'u128',
                inTop: 'bool',
            },
            DelegatorExitScheduled: {
                round: 'u32',
                delegator: 'AccountId32',
                scheduledExit: 'u32',
            },
            DelegationRevocationScheduled: {
                round: 'u32',
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                scheduledExit: 'u32',
            },
            DelegatorLeft: {
                delegator: 'AccountId32',
                unstakedAmount: 'u128',
            },
            DelegationRevoked: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                unstakedAmount: 'u128',
            },
            DelegationKicked: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                unstakedAmount: 'u128',
            },
            DelegatorExitCancelled: {
                delegator: 'AccountId32',
            },
            CancelledDelegationRequest: {
                delegator: 'AccountId32',
                cancelledRequest: 'PalletParachainStakingDelegationRequestsCancelledScheduledRequest',
                collator: 'AccountId32',
            },
            Delegation: {
                delegator: 'AccountId32',
                lockedAmount: 'u128',
                candidate: 'AccountId32',
                delegatorPosition: 'PalletParachainStakingDelegatorAdded',
            },
            DelegatorLeftCandidate: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                unstakedAmount: 'u128',
                totalCandidateStaked: 'u128',
            },
            Rewarded: {
                account: 'AccountId32',
                rewards: 'u128',
            },
            ReservedForParachainBond: {
                account: 'AccountId32',
                value: 'u128',
            },
            ParachainBondAccountSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'AccountId32',
                new_: 'AccountId32',
            },
            ParachainBondReservePercentSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'Percent',
                new_: 'Percent',
            },
            InflationSet: {
                annualMin: 'Perbill',
                annualIdeal: 'Perbill',
                annualMax: 'Perbill',
                roundMin: 'Perbill',
                roundIdeal: 'Perbill',
                roundMax: 'Perbill',
            },
            StakeExpectationsSet: {
                expectMin: 'u128',
                expectIdeal: 'u128',
                expectMax: 'u128',
            },
            TotalSelectedSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'u32',
                new_: 'u32',
            },
            CollatorCommissionSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'Perbill',
                new_: 'Perbill',
            },
            BlocksPerRoundSet: {
                _alias: {
                    new_: 'new',
                },
                currentRound: 'u32',
                firstBlock: 'u32',
                old: 'u32',
                new_: 'u32',
                newPerRoundInflationMin: 'Perbill',
                newPerRoundInflationIdeal: 'Perbill',
                newPerRoundInflationMax: 'Perbill'
            }
        }
    },
    /**
     * Lookup39: pallet_parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
     **/
    PalletParachainStakingDelegationRequestsCancelledScheduledRequest: {
        whenExecutable: 'u32',
        action: 'PalletParachainStakingDelegationRequestsDelegationAction'
    },
    /**
     * Lookup40: pallet_parachain_staking::delegation_requests::DelegationAction<Balance>
     **/
    PalletParachainStakingDelegationRequestsDelegationAction: {
        _enum: {
            Revoke: 'u128',
            Decrease: 'u128'
        }
    },
    /**
     * Lookup41: pallet_parachain_staking::types::DelegatorAdded<B>
     **/
    PalletParachainStakingDelegatorAdded: {
        _enum: {
            AddedToTop: {
                newTotal: 'u128',
            },
            AddedToBottom: 'Null'
        }
    },
    /**
     * Lookup44: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: 'u32'
            }
        }
    },
    /**
     * Lookup45: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
                deposit: 'u128',
            },
            Tabled: {
                proposalIndex: 'u32',
                deposit: 'u128',
                depositors: 'Vec<AccountId32>',
            },
            ExternalTabled: 'Null',
            Started: {
                refIndex: 'u32',
                threshold: 'PalletDemocracyVoteThreshold',
            },
            Passed: {
                refIndex: 'u32',
            },
            NotPassed: {
                refIndex: 'u32',
            },
            Cancelled: {
                refIndex: 'u32',
            },
            Executed: {
                refIndex: 'u32',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            Delegated: {
                who: 'AccountId32',
                target: 'AccountId32',
            },
            Undelegated: {
                account: 'AccountId32',
            },
            Vetoed: {
                who: 'AccountId32',
                proposalHash: 'H256',
                until: 'u32',
            },
            PreimageNoted: {
                proposalHash: 'H256',
                who: 'AccountId32',
                deposit: 'u128',
            },
            PreimageUsed: {
                proposalHash: 'H256',
                provider: 'AccountId32',
                deposit: 'u128',
            },
            PreimageInvalid: {
                proposalHash: 'H256',
                refIndex: 'u32',
            },
            PreimageMissing: {
                proposalHash: 'H256',
                refIndex: 'u32',
            },
            PreimageReaped: {
                proposalHash: 'H256',
                provider: 'AccountId32',
                deposit: 'u128',
                reaper: 'AccountId32',
            },
            Blacklisted: {
                proposalHash: 'H256',
            },
            Voted: {
                voter: 'AccountId32',
                refIndex: 'u32',
                vote: 'PalletDemocracyVoteAccountVote',
            },
            Seconded: {
                seconder: 'AccountId32',
                propIndex: 'u32',
            },
            ProposalCanceled: {
                propIndex: 'u32'
            }
        }
    },
    /**
     * Lookup47: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
    },
    /**
     * Lookup50: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: 'Vote',
                balance: 'u128',
            },
            Split: {
                aye: 'u128',
                nay: 'u128'
            }
        }
    },
    /**
     * Lookup52: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: 'AccountId32',
                proposalIndex: 'u32',
                proposalHash: 'H256',
                threshold: 'u32',
            },
            Voted: {
                account: 'AccountId32',
                proposalHash: 'H256',
                voted: 'bool',
                yes: 'u32',
                no: 'u32',
            },
            Approved: {
                proposalHash: 'H256',
            },
            Disapproved: {
                proposalHash: 'H256',
            },
            Executed: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MemberExecuted: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            Closed: {
                proposalHash: 'H256',
                yes: 'u32',
                no: 'u32'
            }
        }
    },
    /**
     * Lookup54: pallet_elections_phragmen::pallet::Event<T>
     **/
    PalletElectionsPhragmenEvent: {
        _enum: {
            NewTerm: {
                newMembers: 'Vec<(AccountId32,u128)>',
            },
            EmptyTerm: 'Null',
            ElectionError: 'Null',
            MemberKicked: {
                member: 'AccountId32',
            },
            Renounced: {
                candidate: 'AccountId32',
            },
            CandidateSlashed: {
                candidate: 'AccountId32',
                amount: 'u128',
            },
            SeatHolderSlashed: {
                seatHolder: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup57: pallet_membership::pallet::Event<T, I>
     **/
    PalletMembershipEvent: {
        _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
    },
    /**
     * Lookup58: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: 'Option<H256>',
                weight: 'u64',
            },
            Fail: {
                messageHash: 'Option<H256>',
                error: 'XcmV2TraitsError',
                weight: 'u64',
            },
            BadVersion: {
                messageHash: 'Option<H256>',
            },
            BadFormat: {
                messageHash: 'Option<H256>',
            },
            UpwardMessageSent: {
                messageHash: 'Option<H256>',
            },
            XcmpMessageSent: {
                messageHash: 'Option<H256>',
            },
            OverweightEnqueued: {
                sender: 'u32',
                sentAt: 'u32',
                index: 'u64',
                required: 'u64',
            },
            OverweightServiced: {
                index: 'u64',
                used: 'u64'
            }
        }
    },
    /**
     * Lookup60: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            MultiLocationFull: 'Null',
            MultiLocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'u64',
            Barrier: 'Null',
            WeightNotComputable: 'Null'
        }
    },
    /**
     * Lookup62: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: 'XcmV2TraitsOutcome',
            Sent: '(XcmV1MultiLocation,XcmV1MultiLocation,XcmV2Xcm)',
            UnexpectedResponse: '(XcmV1MultiLocation,u64)',
            ResponseReady: '(u64,XcmV2Response)',
            Notified: '(u64,u8,u8)',
            NotifyOverweight: '(u64,u8,u8,u64,u64)',
            NotifyDispatchError: '(u64,u8,u8)',
            NotifyDecodeFailed: '(u64,u8,u8)',
            InvalidResponder: '(XcmV1MultiLocation,u64,Option<XcmV1MultiLocation>)',
            InvalidResponderVersion: '(XcmV1MultiLocation,u64)',
            ResponseTaken: 'u64',
            AssetsTrapped: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)',
            VersionChangeNotified: '(XcmV1MultiLocation,u32)',
            SupportedVersionChanged: '(XcmV1MultiLocation,u32)',
            NotifyTargetSendFail: '(XcmV1MultiLocation,u64,XcmV2TraitsError)',
            NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)'
        }
    },
    /**
     * Lookup63: xcm::v2::traits::Outcome
     **/
    XcmV2TraitsOutcome: {
        _enum: {
            Complete: 'u64',
            Incomplete: '(u64,XcmV2TraitsError)',
            Error: 'XcmV2TraitsError'
        }
    },
    /**
     * Lookup64: xcm::v1::multilocation::MultiLocation
     **/
    XcmV1MultiLocation: {
        parents: 'u8',
        interior: 'XcmV1MultilocationJunctions'
    },
    /**
     * Lookup65: xcm::v1::multilocation::Junctions
     **/
    XcmV1MultilocationJunctions: {
        _enum: {
            Here: 'Null',
            X1: 'XcmV1Junction',
            X2: '(XcmV1Junction,XcmV1Junction)',
            X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
        }
    },
    /**
     * Lookup66: xcm::v1::junction::Junction
     **/
    XcmV1Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'XcmV0JunctionNetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'XcmV0JunctionNetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'XcmV0JunctionNetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV0JunctionBodyId',
                part: 'XcmV0JunctionBodyPart'
            }
        }
    },
    /**
     * Lookup68: xcm::v0::junction::NetworkId
     **/
    XcmV0JunctionNetworkId: {
        _enum: {
            Any: 'Null',
            Named: 'Bytes',
            Polkadot: 'Null',
            Kusama: 'Null'
        }
    },
    /**
     * Lookup73: xcm::v0::junction::BodyId
     **/
    XcmV0JunctionBodyId: {
        _enum: {
            Unit: 'Null',
            Named: 'Bytes',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null'
        }
    },
    /**
     * Lookup74: xcm::v0::junction::BodyPart
     **/
    XcmV0JunctionBodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup75: xcm::v2::Xcm<Call>
     **/
    XcmV2Xcm: 'Vec<XcmV2Instruction>',
    /**
     * Lookup77: xcm::v2::Instruction<Call>
     **/
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: 'XcmV1MultiassetMultiAssets',
            ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV2Response',
                maxWeight: 'Compact<u64>',
            },
            TransferAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                beneficiary: 'XcmV1MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                dest: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            Transact: {
                originType: 'XcmV0OriginKind',
                requireWeightAtMost: 'Compact<u64>',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'XcmV1MultilocationJunctions',
            ReportError: {
                queryId: 'Compact<u64>',
                dest: 'XcmV1MultiLocation',
                maxResponseWeight: 'Compact<u64>',
            },
            DepositAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                beneficiary: 'XcmV1MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                dest: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            ExchangeAsset: {
                give: 'XcmV1MultiassetMultiAssetFilter',
                receive: 'XcmV1MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                reserve: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            InitiateTeleport: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                dest: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV1MultiLocation',
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxResponseWeight: 'Compact<u64>',
            },
            BuyExecution: {
                fees: 'XcmV1MultiAsset',
                weightLimit: 'XcmV2WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'XcmV2Xcm',
            SetAppendix: 'XcmV2Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                ticket: 'XcmV1MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    /**
     * Lookup78: xcm::v1::multiasset::MultiAssets
     **/
    XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',
    /**
     * Lookup80: xcm::v1::multiasset::MultiAsset
     **/
    XcmV1MultiAsset: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetFungibility'
    },
    /**
     * Lookup81: xcm::v1::multiasset::AssetId
     **/
    XcmV1MultiassetAssetId: {
        _enum: {
            Concrete: 'XcmV1MultiLocation',
            Abstract: 'Bytes'
        }
    },
    /**
     * Lookup82: xcm::v1::multiasset::Fungibility
     **/
    XcmV1MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'XcmV1MultiassetAssetInstance'
        }
    },
    /**
     * Lookup83: xcm::v1::multiasset::AssetInstance
     **/
    XcmV1MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]',
            Blob: 'Bytes'
        }
    },
    /**
     * Lookup85: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: 'Null',
            Assets: 'XcmV1MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
            Version: 'u32'
        }
    },
    /**
     * Lookup88: xcm::v0::OriginKind
     **/
    XcmV0OriginKind: {
        _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    /**
     * Lookup89: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: 'Bytes'
    },
    /**
     * Lookup90: xcm::v1::multiasset::MultiAssetFilter
     **/
    XcmV1MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'XcmV1MultiassetMultiAssets',
            Wild: 'XcmV1MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup91: xcm::v1::multiasset::WildMultiAsset
     **/
    XcmV1MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'XcmV1MultiassetAssetId',
                fun: 'XcmV1MultiassetWildFungibility'
            }
        }
    },
    /**
     * Lookup92: xcm::v1::multiasset::WildFungibility
     **/
    XcmV1MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup93: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'Compact<u64>'
        }
    },
    /**
     * Lookup95: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            V0: 'Vec<XcmV0MultiAsset>',
            V1: 'XcmV1MultiassetMultiAssets'
        }
    },
    /**
     * Lookup97: xcm::v0::multi_asset::MultiAsset
     **/
    XcmV0MultiAsset: {
        _enum: {
            None: 'Null',
            All: 'Null',
            AllFungible: 'Null',
            AllNonFungible: 'Null',
            AllAbstractFungible: {
                id: 'Bytes',
            },
            AllAbstractNonFungible: {
                class: 'Bytes',
            },
            AllConcreteFungible: {
                id: 'XcmV0MultiLocation',
            },
            AllConcreteNonFungible: {
                class: 'XcmV0MultiLocation',
            },
            AbstractFungible: {
                id: 'Bytes',
                amount: 'Compact<u128>',
            },
            AbstractNonFungible: {
                class: 'Bytes',
                instance: 'XcmV1MultiassetAssetInstance',
            },
            ConcreteFungible: {
                id: 'XcmV0MultiLocation',
                amount: 'Compact<u128>',
            },
            ConcreteNonFungible: {
                class: 'XcmV0MultiLocation',
                instance: 'XcmV1MultiassetAssetInstance'
            }
        }
    },
    /**
     * Lookup98: xcm::v0::multi_location::MultiLocation
     **/
    XcmV0MultiLocation: {
        _enum: {
            Null: 'Null',
            X1: 'XcmV0Junction',
            X2: '(XcmV0Junction,XcmV0Junction)',
            X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
        }
    },
    /**
     * Lookup99: xcm::v0::junction::Junction
     **/
    XcmV0Junction: {
        _enum: {
            Parent: 'Null',
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'XcmV0JunctionNetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'XcmV0JunctionNetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'XcmV0JunctionNetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV0JunctionBodyId',
                part: 'XcmV0JunctionBodyPart'
            }
        }
    },
    /**
     * Lookup100: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            V0: 'XcmV0MultiLocation',
            V1: 'XcmV1MultiLocation'
        }
    },
    /**
     * Lookup101: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: '[u8;8]',
            UnsupportedVersion: '[u8;8]',
            ExecutedDownward: '([u8;8],XcmV2TraitsOutcome)'
        }
    },
    /**
     * Lookup102: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageId: '[u8;32]',
            },
            UnsupportedVersion: {
                messageId: '[u8;32]',
            },
            ExecutedDownward: {
                messageId: '[u8;32]',
                outcome: 'XcmV2TraitsOutcome',
            },
            WeightExhausted: {
                messageId: '[u8;32]',
                remainingWeight: 'u64',
                requiredWeight: 'u64',
            },
            OverweightEnqueued: {
                messageId: '[u8;32]',
                overweightIndex: 'u64',
                requiredWeight: 'u64',
            },
            OverweightServiced: {
                overweightIndex: 'u64',
                weightUsed: 'u64'
            }
        }
    },
    /**
     * Lookup103: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: 'u32',
                error: 'SpRuntimeDispatchError',
            },
            BatchCompleted: 'Null',
            BatchCompletedWithErrors: 'Null',
            ItemCompleted: 'Null',
            ItemFailed: {
                error: 'SpRuntimeDispatchError',
            },
            DispatchedAs: {
                result: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup104: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: 'u32',
                index: 'u32',
            },
            Canceled: {
                when: 'u32',
                index: 'u32',
            },
            Dispatched: {
                task: '(u32,u32)',
                id: 'Option<Bytes>',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            CallLookupFailed: {
                task: '(u32,u32)',
                id: 'Option<Bytes>',
                error: 'FrameSupportScheduleLookupError'
            }
        }
    },
    /**
     * Lookup107: frame_support::traits::schedule::LookupError
     **/
    FrameSupportScheduleLookupError: {
        _enum: ['Unknown', 'BadFormat']
    },
    /**
     * Lookup108: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            AnonymousCreated: {
                anonymous: 'AccountId32',
                who: 'AccountId32',
                proxyType: 'ParachainNodeRuntimeProxyType',
                disambiguationIndex: 'u16',
            },
            Announced: {
                real: 'AccountId32',
                proxy: 'AccountId32',
                callHash: 'H256',
            },
            ProxyAdded: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'ParachainNodeRuntimeProxyType',
                delay: 'u32',
            },
            ProxyRemoved: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'ParachainNodeRuntimeProxyType',
                delay: 'u32'
            }
        }
    },
    /**
     * Lookup109: parachain_node_runtime::ProxyType
     **/
    ParachainNodeRuntimeProxyType: {
        _enum: ['Any', 'NonTransfer', 'Governance']
    },
    /**
     * Lookup111: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: 'AccountId32',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigApproval: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigExecuted: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MultisigCancelled: {
                cancelling: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup112: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: 'u32',
        index: 'u32'
    },
    /**
     * Lookup113: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: 'AccountId32',
            },
            IdentityCleared: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            IdentityKilled: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            JudgementRequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementUnrequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementGiven: {
                target: 'AccountId32',
                registrarIndex: 'u32',
            },
            RegistrarAdded: {
                registrarIndex: 'u32',
            },
            SubIdentityAdded: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRemoved: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRevoked: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup114: pallet_vesting::pallet::Event<T>
     **/
    PalletVestingEvent: {
        _enum: {
            VestingUpdated: {
                account: 'AccountId32',
                unvested: 'u128',
            },
            VestingCompleted: {
                account: 'AccountId32'
            }
        }
    },
    /**
     * Lookup115: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
            },
            Spending: {
                budgetRemaining: 'u128',
            },
            Awarded: {
                proposalIndex: 'u32',
                award: 'u128',
                account: 'AccountId32',
            },
            Rejected: {
                proposalIndex: 'u32',
                slashed: 'u128',
            },
            Burnt: {
                burntFunds: 'u128',
            },
            Rollover: {
                rolloverBalance: 'u128',
            },
            Deposit: {
                value: 'u128',
            },
            SpendApproved: {
                proposalIndex: 'u32',
                amount: 'u128',
                beneficiary: 'AccountId32'
            }
        }
    },
    /**
     * Lookup116: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: 'u32',
            },
            BountyRejected: {
                index: 'u32',
                bond: 'u128',
            },
            BountyBecameActive: {
                index: 'u32',
            },
            BountyAwarded: {
                index: 'u32',
                beneficiary: 'AccountId32',
            },
            BountyClaimed: {
                index: 'u32',
                payout: 'u128',
                beneficiary: 'AccountId32',
            },
            BountyCanceled: {
                index: 'u32',
            },
            BountyExtended: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup117: pallet_tips::pallet::Event<T, I>
     **/
    PalletTipsEvent: {
        _enum: {
            NewTip: {
                tipHash: 'H256',
            },
            TipClosing: {
                tipHash: 'H256',
            },
            TipClosed: {
                tipHash: 'H256',
                who: 'AccountId32',
                payout: 'u128',
            },
            TipRetracted: {
                tipHash: 'H256',
            },
            TipSlashed: {
                tipHash: 'H256',
                finder: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup118: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Requested: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Cleared: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup119: pallet_dex::module::Event<T>
     **/
    PalletDexModuleEvent: {
        _enum: {
            AddProvision: {
                who: 'AccountId32',
                currency0: 'CurioPrimitivesCurrencyCurrencyId',
                contribution0: 'u128',
                currency1: 'CurioPrimitivesCurrencyCurrencyId',
                contribution1: 'u128',
            },
            AddLiquidity: {
                who: 'AccountId32',
                currency0: 'CurioPrimitivesCurrencyCurrencyId',
                pool0: 'u128',
                currency1: 'CurioPrimitivesCurrencyCurrencyId',
                pool1: 'u128',
                shareIncrement: 'u128',
            },
            RemoveLiquidity: {
                who: 'AccountId32',
                currency0: 'CurioPrimitivesCurrencyCurrencyId',
                pool0: 'u128',
                currency1: 'CurioPrimitivesCurrencyCurrencyId',
                pool1: 'u128',
                shareDecrement: 'u128',
            },
            Swap: {
                trader: 'AccountId32',
                path: 'Vec<CurioPrimitivesCurrencyCurrencyId>',
                liquidityChanges: 'Vec<u128>',
            },
            EnableTradingPair: {
                tradingPair: 'CurioPrimitivesTradingPair',
            },
            ListProvisioning: {
                tradingPair: 'CurioPrimitivesTradingPair',
            },
            DisableTradingPair: {
                tradingPair: 'CurioPrimitivesTradingPair',
            },
            ProvisioningToEnabled: {
                tradingPair: 'CurioPrimitivesTradingPair',
                pool0: 'u128',
                pool1: 'u128',
                shareAmount: 'u128',
            },
            RefundProvision: {
                who: 'AccountId32',
                currency0: 'CurioPrimitivesCurrencyCurrencyId',
                contribution0: 'u128',
                currency1: 'CurioPrimitivesCurrencyCurrencyId',
                contribution1: 'u128',
            },
            ProvisioningAborted: {
                tradingPair: 'CurioPrimitivesTradingPair',
                accumulatedProvision0: 'u128',
                accumulatedProvision1: 'u128'
            }
        }
    },
    /**
     * Lookup122: curio_primitives::TradingPair
     **/
    CurioPrimitivesTradingPair: '(CurioPrimitivesCurrencyCurrencyId,CurioPrimitivesCurrencyCurrencyId)',
    /**
     * Lookup123: pallet_society::pallet::Event<T, I>
     **/
    PalletSocietyEvent: {
        _enum: {
            Founded: {
                founder: 'AccountId32',
            },
            Bid: {
                candidateId: 'AccountId32',
                offer: 'u128',
            },
            Vouch: {
                candidateId: 'AccountId32',
                offer: 'u128',
                vouching: 'AccountId32',
            },
            AutoUnbid: {
                candidate: 'AccountId32',
            },
            Unbid: {
                candidate: 'AccountId32',
            },
            Unvouch: {
                candidate: 'AccountId32',
            },
            Inducted: {
                primary: 'AccountId32',
                candidates: 'Vec<AccountId32>',
            },
            SuspendedMemberJudgement: {
                who: 'AccountId32',
                judged: 'bool',
            },
            CandidateSuspended: {
                candidate: 'AccountId32',
            },
            MemberSuspended: {
                member: 'AccountId32',
            },
            Challenged: {
                member: 'AccountId32',
            },
            Vote: {
                candidate: 'AccountId32',
                voter: 'AccountId32',
                vote: 'bool',
            },
            DefenderVote: {
                voter: 'AccountId32',
                vote: 'bool',
            },
            NewMaxMembers: {
                max: 'u32',
            },
            Unfounded: {
                founder: 'AccountId32',
            },
            Deposit: {
                value: 'u128'
            }
        }
    },
    /**
     * Lookup124: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>',
            },
            KeyChanged: {
                oldSudoer: 'Option<AccountId32>',
            },
            SudoAsDone: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup126: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: 'u32',
            Finalization: 'Null',
            Initialization: 'Null'
        }
    },
    /**
     * Lookup129: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
    },
    /**
     * Lookup131: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            fill_block: {
                ratio: 'Perbill',
            },
            remark: {
                remark: 'Bytes',
            },
            set_heap_pages: {
                pages: 'u64',
            },
            set_code: {
                code: 'Bytes',
            },
            set_code_without_checks: {
                code: 'Bytes',
            },
            set_storage: {
                items: 'Vec<(Bytes,Bytes)>',
            },
            kill_storage: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'Vec<Bytes>',
            },
            kill_prefix: {
                prefix: 'Bytes',
                subkeys: 'u32',
            },
            remark_with_event: {
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup135: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: 'u64',
        maxBlock: 'u64',
        perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
    },
    /**
     * Lookup136: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportWeightsPerDispatchClassWeightsPerClass: {
        normal: 'FrameSystemLimitsWeightsPerClass',
        operational: 'FrameSystemLimitsWeightsPerClass',
        mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * Lookup137: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: 'u64',
        maxExtrinsic: 'Option<u64>',
        maxTotal: 'Option<u64>',
        reserved: 'Option<u64>'
    },
    /**
     * Lookup139: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: 'FrameSupportWeightsPerDispatchClassU32'
    },
    /**
     * Lookup140: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
    },
    /**
     * Lookup141: frame_support::weights::RuntimeDbWeight
     **/
    FrameSupportWeightsRuntimeDbWeight: {
        read: 'u64',
        write: 'u64'
    },
    /**
     * Lookup142: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<([u8;8],u32)>',
        transactionVersion: 'u32',
        stateVersion: 'u8'
    },
    /**
     * Lookup146: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
    },
    /**
     * Lookup147: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: 'Compact<u64>'
            }
        }
    },
    /**
     * Lookup149: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: 'u32',
            },
            transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
                index: 'u32',
            },
            free: {
                index: 'u32',
            },
            force_transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
                index: 'u32',
                freeze: 'bool',
            },
            freeze: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup150: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
    },
    /**
     * Lookup151: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV2PersistedValidationData: {
        parentHead: 'Bytes',
        relayParentNumber: 'u32',
        relayParentStorageRoot: 'H256',
        maxPovSize: 'u32'
    },
    /**
     * Lookup154: polkadot_primitives::v2::UpgradeRestriction
     **/
    PolkadotPrimitivesV2UpgradeRestriction: {
        _enum: ['Present']
    },
    /**
     * Lookup155: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: 'BTreeSet<Bytes>'
    },
    /**
     * Lookup157: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: 'H256',
        relayDispatchQueueSize: '(u32,u32)',
        ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
        egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
    },
    /**
     * Lookup160: polkadot_primitives::v2::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV2AbridgedHrmpChannel: {
        maxCapacity: 'u32',
        maxTotalSize: 'u32',
        maxMessageSize: 'u32',
        msgCount: 'u32',
        totalSize: 'u32',
        mqcHead: 'Option<H256>'
    },
    /**
     * Lookup161: polkadot_primitives::v2::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV2AbridgedHostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeCooldown: 'u32',
        validationUpgradeDelay: 'u32'
    },
    /**
     * Lookup167: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup168: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: 'CumulusPrimitivesParachainInherentParachainInherentData',
            },
            sudo_send_upward_message: {
                message: 'Bytes',
            },
            authorize_upgrade: {
                codeHash: 'H256',
            },
            enact_authorized_upgrade: {
                code: 'Bytes'
            }
        }
    },
    /**
     * Lookup169: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: 'PolkadotPrimitivesV2PersistedValidationData',
        relayChainState: 'SpTrieStorageProof',
        downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
        horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
    },
    /**
     * Lookup171: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: 'u32',
        msg: 'Bytes'
    },
    /**
     * Lookup174: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup177: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
    },
    /**
     * Lookup179: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: '[u8;8]',
        amount: 'u128',
        reasons: 'PalletBalancesReasons'
    },
    /**
     * Lookup180: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * Lookup183: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup185: pallet_balances::Releases
     **/
    PalletBalancesReleases: {
        _enum: ['V1_0_0', 'V2_0_0']
    },
    /**
     * Lookup186: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                keepAlive: 'bool',
            },
            force_unreserve: {
                who: 'MultiAddress',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup189: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup191: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: ['V1Ancient', 'V2']
    },
    /**
     * Lookup194: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup196: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: 'u128',
        reserved: 'u128',
        frozen: 'u128'
    },
    /**
     * Lookup198: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup200: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                keepAlive: 'bool',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                currencyId: 'CurioPrimitivesCurrencyCurrencyId',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup201: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup203: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
     **/
    PalletAuthorshipUncleEntryItem: {
        _enum: {
            InclusionHeight: 'u32',
            Uncle: '(H256,Option<AccountId32>)'
        }
    },
    /**
     * Lookup205: pallet_authorship::pallet::Call<T>
     **/
    PalletAuthorshipCall: {
        _enum: {
            set_uncles: {
                newUncles: 'Vec<SpRuntimeHeader>'
            }
        }
    },
    /**
     * Lookup207: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
     **/
    SpRuntimeHeader: {
        parentHash: 'H256',
        number: 'Compact<u32>',
        stateRoot: 'H256',
        extrinsicsRoot: 'H256',
        digest: 'SpRuntimeDigest'
    },
    /**
     * Lookup208: sp_runtime::traits::BlakeTwo256
     **/
    SpRuntimeBlakeTwo256: 'Null',
    /**
     * Lookup209: pallet_authorship::pallet::Error<T>
     **/
    PalletAuthorshipError: {
        _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
    },
    /**
     * Lookup210: pallet_parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32>
     **/
    PalletParachainStakingParachainBondConfig: {
        account: 'AccountId32',
        percent: 'Percent'
    },
    /**
     * Lookup211: pallet_parachain_staking::types::RoundInfo<BlockNumber>
     **/
    PalletParachainStakingRoundInfo: {
        current: 'u32',
        first: 'u32',
        length: 'u32'
    },
    /**
     * Lookup212: pallet_parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
     **/
    PalletParachainStakingDelegator: {
        id: 'AccountId32',
        delegations: 'PalletParachainStakingSetOrderedSet',
        total: 'u128',
        lessTotal: 'u128',
        status: 'PalletParachainStakingDelegatorStatus'
    },
    /**
     * Lookup213: pallet_parachain_staking::set::OrderedSet<pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
     **/
    PalletParachainStakingSetOrderedSet: 'Vec<PalletParachainStakingBond>',
    /**
     * Lookup214: pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
     **/
    PalletParachainStakingBond: {
        owner: 'AccountId32',
        amount: 'u128'
    },
    /**
     * Lookup216: pallet_parachain_staking::types::DelegatorStatus
     **/
    PalletParachainStakingDelegatorStatus: {
        _enum: {
            Active: 'Null',
            Leaving: 'u32'
        }
    },
    /**
     * Lookup217: pallet_parachain_staking::types::CandidateMetadata<Balance>
     **/
    PalletParachainStakingCandidateMetadata: {
        bond: 'u128',
        delegationCount: 'u32',
        totalCounted: 'u128',
        lowestTopDelegationAmount: 'u128',
        highestBottomDelegationAmount: 'u128',
        lowestBottomDelegationAmount: 'u128',
        topCapacity: 'PalletParachainStakingCapacityStatus',
        bottomCapacity: 'PalletParachainStakingCapacityStatus',
        request: 'Option<PalletParachainStakingCandidateBondLessRequest>',
        status: 'PalletParachainStakingCollatorStatus'
    },
    /**
     * Lookup218: pallet_parachain_staking::types::CapacityStatus
     **/
    PalletParachainStakingCapacityStatus: {
        _enum: ['Full', 'Empty', 'Partial']
    },
    /**
     * Lookup220: pallet_parachain_staking::types::CandidateBondLessRequest<Balance>
     **/
    PalletParachainStakingCandidateBondLessRequest: {
        amount: 'u128',
        whenExecutable: 'u32'
    },
    /**
     * Lookup221: pallet_parachain_staking::types::CollatorStatus
     **/
    PalletParachainStakingCollatorStatus: {
        _enum: {
            Active: 'Null',
            Idle: 'Null',
            Leaving: 'u32'
        }
    },
    /**
     * Lookup223: pallet_parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
     **/
    PalletParachainStakingDelegationRequestsScheduledRequest: {
        delegator: 'AccountId32',
        whenExecutable: 'u32',
        action: 'PalletParachainStakingDelegationRequestsDelegationAction'
    },
    /**
     * Lookup224: pallet_parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
     **/
    PalletParachainStakingDelegations: {
        delegations: 'Vec<PalletParachainStakingBond>',
        total: 'u128'
    },
    /**
     * Lookup226: pallet_parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
     **/
    PalletParachainStakingCollatorSnapshot: {
        bond: 'u128',
        delegations: 'Vec<PalletParachainStakingBond>',
        total: 'u128'
    },
    /**
     * Lookup227: pallet_parachain_staking::types::DelayedPayout<Balance>
     **/
    PalletParachainStakingDelayedPayout: {
        roundIssuance: 'u128',
        totalStakingReward: 'u128',
        collatorCommission: 'Perbill'
    },
    /**
     * Lookup228: pallet_parachain_staking::inflation::InflationInfo<Balance>
     **/
    PalletParachainStakingInflationInflationInfo: {
        expect: {
            min: 'u128',
            ideal: 'u128',
            max: 'u128'
        },
        annual: {
            min: 'Perbill',
            ideal: 'Perbill',
            max: 'Perbill'
        },
        round: {
            min: 'Perbill',
            ideal: 'Perbill',
            max: 'Perbill'
        }
    },
    /**
     * Lookup231: pallet_parachain_staking::pallet::Call<T>
     **/
    PalletParachainStakingCall: {
        _enum: {
            set_staking_expectations: {
                expectations: {
                    min: 'u128',
                    ideal: 'u128',
                    max: 'u128'
                },
            },
            set_inflation: {
                schedule: {
                    min: 'Perbill',
                    ideal: 'Perbill',
                    max: 'Perbill'
                },
            },
            set_parachain_bond_account: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
            },
            set_parachain_bond_reserve_percent: {
                _alias: {
                    new_: 'new',
                },
                new_: 'Percent',
            },
            set_total_selected: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_collator_commission: {
                _alias: {
                    new_: 'new',
                },
                new_: 'Perbill',
            },
            set_blocks_per_round: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            join_candidates: {
                bond: 'u128',
                candidateCount: 'u32',
            },
            schedule_leave_candidates: {
                candidateCount: 'u32',
            },
            execute_leave_candidates: {
                candidate: 'AccountId32',
                candidateDelegationCount: 'u32',
            },
            cancel_leave_candidates: {
                candidateCount: 'u32',
            },
            go_offline: 'Null',
            go_online: 'Null',
            candidate_bond_more: {
                more: 'u128',
            },
            schedule_candidate_bond_less: {
                less: 'u128',
            },
            execute_candidate_bond_less: {
                candidate: 'AccountId32',
            },
            cancel_candidate_bond_less: 'Null',
            delegate: {
                candidate: 'AccountId32',
                amount: 'u128',
                candidateDelegationCount: 'u32',
                delegationCount: 'u32',
            },
            schedule_leave_delegators: 'Null',
            execute_leave_delegators: {
                delegator: 'AccountId32',
                delegationCount: 'u32',
            },
            cancel_leave_delegators: 'Null',
            schedule_revoke_delegation: {
                collator: 'AccountId32',
            },
            delegator_bond_more: {
                candidate: 'AccountId32',
                more: 'u128',
            },
            schedule_delegator_bond_less: {
                candidate: 'AccountId32',
                less: 'u128',
            },
            execute_delegation_request: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
            },
            cancel_delegation_request: {
                candidate: 'AccountId32',
            },
            hotfix_remove_delegation_requests_exited_candidates: {
                candidates: 'Vec<AccountId32>',
            },
            hotfix_migrate_delegators_from_reserve_to_locks: {
                delegators: 'Vec<AccountId32>',
            },
            hotfix_migrate_collators_from_reserve_to_locks: {
                collators: 'Vec<AccountId32>'
            }
        }
    },
    /**
     * Lookup232: pallet_parachain_staking::pallet::Error<T>
     **/
    PalletParachainStakingError: {
        _enum: ['DelegatorDNE', 'DelegatorDNEinTopNorBottom', 'DelegatorDNEInDelegatorSet', 'CandidateDNE', 'DelegationDNE', 'DelegatorExists', 'CandidateExists', 'CandidateBondBelowMin', 'InsufficientBalance', 'DelegatorBondBelowMin', 'DelegationBelowMin', 'AlreadyOffline', 'AlreadyActive', 'DelegatorAlreadyLeaving', 'DelegatorNotLeaving', 'DelegatorCannotLeaveYet', 'CannotDelegateIfLeaving', 'CandidateAlreadyLeaving', 'CandidateNotLeaving', 'CandidateCannotLeaveYet', 'CannotGoOnlineIfLeaving', 'ExceedMaxDelegationsPerDelegator', 'AlreadyDelegatedCandidate', 'InvalidSchedule', 'CannotSetBelowMin', 'RoundLengthMustBeAtLeastTotalSelectedCollators', 'NoWritingSameValue', 'TooLowCandidateCountWeightHintJoinCandidates', 'TooLowCandidateCountWeightHintCancelLeaveCandidates', 'TooLowCandidateCountToLeaveCandidates', 'TooLowDelegationCountToDelegate', 'TooLowCandidateDelegationCountToDelegate', 'TooLowCandidateDelegationCountToLeaveCandidates', 'TooLowDelegationCountToLeaveDelegators', 'PendingCandidateRequestsDNE', 'PendingCandidateRequestAlreadyExists', 'PendingCandidateRequestNotDueYet', 'PendingDelegationRequestDNE', 'PendingDelegationRequestAlreadyExists', 'PendingDelegationRequestNotDueYet', 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull', 'PendingDelegationRevoke']
    },
    /**
     * Lookup235: parachain_node_runtime::SessionKeys
     **/
    ParachainNodeRuntimeSessionKeys: {
        aura: 'SpConsensusAuraSr25519AppSr25519Public'
    },
    /**
     * Lookup236: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
    /**
     * Lookup237: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: '[u8;32]',
    /**
     * Lookup240: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: '[u8;4]',
    /**
     * Lookup241: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'ParachainNodeRuntimeSessionKeys',
                proof: 'Bytes',
            },
            purge_keys: 'Null'
        }
    },
    /**
     * Lookup242: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
    },
    /**
     * Lookup249: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletDemocracyPreimageStatus: {
        _enum: {
            Missing: 'u32',
            Available: {
                data: 'Bytes',
                provider: 'AccountId32',
                deposit: 'u128',
                since: 'u32',
                expiry: 'Option<u32>'
            }
        }
    },
    /**
     * Lookup251: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: 'PalletDemocracyReferendumStatus',
            Finished: {
                approved: 'bool',
                end: 'u32'
            }
        }
    },
    /**
     * Lookup252: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: 'u32',
        proposalHash: 'H256',
        threshold: 'PalletDemocracyVoteThreshold',
        delay: 'u32',
        tally: 'PalletDemocracyTally'
    },
    /**
     * Lookup253: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: 'u128',
        nays: 'u128',
        turnout: 'u128'
    },
    /**
     * Lookup254: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
                delegations: 'PalletDemocracyDelegations',
                prior: 'PalletDemocracyVotePriorLock',
            },
            Delegating: {
                balance: 'u128',
                target: 'AccountId32',
                conviction: 'PalletDemocracyConviction',
                delegations: 'PalletDemocracyDelegations',
                prior: 'PalletDemocracyVotePriorLock'
            }
        }
    },
    /**
     * Lookup257: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: 'u128',
        capital: 'u128'
    },
    /**
     * Lookup258: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: '(u32,u128)',
    /**
     * Lookup259: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
    /**
     * Lookup262: pallet_democracy::Releases
     **/
    PalletDemocracyReleases: {
        _enum: ['V1']
    },
    /**
     * Lookup263: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposalHash: 'H256',
                value: 'Compact<u128>',
            },
            second: {
                proposal: 'Compact<u32>',
                secondsUpperBound: 'Compact<u32>',
            },
            vote: {
                refIndex: 'Compact<u32>',
                vote: 'PalletDemocracyVoteAccountVote',
            },
            emergency_cancel: {
                refIndex: 'u32',
            },
            external_propose: {
                proposalHash: 'H256',
            },
            external_propose_majority: {
                proposalHash: 'H256',
            },
            external_propose_default: {
                proposalHash: 'H256',
            },
            fast_track: {
                proposalHash: 'H256',
                votingPeriod: 'u32',
                delay: 'u32',
            },
            veto_external: {
                proposalHash: 'H256',
            },
            cancel_referendum: {
                refIndex: 'Compact<u32>',
            },
            cancel_queued: {
                which: 'u32',
            },
            delegate: {
                to: 'AccountId32',
                conviction: 'PalletDemocracyConviction',
                balance: 'u128',
            },
            undelegate: 'Null',
            clear_public_proposals: 'Null',
            note_preimage: {
                encodedProposal: 'Bytes',
            },
            note_preimage_operational: {
                encodedProposal: 'Bytes',
            },
            note_imminent_preimage: {
                encodedProposal: 'Bytes',
            },
            note_imminent_preimage_operational: {
                encodedProposal: 'Bytes',
            },
            reap_preimage: {
                proposalHash: 'H256',
                proposalLenUpperBound: 'Compact<u32>',
            },
            unlock: {
                target: 'AccountId32',
            },
            remove_vote: {
                index: 'u32',
            },
            remove_other_vote: {
                target: 'AccountId32',
                index: 'u32',
            },
            enact_proposal: {
                proposalHash: 'H256',
                index: 'u32',
            },
            blacklist: {
                proposalHash: 'H256',
                maybeRefIndex: 'Option<u32>',
            },
            cancel_proposal: {
                propIndex: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup264: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'DuplicatePreimage', 'NotImminent', 'TooEarly', 'Imminent', 'PreimageMissing', 'ReferendumInvalid', 'PreimageInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooManyProposals', 'VotingPeriodLow']
    },
    /**
     * Lookup267: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: 'Vec<AccountId32>',
                prime: 'Option<AccountId32>',
                oldCount: 'u32',
            },
            execute: {
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            propose: {
                threshold: 'Compact<u32>',
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            vote: {
                proposal: 'H256',
                index: 'Compact<u32>',
                approve: 'bool',
            },
            close: {
                proposalHash: 'H256',
                index: 'Compact<u32>',
                proposalWeightBound: 'Compact<u64>',
                lengthBound: 'Compact<u32>',
            },
            disapprove_proposal: {
                proposalHash: 'H256'
            }
        }
    },
    /**
     * Lookup269: pallet_elections_phragmen::pallet::Call<T>
     **/
    PalletElectionsPhragmenCall: {
        _enum: {
            vote: {
                votes: 'Vec<AccountId32>',
                value: 'Compact<u128>',
            },
            remove_voter: 'Null',
            submit_candidacy: {
                candidateCount: 'Compact<u32>',
            },
            renounce_candidacy: {
                renouncing: 'PalletElectionsPhragmenRenouncing',
            },
            remove_member: {
                who: 'MultiAddress',
                hasReplacement: 'bool',
            },
            clean_defunct_voters: {
                numVoters: 'u32',
                numDefunct: 'u32'
            }
        }
    },
    /**
     * Lookup270: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
        _enum: {
            Member: 'Null',
            RunnerUp: 'Null',
            Candidate: 'Compact<u32>'
        }
    },
    /**
     * Lookup271: pallet_membership::pallet::Call<T, I>
     **/
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: 'AccountId32',
            },
            remove_member: {
                who: 'AccountId32',
            },
            swap_member: {
                remove: 'AccountId32',
                add: 'AccountId32',
            },
            reset_members: {
                members: 'Vec<AccountId32>',
            },
            change_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
            },
            set_prime: {
                who: 'AccountId32',
            },
            clear_prime: 'Null'
        }
    },
    /**
     * Lookup272: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'u64',
            },
            suspend_xcm_execution: 'Null',
            resume_xcm_execution: 'Null',
            update_suspend_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_drop_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_resume_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_threshold_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64',
            },
            update_weight_restrict_decay: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64',
            },
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64'
            }
        }
    },
    /**
     * Lookup273: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: 'XcmVersionedMultiLocation',
                message: 'XcmVersionedXcm',
            },
            teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            execute: {
                message: 'XcmVersionedXcm',
                maxWeight: 'u64',
            },
            force_xcm_version: {
                location: 'XcmV1MultiLocation',
                xcmVersion: 'u32',
            },
            force_default_xcm_version: {
                maybeXcmVersion: 'Option<u32>',
            },
            force_subscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            force_unsubscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            limited_reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV2WeightLimit',
            },
            limited_teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV2WeightLimit'
            }
        }
    },
    /**
     * Lookup274: xcm::VersionedXcm<Call>
     **/
    XcmVersionedXcm: {
        _enum: {
            V0: 'XcmV0Xcm',
            V1: 'XcmV1Xcm',
            V2: 'XcmV2Xcm'
        }
    },
    /**
     * Lookup275: xcm::v0::Xcm<Call>
     **/
    XcmV0Xcm: {
        _enum: {
            WithdrawAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                effects: 'Vec<XcmV0Order>',
            },
            ReserveAssetDeposit: {
                assets: 'Vec<XcmV0MultiAsset>',
                effects: 'Vec<XcmV0Order>',
            },
            TeleportAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                effects: 'Vec<XcmV0Order>',
            },
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV0Response',
            },
            TransferAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            Transact: {
                originType: 'XcmV0OriginKind',
                requireWeightAtMost: 'u64',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            RelayedFrom: {
                who: 'XcmV0MultiLocation',
                message: 'XcmV0Xcm'
            }
        }
    },
    /**
     * Lookup277: xcm::v0::order::Order<Call>
     **/
    XcmV0Order: {
        _enum: {
            Null: 'Null',
            DepositAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            ExchangeAsset: {
                give: 'Vec<XcmV0MultiAsset>',
                receive: 'Vec<XcmV0MultiAsset>',
            },
            InitiateReserveWithdraw: {
                assets: 'Vec<XcmV0MultiAsset>',
                reserve: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            InitiateTeleport: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV0MultiLocation',
                assets: 'Vec<XcmV0MultiAsset>',
            },
            BuyExecution: {
                fees: 'XcmV0MultiAsset',
                weight: 'u64',
                debt: 'u64',
                haltOnError: 'bool',
                xcm: 'Vec<XcmV0Xcm>'
            }
        }
    },
    /**
     * Lookup279: xcm::v0::Response
     **/
    XcmV0Response: {
        _enum: {
            Assets: 'Vec<XcmV0MultiAsset>'
        }
    },
    /**
     * Lookup280: xcm::v1::Xcm<Call>
     **/
    XcmV1Xcm: {
        _enum: {
            WithdrawAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                effects: 'Vec<XcmV1Order>',
            },
            ReserveAssetDeposited: {
                assets: 'XcmV1MultiassetMultiAssets',
                effects: 'Vec<XcmV1Order>',
            },
            ReceiveTeleportedAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                effects: 'Vec<XcmV1Order>',
            },
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV1Response',
            },
            TransferAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                beneficiary: 'XcmV1MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                dest: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            Transact: {
                originType: 'XcmV0OriginKind',
                requireWeightAtMost: 'u64',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            RelayedFrom: {
                who: 'XcmV1MultilocationJunctions',
                message: 'XcmV1Xcm',
            },
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    /**
     * Lookup282: xcm::v1::order::Order<Call>
     **/
    XcmV1Order: {
        _enum: {
            Noop: 'Null',
            DepositAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'u32',
                beneficiary: 'XcmV1MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'u32',
                dest: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            ExchangeAsset: {
                give: 'XcmV1MultiassetMultiAssetFilter',
                receive: 'XcmV1MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                reserve: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            InitiateTeleport: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                dest: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV1MultiLocation',
                assets: 'XcmV1MultiassetMultiAssetFilter',
            },
            BuyExecution: {
                fees: 'XcmV1MultiAsset',
                weight: 'u64',
                debt: 'u64',
                haltOnError: 'bool',
                instructions: 'Vec<XcmV1Xcm>'
            }
        }
    },
    /**
     * Lookup284: xcm::v1::Response
     **/
    XcmV1Response: {
        _enum: {
            Assets: 'XcmV1MultiassetMultiAssets',
            Version: 'u32'
        }
    },
    /**
     * Lookup298: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'u64'
            }
        }
    },
    /**
     * Lookup299: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: 'Vec<Call>',
            },
            as_derivative: {
                index: 'u16',
                call: 'Call',
            },
            batch_all: {
                calls: 'Vec<Call>',
            },
            dispatch_as: {
                asOrigin: 'ParachainNodeRuntimeOriginCaller',
                call: 'Call',
            },
            force_batch: {
                calls: 'Vec<Call>'
            }
        }
    },
    /**
     * Lookup301: parachain_node_runtime::OriginCaller
     **/
    ParachainNodeRuntimeOriginCaller: {
        _enum: {
            system: 'FrameSupportDispatchRawOrigin',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            __Unused4: 'Null',
            Void: 'SpCoreVoid',
            __Unused6: 'Null',
            __Unused7: 'Null',
            __Unused8: 'Null',
            __Unused9: 'Null',
            __Unused10: 'Null',
            __Unused11: 'Null',
            __Unused12: 'Null',
            __Unused13: 'Null',
            __Unused14: 'Null',
            __Unused15: 'Null',
            __Unused16: 'Null',
            __Unused17: 'Null',
            __Unused18: 'Null',
            __Unused19: 'Null',
            __Unused20: 'Null',
            __Unused21: 'Null',
            __Unused22: 'Null',
            __Unused23: 'Null',
            __Unused24: 'Null',
            __Unused25: 'Null',
            __Unused26: 'Null',
            __Unused27: 'Null',
            __Unused28: 'Null',
            __Unused29: 'Null',
            __Unused30: 'Null',
            Council: 'PalletCollectiveRawOrigin',
            TechnicalCommittee: 'PalletCollectiveRawOrigin',
            __Unused33: 'Null',
            __Unused34: 'Null',
            __Unused35: 'Null',
            __Unused36: 'Null',
            __Unused37: 'Null',
            __Unused38: 'Null',
            __Unused39: 'Null',
            __Unused40: 'Null',
            PolkadotXcm: 'PalletXcmOrigin',
            CumulusXcm: 'CumulusPalletXcmOrigin'
        }
    },
    /**
     * Lookup302: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: 'Null',
            Signed: 'AccountId32',
            None: 'Null'
        }
    },
    /**
     * Lookup303: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: '(u32,u32)',
            Member: 'AccountId32',
            _Phantom: 'Null'
        }
    },
    /**
     * Lookup305: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: 'XcmV1MultiLocation',
            Response: 'XcmV1MultiLocation'
        }
    },
    /**
     * Lookup306: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: 'Null',
            SiblingParachain: 'u32'
        }
    },
    /**
     * Lookup307: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * Lookup308: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'FrameSupportScheduleMaybeHashed',
            },
            cancel: {
                when: 'u32',
                index: 'u32',
            },
            schedule_named: {
                id: 'Bytes',
                when: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'FrameSupportScheduleMaybeHashed',
            },
            cancel_named: {
                id: 'Bytes',
            },
            schedule_after: {
                after: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'FrameSupportScheduleMaybeHashed',
            },
            schedule_named_after: {
                id: 'Bytes',
                after: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'FrameSupportScheduleMaybeHashed'
            }
        }
    },
    /**
     * Lookup310: frame_support::traits::schedule::MaybeHashed<parachain_node_runtime::Call, primitive_types::H256>
     **/
    FrameSupportScheduleMaybeHashed: {
        _enum: {
            Value: 'Call',
            Hash: 'H256'
        }
    },
    /**
     * Lookup311: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: 'AccountId32',
                forceProxyType: 'Option<ParachainNodeRuntimeProxyType>',
                call: 'Call',
            },
            add_proxy: {
                delegate: 'AccountId32',
                proxyType: 'ParachainNodeRuntimeProxyType',
                delay: 'u32',
            },
            remove_proxy: {
                delegate: 'AccountId32',
                proxyType: 'ParachainNodeRuntimeProxyType',
                delay: 'u32',
            },
            remove_proxies: 'Null',
            anonymous: {
                proxyType: 'ParachainNodeRuntimeProxyType',
                delay: 'u32',
                index: 'u16',
            },
            kill_anonymous: {
                spawner: 'AccountId32',
                proxyType: 'ParachainNodeRuntimeProxyType',
                index: 'u16',
                height: 'Compact<u32>',
                extIndex: 'Compact<u32>',
            },
            announce: {
                real: 'AccountId32',
                callHash: 'H256',
            },
            remove_announcement: {
                real: 'AccountId32',
                callHash: 'H256',
            },
            reject_announcement: {
                delegate: 'AccountId32',
                callHash: 'H256',
            },
            proxy_announced: {
                delegate: 'AccountId32',
                real: 'AccountId32',
                forceProxyType: 'Option<ParachainNodeRuntimeProxyType>',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup313: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: 'Vec<AccountId32>',
                call: 'Call',
            },
            as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                call: 'WrapperKeepOpaque<Call>',
                storeCall: 'bool',
                maxWeight: 'u64',
            },
            approve_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                callHash: '[u8;32]',
                maxWeight: 'u64',
            },
            cancel_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                timepoint: 'PalletMultisigTimepoint',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup316: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: 'AccountId32',
            },
            set_identity: {
                info: 'PalletIdentityIdentityInfo',
            },
            set_subs: {
                subs: 'Vec<(AccountId32,Data)>',
            },
            clear_identity: 'Null',
            request_judgement: {
                regIndex: 'Compact<u32>',
                maxFee: 'Compact<u128>',
            },
            cancel_request: {
                regIndex: 'u32',
            },
            set_fee: {
                index: 'Compact<u32>',
                fee: 'Compact<u128>',
            },
            set_account_id: {
                _alias: {
                    new_: 'new',
                },
                index: 'Compact<u32>',
                new_: 'AccountId32',
            },
            set_fields: {
                index: 'Compact<u32>',
                fields: 'PalletIdentityBitFlags',
            },
            provide_judgement: {
                regIndex: 'Compact<u32>',
                target: 'MultiAddress',
                judgement: 'PalletIdentityJudgement',
            },
            kill_identity: {
                target: 'MultiAddress',
            },
            add_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            rename_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            remove_sub: {
                sub: 'MultiAddress',
            },
            quit_sub: 'Null'
        }
    },
    /**
     * Lookup317: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: 'Vec<(Data,Data)>',
        display: 'Data',
        legal: 'Data',
        web: 'Data',
        riot: 'Data',
        email: 'Data',
        pgpFingerprint: 'Option<[u8;20]>',
        image: 'Data',
        twitter: 'Data'
    },
    /**
     * Lookup353: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: 64,
        Display: 1,
        Legal: 2,
        Web: 4,
        Riot: 8,
        Email: 16,
        PgpFingerprint: 32,
        Image: 64,
        Twitter: 128
    },
    /**
     * Lookup354: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
    },
    /**
     * Lookup355: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: 'Null',
            FeePaid: 'u128',
            Reasonable: 'Null',
            KnownGood: 'Null',
            OutOfDate: 'Null',
            LowQuality: 'Null',
            Erroneous: 'Null'
        }
    },
    /**
     * Lookup356: pallet_vesting::pallet::Call<T>
     **/
    PalletVestingCall: {
        _enum: {
            vest: 'Null',
            vest_other: {
                target: 'MultiAddress',
            },
            vested_transfer: {
                target: 'MultiAddress',
                schedule: 'PalletVestingVestingInfo',
            },
            force_vested_transfer: {
                source: 'MultiAddress',
                target: 'MultiAddress',
                schedule: 'PalletVestingVestingInfo',
            },
            merge_schedules: {
                schedule1Index: 'u32',
                schedule2Index: 'u32'
            }
        }
    },
    /**
     * Lookup357: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
        locked: 'u128',
        perBlock: 'u128',
        startingBlock: 'u32'
    },
    /**
     * Lookup358: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            reject_proposal: {
                proposalId: 'Compact<u32>',
            },
            approve_proposal: {
                proposalId: 'Compact<u32>',
            },
            spend: {
                amount: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            remove_approval: {
                proposalId: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup359: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: 'Compact<u128>',
                description: 'Bytes',
            },
            approve_bounty: {
                bountyId: 'Compact<u32>',
            },
            propose_curator: {
                bountyId: 'Compact<u32>',
                curator: 'MultiAddress',
                fee: 'Compact<u128>',
            },
            unassign_curator: {
                bountyId: 'Compact<u32>',
            },
            accept_curator: {
                bountyId: 'Compact<u32>',
            },
            award_bounty: {
                bountyId: 'Compact<u32>',
                beneficiary: 'MultiAddress',
            },
            claim_bounty: {
                bountyId: 'Compact<u32>',
            },
            close_bounty: {
                bountyId: 'Compact<u32>',
            },
            extend_bounty_expiry: {
                bountyId: 'Compact<u32>',
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup360: pallet_tips::pallet::Call<T, I>
     **/
    PalletTipsCall: {
        _enum: {
            report_awesome: {
                reason: 'Bytes',
                who: 'AccountId32',
            },
            retract_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            tip_new: {
                reason: 'Bytes',
                who: 'AccountId32',
                tipValue: 'Compact<u128>',
            },
            tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                tipValue: 'Compact<u128>',
            },
            close_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            slash_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup361: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: 'Bytes',
            },
            unnote_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            request_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            unrequest_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup362: pallet_dex::module::Call<T>
     **/
    PalletDexModuleCall: {
        _enum: {
            swap_with_exact_supply: {
                path: 'Vec<CurioPrimitivesCurrencyCurrencyId>',
                supplyAmount: 'Compact<u128>',
                minTargetAmount: 'Compact<u128>',
            },
            swap_with_exact_target: {
                path: 'Vec<CurioPrimitivesCurrencyCurrencyId>',
                targetAmount: 'Compact<u128>',
                maxSupplyAmount: 'Compact<u128>',
            },
            add_liquidity: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
                maxAmountA: 'Compact<u128>',
                maxAmountB: 'Compact<u128>',
                minShareIncrement: 'Compact<u128>',
                stakeIncrementShare: 'bool',
            },
            add_provision: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
                amountA: 'Compact<u128>',
                amountB: 'Compact<u128>',
            },
            claim_dex_share: {
                owner: 'AccountId32',
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
            },
            remove_liquidity: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
                removeShare: 'Compact<u128>',
                minWithdrawnA: 'Compact<u128>',
                minWithdrawnB: 'Compact<u128>',
                byUnstake: 'bool',
            },
            list_provisioning: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
                minContributionA: 'Compact<u128>',
                minContributionB: 'Compact<u128>',
                targetProvisionA: 'Compact<u128>',
                targetProvisionB: 'Compact<u128>',
                notBefore: 'Compact<u32>',
            },
            update_provisioning_parameters: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
                minContributionA: 'Compact<u128>',
                minContributionB: 'Compact<u128>',
                targetProvisionA: 'Compact<u128>',
                targetProvisionB: 'Compact<u128>',
                notBefore: 'Compact<u32>',
            },
            end_provisioning: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
            },
            enable_trading_pair: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
            },
            disable_trading_pair: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
            },
            refund_provision: {
                owner: 'AccountId32',
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId',
            },
            abort_provisioning: {
                currencyIdA: 'CurioPrimitivesCurrencyCurrencyId',
                currencyIdB: 'CurioPrimitivesCurrencyCurrencyId'
            }
        }
    },
    /**
     * Lookup363: pallet_society::pallet::Call<T, I>
     **/
    PalletSocietyCall: {
        _enum: {
            bid: {
                value: 'u128',
            },
            unbid: {
                pos: 'u32',
            },
            vouch: {
                who: 'AccountId32',
                value: 'u128',
                tip: 'u128',
            },
            unvouch: {
                pos: 'u32',
            },
            vote: {
                candidate: 'MultiAddress',
                approve: 'bool',
            },
            defender_vote: {
                approve: 'bool',
            },
            payout: 'Null',
            found: {
                founder: 'AccountId32',
                maxMembers: 'u32',
                rules: 'Bytes',
            },
            unfound: 'Null',
            judge_suspended_member: {
                who: 'AccountId32',
                forgive: 'bool',
            },
            judge_suspended_candidate: {
                who: 'AccountId32',
                judgement: 'PalletSocietyJudgement',
            },
            set_max_members: {
                max: 'u32'
            }
        }
    },
    /**
     * Lookup364: pallet_society::Judgement
     **/
    PalletSocietyJudgement: {
        _enum: ['Rebid', 'Reject', 'Approve']
    },
    /**
     * Lookup365: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: 'Call',
            },
            sudo_unchecked_weight: {
                call: 'Call',
                weight: 'u64',
            },
            set_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            sudo_as: {
                who: 'MultiAddress',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup366: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: 'u32',
        threshold: 'u32',
        ayes: 'Vec<AccountId32>',
        nays: 'Vec<AccountId32>',
        end: 'u32'
    },
    /**
     * Lookup367: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
    },
    /**
     * Lookup371: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
        who: 'AccountId32',
        stake: 'u128',
        deposit: 'u128'
    },
    /**
     * Lookup372: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
        votes: 'Vec<AccountId32>',
        stake: 'u128',
        deposit: 'u128'
    },
    /**
     * Lookup373: pallet_elections_phragmen::pallet::Error<T>
     **/
    PalletElectionsPhragmenError: {
        _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'ReportSelf', 'DuplicatedCandidate', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
    },
    /**
     * Lookup375: pallet_membership::pallet::Error<T, I>
     **/
    PalletMembershipError: {
        _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
    },
    /**
     * Lookup377: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: 'u32',
        state: 'CumulusPalletXcmpQueueInboundState',
        messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
    },
    /**
     * Lookup378: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup381: polkadot_parachain::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesXcmpMessageFormat: {
        _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
    },
    /**
     * Lookup384: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: 'u32',
        state: 'CumulusPalletXcmpQueueOutboundState',
        signalsExist: 'bool',
        firstIndex: 'u16',
        lastIndex: 'u16'
    },
    /**
     * Lookup385: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup387: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: 'u32',
        dropThreshold: 'u32',
        resumeThreshold: 'u32',
        thresholdWeight: 'u64',
        weightRestrictDecay: 'u64',
        xcmpMaxIndividualWeight: 'u64'
    },
    /**
     * Lookup389: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
    },
    /**
     * Lookup390: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed']
    },
    /**
     * Lookup391: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: 'Null',
    /**
     * Lookup392: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: 'u64'
    },
    /**
     * Lookup393: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: 'u32',
        endUsed: 'u32',
        overweightCount: 'u64'
    },
    /**
     * Lookup396: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: ['Unknown', 'OverLimit']
    },
    /**
     * Lookup397: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: ['TooManyCalls']
    },
    /**
     * Lookup400: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<parachain_node_runtime::Call, primitive_types::H256>, BlockNumber, parachain_node_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduledV3: {
        maybeId: 'Option<Bytes>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
        maybePeriodic: 'Option<(u32,u32)>',
        origin: 'ParachainNodeRuntimeOriginCaller'
    },
    /**
     * Lookup401: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
    },
    /**
     * Lookup404: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, parachain_node_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: 'AccountId32',
        proxyType: 'ParachainNodeRuntimeProxyType',
        delay: 'u32'
    },
    /**
     * Lookup408: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: 'AccountId32',
        callHash: 'H256',
        height: 'u32'
    },
    /**
     * Lookup410: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
    },
    /**
     * Lookup412: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    PalletMultisigMultisig: {
        when: 'PalletMultisigTimepoint',
        deposit: 'u128',
        depositor: 'AccountId32',
        approvals: 'Vec<AccountId32>'
    },
    /**
     * Lookup414: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
    },
    /**
     * Lookup415: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: 'Vec<(u32,PalletIdentityJudgement)>',
        deposit: 'u128',
        info: 'PalletIdentityIdentityInfo'
    },
    /**
     * Lookup423: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: 'AccountId32',
        fee: 'u128',
        fields: 'PalletIdentityBitFlags'
    },
    /**
     * Lookup425: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned']
    },
    /**
     * Lookup428: pallet_vesting::Releases
     **/
    PalletVestingReleases: {
        _enum: ['V0', 'V1']
    },
    /**
     * Lookup429: pallet_vesting::pallet::Error<T>
     **/
    PalletVestingError: {
        _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
    },
    /**
     * Lookup430: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: 'AccountId32',
        value: 'u128',
        beneficiary: 'AccountId32',
        bond: 'u128'
    },
    /**
     * Lookup434: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * Lookup435: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
    },
    /**
     * Lookup436: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: 'AccountId32',
        value: 'u128',
        fee: 'u128',
        curatorDeposit: 'u128',
        bond: 'u128',
        status: 'PalletBountiesBountyStatus'
    },
    /**
     * Lookup437: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: 'Null',
            Approved: 'Null',
            Funded: 'Null',
            CuratorProposed: {
                curator: 'AccountId32',
            },
            Active: {
                curator: 'AccountId32',
                updateDue: 'u32',
            },
            PendingPayout: {
                curator: 'AccountId32',
                beneficiary: 'AccountId32',
                unlockAt: 'u32'
            }
        }
    },
    /**
     * Lookup439: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
    },
    /**
     * Lookup440: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
        reason: 'H256',
        who: 'AccountId32',
        finder: 'AccountId32',
        deposit: 'u128',
        closes: 'Option<u32>',
        tips: 'Vec<(AccountId32,u128)>',
        findersFee: 'bool'
    },
    /**
     * Lookup441: pallet_tips::pallet::Error<T, I>
     **/
    PalletTipsError: {
        _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
    },
    /**
     * Lookup442: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: 'Option<(AccountId32,u128)>',
            Requested: 'u32'
        }
    },
    /**
     * Lookup445: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: ['TooLarge', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
    },
    /**
     * Lookup447: pallet_dex::TradingPairStatus<Balance, BlockNumber>
     **/
    PalletDexTradingPairStatus: {
        _enum: {
            Disabled: 'Null',
            Provisioning: 'PalletDexProvisioningParameters',
            Enabled: 'Null'
        }
    },
    /**
     * Lookup448: pallet_dex::ProvisioningParameters<Balance, BlockNumber>
     **/
    PalletDexProvisioningParameters: {
        minContribution: '(u128,u128)',
        targetProvision: '(u128,u128)',
        accumulatedProvision: '(u128,u128)',
        notBefore: 'u32'
    },
    /**
     * Lookup451: pallet_dex::module::Error<T>
     **/
    PalletDexModuleError: {
        _enum: ['AlreadyEnabled', 'MustBeEnabled', 'MustBeProvisioning', 'MustBeDisabled', 'NotAllowedList', 'InvalidContributionIncrement', 'InvalidLiquidityIncrement', 'InvalidCurrencyId', 'InvalidTradingPathLength', 'InsufficientTargetAmount', 'ExcessiveSupplyAmount', 'InsufficientLiquidity', 'ZeroSupplyAmount', 'ZeroTargetAmount', 'UnacceptableShareIncrement', 'UnacceptableLiquidityWithdrawn', 'InvariantCheckFailed', 'UnqualifiedProvision', 'StillProvisioning', 'InvalidTradingPath', 'NotAllowedRefund', 'CannotSwap']
    },
    /**
     * Lookup454: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBid: {
        who: 'AccountId32',
        kind: 'PalletSocietyBidKind',
        value: 'u128'
    },
    /**
     * Lookup455: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBidKind: {
        _enum: {
            Deposit: 'u128',
            Vouch: '(AccountId32,u128)'
        }
    },
    /**
     * Lookup457: pallet_society::VouchingStatus
     **/
    PalletSocietyVouchingStatus: {
        _enum: ['Vouching', 'Banned']
    },
    /**
     * Lookup461: pallet_society::Vote
     **/
    PalletSocietyVote: {
        _enum: ['Skeptic', 'Reject', 'Approve']
    },
    /**
     * Lookup462: pallet_society::pallet::Error<T, I>
     **/
    PalletSocietyError: {
        _enum: ['BadPosition', 'NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouching', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead']
    },
    /**
     * Lookup463: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: ['RequireSudo']
    },
    /**
     * Lookup465: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: 'SpCoreEd25519Signature',
            Sr25519: 'SpCoreSr25519Signature',
            Ecdsa: 'SpCoreEcdsaSignature'
        }
    },
    /**
     * Lookup466: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: '[u8;64]',
    /**
     * Lookup468: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: '[u8;64]',
    /**
     * Lookup469: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: '[u8;65]',
    /**
     * Lookup472: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: 'Null',
    /**
     * Lookup473: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * Lookup474: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * Lookup475: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * Lookup478: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: 'Compact<u32>',
    /**
     * Lookup479: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * Lookup480: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
    /**
     * Lookup481: parachain_node_runtime::Runtime
     **/
    ParachainNodeRuntimeRuntime: 'Null'
};
