const removeFromArray = function(array, ...remove) {
    let newArray = array;
    let toRemove = remove;

    for (let i = 0; i < toRemove.length; i++) {
        let itemToRemove = toRemove[i];
        for (let j = 0; j < newArray.length; j++) {
            if (itemToRemove === newArray[j]) {
                newArray.splice(j, 1);
            } else {
                continue;
            }   
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
