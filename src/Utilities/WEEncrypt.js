import sha512 from 'crypto-js/sha512';


const WEEncrypt = {
  hash: function(unHashedStr){
    try {
      if (unHashedStr === "" || unHashedStr === null) throw Error("Cannot has empty or null string");
      return sha512(unHashedStr);
    } catch (error) {
      console.error(error.message);
    }
  },
  compareHash: function(hashedStr,compareStr){
    try {
      let hashedCompareStr = this.hash(compareStr);
      if (hashedCompareStr === hashedStr){
        return true;
      }
      return false;
    } catch (error) {
      console.error(error.message);
    }
  },
  encrypt: function(decryptedStr){

  },
  decrypt: function(encryptedStr){

  }
}

export default WEEncrypt;