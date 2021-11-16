# GoFungibles ERC-20 token

[![](https://img.shields.io/badge/build%20with-openzeppelin-blue.svg?style=flat-square)](https://docs.openzeppelin.com/contracts/4.x/)
![Solidity](https://img.shields.io/badge/solidity-v0.8.11-green)

Fungible ERC-20 token for GoFungibles NFT marketplace


## Token specification

* Network: **Polygon Mainnet #137 (MATIC)**
* Standard: **ERC-20**
* Name: **GoFungibles**
* Symbol: **GFTS**
* Supply: **1,000,000,000** Fixed.
* Decimals: **18**
* Mintable: **No**
* Burnable: **No**
* Pausable: **No**
* Upgradeable: **No**

## Install dependencies

This project is built on Hardhat framework and well-known OpenZeppelin library.
To install them and all required tooling run:

```shell
yarn
```

## Compile, test, deploy and verify

Try running some of the following tasks:

```shell
yarn hardhat compile
yarn test
yarn hardhat deploy --network matic
yarn hardhat etherscan-verify --network mumbai --api-key $ETHERSCAN_API_KEY
```

See `yarn run` for other useful actions

## LICENSE

```
GoFungibles NFT marketplace
Copyright (C) 2021 GoFungibles

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
