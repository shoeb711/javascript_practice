// You want to maximize your profit by choosing a single day to buy one stock and
// choosing a different day in the future to sell that stock.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

var maxProfit = function (prices) {
    let buyPrice = Infinity;
    let profit = 0;

    for (let price of prices) {
        if (price < buyPrice) buyPrice = price; // Captures the minimum price (5)
        profit = Math.max(profit, price - buyPrice);
    }

    console.log(profit);

    return profit;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];

const res = maxProfit(prices);

console.log(res);
