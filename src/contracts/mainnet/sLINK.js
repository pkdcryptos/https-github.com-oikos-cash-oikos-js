import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/mainnet/Synth';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function sLINK(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['ProxysLINK'];
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply().call({ _isConstant: true });
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
   * Override ERC20 transferFrom function in order to subtract the transaction fee and send it to the fee pool for SNX holders to claim.<br>
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
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issue = async (account, amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.issue(account, amount).send(txParams);
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
   * @param _synthetixProxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetixProxy = async (_synthetixProxy, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setSynthetixProxy(_synthetixProxy).send(txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burn = async (account, amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.burn(account, amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _tokenState {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setTokenState = async (_tokenState, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setTokenState(_tokenState).send(txParams);
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
   * Override ERC20 transfer function in order to subtract the transaction fee and send it to the fee pool for SNX holders to claim.<br>
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
  this.synthetixProxy = async () => {
    return await this.contract.synthetixProxy().call({ _isConstant: true });
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
   * @returns String<TrxAddress>
   **/
  this.feePoolProxy = async () => {
    return await this.contract.feePoolProxy().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePoolProxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeePoolProxy = async (_feePoolProxy, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setFeePoolProxy(_feePoolProxy).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.currencyKey = async () => {
    return await this.contract.currencyKey().call({ _isConstant: true });
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
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setTotalSupply = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 10000000,
      ...txParams,
    };
    const txHash = await this.contract.setTotalSupply(amount).send(txParams);
    return { hash: txHash };
  };
}

export default sLINK;
