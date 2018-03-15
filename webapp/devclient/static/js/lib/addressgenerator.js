/* lib/addressgenerator.js */

this.addressgenerator = (function() {
var addressgenerator = {};

// Bitcoin(Segwit(P2SH))
addressgenerator.generateBitcoinSegwitP2SH = function(rng) {
  var network = bitcoin.networks.bitcoin;
  var compressed = true;

  var priv = toBigRandom(rng);
  var keypair = new bitcoin.ECPair(priv, null, { network: network, compressed: compressed });

  var address;
  {
    var pubKey = keypair.getPublicKeyBuffer();
    var pubKeyHash = bitcoin.crypto.hash160(pubKey);
    var redeemScript = bitcoin.script.witnessPubKeyHash.output.encode(pubKeyHash);
    var redeemScriptHash = bitcoin.crypto.hash160(redeemScript);
    var scriptPubKey = bitcoin.script.scriptHash.output.encode(redeemScriptHash);
    address = bitcoin.address.fromOutputScript(scriptPubKey, network);
  }

  return {
    address: address,
    wif: keypair.toWIF()
  };
};

// BitcoinCash
addressgenerator.generateBitcoinCash = function(rng) {
  var network = bitcoin.networks.bitcoin;
  var compressed = false;

  var priv = toBigRandom(rng);
  var keypair = new bitcoin.ECPair(priv, null, { network: network, compressed: compressed });

  return {
    address: keypair.getAddress(),
    wif: keypair.toWIF(),
  };
};

// Litecoin
addressgenerator.generateLitecoin = function(rng) {
  var network = bitcoin.networks.litecoin;
  var compressed = false;

  var priv = toBigRandom(rng);
  var keypair = new bitcoin.ECPair(priv, null, { network: network, compressed: compressed });

  return {
    address: keypair.getAddress(),  // NOTE: getBitcoinAddressと同じ
    wif: keypair.toWIF(),           // NOTE: getBitcoinWalletImportFormatと同じ
  };
};

// Dash
addressgenerator.generateDash = function(rng) {
  var network = bitcoin.networks.dash;
  var compressed = false;

  var priv = toBigRandom(rng);
  var keypair = new bitcoin.ECPair(priv, null, { network: network, compressed: compressed });

  return {
    address: keypair.getAddress(),
    wif: keypair.toWIF(),
  };
};

// Ethereum
addressgenerator.generateEthereum = function(rng) {
  var priv = toBigRandom(rng);

  priv = priv.toBuffer(32);

  return {
    address: etherwallet.getChecksumAddressString(priv),
    wif: etherwallet.getPrivateKeyString(priv),
  };
}

// ---

function toBigRandom(rng) {
  var secp256k1 = bitcoin.getCurveByName('secp256k1');
  var limit = secp256k1.n;

  return new bitcoin.BigInteger(limit.bitLength(), rng)
    .mod(limit.subtract(bitcoin.BigInteger.ONE))
    .add(bitcoin.BigInteger.ONE);
}

//
return addressgenerator;
})();
