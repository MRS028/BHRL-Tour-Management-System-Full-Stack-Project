// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// ==== Middleware ====
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(morgan('dev'));
app.use(express.json());

// ==== MongoDB Connection ====
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tour_management';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

// ==== Mongoose Schema & Model ====
const bookingSchema = new mongoose.Schema({
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

  // ✅ Optional fields
  returnDate: { type: Date },
  pricePerTicket: { type: Number },
  totalAmount: { type: Number },
  bookingReference: { type: String },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  notes: { type: String },
}, { timestamps: true });

const Booking = mongoose.model('bookings', bookingSchema);


// ==== Routes ====

app.get('/', (req, res) => {
  res.send('🌍 BHRL Tour Management API is running!');
});

// CREATE Booking
app.post('/api/bookings', async (req, res) => {
  try {
    // console.log("📥 Booking request:", req.body);
    const booking = new Booking(req.body);
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// GET All Bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Booking by ID
app.get('/api/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE Booking
app.put('/api/bookings/:id', async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE Booking
app.delete('/api/bookings/:id', async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: '✅ Booking deleted', deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==== Start Server ====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
