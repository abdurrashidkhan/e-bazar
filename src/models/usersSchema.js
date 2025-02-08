import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    displayName: { type: String, require: true },
    userNumber: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    emailVerified: { type: Boolean, require: true },
    photoURL: { type: String, require: true },
    accessToken: { type: String, require: true, },
    role: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const users = mongoose.models.users || mongoose.model("users", usersSchema);
export default users;
