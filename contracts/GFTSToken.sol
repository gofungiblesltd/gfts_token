// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GFTSToken is ERC20 {
    constructor() ERC20("GoFungibles", "GFTS") {
        _mint(msg.sender, 1_000_000_000 * 10**decimals());
    }
}
