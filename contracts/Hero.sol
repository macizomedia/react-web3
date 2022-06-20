pragma solidity^0.8.0;

contract Hero {
    enum Status {
        Alive,
        Dead
    }
    enum Class {
        Warrior,
        Mage,
        Archer
    }
    /* Storing heroes in 256bits */
    mapping (address => uint[]) adressToHeroes;

    function generateRandom() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }

    function getHeroes() public view returns (uint[] memory) {
        return adressToHeroes[msg.sender];
    }

    function createHero(Class class) public payable {
        require(msg.value >= 0.05 ether, "Hero creation costs 0.05 ether");
       
    }
}