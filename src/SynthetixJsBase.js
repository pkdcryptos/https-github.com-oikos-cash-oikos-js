import * as ethers from 'ethers';
import contracts from './contracts';
import util from './util/index';
import ContractSettings from './contractSettings';
import PrivateKey from '../lib/signers/privateKeySigner';

class SynthetixJsBase {
  constructor(contractOpts, signers = { PrivateKey }) {
    // prevent warnings about "Multiple definitions" for transfer* function from Synth contract
    ethers.errors.setLogLevel('error');
    const contractSettings = new ContractSettings(contractOpts);
    this.signers = signers;
    this.contractSettings = contractSettings;
    const { network } = contractSettings;
    this.network = network;
    const contractForEnv = contracts[network];
    Object.keys(contractForEnv).forEach(name => {
      // for each synthetix symbol (sUSD, sBTC, sETH, etc.)
      // one contract per symbol
      const Contract = contractForEnv[name];
      this[name] = new Contract(contractSettings);
    });
    this.util = new util(contractSettings);
    this.utils = this.util;
    this.ethers = ethers;
    this.SUPPORTED_NETWORKS = ContractSettings.SUPPORTED_NETWORKS;
  }
}

export default SynthetixJsBase;
