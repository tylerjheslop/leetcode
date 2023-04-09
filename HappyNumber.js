const square = (number) => number ** 2;
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n < 10) {
        if (n === 1 || n === 7) {
            return true;
        }
        return false;
    }
    let sum = 0;
    while(n > 0) {
        let val = n % 10;
        sum += square(val);
        n -= val;
        n /= 10;
    }
    if(sum === 1) {
        return true;
    } else {
        return isHappy(sum);
    }
};

console.log(isHappy(19));