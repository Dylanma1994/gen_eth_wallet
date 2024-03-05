const bitcoin = require('bitcoinjs-lib');

function generateBTCTaprootWallet(number) {
    for(let i = 0; i < number; i ++) {
        const keyPair = bitcoin.ECPair.makeRandom({ network: bitcoin.networks.testnet });
        const { address } = bitcoin.payments.p2tr({ pubkey: keyPair.publicKey });
        console.log('BTC Taproot Wallet Address:', address);
    }
}

export default generateBTCTaprootWallet
