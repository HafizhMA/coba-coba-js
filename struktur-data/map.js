const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
]);

const priceJPY = 5000;
const priceIDR = priceJPY * currency.get("JPY");
console.log(priceIDR);