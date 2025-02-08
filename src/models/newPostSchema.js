import mongoose, { Schema } from "mongoose";

// Define the schema for a new post
const newPost = new Schema(
  {
    caption: { type: String, required: true },
    date: { type: Date, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
    react: { type: Number, default: 0 },
    reactEmail: [
      {
        email: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

const post = mongoose.models.post || mongoose.model("post", newPost);
export default post;
