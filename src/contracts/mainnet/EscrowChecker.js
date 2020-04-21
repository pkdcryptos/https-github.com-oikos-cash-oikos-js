
    import ContractSettings from '../../contractSettings';
    import tronContract from '../../tronContract';
    import abi from '../../../lib/abis/mainnet/EscrowChecker';

    /** @constructor
     * @param contractSettings {ContractSettings}
     */
    function EscrowChecker(contractSettings) {
      this.contractSettings = contractSettings || new ContractSettings();

      const address = this.contractSettings.addressList['EscrowChecker']
      const tronWeb = this.contractSettings.tronWeb;
      this.signer = this.contractSettings.signer;
      this.contract = tronContract(abi, address, tronWeb, this.signer);

      
  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<TrxAddress>}
   * @returns uint256[16]
   **/
      this.checkAccountSchedule = async (account) => {
        return await this.contract.checkAccountSchedule(account).call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.synthetix_escrow = async () => {
        return await this.contract.synthetix_escrow().call({ _isConstant: true })
      };
    ;
    }

    export default EscrowChecker;
  