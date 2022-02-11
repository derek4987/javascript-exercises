const reverseString = function(string) {
    const newArray = Array.from((string.split('')));
    newArray.reverse();
    const reverseString = newArray.join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
