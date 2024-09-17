import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
     // Table to store product information
  products: defineTable({
    // Common fields for all products
    name: v.string(),
    description: v.string(),
    price: v.number(),
    imageUrl: v.string(),
    category: v.string(), // Could be 'clothing', 'furniture', etc.
    stock: v.number(),
    createdAt: v.optional(v.string()),

    // Category-specific fields (optional)
    size: v.optional(v.string()),         // For clothing
    color: v.optional(v.string()),        // For products with color options
    woodType: v.optional(v.string()),     // For furniture
    material: v.optional(v.string()),     // For other material-based products
    brand: v.optional(v.string()),        // For branded products
    weight: v.optional(v.number()),       // For products where weight matters
    dimensions: v.optional(v.string()),   // Could be for furniture, electronics, etc.                   // Timestamp for the last update
  }),

  // Table to store product categories
  categories: defineTable({
    name: v.string(),                      // Category name (e.g., Electronics, Apparel)
    description: v.string(),               // Optional description of the category
    imageUrl: v.string(),                  // URL for category image (optional)
    createdAt: v.number(),                 // Timestamp when the category was created
    updatedAt: v.number()                  // Timestamp for last category update
  }),

  // Table to store user accounts
  users: defineTable({
    username: v.string(),                  // Username for the user account
    email: v.string(),                     // User email (must be unique)
    passwordHash: v.string(),              // Hashed password for security
    isAdmin: v.boolean(),                  // Boolean flag for admin users
    createdAt: v.number(),                 // Timestamp for account creation
    updatedAt: v.number()                  // Timestamp for the last update to the account
  }),

  // Table to store orders
  orders: defineTable({
    userId: v.id('users'),                 // Foreign key referencing users
    orderDate: v.number(),                 // Timestamp for when the order was placed
    totalAmount: v.number(),               // Total price for the entire order
    status: v.string(),                    // Status (e.g., 'pending', 'shipped', 'delivered')
    paymentMethod: v.string(),             // Payment method used (e.g., 'credit card', 'paypal')
    shippingAddress: v.object({            // Shipping address for delivery
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string()
    }),
    items: v.array(v.object({              // Array of items in the order
      productId: v.id('products'),         // Foreign key referencing products
      quantity: v.number(),                // Quantity ordered for this product
      price: v.number(),                   // Price per unit of this product
    })),
    createdAt: v.number(),                 // Timestamp for when the order was created
    updatedAt: v.number()                  // Timestamp for last order update
  }),

  // Table to store product reviews
  reviews: defineTable({
    productId: v.id('products'),           // Foreign key referencing products
    userId: v.id('users'),                 // Foreign key referencing users
    rating: v.number(),                    // Rating out of 5 stars
    createdAt: v.number(),                 // Timestamp for when the review was posted
  }),

  // Table to manage user shopping carts
  cart: defineTable({
    userId: v.id('users'),                 // Foreign key referencing users
    items: v.array(v.object({              // Array of products in the cart
      productId: v.id('products'),         // Foreign key referencing products
      quantity: v.number(),                // Quantity of each product
      price: v.number(),                   // Price per unit of the product
    })),
    totalPrice: v.number(),                // Total price for all items in the cart
    createdAt: v.number(),                 // Timestamp when the cart was created
    updatedAt: v.number()                  // Timestamp for the last cart update
  }),

  // Table to store user wishlists
  wishlists: defineTable({
    userId: v.id('users'),                 // Foreign key referencing users
    items: v.array(v.object({              // Array of products in the wishlist
      productId: v.id('products'),         // Foreign key referencing products
      addedAt: v.number()                  // Timestamp for when the product was added
    })),
    createdAt: v.number(),                 // Timestamp for when the wishlist was created
    updatedAt: v.number()                  // Timestamp for the last wishlist update
  }),

  // Table to manage user addresses
  addresses: defineTable({
    userId: v.id('users'),                 // Foreign key referencing users
    address: v.object({                    // Address fields
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),
    createdAt: v.number(),                 // Timestamp for when the address was added
    updatedAt: v.number()                  // Timestamp for the last address update
  })
});