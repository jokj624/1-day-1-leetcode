/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastIdx = digits.length - 1;
    let floor = false;
    let results = [];
    let subIdx = 0;

    for (let i = lastIdx; i >= 0; i--) {
        if (digits[i] < 9) {
            if (!floor) {
                digits[i] += 1
                results = [...digits];
            } else {
                results = [digits[i] + 1, ...results];      
                subIdx = i;
            }  
            floor = false;
            break;
        } else {
            results = [...results, 0];
            floor = true;
        }
    }
    
    if (floor) {
        results = [1, ...results];
    }

    if (subIdx > 0) {
        let subArr = digits.slice(0, subIdx);

        results = [...subArr, ...results];
    }

    return results;
};