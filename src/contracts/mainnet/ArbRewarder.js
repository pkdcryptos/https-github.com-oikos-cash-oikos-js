
    import ContractSettings from '../../contractSettings';
    import tronContract from '../../tronContract';
    import abi from '../../../lib/abis/mainnet/ArbRewarder';

    /** @constructor
     * @param contractSettings {ContractSettings}
     */
    function ArbRewarder(contractSettings) {
      this.contractSettings = contractSettings || new ContractSettings();

      const address = this.contractSettings.addressList['ArbRewarder']
      const tronWeb = this.contractSettings.tronWeb;
      this.signer = this.contractSettings.signer;
      this.contract = tronContract(abi, address, tronWeb, this.signer);

      
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.uniswapAddress = async () => {
        return await this.contract.uniswapAddress().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.synth = async () => {
        return await this.contract.synth().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param to_addr {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.recoverETH = async (to_addr, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.recoverETH(to_addr).send(txParams);
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
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
    this.setPaused = async (_paused, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setPaused(_paused).send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
      this.initiationTime = async () => {
        return await this.contract.initiationTime().call({ _isConstant: true })
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
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
    this.isArbable = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.isArbable().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
    this.terminateSelfDestruct = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.terminateSelfDestruct().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.exchangeRates = async () => {
        return await this.contract.exchangeRates().call({ _isConstant: true })
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
   * @param _exchangeRatesAddress {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.setExchangeRates = async (_exchangeRatesAddress, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setExchangeRates(_exchangeRatesAddress).send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Transaction (consumes gas, requires signer)
   * @param _acceptable_slippage {BigNumber}
   * @param _max_delay {BigNumber}
   * @param _off_peg_min {BigNumber}
   * @param txParams {TxParams}
  
   **/
    this.setParams = async (_acceptable_slippage, _max_delay, _off_peg_min, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setParams(_acceptable_slippage, _max_delay, _off_peg_min).send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
      this.paused = async () => {
        return await this.contract.paused().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.uniswapExchange = async () => {
        return await this.contract.uniswapExchange().call({ _isConstant: true })
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
   * @param _synthAddress {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.setSynthAddress = async (_synthAddress, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setSynthAddress(_synthAddress).send(txParams);
      return { hash: txHash };
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
   * Transaction (consumes gas, requires signer)
   * @param erc20_addr {String<TrxAddress>}
   * @param to_addr {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.recoverERC20 = async (erc20_addr, to_addr, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.recoverERC20(erc20_addr, to_addr).send(txParams);
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
   * @returns BigNumber
   **/
      this.lastPauseTime = async () => {
        return await this.contract.lastPauseTime().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
    this.selfDestruct = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.selfDestruct().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
      this.SELFDESTRUCT_DELAY = async () => {
        return await this.contract.SELFDESTRUCT_DELAY().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter TRX amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
    this.arbSynthRate = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.arbSynthRate().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
      this.selfDestructInitiated = async () => {
        return await this.contract.selfDestructInitiated().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param _uniswapAddress {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.setUniswapExchange = async (_uniswapAddress, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setUniswapExchange(_uniswapAddress).send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
    this.initiateSelfDestruct = async (txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.initiateSelfDestruct().send(txParams);
      return { hash: txHash };
    };
  
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.synthetixProxy = async () => {
        return await this.contract.synthetixProxy().call({ _isConstant: true })
      };
    
  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
      this.selfDestructBeneficiary = async () => {
        return await this.contract.selfDestructBeneficiary().call({ _isConstant: true })
      };
    
  /**
   * Transaction (consumes gas, requires signer)
   * @param _address {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
    this.setSynthetix = async (_address, txParams) => {
      txParams = txParams || {};
      const txHash = await this.contract.setSynthetix(_address).send(txParams);
      return { hash: txHash };
    };
  ;
    }

    export default ArbRewarder;
  