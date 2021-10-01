require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift raise ranch color hunt person bridge tuna'; 
let testAccounts = [
"0xcafd8556e2e43e1134d23bb46a85c321e7a95578d4c337a7d687f5d732e947d4",
"0x381cc71b462ccf99822f1203a5c296ad22248731cd3901d64f4ec83fcb7794b9",
"0xc5e30cf76add12b4831efc957b9d6d4ffb4ee79d1687fbbacdeae5af338797ac",
"0x1e5f1466fcbfa88206a554e56a71a7abe114c123395cd9e17402c239e7585812",
"0xa47b9b98fa9a52bc3113698039c785617ce1af893ad59d93187311a301eb7104",
"0xb11c45eaa77187b70410f0ea1e3d53c3f1678b487291132914f2002b81158035",
"0x04a3cf613c35ac2d45dc0465651cac33f68fb119f4f7c76099aab50fc8c100e8",
"0xc4bac90031fa8130f343d17c19c9abd868aaac15f654b17ddec7026c6e95ef9c",
"0x95b1adeb47db35b312372ef79350b43ab7867b2f66b8c56b7b2b8a69e0280d3c",
"0x725237b0691d41d0c29d1e9e95db158a94813f111f29f88eb96e004f7a532367"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

