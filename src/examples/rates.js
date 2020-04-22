import { SynthetixJs } from '../index.node';
import { guessNetworkId } from '../network2id';

const run = async () => {
  const snx = new SynthetixJs({ networkId: guessNetworkId() });
  const { parseBytes32String, formatEther } = snx.ethers.utils;

  const currKeys = await snx.Synthetix.availableCurrencyKeys();

  // TODO: XDR handled specially...
  const rates = await Promise.all(currKeys.map(k => snx.ExchangeRates.rateForCurrency(k)));
  const times = await Promise.all(currKeys.map(k => snx.ExchangeRates.lastRateUpdateTimes(k)));

  let rateStalePeriod = await snx.ExchangeRates.rateStalePeriod();
  rateStalePeriod = parseInt(rateStalePeriod.toString(), 10);

  const now = Date.now() / 1000;
  currKeys.forEach((currKey, idx) => {
    let rate = rates[idx];
    rate = formatEther(rate);
    let time = times[idx];
    time = parseInt(time.toString(), 10);
    const delta = now - time;
    const hours = (delta / (60 * 60)).toFixed(2);
    const isStale = delta > rateStalePeriod;
    console.log(
      `${parseBytes32String(currKey)} = ${rate}$, updated ${hours} hours ago ${
        isStale ? 'IS STALE' : ''
      }`
    );
  });
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
