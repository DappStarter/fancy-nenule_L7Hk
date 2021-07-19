require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture street crawl right pulse gown light army gas'; 
let testAccounts = [
"0x6e12ad1d08fe5c0da6782ec11ce6e349cf14670091c5d9e35117847928a239cd",
"0xa9c799412ae05b6d286459fceb207c3b958146594244cbf22c9ad0a0b65d5c51",
"0xa23092dbcf0a4692547013f19818bf31cd46e4801e727192fc47dccc5e703dee",
"0xc296f1009dab095394d265cdd4ca9057a0f508b5fd0ad2325e94f52b552e6e92",
"0x39dc6c8f0d1188a20b57369274af704cd213ed2d6262ed3b3ad455489fd940ac",
"0x4a303276aacb83634f3c8f4c3c94060c9b8a52c6469561a2d44df34cfc907afd",
"0x430188f82608c12967d56ec718d7625b1caaebccdcd2814f74de96e091d40b11",
"0x48ca6ba7277fca0190a59108fa5170f75c80e0b89d8a35ee0314aa3c5909beff",
"0x9bb2ae6236c0da2bf3f2f3d9358ffb04e892894618866bdf972d3aacd21ceb8d",
"0xd776e082712c7312a4f4f5863a98b270b964a5e938217542dfc1e72ac5f2cd3b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


