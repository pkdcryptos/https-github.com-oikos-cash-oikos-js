// extends tronweb contracts to support custom signers
//

// TODO @kev: wrap .send to support custom signer
// TODO @kev: fix .call so that it always passes _isContant?

import TronWeb from 'tronweb';

class Contract extends TronWeb.Contract {}

// TODO thats gonna be messy cause we can't access Method class from
// tronweb.... instead fork tronweb to tronweb-extended and add support
// for signers, fix isConstant bug, better error handling, etc.

export default (abi, address, tronWeb, signer) => {
  const contract = new Contract(tronWeb, abi, address);
  return contract;
};
