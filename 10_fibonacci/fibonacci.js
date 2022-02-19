const fibonacci = function(seqNbr) {
    if (seqNbr < 0) { return 'OOPS'};
    seqNbr = parseInt(seqNbr);
    let fibArray = [1, 1];
    for (i = 2; i < seqNbr; i ++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[seqNbr-1];
};

// Do not edit below this line
module.exports = fibonacci;
