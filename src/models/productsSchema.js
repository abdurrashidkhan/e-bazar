import mongoose, { Schema } from "mongoose";

// Define the schema for a new comment
const productsSchema = new Schema(
  {
    projectsName: { type: String, required: true },
    backend: { type: String, required: true },
    frontend: { type: String, required: true },
    projectTheme: { type: String, required: true },
    projectFeature: { type: String, required: true },
    projectsLiveLink: { type: String, required: true },
    projectDelivery: { type: String, required: true },
    projectPrice: { type: String, required: true },
    image: { type: String, required: true },
    projectsDescription: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const products = mongoose.models.products || mongoose.model("products", productsSchema);
export default products;
