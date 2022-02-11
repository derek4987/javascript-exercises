const repeatString = function(string, repeatNumber) {
    let repeatString = ""

    if (repeatNumber < 0) {
        repeatString = 'ERROR';
    }

    for (let i=0; i<repeatNumber; i++) {
        repeatString += string;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
