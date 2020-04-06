const Web3 = require('web3');

const abi = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: 'account',
      type: 'address',
    },
    {
      indexed: false,
      name: 'fromCurrencyKey',
      type: 'bytes32',
    },
    {
      indexed: false,
      name: 'fromAmount',
      type: 'uint256',
    },
    {
      indexed: false,
      name: 'toCurrencyKey',
      type: 'bytes32',
    },
    {
      indexed: false,
      name: 'toAmount',
      type: 'uint256',
    },
    {
      indexed: false,
      name: 'toAddress',
      type: 'address',
    },
  ],
  name: 'SynthExchange',
  type: 'event',
};

const topics = [
  '65b6972c94204d84cffd3a95615743e31270f04fdf251f3dccc705cfbad44776',
  '000000000000000000000000a8a07f09def5e6a4462df90068c11abf6224e865',
];
const eventHex =
  '0x734254430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000038d7ea4c6800073555344000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a5c8e2d3aa50000000000000000000000000000a8a07f09def5e6a4462df90068c11abf6224e865';

const inputs = abi.inputs;
const web3 = new Web3();
console.log(web3.eth.abi.decodeLog(inputs, eventHex, topics));
