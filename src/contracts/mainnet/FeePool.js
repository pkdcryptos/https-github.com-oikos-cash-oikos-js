import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/mainnet/FeePool';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FeePool(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['ProxyFeePool'];
  const tronWeb = this.contractSettings.tronWeb;
  this.signer = this.contractSettings.signer;
  this.contract = tronContract(abi, address, tronWeb, this.signer);

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePeriodDuration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFeePeriodDuration = async (_feePeriodDuration, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setFeePeriodDuration(_feePeriodDuration).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePoolState {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeePoolState = async (_feePoolState, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setFeePoolState(_feePoolState).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _claimingAddress {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.getLastFeeWithdrawal = async _claimingAddress => {
    return await this.contract.getLastFeeWithdrawal(_claimingAddress).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @param period {BigNumber}
   * @returns BigNumber
   **/
  this.effectiveDebtRatioForPeriod = async (account, period) => {
    return await this.contract
      .effectiveDebtRatioForPeriod(account, period)
      .call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.exchangeFeeRate = async () => {
    return await this.contract.exchangeFeeRate().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _integrationProxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setIntegrationProxy(_integrationProxy).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.nominateNewOwner(_owner).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _rewardsAuthority {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setRewardsAuthority = async (_rewardsAuthority, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setRewardsAuthority(_rewardsAuthority).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setSelfDestructBeneficiary(_beneficiary).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param xdrAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.recordFeePaid = async (xdrAmount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.recordFeePaid(xdrAmount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _percent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setTargetThreshold = async (_percent, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setTargetThreshold(_percent).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.terminateSelfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns uint256[2][3]
   **/
  this.feesByPeriod = async account => {
    return await this.contract.feesByPeriod(account).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.closeCurrentFeePeriod = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.closeCurrentFeePeriod().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param index {BigNumber}
   * @returns Object
   **/
  this.recentFeePeriods = async index => {
    return await this.contract.recentFeePeriods(index).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveClaimOnBehalf = async (account, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.approveClaimOnBehalf(account).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.feePoolEternalStorage = async () => {
    return await this.contract.feePoolEternalStorage().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _exchangeFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFeeRate = async (_exchangeFeeRate, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setExchangeFeeRate(_exchangeFeeRate).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns boolean
   **/
  this.isFeesClaimable = async account => {
    return await this.contract.isFeesClaimable(account).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _delegates {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setDelegateApprovals = async (_delegates, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setDelegateApprovals(_delegates).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.delegates = async () => {
    return await this.contract.delegates().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param claimingForAddress {String<TrxAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimOnBehalf = async (claimingForAddress, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.claimOnBehalf(claimingForAddress).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeClaimOnBehalf = async (account, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.removeClaimOnBehalf(account).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalRewardsAvailable = async () => {
    return await this.contract.totalRewardsAvailable().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.synthetix = async () => {
    return await this.contract.synthetix().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.acceptOwnership().send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param debtRatio {BigNumber}
   * @param debtEntryIndex {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendAccountIssuanceRecord = async (account, debtRatio, debtEntryIndex, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      .appendAccountIssuanceRecord(account, debtRatio, debtEntryIndex)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setProxy(_proxy).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @param currencyKey {bytes32}
   * @returns Object
   **/
  this.feesAvailable = async (account, currencyKey) => {
    return await this.contract.feesAvailable(account, currencyKey).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.selfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.integrationProxy = async () => {
    return await this.contract.integrationProxy().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.rewardEscrow = async () => {
    return await this.contract.rewardEscrow().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.getPenaltyThresholdRatio = async () => {
    return await this.contract.getPenaltyThresholdRatio().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param feePeriodIndex {BigNumber}
   * @param feePeriodId {BigNumber}
   * @param startingDebtIndex {BigNumber}
   * @param startTime {BigNumber}
   * @param feesToDistribute {BigNumber}
   * @param feesClaimed {BigNumber}
   * @param rewardsToDistribute {BigNumber}
   * @param rewardsClaimed {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.importFeePeriod = async (
    feePeriodIndex,
    feePeriodId,
    startingDebtIndex,
    startTime,
    feesToDistribute,
    feesClaimed,
    rewardsToDistribute,
    rewardsClaimed,
    txParams
  ) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      .importFeePeriod(
        feePeriodIndex,
        feePeriodId,
        startingDebtIndex,
        startTime,
        feesToDistribute,
        feesClaimed,
        rewardsToDistribute,
        rewardsClaimed
      )
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param quantity {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendVestingEntry = async (account, quantity, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.appendVestingEntry(account, quantity).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromTransfer = async value => {
    return await this.contract.amountReceivedFromTransfer(value).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sender {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setMessageSender(sender).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.initiateSelfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.exchangeFeeIncurred = async value => {
    return await this.contract.exchangeFeeIncurred(value).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.FEE_PERIOD_LENGTH = async () => {
    return await this.contract.FEE_PERIOD_LENGTH().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.rewardsAuthority = async () => {
    return await this.contract.rewardsAuthority().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimFees = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.claimFees().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MIN_FEE_PERIOD_DURATION().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.synthetixState = async () => {
    return await this.contract.synthetixState().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromExchange = async value => {
    return await this.contract.amountReceivedFromExchange(value).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.targetThreshold = async () => {
    return await this.contract.targetThreshold().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.feePoolState = async () => {
    return await this.contract.feePoolState().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalFeesAvailable = async currencyKey => {
    return await this.contract.totalFeesAvailable(currencyKey).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.FEE_ADDRESS = async () => {
    return await this.contract.FEE_ADDRESS().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MAX_FEE_PERIOD_DURATION().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_EXCHANGE_FEE_RATE = async () => {
    return await this.contract.MAX_EXCHANGE_FEE_RATE().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRewardsToDistribute = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setRewardsToDistribute(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _synthetix {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetix = async (_synthetix, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setSynthetix(_synthetix).send(txParams);
    return { hash: txHash };
  };
}

export default FeePool;
