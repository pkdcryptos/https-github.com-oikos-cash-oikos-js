require('@babel/register');

const repl = require('repl');

const { SynthetixJs } = require('./src/index.node');
const snxjs = new SynthetixJs({ networkId: 2 });
snxjs.contractSettings.tronWeb.setPrivateKey(process.env.PRIVATE_KEY);

// module.exports = snxjs;

console.log('SynthetixJs is available from the snx variable.');
console.log('Use the PRIVATE_KEY environment variable to set the private key.');
const context = repl.start('> ').context;
context.snx = snxjs;
context.b32 = snxjs.ethers.utils.formatBytes32String;
