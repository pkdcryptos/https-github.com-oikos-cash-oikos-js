import { SynthetixJs } from '../index.node';

const synthInfo = async function() {
  const snxjs = new SynthetixJs({ networkId: 2 });
  const { synths } = snxjs.contractSettings;
  const supply = await snxjs['sUSD'].totalSupply();
  console.log(supply.toString());
};

const start = async () => {
  try {
    await synthInfo();
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};
start();
