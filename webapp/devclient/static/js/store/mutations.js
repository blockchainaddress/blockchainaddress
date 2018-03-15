/* store/mutations.js */

this.Mutations = (function() {
'use strict';

var state = {
  remain: 200 + Math.floor(bitcoin.crypto.util.randomBytes(12)[11]),
  //remain: 20 + Math.floor(Math.random() * 30),
  seedPoints: [],
  addressWifs: [
    //name: 'bitcoin(segwit)',
    //suffix: 'segwit',
    //address: 'address',
    //wif: 'wif',
  ],
  
  suffixes: {
    segwit: 'segwit',
    bitcoincash: 'bitcoincash',
    ethereum: 'ethereum',
    litecoin: 'litecoin',
    dash: 'dash',
  }
};

var mutations = {
  addSeedPoint: function(state, pos) {
    state.seedPoints.push(pos);
  },
  calcAddressKey: function(state) {
    var rng = new SecureRandom(); // NOTE: マウス操作情報はSecureRandom内のstatic変数へ格納済み
    
    var o;
    var address, wif;

    // bitcoin (BTC(segwit))
    o = addressgenerator.generateBitcoinSegwitP2SH(rng);
    address = o.address;
    wif = o.wif;
    state.addressWifs.push({
      name: 'Bitcoin(Segwit)',
      suffix: state.suffixes.segwit,
      address: address,
      wif: wif
    });

    // BitcoinCash (BCH)
    o = addressgenerator.generateBitcoinCash(rng);
    address = o.address;
    wif = o.wif;
    state.addressWifs.push({
      name: 'BitcoinCash',
      suffix: state.suffixes.bitcoincash,
      address: address,
      wif: wif
    });

    // Ethereum (ETH)
    o = addressgenerator.generateEthereum(rng);
    address = o.address;
    wif = o.wif;
    state.addressWifs.push({
      name: 'Ethereum',
      suffix: state.suffixes.ethereum,
      address: address,
      wif: wif
    });

    // Litecoin (LTC)
    o = addressgenerator.generateLitecoin(rng);
    address = o.address;
    wif = o.wif;
    state.addressWifs.push({
      name: 'Litecoin',
      suffix: state.suffixes.litecoin,
      address: address,
      wif: wif
    });

    // Dash (DASH)
    o = addressgenerator.generateDash(rng);
    address = o.address;
    wif = o.wif;
    state.addressWifs.push({
      name: 'Dash',
      suffix: state.suffixes.dash,
      address: address,
      wif: wif
    });
  },
};

var getters = {
  remain: function(state) {
    return state.remain;
  },
  seedPoints: function(state) {
    return state.seedPoints;
  },
  addressWifs: function(state) {
    return state.addressWifs;
  },
  
  suffixes: function(state) {
    return state.suffixes;
  }
};
//
return {
  state: state,
  mutations: mutations,
  getters: getters,
};
})();
