import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/iKI5ZwnqFHcaaolhOan4zu4sPEhxgZTf`,
      accounts: ['e1f51945e856457806e728fae822a51b80b337ae9988fb418d39abcd0b370f25'],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"]
    }
  }
};
