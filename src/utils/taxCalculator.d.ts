export {};
//# sourceMappingURL=taxCalculator.d.ts.map

// Note to self: This function calculates the tax amount (in dollars)
// based on the price and the product category.
// Default taxRate is 4.75%. If category is "groceries", taxRate is 3%.
export function calculateTax(price: number, category: string): number {
  console.log(
    "calculateTax called with:",
    "price =",
    price,
    "category =",
    category
  );

  let taxRate = 4.75; // Note to self: Default tax rate in percent

  if (category.toLowerCase() === "groceries") {
    taxRate = 3;
    console.log("Category is groceries. Using lower tax rate:", taxRate);
  } else {
    console.log("Category is not groceries. Using default tax rate:", taxRate);
  }

  const taxAmount = (price * taxRate) / 100;

  console.log("Calculated tax amount:", taxAmount);

  // Note to self: Commit here with message "Completed Step 3 - Added calculateTax helper"

  return taxAmount;
}
