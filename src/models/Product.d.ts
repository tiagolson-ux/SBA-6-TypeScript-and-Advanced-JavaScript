export {};
//# sourceMappingURL=Product.d.ts.map

// Note to self: This interface describes the shape of a product object
// that we expect to get back from the DummyJSON API.
// Keeping this simple helps TypeScript catch mistakes.
export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
}

// Note to self: Importing the discount helper so the Product class
// can reuse the same discount logic.
import { calculateDiscount } from "../utils/discountCalculator";

// Note to self: This class represents a single product in our system.
// It stores product information and has methods to display details
// and calculate the discounted price.
export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;

  constructor(data: ProductData) {
    // Note to self: We copy the values from the input "data" into this product.
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.category = data.category;

    console.log("Product created:", this.title, "with price:", this.price);
    // Note to self: Commit here with message "Completed Step 1 - Created Product class and constructor"
  }

  // Note to self: This method prints a nice summary of the product details.
  displayDetails(): void {
    console.log("------ Product Details ------");
    console.log("ID:", this.id);
    console.log("Title:", this.title);
    console.log("Description:", this.description);
    console.log("Category:", this.category);
    console.log("Base Price:", this.price);
    console.log("Discount Percentage:", this.discountPercentage);
    console.log("-----------------------------");

    // Note to self: Commit here with message "Completed Step 1 - Added displayDetails method"
  }

  // Note to self: This method calculates the final price after discount
  // by using the calculateDiscount helper function.
  getPriceWithDiscount(): number {
    console.log(
      "Calculating discounted price for:",
      this.title,
      "Price:",
      this.price,
      "Discount:",
      this.discountPercentage
    );

    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    const finalPrice = this.price - discountAmount;

    console.log(
      "Discount amount:",
      discountAmount,
      "Final price after discount:",
      finalPrice
    );

    // Note to self: Commit here with message "Completed Step 1 - Added getPriceWithDiscount method"

    return finalPrice;
  }
}
