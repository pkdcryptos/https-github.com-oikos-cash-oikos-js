import { SynthetixJs } from '../index.node';
import { guessNetworkId } from '../network2id';

const snx = new SynthetixJs({ networkId: guessNetworkId() });

const run = async () => {
  const res = await snx.Synthetix.mint();
  console.log(res);
};

run().catch(console.error);
