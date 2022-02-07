import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

import { expect } from "chai";

describe("base contract", function() {
    it("should say hi", async function() {
        const BaseContract = await ethers.getContractFactory("BaseContract");
        const base = await BaseContract.deploy();
        await base.deployed();
    
        expect(await base.hello()).to.equal("hello papa");
    });
});

