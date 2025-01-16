const palindromes = function (str) {
  let fwdIdx = 0;
  let bwdIdx = str.length - 1;
  while (bwdIdx > fwdIdx) {
    while (isNotChar(str.at(fwdIdx))) {
      fwdIdx++;
    }
    while (isNotChar(str.at(bwdIdx))) {
      bwdIdx--;
    }
    let fwdChar = str.at(fwdIdx).toLowerCase();
    let bwdChar = str.at(bwdIdx).toLowerCase();
    if (fwdChar != bwdChar) {
      return false;
    }
    bwdIdx--;
    fwdIdx++;
  }
  return true;
};

function isNotChar(char) {
  return char.length != 1 || !(/[a-zA-Z0-9]/.test(char));
}

// Do not edit below this line
module.exports = palindromes;
