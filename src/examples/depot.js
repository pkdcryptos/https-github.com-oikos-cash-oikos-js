import { SynthetixJs } from '../index.node';

const run = async () => {
  const snxjs = new SynthetixJs({ networkId: 2 });
  const Depot = snxjs.Depot;
  const depositEndIndex = await Depot.depositEndIndex();
  console.log(depositEndIndex);
  console.log(depositEndIndex.toString());
};

const start = async () => {
  try {
    await run();
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};
start();
