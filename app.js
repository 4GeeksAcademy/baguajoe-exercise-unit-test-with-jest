const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(dollar) {
let dollarToEuro = dollar / oneEuroIs.USD
let euroToYen = dollarToEuro * oneEuroIs.JPY
    return euroToYen;
}
const fromYenToPound = function(yen) {
let fromYenToEuro = yen / oneEuroIs.JPY
let euroToPound = fromYenToEuro * oneEuroIs.GBP
    return euroToPound;

}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };