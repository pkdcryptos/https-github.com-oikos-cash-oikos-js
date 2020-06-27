import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/mainnet/ProxyERC20';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ProxyERC20(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['ProxyERC20'];
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
   * @param spender {String<TrxAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.approve = async (spender, value, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.approve(spender, value).send(txParams);
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
  this.totalSupply = async () => {
    return await this.contract.totalSupply().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<TrxAddress>}
   * @param to {String<TrxAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.transferFrom(from, to, value).send(txParams);
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
   * @returns String<TrxAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner().call({ _isConstant: true });
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
   * Transaction (consumes gas, requires signer)
   * @param _target {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setTarget = async (_target, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setTarget(_target).send(txParams);
    return { hash: txHash };
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
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param callData {bytes}
   * @param numTopics {BigNumber}
   * @param topic1 {bytes32}
   * @param topic2 {bytes32}
   * @param topic3 {bytes32}
   * @param topic4 {bytes32}
   * @param txParams {TxParams}
  
   **/
  this._emit = async (callData, numTopics, topic1, topic2, topic3, topic4, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract
      ._emit(callData, numTopics, topic1, topic2, topic3, topic4)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.useDELEGATECALL = async () => {
    return await this.contract.useDELEGATECALL().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param to {String<TrxAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transfer = async (to, value, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.transfer(to, value).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param value {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setUseDELEGATECALL = async (value, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setUseDELEGATECALL(value).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.target = async () => {
    return await this.contract.target().call({ _isConstant: true });
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
}

export default ProxyERC20;
