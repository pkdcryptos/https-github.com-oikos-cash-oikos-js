import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'SynthetixState';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    test(
      `${network} Should return target issuance ratio (0.2)`,
      async () => {
        const issuanceRatio = await snxjs[contract].issuanceRatio();
        // return expect(snxjs.utils.formatEther(issuanceRatio)).toEqual('0.133333');
        // @TODO @kev why eth version is 0.133333 ?
        return expect(snxjs.utils.formatEther(issuanceRatio)).toEqual('0.2');
      },
      15000
    );
  });
});
