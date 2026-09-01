import mongoose, { Schema } from 'mongoose';

// Sub-schema for variations (e.g., different sizes or colors for the same product)
const variantSchema = new Schema({
  sku: { type: String, required: true, unique: true }, // Stock Keeping Unit
  attributes: {
    color: String,
    size: String,
    material: String,
  },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  images: [String],
});

const productSchema = new Schema(
  {
    // 1. Basic Information
    title: { type: String, required: true, index: true, trim: true },
    brand: { type: String, required: true, index: true },
    description: { type: String, required: true },
    bulletPoints: [{ type: String }], // Amazon-style "About this item" list

    // 2. Identification
    asin: { type: String, unique: true, sparse: true }, // Amazon Standard Identification Number
    sku: { type: String, required: true, unique: true },
    gtin: { type: String }, // UPC, EAN, or ISBN

    // 3. Categories & Taxonomy
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    subCategories: [{ type: String }],
    tags: [{ type: String, index: true }],

    // 4. Pricing & Inventory
    price: {
      basePrice: { type: Number, required: true },
      discountPrice: { type: Number },
      currency: { type: String, default: 'USD' },
    },
    stock: { type: Number, default: 0, min: 0 },
    inventoryStatus: {
      type: String,
      enum: ['In Stock', 'Out of Stock', 'Discontinued'],
      default: 'In Stock',
    },

    // 5. Media
    mainImage: { type: String, required: true },
    gallery: [{ type: String }], // Multiple images

    // 6. Product Specifications (Technical Details)
    specifications: [
      {
        key: { type: String }, // e.g., "Weight"
        value: { type: String }, // e.g., "1.2 lbs"
      },
    ],

    // 7. Shipping Details
    shipping: {
      weight: { type: Number },
      dimensions: {
        length: Number,
        width: Number,
        height: Number,
        unit: { type: String, default: 'cm' },
      },
      isPrimeEligible: { type: Boolean, default: false },
    },

    // 8. Social Proof & Ratings (Summarized)
    ratings: {
      average: { type: Number, default: 0, min: 0, max: 5 },
      count: { type: Number, default: 0 },
    },

    // 9. Variations
    variants: [variantSchema],

    // 10. Status & Visibility
    isActive: { type: Boolean, default: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  },
);

// Add Text Search Index for the search bar
productSchema.index({ title: 'text', description: 'text', brand: 'text' });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
