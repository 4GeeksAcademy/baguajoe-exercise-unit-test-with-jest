const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One dollar should equal 146.26 yen", function() {
   const yen = fromDollarToYen(1); 
let expected = (1 / 1.07) * 156.5;
expect(yen).toBe(expected);
})
test("One Yen should equal .0056 pounds", function() {
    const pound = fromYenToPound(1);
    let expected = (1/156.5) * .87;
    expect(pound).toBe(expected)
})