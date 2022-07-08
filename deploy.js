//synchronous [solidity]
const ethers = require("ethers");
const fs  = require("fs-extra");

async function main() {
    //compile them in our code
    //compile them seprately
    //http://127.0.0.1:7545 local network for developing 
    //Code To connect With ganache fake network use ether library  script connect to local block chain
    const provider = new ethers.providers.JsonRpcBatchProvider("http://127.0.0.1:7545");
    //Code To connect wallet and also with the block chain 
    const wallet = new ethers.Wallet("31bcd33cbf9353db096a76f8f6bb29dc8a0fa1a9bae0ec1f2b18d9f60737099a",provider);

    //order to deploy contract we need abi and binary code To read this files we need library fs-extra
    //code To read abi file
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi","utf8");
    //code To read binary file
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8");

    //Code To combine abi binary and wallet smart contract  given below
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
    console.log("Please Wait Smart Contract is Deploying on the Local Network");
    //Deploy Smart Contract Below
    const contract = await contractFactory.deploy();//Stop here Wait for Contract to deploy
    console.log(contract);

}
main()
.then(()=>{
    process.exit(0)
})
.catch((error)=>{
    console.error(error);
    process.exit(1);
});