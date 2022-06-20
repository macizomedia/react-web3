import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

import { expect } from "chai";

describe("StorageContract", function() {
     async function createStorage()  {
        const address = await ethers.getContractFactory('Storage')
        const contract = await address.deploy();
        await contract.deployed();

        return contract;
    }
    let storage;

    before(async function() {
        storage = await createStorage();

    });
    it("Should Save", async function() {
        await storage.set(32)
        const store = await storage.get()
        expect(store).to.equal(32);
    });
});

