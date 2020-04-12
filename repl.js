require('@babel/register');
const BigNumber = require('BigNumber.js');

const repl = require('repl');

const { SynthetixJs } = require('./src/index.node');
const snxjs = new SynthetixJs({ networkId: 2 });
snxjs.contractSettings.tronWeb.setPrivateKey(process.env.PRIVATE_KEY);

const bn = o => BigNumber(o._hex).toString();

// module.exports = snxjs;

console.log('SynthetixJs is available from the snx variable. More utils: ctx');
console.log('Use the PRIVATE_KEY environment variable to set the private key.');
const context = repl.start('> ').context;
const ctx = {
  snx: snxjs,
  BigNumber,
  b32: snxjs.ethers.utils.formatBytes32String,
  bn,
};
Object.assign(context, ctx);
