import mongoose, { Schema } from "mongoose";

// Define the schema for a new payment
const paymentSchema = new Schema(
  {
    tran_id: { type: String, required: true },
    val_id: { type: Date, required: true },
    amount: { type: Number, required: true },
    email: { type: String, required: true },
    card_type: { type: String, required: true },
    bank_tran_id: { type: String, required: true },
    status: { type: String, required: true },
    tran_date: { type: String, required: true },
    card_issuer_country: { type: String, required: true },
    card_issuer: { type: String, required: true },
    card_brand: { type: String, required: true },
    risk_title: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },

  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

const payment = mongoose.models.payment || mongoose.model("payment", paymentSchema);
export default payment;
