import { utils } from 'ethers';

import SynthetixJsBase from './SynthetixJsBase';
import PrivateKey from '../lib/signers/privateKeySigner';

const signers = {
  PrivateKey,
};

export class SynthetixJs extends SynthetixJsBase {
  /**
   * Creates instances of Synthetix contracts based on ContractSettings.
   * Usage example:
   * const {SynthetixJs} = require('SynthetixJs');
   * const snxjs = new SynthetixJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await snxjs.Synthetix.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    super(contractSettings, signers);

    // use diff env variables for mainnet and shasta
    let privKey;
    const isMainnet = contractSettings.networkId === 1;
    if (isMainnet) {
      privKey = process.env.DEPLOY_PRIVATE_KEY_MAINNET;
    } else {
      privKey = process.env.PRIVATE_KEY;
    }
    if (privKey) {
      this.contractSettings.tronWeb.setPrivateKey(privKey);
    }
  }
}

SynthetixJs.signers = signers;
SynthetixJs.utils = utils; // shortcut to ethers utils without having to create instance
