# OikosJs library

[![npm version](https://badge.fury.io/js/%40oikos%2Foikos-js.svg)](https://badge.fury.io/js/%40oikos%2Foikos-js)
[![Twitter Follow](https://img.shields.io/twitter/follow/oikos_cash.svg?label=oikos_cash&style=social)](https://twitter.com/oikos_cash)

The Oikos-JS library provides a simple pre-packaged API to communicate
with [Oikos](https://oikos.cash) on Tron. You can use it to contribute
to DeFi's growing synthetic asset ecosystem.

This is particularly useful for hackathon teams to quickly `npm install @oikos/oikos-js` and start building in just a few minutes.

## Install via npm

`npm install @oikos/oikos-js`

## Example for getting the total sUSD stablecoin in circulation

```javascript
const { SynthetixJs } = require('@oikos/oikos-js');
const snxjs = new SynthetixJs();
(async function() {
  const totalSUSD = await snxjs.sUSD.totalSupply();
  const totalSUSDSupply = snxjs.utils.formatEther(totalSUSD);
  console.log('sUSDTotalSupply', totalSUSDSupply);
})();
```

## Got any questions?

support@oikos.cash
