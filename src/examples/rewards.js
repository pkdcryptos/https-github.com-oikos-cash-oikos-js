import { SynthetixJs } from '../index.node';
import web3 from 'web3';
import tronWeb from 'tronweb';

const unipoolAddress = `415ea3ad9cfa4b303689cdd78e63cd2be9266d3173`
const snx = new SynthetixJs({ networkId: 1 });
const args = process.argv.slice(2);
const OKSrewardAmount = 100000;

const run = async (address, amount = 0) => {
  let txHash;
  if (amount) {
    const RewardsDistribution = await snx.contractSettings.tronWeb
      .contract()
      .at(snx.contractSettings.addressList.RewardsDistribution);
    txHash = await RewardsDistribution.addRewardDistribution(
      address,
      web3.utils.toWei(`${amount}`)
    ).send();
    console.log(`Transaction hash: ${txHash}`);
    return;
  }
  txHash = await snx.Synthetix.mint()
  console.log(`Mint(), txHash ${txHash}`)
  const unipool = snx.contractSettings.tronWeb.contract().at(unipoolAddress)
  txHash = await unipool.notifyRewardAmount(web3.utils.toWei(`${OKSrewardAmount}`))
  console.log(`notifyRewardAmount(), txHash ${txHash}`)
};

if (args[0] === '?' || args[0] === '--h' || args[0] === 'help') {
  console.log(
    `Usage 
     Add Rewards Distribution entry: rewards [address] [amount]
     Mint inflationary supply: rewards 
     `
  );
}

if (args.length === 2) {
  if (!tronWeb.isAddress(args[0])) {
    console.log(`invalid address`);
    process.exit();
  }
  if (isNaN(args[1]) || Number(args[1]) === 0) {
    console.log(`invalid amount`);
    process.exit();
  }
  run(args[0], args[1]).catch(console.error);
} else {
  run().catch(console.error);
}
