const palindromes = function (string) {
    let newStr = '';
    let str = string.toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s/g, "");
    str.split('');
    for ( i = (str.length -1); i >= 0; i--) {
        newStr = newStr + str[i];
    }
    if (str === newStr) { return true } else { return false };
};

// Do not edit below this line
module.exports = palindromes;
