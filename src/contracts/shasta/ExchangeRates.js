import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/shasta/ExchangeRates';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ExchangeRates(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['ExchangeRates'];
  const tronWeb = this.contractSettings.tronWeb;
  this.signer = this.contractSettings.signer;
  this.contract = tronContract(abi, address, tronWeb, this.signer);

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsStale = async currencyKey => {
    return await this.contract.rateIsStale(currencyKey).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns uint256[]
   **/
  this.lastRateUpdateTimesForCurrencies = async currencyKeys => {
    return await this.contract
      .lastRateUpdateTimesForCurrencies(currencyKeys)
      .call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.rateStalePeriod = async () => {
    return await this.contract.rateStalePeriod().call({ _isConstant: true });
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
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeAggregator = async (currencyKey, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.removeAggregator(currencyKey).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns boolean
   **/
  this.anyRateIsStale = async currencyKeys => {
    return await this.contract.anyRateIsStale(currencyKeys).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.invertedKeys = async uint256_1 => {
    return await this.contract.invertedKeys(uint256_1).call({ _isConstant: true });
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
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param aggregatorAddress {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addAggregator = async (currencyKey, aggregatorAddress, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.addAggregator(currencyKey, aggregatorAddress).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.deleteRate = async (currencyKey, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.deleteRate(currencyKey).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.aggregatorKeys = async uint256_1 => {
    return await this.contract.aggregatorKeys(uint256_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.effectiveValue = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey) => {
    return await this.contract
      .effectiveValue(sourceCurrencyKey, sourceAmount, destinationCurrencyKey)
      .call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<TrxAddress>
   **/
  this.aggregators = async bytes32_1 => {
    return await this.contract.aggregators(bytes32_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns Object
   **/
  this.inversePricing = async bytes32_1 => {
    return await this.contract.inversePricing(bytes32_1).call({ _isConstant: true });
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
   * @param _time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRateStalePeriod = async (_time, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setRateStalePeriod(_time).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _oracle {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setOracle = async (_oracle, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setOracle(_oracle).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.oracle = async () => {
    return await this.contract.oracle().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns boolean
   **/
  this.isXDRParticipant = async bytes32_1 => {
    return await this.contract.isXDRParticipant(bytes32_1).call({ _isConstant: true });
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
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.xdrParticipants = async uint256_1 => {
    return await this.contract.xdrParticipants(uint256_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.rateForCurrency = async currencyKey => {
    return await this.contract.rateForCurrency(currencyKey).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsFrozen = async currencyKey => {
    return await this.contract.rateIsFrozen(currencyKey).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param entryPoint {BigNumber}
   * @param upperLimit {BigNumber}
   * @param lowerLimit {BigNumber}
   * @param freeze {boolean}
   * @param freezeAtUpperLimit {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setInversePricing = async (
    currencyKey,
    entryPoint,
    upperLimit,
    lowerLimit,
    freeze,
    freezeAtUpperLimit,
    txParams
  ) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      .setInversePricing(
        currencyKey,
        entryPoint,
        upperLimit,
        lowerLimit,
        freeze,
        freezeAtUpperLimit
      )
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns Object
   **/
  this.ratesAndStaleForCurrencies = async currencyKeys => {
    return await this.contract.ratesAndStaleForCurrencies(currencyKeys).call({ _isConstant: true });
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
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param newRates {uint256[]}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.updateRates = async (currencyKeys, newRates, timeSent, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.updateRates(currencyKeys, newRates, timeSent).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns uint256[]
   **/
  this.ratesForCurrencies = async currencyKeys => {
    return await this.contract.ratesForCurrencies(currencyKeys).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeInversePricing = async (currencyKey, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.removeInversePricing(currencyKey).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param code {bytes32}
   * @returns BigNumber
   **/
  this.lastRateUpdateTimes = async code => {
    return await this.contract.lastRateUpdateTimes(code).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param code {bytes32}
   * @returns BigNumber
   **/
  this.rates = async code => {
    return await this.contract.rates(code).call({ _isConstant: true });
  };
}

export default ExchangeRates;
