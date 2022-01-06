/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let low = Infinity;
    let profit = 0;
    for (let price of prices) {
        price < low ? (low = price) : (profit = Math.max(profit, price - low));
    }
    return profit;
};

module.exports = maxProfit;
