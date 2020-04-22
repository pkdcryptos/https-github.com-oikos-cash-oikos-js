const network2id = networkName => {
  const map = {
    mainnet: 1,
    shasta: 2,
  };

  if (!(networkName in map)) {
    throw new Error(`unknown network ${networkName}`);
  }
  return map[networkName];
};

export default network2id;

export const guessNetworkId = () => {
  const networkId = network2id(process.env.TRON_NETWORK || 'mainnet');
  return networkId;
};
