require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas (ensure MONGO_URI points to 'smartsales' DB)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 10s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
  .then(() => console.log("MongoDB connected!"))
  .catch(err => {console.error("MongoDB connection error:", err);
   process.exit(1);
});

// Updated Contact Schema to match 'contactdetails' collection
const ContactSchema = new mongoose.Schema({
  name: String,     // Uppercase to match your DB fields
  email: String,
  message: String,
}, { collection: 'contactdetails' });  // Explicitly set collection name

const Contact = mongoose.model('Contact', ContactSchema);

// Updated POST endpoint to handle uppercase fields
app.post('/api/contacts', async (req, res) => {
  try {
    const { NAME, EMAIL, MESSAGE } = req.body;  // Destructure uppercase fields
    const newContact = new Contact({ NAME, EMAIL, MESSAGE });
    await newContact.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Database save error:", err);  // Detailed logging
    res.status(500).json({ error: "Failed to save contact" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));