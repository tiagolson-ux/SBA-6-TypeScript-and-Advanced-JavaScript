"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
// Note to self: This function calculates how many dollars are taken off
// based on the original price and the discount percentage.
// Example: price = 100, discountPercentage = 10 → discount = 10.
function calculateDiscount(price, discountPercentage) {
    console.log("calculateDiscount called with:", "price =", price, "discountPercentage =", discountPercentage);
    if (discountPercentage < 0) {
        console.log("Discount percentage is negative. For safety, using 0 instead.");
        discountPercentage = 0;
    }
    if (discountPercentage > 100) {
        console.log("Discount percentage is over 100. For safety, using 100 instead.");
        discountPercentage = 100;
    }
    const discountAmount = (price * discountPercentage) / 100;
    console.log("Calculated discount amount:", discountAmount);
    // Note to self: Commit here with message "Completed Step 2 - Added calculateDiscount helper"
    return discountAmount;
}
