export {};
//# sourceMappingURL=main.d.ts.map
// Note to self: Import Product class and the ProductData type.
import { Product, ProductData } from "./models/Product";

// Note to self: Import discount and tax helpers.
import { calculateTax } from "./utils/taxCalculator";
import { fetchAllProducts } from "./services/apiService";

// Note to self: Import error helpers to log and get friendly messages.
import { logError, getFriendlyMessage } from "./utils/errorHandler";

// Note to self: This async function is the "main" flow of our app.
// It will:
// 1. Fetch products from the API.
// 2. Turn them into Product instances.
// 3. For each product, show details, discounted price, and tax.
// 4. Handle any errors that happen.
async function runApp(): Promise<void> {
  console.log("runApp: Starting the E-commerce Product Management System");

  try {
    console.log("runApp: Calling fetchAllProducts...");
    const productsData: ProductData[] = await fetchAllProducts();
    console.log("runApp: Products fetched:", productsData.length);

    // Note to self: To keep the output smaller, we will just use the first 5 products.
    const firstFewProducts = productsData.slice(0, 5);

    console.log("runApp: Creating Product instances...");
    const productInstances: Product[] = firstFewProducts.map((data) => {
      return new Product(data);
    });

    console.log("runApp: Looping through Product instances...");
    for (const product of productInstances) {
      // Show details
      product.displayDetails();

      // Get price after discount
      const finalPrice = product.getPriceWithDiscount();

      // Calculate tax based on category and final price
      const taxAmount = calculateTax(finalPrice, product.category);

      console.log(
        "Final price (after discount):",
        finalPrice,
        "Tax amount:",
        taxAmount
      );

      console.log(
        "Total price (final price + tax):",
        finalPrice + taxAmount
      );

      console.log("==== End of product calculation ====");
    }

    // Note to self: Commit here with message "Completed Step 6 - Implemented main app flow"
  } catch (error) {
    console.log("runApp: Error caught in main try/catch");
    logError(error);

    const friendlyMessage = getFriendlyMessage(error);
    console.log("Friendly message for user:", friendlyMessage);
  } finally {
    console.log("runApp: Finished running the app (success or failure).");
  }
}

// Note to self: This actually starts the app when Node runs dist/main.js.
runApp();
