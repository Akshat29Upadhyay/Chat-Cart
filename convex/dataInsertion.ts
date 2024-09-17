import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Mutation to create a new product
export const createProduct = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    imageUrl: v.string(),
    category: v.string(),
    stock: v.number(),
    
    // Optional category-specific fields
    size: v.optional(v.string()),          // For clothing
    color: v.optional(v.string()),         // For products with color options
    woodType: v.optional(v.string()),      // For furniture
    material: v.optional(v.string()),      // For material-based products
    brand: v.optional(v.string()),         // For branded products
    weight: v.optional(v.number()),        // For weight-sensitive products
    dimensions: v.optional(v.string()),    // For furniture or other large items
  },
  
  handler: async (ctx, args) => {
    const newProductId = await ctx.db.insert("products", {
      name: args.name,
      description: args.description,
      price: args.price,
      imageUrl: args.imageUrl,
      category: args.category,
      stock: args.stock,
      
      // Include only the category-specific fields if they are provided
      ...(args.size && { size: args.size }),
      ...(args.color && { color: args.color }),
      ...(args.woodType && { woodType: args.woodType }),
      ...(args.material && { material: args.material }),
      ...(args.brand && { brand: args.brand }),
      ...(args.weight && { weight: args.weight }),
      ...(args.dimensions && { dimensions: args.dimensions }),
    });

    return newProductId;
  },
});
