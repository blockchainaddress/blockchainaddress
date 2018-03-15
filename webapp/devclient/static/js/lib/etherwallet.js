/* lib/etherwallet.js */

this.etherwallet = (function() {
var etherwallet = {};

// private key文字列を返す
etherwallet.getPrivateKeyString = function(priv) {
  return priv.toString('hex');
};

// shareアドレス文字列を返す
etherwallet.getChecksumAddressString = function(priv) {
  return ethUtil.toChecksumAddress(getAddressString(priv))
}

// private ---

function getAddressString(priv) {
  return '0x' + getAddress(priv).toString('hex');
};

function getAddress(priv) {
  return ethUtil.privateToAddress(priv);
}

//
return etherwallet;
})();
