import { providers, errors, Signer } from 'ethers';
import base58check from 'bs58check';

// import WalletConnectProvider from '@walletconnect/web3-provider';

const { BaseProvider } = providers;

// converts from ethereum style hex address (e.g. 0xdeadbeef to Tron sylte base58 address)
const t = hexStr => {
  // remove leading 0x41 (tronWeb prefixes hex address with 41)
  const str = hexStr.replace(/^0x/, '');
  // base58 check encode
  return base58check.encode(Buffer.from(str, 'hex'));
};

class TronWebSigner extends Signer {
  constructor(provider, tronWeb, addressOrIndex) {
    super();
    // debugging... remove below line in prod (Error.stackTraceLimit = ...)
    // Error.stackTraceLimit = 50;
    this.addressOrIndex = addressOrIndex;
    this.provider = provider;
    this.tronWeb = tronWeb;
  }

  async getAddress() {
    // TODO
    // return this.tronWeb.defaultAddress.hex;
    return this.addressOrIndex;
  }

  async signMessage(message) {
    // TODO
  }
  async sendTransaction(transaction) {
    // TODO
  }
}

export default class TronProvider extends BaseProvider {
  constructor(tronWeb) {
    super();
    this.tronWeb = tronWeb;
  }

  /*
  getSigner(address) {
    // return new JsonRpcSigner(_constructorGuard, this, addressOrIndex);
    throw new Error('not implemented')
  }
  */

  /**
   * TODO! @kev
   *
   * Response is supposed to look like this:
   *
   * {
   *  // Only available for mined transactions
   *  blockHash: "0x7f20ef60e9f91896b7ebb0962a18b8defb5e9074e62e1b6cde992648fe78794b",
   *  blockNumber: 3346463,
   *  timestamp: 1489440489,
   *
   *  // Exactly one of these will be present (send vs. deploy contract)
   *  // They will always be a properly formatted checksum address
   *  creates: null,
   *  to: "0xc149Be1bcDFa69a94384b46A1F91350E5f81c1AB",
   *
   *  // The transaction hash
   *  hash: "0xf517872f3c466c2e1520e35ad943d833fdca5a6739cfea9e686c4c1b3ab1022e",
   *
   *  // See above "Transaction Requests" for details
   *  data: "0x",
   *  from: "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",
   *  gasLimit: utils.bigNumberify("90000"),
   *  gasPrice: utils.bigNumberify("21488430592"),
   *  nonce: 0,
   *  value: utils.parseEther(1.0017071732629267),
   *
   *  // The chain ID; 0 indicates replay-attack vulnerable
   *  // (eg. 1 = Homestead mainnet, 3 = Ropsten testnet)
   *  chainId: 1,
   *
   *  // The signature of the transaction (TestRPC may fail to include these)
   *  r: "0x5b13ef45ce3faf69d1f40f9d15b0070cc9e2c92f3df79ad46d5b3226d7f3d1e8",
   *  s: "0x535236e497c59e3fba93b78e124305c7c9b20db0f8531b015066725e4bb31de6",
   *  v: 37,
   *
   *  // The raw transaction (TestRPC may be missing this)
   *  raw: "0xf87083154262850500cf6e0083015f9094c149be1bcdfa69a94384b46a1f913" +
   *         "50e5f81c1ab880de6c75de74c236c8025a05b13ef45ce3faf69d1f40f9d15b0" +
   *         "070cc9e2c92f3df79ad46d5b3226d7f3d1e8a0535236e497c59e3fba93b78e1" +
   *         "24305c7c9b20db0f8531b015066725e4bb31de6"
   */
  async getTransaction(txHash) {
    // TODO
    const res = await this.tronWeb.trx.getTransaction(txHash);
    const value = res.raw_data.contract[0].parameter.value;
    const { amount, owner_address, to_address, data } = value;
    return {
      ...res,
      data,
      to: to_address,
      value: amount,
      from: owner_address,
      blockHash: res.raw_data.ref_block_hash,
      hash: `0x${res.txID}`,
      raw: res.raw_data_hex,
    };
  }

  async send(method, params) {
    console.log(method);
    console.log(params);
    return;
  }

  async resolveName(addressOrName) {
    // TODO: ethereum has a name service contract (ENS), maybe Tron has a
    // similar service but for now we just disable that functionality cause
    // it's less trouble
    return addressOrName;
  }

  async perform(method, params) {
    console.log('perform method', method);
    console.log('perform params', params);
    switch (method) {
      case 'getBlockNumber': {
        return this.send('eth_blockNumber', []);
      }

      case 'getGasPrice': {
        return this.send('eth_gasPrice', []);
      }

      case 'getBalance': {
        const { address } = params;
        return this.tronWeb.trx.getBalance(address);
      }

      case 'getTransactionCount': {
        /*
        return this.send('eth_getTransactionCount', [
          getLowerCase(params.address),
          params.blockTag,
        ]);
				*/
        throw new Error(`${method} not implemented`);
      }

      // Returns code at a given address.
      case 'getCode': {
        // const { address, blockTag } = params
        const address = t(params.address);
        // TODO! I believe this function is mainly called to check if a contract exists

        try {
          const contract = await this.tronWeb.trx.getContract(address);
          return `0x${contract.bytecode}`;
        } catch (err) {
          console.warn(err);
          return '0x';
        }
      }

      case 'getStorageAt': {
        /*
        return this.send('eth_getStorageAt', [
          getLowerCase(params.address),
          params.position,
          params.blockTag,
        ]);
				*/
        throw new Error(`${method} not implemented`);
      }

      case 'sendTransaction': {
        /*
        return this.send('eth_sendRawTransaction', [params.signedTransaction]).catch(error => {
          if (error.responseText) {
            // "insufficient funds for gas * price + value"
            if (error.responseText.indexOf('insufficient funds') > 0) {
              errors.throwError('insufficient funds', errors.INSUFFICIENT_FUNDS, {});
            }
            // "nonce too low"
            if (error.responseText.indexOf('nonce too low') > 0) {
              errors.throwError('nonce has already been used', errors.NONCE_EXPIRED, {});
            }
            // "replacement transaction underpriced"
            if (error.responseText.indexOf('replacement transaction underpriced') > 0) {
              errors.throwError('replacement fee too low', errors.REPLACEMENT_UNDERPRICED, {});
            }
          }
          throw error;
        });
				*/
        throw new Error(`${method} not implemented`);
      }
      case 'getBlock': {
        /*
        if (params.blockTag) {
          return this.send('eth_getBlockByNumber', [params.blockTag, !!params.includeTransactions]);
        } else if (params.blockHash) {
          return this.send('eth_getBlockByHash', [params.blockHash, !!params.includeTransactions]);
        }
        return Promise.reject(new Error('invalid block tag or block hash'));
				*/
        throw new Error(`${method} not implemented`);
      }
      case 'getTransaction': {
        /*
        return this.send('eth_getTransactionByHash', [params.transactionHash]);
				*/
        throw new Error(`${method} not implemented`);
      }

      case 'getTransactionReceipt': {
        /*
        return this.send('eth_getTransactionReceipt', [params.transactionHash]);
				*/
        throw new Error(`${method} not implemented`);
      }

      case 'call': {
        /*
        console.log('call');
        console.log(params);
        return this.send('eth_call', [
          hexlifyTransaction(params.transaction, { from: true }),
          params.blockTag,
        ]);
				*/
        throw new Error(`${method} not implemented`);
      }

      case 'estimateGas': {
        /*
        return this.send('eth_estimateGas', [
          hexlifyTransaction(params.transaction, { from: true }),
        ]);
				*/
        throw new Error(`${method} not implemented`);
      }

      case 'getLogs': {
        /*
        if (params.filter && params.filter.address != null) {
          params.filter.address = getLowerCase(params.filter.address);
        }
        return this.send('eth_getLogs', [params.filter]);
				*/
        throw new Error(`${method} not implemented`);
      }

      default: {
        break;
      }
    }

    errors.throwError(method + ' not implemented', errors.NOT_IMPLEMENTED, { operation: method });
    return null;
  }

  getSigner(addressOrIndex) {
    return new TronWebSigner(this, this.tronWeb, addressOrIndex);
  }
}
