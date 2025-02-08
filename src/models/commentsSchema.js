import mongoose, { Schema } from "mongoose";

// Define the schema for a new comment
const commentsSchema = new Schema(
  {
    postId: { type: String, required: true },
    comment: { type: String, required: true },
    commentDate: { type: Date, required: true },
    commentEmail: { type: String, required: true },
    displayName: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const comments = mongoose.models.comments || mongoose.model("comments", commentsSchema);
export default comments;
