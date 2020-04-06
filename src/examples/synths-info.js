import { SynthetixJs } from '../index.node';

const synthInfo = async function() {
  // shasta network = 2
  // TODO: kev: pass network by name instead of ID
  const snxjs = new SynthetixJs({ networkId: 2 });
  const snxPrice = snxjs.utils.formatEther(await snxjs.utils.getSynthetixPrice());
  console.log('-------------------');
  console.log(`OKS price: ${snxPrice}`);
  console.log('-------------------');
  console.log('SYNTH SUPPLY');
  console.log('-------------------');
  const { synths } = snxjs.contractSettings;

  synths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await snxjs[name].totalSupply();
    const totalSupply = snxjs.utils.formatEther(totalAmount);
    console.log(`${desc} (${name}) ${sign}${totalSupply}`);
  });
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
