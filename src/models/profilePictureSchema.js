import mongoose, { Schema } from "mongoose";

const newPost = new Schema(
  {
    caption: { type: String, require: true },
    date: { type: Date, require: true },
    image: { type: String, require: true },
    email: { type: String, require: true },
    profile: { type: Boolean, require: true },
  },
  {
    timestamps: true,
  }
);
const post = mongoose.models.post || mongoose.model("post", newPost);
export default post;
