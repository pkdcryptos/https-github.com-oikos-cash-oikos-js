import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import { getDefaultProvider } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'SynthetixEscrow';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    test(
      'Should get 0 balance in escrow for unknown hex account',
      async () => {
        /*
        const signer = new SynthetixJs.signers.PrivateKey(
          getDefaultProvider(network === 'mainnet' ? undefined : network),
          networkId,
          '0x0123456789012345678901234567890123456789012345678901234567890123'
        );
        const balance = await snxjs[contract].balanceOf(signer.getAddress());
        */
        // TODO @kev use .provider instead of .tronWeb ?
        const tronWeb = snxjs[contract].contractSettings.tronWeb;
        const address = tronWeb.defaultAddress.hex;
        const balance = await snxjs[contract].balanceOf(address);
        await expect(balance.toString()).toEqual('0');
      },
      15000
    );

    test(
      'Should get 0 balance in escrow for unknown base58 account',
      async () => {
        const tronWeb = snxjs[contract].contractSettings.tronWeb;
        const address = tronWeb.defaultAddress.base58;
        const balance = await snxjs[contract].balanceOf(address);
        await expect(balance.toString()).toEqual('0');
      },
      15000
    );
  });
});
