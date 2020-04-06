import TronWeb from '../../../tronweb/dist/TronWeb.node.js';

import contractAddressesByNetwork from '../../lib/addresses';
import abi from '../../lib/abis/shasta/Synth';

const contractAddresses = contractAddressesByNetwork[2];

const createTronWeb = () => {
  const providerUrl = 'https://api.shasta.trongrid.io';
  const HttpProvider = TronWeb.providers.HttpProvider;
  const fullNode = new HttpProvider(providerUrl);
  const solidityNode = new HttpProvider(providerUrl);
  const eventServer = new HttpProvider(providerUrl);
  const privateKey = process.env.PRIVATE_KEY || '410000000000000000000000000000000000000000';
  const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
  return tronWeb;
};

const debugProxysUSD = async () => {
  const tronWeb = createTronWeb();

  // address of proxy
  const address = contractAddresses['ProxysUSD'];
  /*
  {
    // actual abi
    const contract = await tronWeb.contract().at(address);
    // console.log(await contract.useDELEGATECALL().call());
    console.log(await contract.target().call());
    // console.log(await contract.setUseDELEGATECALL(false).send());
  }
  */

  // proxy doesn't really have a proper abi, we use the abi of the contract
  // that is being proxied (Synth)
  const contract = tronWeb.contract(abi, address);
  // console.log(contract);
  try {
    // console.log(await contract.currencyKey().call());
    // TODO: this fails without _isConstant...
    const proxy = await contract.synthetixProxy().call({ _isConstant: true });
    // TODO: fork tronweb to get a better error message....
    console.log(proxy);
  } catch (err) {
    if (err.transaction) {
      console.log(err.transaction.transaction);
    }
    throw err;
    /*
    console.log(err.transaction.transaction.raw_data);
    console.log(err.transaction.transaction.raw_data.contract[0]);
    */
    // throw err;
  }
};

const run = async () => {
  await debugProxysUSD();
};

run().catch(console.error);
