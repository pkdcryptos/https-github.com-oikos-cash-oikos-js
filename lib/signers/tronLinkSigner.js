import TronProvider from '../TronProvider';

const TronLinkSigner = () => {
  // const provider = new WalletConnectProvider({});
  const { tronWeb } = window;
  const wrappedProvider = new TronProvider(tronWeb);
  const signer = wrappedProvider.getSigner();
  signer.getNextAddresses = async () => {
    const addr = tronWeb.defaultAddress.base58;
    if (!addr) return [];
    // return [`0x${addr}`];
    return [addr];
  };
  return signer;
};

export default TronLinkSigner;
