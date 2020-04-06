import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe(`misc contract tests`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
      snxjs.contractSettings.tronWeb.setPrivateKey(process.env.PRIVATE_KEY);
    });

    test.skip(`.mint() returns { hash: '<txhash>' }`, async () => {
      const res = await snxjs.Synthetix.setExchangeEnabled(true);
      expect(res).toMatchObject({ hash: /[a-zA-Z0-9]+/ });
    });

    // too slow
    test.skip(
      `utils.waitForTransaction`,
      async () => {
        const res = await snxjs.Synthetix.setExchangeEnabled(true);
        const status = await snxjs.utils.waitForTransaction(res.hash);
        console.log(status);
        expect(status).toEqual(true);
      },
      50000
    );

    test(
      `provider.getTransaction (contract)`,
      async () => {
        const { provider } = snxjs.contractSettings;
        const tx = await provider.getTransaction(
          '011aaa6264d033dc38e80d1db3287c21495e79d06a7d2c0c045a36032cbb39c1'
        );
        expect(tx).toMatchObject({
          hash: '0x011aaa6264d033dc38e80d1db3287c21495e79d06a7d2c0c045a36032cbb39c1',
          from: '41a8a07f09def5e6a4462df90068c11abf6224e865',
          data: '945240960000000000000000000000000000000000000000000000000000000000000001',
        });
      },
      50000
    );

    test(
      `provider.getTransaction (account to account)`,
      async () => {
        const { provider } = snxjs.contractSettings;
        const tx = await provider.getTransaction(
          '764af4ea9bfb40b3b1877d4b1758e31417f32cbd8bc94208df00547b55374cb3'
        );
        expect(tx).toMatchObject({
          hash: '0x764af4ea9bfb40b3b1877d4b1758e31417f32cbd8bc94208df00547b55374cb3',
          data: undefined,
          to: '4159105b3cde1a5d68eaf466523837a72cca061a7b',
          value: 1000000,
          from: '41fa873de628de9f464b75b3213a7f058a2a34c7db',
        });
      },
      50000
    );

    // too slow, skip
    test.skip(
      `.mint({ shouldPollResponse: true })`,
      async () => {
        const res = await snxjs.Synthetix.setExchangeEnabled(true, { shouldPollResponse: true });

        expect(res).toMatchObject([]);
      },
      20000
    );
  });
});

describe(`provider.getBalance`, () => {
  let snxjs;
  beforeAll(() => {
    snxjs = new SynthetixJs({ networkId: 2 });
    snxjs.contractSettings.tronWeb.setPrivateKey(process.env.PRIVATE_KEY);
  });

  test(
    `provider.getTransaction (account to account)`,
    async () => {
      const address = 'TRLpnm6Uz9s2Fcy3Q235k3SiAEBXGJCNq2';
      const { provider } = snxjs.contractSettings;

      const res = await provider.getBalance(address);
      console.log(res);
      console.log(res.toString());
    },
    50000
  );
});
