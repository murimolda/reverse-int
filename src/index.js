module.exports = function reverse (n) {
    let stringN = String(n);
    let reverseNumber = stringN.split("").reverse().join("");
    reverseNumber = Number(reverseNumber);
    return reverseNumber;
}
