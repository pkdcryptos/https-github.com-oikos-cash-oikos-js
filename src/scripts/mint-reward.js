import { SynthetixJs } from '../index.node';

// shasta
const snx = new SynthetixJs({ networkId: 2 });

const run = async () => {
  const res = await snx.Synthetix.mint();
  console.log(res);
};

run().catch(console.error);
