import mongoose, { Schema } from "mongoose";

// Define the schema for a new paymentForAdmin
const paymentForAdminSchema = new Schema(
  {
    // Transaction Identifiers
    tran_id: { type: String, required: true, unique: true },
    val_id: { type: String, required: true },
    bank_tran_id: { type: String, required: true },

    // Payment Information
    amount: { type: Number, required: true }, // Convert string to number
    store_amount: { type: Number, required: true },
    currency: { type: String, required: true, default: "BDT" },
    currency_amount: { type: Number },
    currency_rate: { type: Number, default: 1.0 },
    base_fair: { type: Number, default: 0 },

    // Payment Method Details
    card_type: { type: String, required: true },
    card_issuer: { type: String, required: true },
    card_brand: { type: String, required: true },
    card_sub_brand: { type: String },
    card_no: { type: String }, // Empty in example, but included for completeness
    card_issuer_country: { type: String, required: true },
    card_issuer_country_code: { type: String, required: true },

    // Transaction Status
    status: { type: String, required: true, enum: ["VALID", "FAILED", "PENDING"] },
    error: { type: String, default: "" },
    // Merchant Information
    store_id: { type: String, required: true },
    // Timing Information
    tran_date: { type: Date, required: true }, // Store as Date object
    // Verification
    verify_sign: { type: String, required: true },
    verify_sign_sha2: { type: String, required: true },
    verify_key: { type: String },
    // Custom References
    value_a: { type: String },
    value_b: { type: String },
    value_c: { type: String },
    value_d: { type: String },
    // Risk Assessment
    risk_level: { type: String, default: "0" },
    risk_title: { type: String, default: "Safe" },
    // Subscription (if applicable)
    subscription_id: { type: String, default: "" },
    // User Reference (added field)
    // email: { type: String, required: true },
    // System Fields (automatically handled by timestamps: true)
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

const paymentForAdmin = mongoose.models.paymentForAdmin || mongoose.model("paymentForAdmin", paymentForAdminSchema);
export default paymentForAdmin;
