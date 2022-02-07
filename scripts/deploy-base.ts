import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const BaseContract = await ethers.getContractFactory("BaseContract");
    const base = await BaseContract.deploy();
    await base.deployed();

    return base;

}
// @ts-ignore
async function sayHello(base) {
    console.log("say hello", await base.hello());
}

deploy().then(sayHello);

