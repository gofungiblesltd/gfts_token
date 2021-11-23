module.exports = async function ({
  ethers,
  getNamedAccounts,
  deployments,
  hre,
}) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const initialSupply = '1000'

  await deploy('GFTSToken', {
    from: deployer,
    log: true,
    args: [initialSupply],
    skipIfAlreadyDeployed: true,
  })
}

module.exports.tags = ['GFTSToken']
