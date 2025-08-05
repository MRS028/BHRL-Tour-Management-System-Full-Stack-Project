const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    departure: { type: String, required: true },
    destination: { type: String, required: true },
    departureDate: { type: Date, required: true },
    tripType: { type: String, enum: ['one-way', 'round-trip'], required: true },
    class: { type: String, enum: ['economy', 'business'], required: true },

    adults: { type: Number, required: true, min: 1 },
    children: { type: Number, required: true, min: 0 },

    phone: { type: String, required: true },
    email: { type: String, required: true },

    terms: { type: Boolean, required: true },

    // ✅ Optional fields below
    returnDate: { type: Date },                      // only if round-trip
    pricePerTicket: { type: Number },                // optional
    totalAmount: { type: Number },                   // optional
    bookingReference: { type: String },              // optional unique code
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    notes: { type: String },                         // admin/user notes
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
