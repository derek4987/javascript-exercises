const sumAll = function(firstNum, secondNum) {
    let smallNum;
    let bigNum;
    let result;

    if (firstNum > secondNum) {
        smallNum = secondNum;
        bigNum = firstNum;
    } else {
        smallNum = firstNum;
        bigNum = secondNum;
    }

    if (smallNum > 0 && bigNum >= 0 && typeof smallNum === "number" && typeof bigNum === "number") {
        result = 0;
        for (let i = smallNum; i <= bigNum; i++) {
        result = result + i;
        }  
    } else {
        result = "ERROR";
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
