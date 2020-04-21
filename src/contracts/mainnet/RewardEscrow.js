
    import ContractSettings from '../../contractSettings';
    import tronContract from '../../tronContract';
    import abi from '../../../lib/abis/mainnet/RewardEscrow';

    /** @constructor
     * @param contractSettings {ContractSettings}
     */
    function RewardEscrow(contractSettings) {
      this.contractSettings = contractSettings || new ContractSettings();

      const address = this.contractSettings.addressList['RewardEscrow']
      const tronWeb = this.contractSettings.tronWeb;
      this.signer = this.contractSettings.signer;
      this.contract = tronContract(abi, address, tronWeb, this.signer);

      
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
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.getNextVestingIndex = async (account) => {
        return await this.contract.getNextVestingIndex(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.numVestingEntries = async (account) => {
        return await this.contract.numVestingEntries(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.totalVestedAccountBalance = async (address_1) => {
        return await this.contract.totalVestedAccountBalance(address_1).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns uint256[2]
   **/
      this.getNextVestingEntry = async (account) => {
        return await this.contract.getNextVestingEntry(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.totalEscrowedAccountBalance = async (address_1) => {
        return await this.contract.totalEscrowedAccountBalance(address_1).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns uint256[520]
   **/
      this.checkAccountSchedule = async (account) => {
        return await this.contract.checkAccountSchedule(account).call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
    this.vest = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.vest().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @param  {BigNumber}
   * @param  {BigNumber}
   * @returns BigNumber
   **/
      this.vestingSchedules = async (address_1, uint256_1, uint256_2) => {
        return await this.contract.vestingSchedules(address_1, uint256_1, uint256_2).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.nominatedOwner = async () => {
        return await this.contract.nominatedOwner().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.getNextVestingTime = async (account) => {
        return await this.contract.getNextVestingTime(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.balanceOf = async (account) => {
        return await this.contract.balanceOf(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
      this.totalEscrowedBalance = async () => {
        return await this.contract.totalEscrowedBalance().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.synthetix = async () => {
        return await this.contract.synthetix().call({ _isConstant: true })
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
   * @param account {String<TrxAddress>}
   * @returns BigNumber
   **/
      this.getNextVestingQuantity = async (account) => {
        return await this.contract.getNextVestingQuantity(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @param index {BigNumber}
   * @returns BigNumber
   **/
      this.getVestingTime = async (account, index) => {
        return await this.contract.getVestingTime(account, index).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.feePool = async () => {
        return await this.contract.feePool().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<TrxAddress>}
   * @param quantity {BigNumber}
   * @param txParams {TxParams}
  
   **/
    this.appendVestingEntry = async (account, quantity, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.appendVestingEntry(account, quantity).send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
      this.MAX_VESTING_ENTRIES = async () => {
        return await this.contract.MAX_VESTING_ENTRIES().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @param index {BigNumber}
   * @returns uint256[2]
   **/
      this.getVestingScheduleEntry = async (account, index) => {
        return await this.contract.getVestingScheduleEntry(account, index).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @param index {BigNumber}
   * @returns BigNumber
   **/
      this.getVestingQuantity = async (account, index) => {
        return await this.contract.getVestingQuantity(account, index).call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param _synthetix {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.setSynthetix = async (_synthetix, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setSynthetix(_synthetix).send(txParams);
      return { hash: txHash };
    };
  ;
    }

    export default RewardEscrow;
  