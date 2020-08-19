import addresses from '../lib/addresses';
import ABIS from '../lib/abis';
import synths from '../lib/synths';
import TronWeb from 'tronweb';
import TronProvider from '../lib/TronProvider';

const network2providerUrl = {
  mainnet: 'https://api.tronstack.io',
  shasta: 'https://api.shasta.trongrid.io',
};

// kev: for some reason tronWeb throws random errors when private key not set,
// even when calling pure functions :/
const zeroPrivateKey = '410000000000000000000000000000000000000000';
const createTronWeb = (providerUrl, privateKey = zeroPrivateKey) => {
  const HttpProvider = TronWeb.providers.HttpProvider;
  const fullNode = new HttpProvider(providerUrl);
  const solidityNode = new HttpProvider(providerUrl);
  const eventServer = new HttpProvider(providerUrl);
  const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
  return tronWeb;
};

const SUPPORTED_NETWORKS = {
  1: 'mainnet',
  2: 'shasta',
};

const getDefaultProvider = tronWeb => {
  return new TronProvider(tronWeb);
};

class ContractSettings {
  /**
   * @constructor
   * @param provider {Object} - ethers.js provider object - default ethers.providers.getDefaultProvider()
   * @param tronWeb {Object} - tronWeb object
   * @param signer {Object} - one of 4 provided signers or a custom ethers.js compatible signer. Use Metamask for Dapp browser support
   * @param networkId {Number} - default 1 - mainnet, also supports 42 (Kovan)
   */
  constructor(contractSettings) {
    contractSettings = contractSettings || {};
    const { provider, tronWeb, signer, networkId } = contractSettings;
    this.networkId = networkId || 1;
    const network = SUPPORTED_NETWORKS[Number(this.networkId)];
    this.network = network;

    const providerUrl = network2providerUrl[network];
    this.tronWeb = tronWeb || createTronWeb(providerUrl);
    this.provider = provider || getDefaultProvider(this.tronWeb);

    this.signer = signer;
    this.addressList = addresses[this.networkId];
    this.synths = synths[this.networkId];
    this.ABIS = ABIS[this.network];
  }
}

ContractSettings.SUPPORTED_NETWORKS = SUPPORTED_NETWORKS;

export default ContractSettings;
