const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 4 === 0)) {
        const message = true;
        return message;
    } else if (year % 100 === 0) {
        const message = false;
        return message;
    } else { 
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
