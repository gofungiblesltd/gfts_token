// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GFTSToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("GFTS Token", "GFTS") {
        _mint(msg.sender, initialSupply);
    }
}
