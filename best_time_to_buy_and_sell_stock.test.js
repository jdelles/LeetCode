const maxProfit = require("./best_time_to_buy_and_sell_stock");

const pricesNormal = [7, 1, 5, 3, 6, 4];
const pricesZero = [0];
const pricesDescending = [7, 6, 5, 4, 3, 2, 1];

test("Best Time to Buy/Sell Stock: profit = 5", () => {
    expect(maxProfit(pricesNormal)).toBe(5);
});

test("Best Time to Buy/Sell Stock: profit = 0 (zero)", () => {
    expect(maxProfit(pricesZero)).toBe(0);
});

test("Best Time to Buy/Sell Stock: profit = 0 (desc)", () => {
    expect(maxProfit(pricesDescending)).toBe(0);
});
