import { ethers } from "ethers";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";

async function hasSigners(): Promise<boolean> {
    //@ts-ignore
    const metamask = window.ethereum;
    const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
    return signers.length > 0;
}
 
async function requestAccess(): Promise<boolean> {
    //@ts-ignore
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
    return result && result.length > 0;
}

async function getContract() {
  const address = process.env.CONTRACT_ADDRESS;

    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum).getSigner()
    const contract = new ethers.Contract(
        address,
        Counter.abi,
        provider
    );

    // @ts-ignore
    const root = document.createElement('div');
    async function setCount(count?) {
        root.innerHTML = count || await contract.getCounter();
    }
    setCount();

    const btn = document.createElement("button");
    btn.innerText = "increment";

    btn.onclick = async function() {
        await contract.count();
    }
    contract.on(contract.filters.CounterInc(), function(count) {
        setCount(count)
    });

    document.body.appendChild(root)
    document.body.appendChild(btn)
}

getContract();
