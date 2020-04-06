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
  // const contract = new TronWeb.Contract(tronWeb, abi, addr);

  const SYNTHEXCHANGE_SIG = 'SynthExchange(address,bytes32,uint256,bytes32,uint256,address)';
  const topic = tronWeb.sha3(SYNTHEXCHANGE_SIG);

  const events = await tronWeb.getEventResult(addr, {
    eventName: 'SynthExchange',
  });
  console.log(events);
};
start().catch(console.error);
