const { Wallet } = require('ethereumjs-wallet');

function generateETHTaprootWallet(number) {
    for (let i = 0; i < number; i ++) {
        const wallet = Wallet.generate();
        console.log('ETH Wallet Address:', wallet.getAddressString());
    }
}

export default generateETHTaprootWallet