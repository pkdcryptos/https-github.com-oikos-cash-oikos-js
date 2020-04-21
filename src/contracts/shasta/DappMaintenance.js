
    import ContractSettings from '../../contractSettings';
    import tronContract from '../../tronContract';
    import abi from '../../../lib/abis/shasta/DappMaintenance';

    /** @constructor
     * @param contractSettings {ContractSettings}
     */
    function DappMaintenance(contractSettings) {
      this.contractSettings = contractSettings || new ContractSettings();

      const address = this.contractSettings.addressList['DappMaintenance']
      const tronWeb = this.contractSettings.tronWeb;
      this.signer = this.contractSettings.signer;
      this.contract = tronContract(abi, address, tronWeb, this.signer);

      
  /**
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
    this.setMaintenanceModeMintr = async (isPaused, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setMaintenanceModeMintr(isPaused).send(txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
    this.setMaintenanceModeAll = async (isPaused, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setMaintenanceModeAll(isPaused).send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
      this.isPausedMintr = async () => {
        return await this.contract.isPausedMintr().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.nominatedOwner = async () => {
        return await this.contract.nominatedOwner().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
    this.acceptOwnership = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.acceptOwnership().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.owner = async () => {
        return await this.contract.owner().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
      this.isPausedSX = async () => {
        return await this.contract.isPausedSX().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
    this.setMaintenanceModeSX = async (isPaused, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setMaintenanceModeSX(isPaused).send(txParams);
      return { hash: txHash };
    };
  ;
    }

    export default DappMaintenance;
  