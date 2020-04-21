export default networkName => {
  const map = {
    mainnet: 1,
    shasta: 2,
  };

  if (!(networkName in map)) {
    throw new Error(`unknown network ${networkName}`);
  }
  return map[networkName];
};
