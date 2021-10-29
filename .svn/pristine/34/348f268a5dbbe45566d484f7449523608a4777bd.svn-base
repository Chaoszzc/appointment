var CryptoJS = require('../util/aes.js');
//注意以下这两个字段要与后台协商一致
var key = CryptoJS.enc.Utf8.parse("5de7e29919fad4d5");
var iv = CryptoJS.enc.Utf8.parse('1234567890123456');

// AES加密
function Encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString().toLowerCase();
}

// AES解密
function Decrypt(word) {
  var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  var decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

module.exports = {
  Encrypt: Encrypt,
  Decrypt: Decrypt,
}