const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// connect to mongo
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nursery_db';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// basic route
app.get('/', (req, res) => res.send({ msg: 'Nursery API running' }));

// ensure admin user exists
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');

async function ensureAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL || 'admin@nursery.com';
    const pass = process.env.ADMIN_PASSWORD || 'admin123';
    let admin = await Admin.findOne({ email });
    if (!admin) {
      const hash = await bcrypt.hash(pass, 10);
      admin = new Admin({ email, password: hash });
      await admin.save();
      console.log('Default admin created:', email);
    }
  } catch (err) {
    console.error('Error creating default admin:', err.message);
  }
}

ensureAdmin();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
