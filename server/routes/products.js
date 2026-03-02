const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// setup multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// GET /api/products - public list
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/products/:id - details
router.get('/:id', async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ error: 'Product not found' });
    res.json(prod);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/products/upload - upload image (admin)
router.post('/upload', auth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  // return public path
  const publicPath = `/uploads/${req.file.filename}`;
  res.json({ path: publicPath });
});

// POST /api/products - create product (admin)
router.post('/', auth, async (req, res) => {
  try {
    const { name, price, description, category, imagePath } = req.body;
    if (!name || !price) return res.status(400).json({ error: 'Name and price required' });
    const p = new Product({ name, price, description, category, imagePath });
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/products/:id - update (admin)
router.put('/:id', auth, async (req, res) => {
  try {
    const { name, price, description, category, imagePath } = req.body;
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ error: 'Product not found' });
    prod.name = name ?? prod.name;
    prod.price = price ?? prod.price;
    prod.description = description ?? prod.description;
    prod.category = category ?? prod.category;
    prod.imagePath = imagePath ?? prod.imagePath;
    await prod.save();
    res.json(prod);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/products/:id - admin
router.delete('/:id', auth, async (req, res) => {
  try {
    const prod = await Product.findByIdAndDelete(req.params.id);
    if (!prod) return res.status(404).json({ error: 'Product not found' });
    res.json({ msg: 'Deleted', id: prod._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
