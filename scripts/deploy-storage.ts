import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const Storage = await ethers.getContractFactory("Storage");
    const address = await Storage.deploy();
    await address.deployed();

    return address;

}

