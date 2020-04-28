import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/shasta/Depot';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Depot(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['Depot'];
  const tronWeb = this.contractSettings.tronWeb;
  this.signer = this.contractSettings.signer;
  this.contract = tronContract(abi, address, tronWeb, this.signer);

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter TRX amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSNX = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.exchangeEtherForSNX().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumDepositAmount = async () => {
    return await this.contract.minimumDepositAmount().call({ _isConstant: true });
  };

  /**
   * Exchange ETH to sUSD while insisting on a particular rate. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rate.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter TRX amount set txParams.value)
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynthsAtRate = async (guaranteedRate, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.exchangeEtherForSynthsAtRate(guaranteedRate).send(txParams);
    return { hash: txHash };
  };

  /**
   * Calculate how many synths you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthsReceivedForEther = async amount => {
    return await this.contract.synthsReceivedForEther(amount).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.synth = async () => {
    return await this.contract.synth().call({ _isConstant: true });
  };

  /**
   * Exchange sUSD for SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param synthAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForSynthetix = async (synthAmount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.exchangeSynthsForSynthetix(synthAmount).send(txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setPaused(_paused).send(txParams);
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
   * Exchange ETH to sUSD.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter TRX amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynths = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.exchangeEtherForSynths().send(txParams);
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
   * @returns String<TrxAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.priceStalePeriod = async () => {
    return await this.contract.priceStalePeriod().call({ _isConstant: true });
  };

  /**
   * Set the stale period on the updated price variables.<br>
   * Transaction (consumes gas, requires signer)
   * @param _time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setPriceStalePeriod = async (_time, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setPriceStalePeriod(_time).send(txParams);
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
   * Set the Synth contract that the issuance controller uses to issue Synths.<br>
   * Transaction (consumes gas, requires signer)
   * @param _synth {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynth = async (_synth, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setSynth(_synth).send(txParams);
    return { hash: txHash };
  };

  /**
   * Check if the prices haven't been updated for longer than the stale period.<br>
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.pricesAreStale = async () => {
    return await this.contract.pricesAreStale().call({ _isConstant: true });
  };

  /**
   * Access point for the oracle to update the prices of SNX / eth.<br>
   * Transaction (consumes gas, requires signer)
   * @param newEthPrice {BigNumber}
   * @param newSynthetixPrice {BigNumber}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.updatePrices = async (newEthPrice, newSynthetixPrice, timeSent, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      .updatePrices(newEthPrice, newSynthetixPrice, timeSent)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPriceUpdateTime = async () => {
    return await this.contract.lastPriceUpdateTime().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSellableDeposits = async () => {
    return await this.contract.totalSellableDeposits().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.snxProxy = async () => {
    return await this.contract.snxProxy().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner().call({ _isConstant: true });
  };

  /**
   * Exchange sUSD for SNX while insisting on a particular rate. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rate.<br>
   * Transaction (consumes gas, requires signer)
   * @param synthAmount {BigNumber}
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForSynthetixAtRate = async (synthAmount, guaranteedRate, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      .exchangeSynthsForSynthetixAtRate(synthAmount, guaranteedRate)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused().call({ _isConstant: true });
  };

  /**
   * Set the funds wallet where ETH raised is held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _fundsWallet {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFundsWallet = async (_fundsWallet, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setFundsWallet(_fundsWallet).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositStartIndex = async () => {
    return await this.contract.depositStartIndex().call({ _isConstant: true });
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
   * Set the Oracle that pushes the synthetix price to this contract.<br>
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
   * Exchange ETH to SNX while insisting on a particular set of rates. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rates.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter TRX amount set txParams.value)
   * @param guaranteedEtherRate {BigNumber}
   * @param guaranteedSynthetixRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynthetixAtRate = async (
    guaranteedEtherRate,
    guaranteedSynthetixRate,
    txParams
  ) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      .exchangeEtherForSynthetixAtRate(guaranteedEtherRate, guaranteedSynthetixRate)
      .send(txParams);
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
   * Allows a user to withdraw all of their previously deposited synths from this contract if needed. Developer note: We could keep an index of address to deposits to make this operation more efficient but then all the other operations on the queue become less efficient. It's expected that this function will be very rarely used, so placing the inefficiency here is intentional. The usual use case does not involve a withdrawal.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawMyDepositedSynths = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.withdrawMyDepositedSynths().send(txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime().call({ _isConstant: true });
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
   * Calculate how many SNX you will receive if you transfer an amount of synths.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthetixReceivedForSynths = async amount => {
    return await this.contract.synthetixReceivedForSynths(amount).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY().call({ _isConstant: true });
  };

  /**
   * Set the minimum deposit amount required to depoist sUSD into the FIFO queue.<br>
   * Transaction (consumes gas, requires signer)
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinimumDepositAmount = async (_amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setMinimumDepositAmount(_amount).send(txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.deposits = async uint256_1 => {
    return await this.contract.deposits(uint256_1).call({ _isConstant: true });
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
   * @returns BigNumber
   **/
  this.usdToEthPrice = async () => {
    return await this.contract.usdToEthPrice().call({ _isConstant: true });
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
   * @param  {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.smallDeposits = async address_1 => {
    return await this.contract.smallDeposits(address_1).call({ _isConstant: true });
  };

  /**
   * Calculate how many SNX you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthetixReceivedForEther = async amount => {
    return await this.contract.synthetixReceivedForEther(amount).call({ _isConstant: true });
  };

  /**
   * DepositSynths: Allows users to deposit synths via the approve / transferFrom workflow if they'd like. You can equally just transfer synths to this contract and it will work exactly the same way but with one less call (and therefore cheaper transaction fees).<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositSynths = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.depositSynths(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Allows the owner to withdraw SNX from this contract if needed.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawSynthetix = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.withdrawSynthetix(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.usdToSnxPrice = async () => {
    return await this.contract.usdToSnxPrice().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.ORACLE_FUTURE_LIMIT = async () => {
    return await this.contract.ORACLE_FUTURE_LIMIT().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositEndIndex = async () => {
    return await this.contract.depositEndIndex().call({ _isConstant: true });
  };

  /**
   * Set the Synthetix contract that the issuance controller uses to issue SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param _snxProxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetix = async (_snxProxy, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setSynthetix(_snxProxy).send(txParams);
    return { hash: txHash };
  };
}

export default Depot;
