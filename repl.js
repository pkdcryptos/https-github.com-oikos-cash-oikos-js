require('@babel/register');
const BigNumber = require('bignumber.js');
const { guessNetworkId } = require('./src/network2id');

const repl = require('repl');

const { SynthetixJs } = require('./src/index.node');
const networkId = guessNetworkId();
// const networkId = network2id(process.env.TRON_NETWORK || 'shasta');
const snxjs = new SynthetixJs({ networkId });
// snxjs.contractSettings.tronWeb.setPrivateKey(process.env.PRIVATE_KEY);

const bn = o => BigNumber(o._hex).toString();

// module.exports = snxjs;

console.log({ networkId });
console.log('SynthetixJs is available from the snx variable. More utils: ctx');
console.log('Use the PRIVATE_KEY environment variable to set the private key.');
const context = repl.start('> ').context;
const ctx = {
  snx: snxjs,
  BigNumber,
  b32: snxjs.ethers.utils.formatBytes32String,
  bn,
  Tronweb: require('tronweb'),
  tronweb: snxjs.contractSettings.tronWeb,
};
Object.assign(context, ctx);
