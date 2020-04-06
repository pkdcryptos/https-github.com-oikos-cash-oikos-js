import { SynthetixJs } from '../index.node';

const start = async () => {
  const snxjs = new SynthetixJs({ networkId: 2 });
  // const { synths } = snxjs.contractSettings;
  // const supply = await snxjs['sUSD'].totalSupply();
  const { Synthetix, utils } = snxjs;
  // const amount = utils.parseEther('100000000000');
  const amount = utils.parseTron('100');
  console.log(amount);
  const transaction = await Synthetix.issueSynths(amount);
  console.log(transaction);
};
start().catch(console.error);
