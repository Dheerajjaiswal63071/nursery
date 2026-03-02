const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');

const sampleProducts = [
  // Indoor Plants
  {
    name: 'Monstera Deliciosa',
    price: 45.99,
    category: 'indoor',
    description: 'A popular houseplant with large, fenestrated leaves. Easy to care for and adds a tropical feel to any room.'
  },
  {
    name: 'Pothos (Devil\'s Ivy)',
    price: 24.99,
    category: 'indoor',
    description: 'A trailing plant perfect for hanging baskets. Heart-shaped leaves and extremely low maintenance. Great for beginners.'
  },
  {
    name: 'Snake Plant',
    price: 34.99,
    category: 'indoor',
    description: 'An air-purifying plant with striking vertical leaves. Tolerates low light and infrequent watering. Perfect for offices.'
  },
  {
    name: 'Rubber Tree',
    price: 52.99,
    category: 'indoor',
    description: 'A statement plant with large, glossy leaves. Improves air quality and adds elegance to living spaces.'
  },
  
  // Outdoor Plants
  {
    name: 'Hibiscus',
    price: 38.99,
    category: 'outdoor',
    description: 'Bright, tropical flowers in various colors. Perfect for garden landscaping and attracts butterflies and hummingbirds.'
  },
  {
    name: 'Jasmine',
    price: 29.99,
    category: 'outdoor',
    description: 'Fragrant flowering vine. Beautiful white or pink flowers with a sweet aroma. Great for covering fences and trellises.'
  },
  {
    name: 'Bougainvillea',
    price: 35.99,
    category: 'outdoor',
    description: 'Vibrant, colorful bracts that last for months. Drought-tolerant and loves sunlight. Perfect for hot climates.'
  },
  {
    name: 'Marigold',
    price: 12.99,
    category: 'outdoor',
    description: 'Cheerful orange and yellow flowers. Easy to grow from seeds. Repels insects naturally.'
  },
  
  // Succulents
  {
    name: 'Aloe Vera',
    price: 19.99,
    category: 'succulents',
    description: 'Medicinal succulent with healing gel. Extremely low maintenance and thrives in bright, indirect light.'
  },
  {
    name: 'Jade Plant',
    price: 28.99,
    category: 'succulents',
    description: 'A compact succulent with thick, coin-shaped leaves. Believed to bring good luck. Very resilient.'
  },
  {
    name: 'Echeveria',
    price: 16.99,
    category: 'succulents',
    description: 'Beautiful rosette-shaped succulent in various colors. Perfect for small spaces and terrariums.'
  },
  {
    name: 'Cactus Mix (3 plants)',
    price: 24.99,
    category: 'succulents',
    description: 'Assorted mini cacti. Drought-tolerant and perfect for sunny windowsills. Minimal watering required.'
  },
  
  // Flowering Plants
  {
    name: 'Rose Bush',
    price: 42.99,
    category: 'flowering',
    description: 'Classic beauty with fragrant blooms. Available in red, pink, white, and more. Perfect for gardens and bouquets.'
  },
  {
    name: 'Orchid',
    price: 58.99,
    category: 'flowering',
    description: 'Exotic flowering plant with stunning blooms. Moderate care required. Long-lasting flowers last for weeks.'
  },
  {
    name: 'Petunia',
    price: 18.99,
    category: 'flowering',
    description: 'Colorful trumpet-shaped flowers. Easy to grow and bloom throughout the season. Great for flower beds.'
  },
  {
    name: 'Sunflower',
    price: 22.99,
    category: 'flowering',
    description: 'Iconic yellow blooms that brighten any garden. Can grow quite tall. Attracts pollinators and beneficial insects.'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const inserted = await Product.insertMany(sampleProducts);
    console.log(`✓ Successfully added ${inserted.length} sample products!`);

    console.log('\nProducts added:');
    inserted.forEach(p => {
    console.log(`  - ${p.name} (${p.category}) - ₹${p.price}`);
    });

    await mongoose.disconnect();
    console.log('\nDatabase connection closed');
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seedDatabase();
