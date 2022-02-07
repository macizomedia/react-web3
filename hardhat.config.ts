import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-ethers";
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
      url: `https://eth-rinkeby.alchemyapi.io/v2/KKVBZ83E76RHHIZRR238CNCHWNGPACVWY8`,
      accounts: ["59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"]
    },
  }
};
