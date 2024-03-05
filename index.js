const generateEth = require('./src/ethWallet')
const generateTaproot = require('./src/tapRootWallet')
const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    generateEth,
    generateTaproot
};