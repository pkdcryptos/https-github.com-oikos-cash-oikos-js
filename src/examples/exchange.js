import { SynthetixJs } from '../index.node';
import addresses from '../../lib/addresses';
import abi from '../../lib/abis/shasta/Synthetix';
import TronWeb from 'tronweb';

const getUtf8Bytes = SynthetixJs.utils.formatBytes32String;
const utils = SynthetixJs.utils;

const start = async () => {
  const snxjs = new SynthetixJs({ networkId: 2 });
  const tronWeb = snxjs.contractSettings.tronWeb;
  tronWeb.setPrivateKey(process.env.PRIVATE_KEY);
  // const { Synthetix } = snxjs;

  const addr = addresses['2'].ProxySynthetix;
  const contract = new TronWeb.Contract(tronWeb, abi, addr);

  const listenEvents = async () => {
    console.log(addresses['2'].ProxySynthetix);
    contract.exchange().watch((err, event) => {
      if (err) {
        return console.error('Error with watch:', err);
      }
      if (event) {
        console.log(event);
      }
    });
  };

  // does not work
  // listenEvents();

  const sourceCurrency = 'sUSD';
  const fromAmount = '0.001';
  const destCurrency = 'sBTC';

  const args = [
    getUtf8Bytes(sourceCurrency),
    utils.parseEther(fromAmount),
    getUtf8Bytes(destCurrency),
  ];
  // console.log(args);

  const SYNTHEXCHANGE_SIG = 'SynthExchange(address,bytes32,uint256,bytes32,uint256,address)';

  console.log('synthexchange events topic:');
  console.log(tronWeb.sha3(SYNTHEXCHANGE_SIG));

  const txHash = await contract.exchange(...args).send();

  console.log(txHash);
  let txInfo;
  /* eslint-disable */
  while (true) {
    // wait for tx to be confirmed
    txInfo = await tronWeb.trx.getTransactionInfo(txHash);
    if (Object.keys(txInfo).length) {
      break;
    }
  }
  console.log(txInfo);
  console.log('logs: ');
  console.log(JSON.stringify(txInfo.log, null, 2));

  /*
  const logs = txInfo.log.map(log => {
    return {
      ...log,
      topics: log.topics.map(hex => Buffer.from(hex, 'hex').toString()),
    };
  });
  console.log(JSON.stringify(logs, null, 2));
  console.log(logs)
  */

  /*
  const sourceCurrency = 'sUSD';
  const fromAmount = '0.01';
  const destCurrency = 'sBTC';

  const transaction = await Synthetix.exchange(
    getUtf8Bytes(sourceCurrency),
    utils.parseEther(fromAmount),
    getUtf8Bytes(destCurrency)
  );
  console.log(transaction);
  */
};
start().catch(console.error);
