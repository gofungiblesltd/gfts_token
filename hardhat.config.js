require('@nomiclabs/hardhat-waffle')
require('hardhat-deploy')
require('hardhat-deploy-ethers')

const accounts = {
  mnemonic: `${process.env.MNEMONIC}`,
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  paths: {
    artifacts: 'artifacts',
    cache: 'cache',
    deploy: 'deploy',
    deployments: 'deployments',
    imports: 'imports',
    sources: 'contracts',
    tests: 'test',
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com',
      accounts,
      chainId: 137,
      live: true,
      saveDeployments: true,
      gasPrice: 1000000000,
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts,
      chainId: 80001,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 3,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
      gasPrice: 8000000000,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 1,
      live: true,
      saveDeployments: true,
      tags: ['production'],
      gasMultiplier: 1.5,
      gasPrice: 39000000000,
      timeout: 60000,
    },
  },
  solidity: '0.8.10',
}
