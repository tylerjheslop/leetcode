/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) { return ""; }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        // if the first letter doesn't match, return early
        if (prefix[0] !== strs[i][0]) {
            return "";
        }
        // if the string does not contain the prefix,
        // drop the last letter of the prefix
        // and compare again
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
};

strs = ["flower", "flow", "flight"];
strs2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));