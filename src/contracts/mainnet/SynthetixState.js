import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/mainnet/SynthetixState';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SynthetixState(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['SynthetixState'];
  const tronWeb = this.contractSettings.tronWeb;
  this.signer = this.contractSettings.signer;
  this.contract = tronContract(abi, address, tronWeb, this.signer);

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issuanceRatio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssuanceRatio = async (_issuanceRatio, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setIssuanceRatio(_issuanceRatio).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.debtLedger = async uint256_1 => {
    return await this.contract.debtLedger(uint256_1).call({ _isConstant: true });
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
   * @returns BigNumber
   **/
  this.importedXDRAmount = async () => {
    return await this.contract.importedXDRAmount().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.incrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.incrementTotalIssuerCount().send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param value {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendDebtLedgerValue = async (value, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.appendDebtLedgerValue(value).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastDebtLedgerEntry = async () => {
    return await this.contract.lastDebtLedgerEntry().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
  
   **/
  this.setPreferredCurrency = async (account, currencyKey, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setPreferredCurrency(account, currencyKey).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _associatedContract {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAssociatedContract = async (_associatedContract, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.setAssociatedContract(_associatedContract).send(txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.acceptOwnership().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns Object
   **/
  this.issuanceData = async address_1 => {
    return await this.contract.issuanceData(address_1).call({ _isConstant: true });
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
  this.totalIssuerCount = async () => {
    return await this.contract.totalIssuerCount().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param accounts {address[]}
   * @param sUSDAmounts {uint256[]}
   * @param txParams {TxParams}
  
   **/
  this.importIssuerData = async (accounts, sUSDAmounts, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.importIssuerData(accounts, sUSDAmounts).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param initialDebtOwnership {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCurrentIssuanceData = async (account, initialDebtOwnership, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract
      .setCurrentIssuanceData(account, initialDebtOwnership)
      .send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.associatedContract = async () => {
    return await this.contract.associatedContract().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.clearIssuanceData = async (account, txParams) => {
    txParams = txParams || {};
    const txHash = await this.contract.clearIssuanceData(account).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns boolean
   **/
  this.hasIssued = async account => {
    return await this.contract.hasIssued(account).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.decrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    const txHash = await this.contract.decrementTotalIssuerCount().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns bytes4
   **/
  this.preferredCurrency = async address_1 => {
    return await this.contract.preferredCurrency(address_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.debtLedgerLength = async () => {
    return await this.contract.debtLedgerLength().call({ _isConstant: true });
  };
}

export default SynthetixState;
