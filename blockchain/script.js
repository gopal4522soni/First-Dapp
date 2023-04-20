const ContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "SetMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const ContractAddress="0xd251b816ee428a4e84e86cef188270c51e88d277";


let MoodContract
let signer

const provider = new ethers.providers.web3Providers(window.ethereum,'rinkeby')

provider.send('eth_requestAccounts',[]).then((Accounts) =>{
  provider.listAccounts().then((Accounts) =>{
    singer = provider.getsigner(Accounts[0])

    MoodContract = new ethers.Contract(ContractAddress,ContractABI,signer)
  })
}

 async function  getmood() {
   const mood = await MoodContract.getMood()
  console.log('mood is ${Mood}')

}
 async function  setmood() {
   const mood = document.querySelector('#Mood').value
   await MoodContract.setMood(mood)
  console.log('Setting mood successful')

}
