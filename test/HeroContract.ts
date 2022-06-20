import '@nomiclabs/hardhat-ethers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('HeroContract', function() {
     async function createHero()  {
        const address = await ethers.getContractFactory('Hero')
        const contract = await address.deploy();
        await contract.deployed();

        return contract;
    }
    let hero;

    before(async function() {
        hero = await createHero();

    });
    it('should get zero hero arr', async function () {
        const arr = await hero.getHeroes();
        expect(arr.length).to.equal(0);
        
    })
    it('should ask for money', async function() {
        let e;
        try {
            
            await hero.createHero(0,{value: ethers.utils.parseEther('0.04999999')});  
        } catch (error) {
            e = error;
        }
        expect(e.message.includes('Hero creation costs 0.05 ether')).to.be.equal(true);
    })
});
