module.exports = function reverse(n) {
    let stringN = n.toString().split("").reverse().join("");
    let reverseNumber = parseFloat(stringN) * Math.sign(n);
    return reverseNumber;
}
