import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/mainnet/Synthetix';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Synthetix(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['ProxySynthetix'];
  const tronWeb = this.contractSettings.tronWeb;
  this.signer = this.contractSettings.signer;
  this.contract = tronContract(abi, address, tronWeb, this.signer);

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.name = async () => {
    return await this.contract.name().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _gasPriceLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setGasPriceLimit = async (_gasPriceLimit, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setGasPriceLimit(_gasPriceLimit).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param spender {String<TrxAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.approve = async (spender, value, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.approve(spender, value).send(txParams);
    return { hash: txHash };
  };

  /**
   * Only the contract owner may call this., Remove an associated Synth contract from the Synthetix system.<br>
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeSynth = async (currencyKey, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.removeSynth(currencyKey).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.mint = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.mint().send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _integrationProxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
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
    const txHash = await this.contract.nominateNewOwner(_owner).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns bytes32
   **/
  this.synthsByAddress = async address_1 => {
    return await this.contract.synthsByAddress(address_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePool {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeePool = async (_feePool, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setFeePool(_feePool).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.feeRateForExchange = async (sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract
      .feeRateForExchange(sourceCurrencyKey, destinationCurrencyKey)
      .call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _gasLimitOracle {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setGasLimitOracle = async (_gasLimitOracle, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setGasLimitOracle(_gasLimitOracle).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setSelfDestructBeneficiary(_beneficiary).send(txParams);
    return { hash: txHash };
  };

  /**
   * ERC20 transferFrom function.<br>
   * Transaction (consumes gas, requires signer)
   * @param from {String<TrxAddress>}
   * @param to {String<TrxAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.transferFrom(from, to, value).send(txParams);
    return { hash: txHash };
  };

  /**
   * Burn synths to clear issued synths/free SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSynths = async (amount, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.burnSynths(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<TrxAddress>
   **/
  this.synths = async bytes32_1 => {
    return await this.contract.synths(bytes32_1).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.terminateSelfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.rewardsDistribution = async () => {
    return await this.contract.rewardsDistribution().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.exchangeRates = async () => {
    return await this.contract.exchangeRates().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner().call({ _isConstant: true });
  };

  /**
   * Only callable by the contract owner., Set the ExchangeRates contract address where rates are held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _exchangeRates {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeRates = async (_exchangeRates, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setExchangeRates(_exchangeRates).send(txParams);
    return { hash: txHash };
  };

  /**
   * A function that lets you easily convert an amount in a source currency to an amount in the destination currency.<br>
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
   * When issuing, escrowed SNX are locked first, then non-escrowed SNX are locked last, but escrowed SNX are not transferable, so they are not included in this calculation., The number of SNX that are free to be transferred by an account.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.transferableSynthetix = async account => {
    return await this.contract.transferableSynthetix(account).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _givenGasPrice {BigNumber}
  
   **/
  this.validateGasPrice = async _givenGasPrice => {
    return await this.contract.validateGasPrice(_givenGasPrice).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.availableCurrencyKeys = async () => {
    return await this.contract.availableCurrencyKeys().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.acceptOwnership().send(txParams);
    return { hash: txHash };
  };

  /**
   * The remaining synths an issuer can issue against their total synthetix balance.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<TrxAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.remainingIssuableSynths = async (issuer, currencyKey) => {
    return await this.contract
      .remainingIssuableSynths(issuer, currencyKey)
      .call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns String<TrxAddress>
   **/
  this.availableSynths = async uint256_1 => {
    return await this.contract.availableSynths(uint256_1).call({ _isConstant: true });
  };

  /**
   * Total amount of synths issued by the system, priced in currencyKey.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalIssuedSynths = async currencyKey => {
    return await this.contract.totalIssuedSynths(currencyKey).call({ _isConstant: true });
  };

  /**
   * Only the contract owner may call this., Add an associated Synth contract to the Synthetix system.<br>
   * Transaction (consumes gas, requires signer)
   * @param synth {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addSynth = async (synth, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.addSynth(synth).send(txParams);
    return { hash: txHash };
  };

  /**
   * Issuance is only allowed if the synthetix price isn't stale. Amount should be larger than 0., Issue synths against the sender's SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueSynths = async (amount, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.issueSynths(amount).send(txParams);
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
   * @param _exchangeEnabled {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeEnabled = async (_exchangeEnabled, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setExchangeEnabled(_exchangeEnabled).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.gasPriceLimit = async () => {
    return await this.contract.gasPriceLimit().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setProxy(_proxy).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
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
   * Transaction (consumes gas, requires signer)
   * @param _tokenState {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setTokenState = async (_tokenState, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setTokenState(_tokenState).send(txParams);
    return { hash: txHash };
  };

  /**
   * The current collateralisation ratio for a user. Collateralisation ratio varies over time as the value of the underlying Synthetix asset changes, e.g. if a user issues their maximum available synths when they hold $10 worth of Synthetix, they will have issued $2 worth of synths. If the value of Synthetix changes, the ratio returned by this function will adjust accordlingly. Users are incentivised to maintain a collateralisation ratio as close to the issuance ratio as possible by altering the amount of fees they're able to claim from the system.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async issuer => {
    return await this.contract.collateralisationRatio(issuer).call({ _isConstant: true });
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
   * The total SNX owned by this account, both escrowed and unescrowed, against which synths can be issued. This includes those already being used as collateral (locked), and those available for further issuance (unlocked).<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account).call({ _isConstant: true });
  };

  /**
   * The maximum synths an issuer can issue against their total synthetix quantity, priced in XDRs. This ignores any already issued synths, and is purely giving you the maximimum amount the user can issue.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<TrxAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.maxIssuableSynths = async (issuer, currencyKey) => {
    return await this.contract.maxIssuableSynths(issuer, currencyKey).call({ _isConstant: true });
  };

  /**
   * ERC20 transfer function.<br>
   * Transaction (consumes gas, requires signer)
   * @param to {String<TrxAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transfer = async (to, value, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.transfer(to, value).send(txParams);
    return { hash: txHash };
  };

  /**
   * Only the synth contract can call this function, Function that allows synth contract to delegate exchanging of a synth that is not the same sourceCurrency.<br>
   * Transaction (consumes gas, requires signer)
   * @param from {String<TrxAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param destinationAddress {String<TrxAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.synthInitiatedExchange = async (
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    txParams
  ) => {
    txParams = txParams || {};
    const txHash = await this.contract
      .synthInitiatedExchange(
        from,
        sourceCurrencyKey,
        sourceAmount,
        destinationCurrencyKey,
        destinationAddress
      )
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.feePool = async () => {
    return await this.contract.feePool().call({ _isConstant: true });
  };

  /**
   * Issuance is only allowed if the synthetix price isn't stale., Issue the maximum amount of Synths possible against the sender's SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.issueMaxSynths = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.issueMaxSynths().send(txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param sender {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setMessageSender(sender).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.initiateSelfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.supplySchedule = async () => {
    return await this.contract.supplySchedule().call({ _isConstant: true });
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
   * @param _protectionCircuitIsActivated {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setProtectionCircuit = async (_protectionCircuitIsActivated, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract
      .setProtectionCircuit(_protectionCircuitIsActivated)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * If a user issues synths backed by SNX in their wallet, the SNX become locked. This function will tell you how many synths a user has to give back to the system in order to unlock their original debt position. This is priced in whichever synth is passed in as a currency key, e.g. you can price the debt in sUSD, XDR, or any other synth you wish.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<TrxAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (issuer, currencyKey) => {
    return await this.contract.debtBalanceOf(issuer, currencyKey).call({ _isConstant: true });
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
   * Returns the count of available synths in the system, which you can use to iterate availableSynths.<br>
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.availableSynthCount = async () => {
    return await this.contract.availableSynthCount().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param owner {String<TrxAddress>}
   * @param spender {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.escrow = async () => {
    return await this.contract.escrow().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.tokenState = async () => {
    return await this.contract.tokenState().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy().call({ _isConstant: true });
  };

  /**
   * Function that allows you to exchange synths you hold in one flavour for another.<br>
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.exchange = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract
      .exchange(sourceCurrencyKey, sourceAmount, destinationCurrencyKey)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.exchangeEnabled = async () => {
    return await this.contract.exchangeEnabled().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.gasLimitOracle = async () => {
    return await this.contract.gasLimitOracle().call({ _isConstant: true });
  };
}

export default Synthetix;
