import { SynthetixJs } from '../index.node';
import web3 from 'web3'
import tronWeb from 'tronweb';

const snx = new SynthetixJs({ networkId: 1 });
const args = process.argv.slice(2);
const bank = "TDjV35ZwRh1HdaVmEk32xazjSBpg92iSAF";

const recoverFunds = async (address, qty) => {
   //await snx.SynthetixEscrow.purgeAccount(address)
   const timestamp = Math.round(new Date() / 1000)+10; 
   console.log(await snx.SynthetixEscrow.appendVestingEntry(bank,  `${timestamp}`, qty))
}

const txUrl = hash => `https://tronscan.io/#/transaction/${hash}`

const ratesToVestingMonths = {
  "5": 3,
  "10": 6,
  "15": 12,
  "20": 18,
  "30": 24
}
const startDate = 1589990280;
const oneMonth = 60 * 60 * 24 * 30;

const periodLength = 3 //months
const periodLengthSeconds = 3 * oneMonth

const addVestingEntries = async (address, totalOKSAmount, vestingMonths) => {
  console.log({ address, totalOKSAmount, vestingMonths })
  const numPeriods = vestingMonths / periodLength
  const periods = [...Array(numPeriods).keys()]
  console.log({ periods })
  const partialOKSAmount = totalOKSAmount / numPeriods

  await snx.SynthetixEscrow.purgeAccount(address)

  for (const n of periods) {
    const vestDateEnd = startDate + (periodLengthSeconds * (n + 1))
    const partialOKSAmountWei = web3.utils.toWei(`${partialOKSAmount}`)

    const receipt = await snx.SynthetixEscrow.appendVestingEntry(
      address,
      `${vestDateEnd}`,
      partialOKSAmountWei,
      { shouldPollResponse: true }
    );
    console.log(txUrl(receipt))
    console.log(`Appended vesting entry (${address}, ${vestDateEnd} aka ${new Date(vestDateEnd * 1000)}, ${partialOKSAmountWei})`)
  }
}

const getTotalOKSAmountAndVestingMonths = (usdAmount, discountRate) => {
  const OKSPrice = 0.025 // $/OKS
  const vestingMonths = ratesToVestingMonths[`${discountRate * 100}`]
  const discountedOKSPrice = OKSPrice - (OKSPrice * discountRate)
  const totalOKSAmount = usdAmount / discountedOKSPrice
  return { totalOKSAmount, vestingMonths }
}

const run = async () => {
  const address = process.argv[2]
  const usdAmount = parseInt(process.argv[3], 10)
  const discountRate = parseInt(process.argv[4], 10) / 100
  const { totalOKSAmount, vestingMonths } = getTotalOKSAmountAndVestingMonths(usdAmount, discountRate)
  try {
    await addVestingEntries(address, totalOKSAmount, vestingMonths)
  } catch (err) {
    if (err.error) {
      const receipt = err
      console.log(txUrl(receipt.transaction.txID))
      console.log(receipt.error)
      process.exit(1)
    }
    throw err
  }

};

if (args[0] === "recover" && tronWeb.isAddress(args[1]) && args[2].length > 0) {
  recoverFunds(args[1],args[2]).catch(console.error)
} else {
  run().catch(console.error)
}
  
