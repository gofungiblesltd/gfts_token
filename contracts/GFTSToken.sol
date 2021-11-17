//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GFTSToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("GFTS Token", "GFTS") {
        _mint(msg.sender, initialSupply);
    }
}