# MongoDB Commands Reference

Quick reference for common MongoDB commands for the Green Nursery project.

## Connecting to MongoDB

### Local MongoDB
```bash
mongosh
```

### MongoDB Atlas (Cloud)
```bash
mongosh "mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/nursery_db"
```

---

## Database Operations

### View all databases
```javascript
show databases
```

### Switch to nursery_db
```javascript
use nursery_db
```

### View all collections
```javascript
show collections
```

---

## Admin Collection Operations

### View all admins
```javascript
db.admins.find()
```

### Find admin by email
```javascript
db.admins.findOne({ email: "admin@nursery.com" })
```

### Create a new admin (use bcrypt hash in production!)
```javascript
db.admins.insertOne({
  email: "newadmin@nursery.com",
  password: "$2b$10$..." // bcrypt hashed password
})
```

### Update admin password
```javascript
db.admins.updateOne(
  { email: "admin@nursery.com" },
  { $set: { password: "$2b$10$..." } }
)
```

### Delete admin
```javascript
db.admins.deleteOne({ email: "admin@nursery.com" })
```

---

## Products Collection Operations

### View all products
```javascript
db.products.find()
```

### View products with nice formatting
```javascript
db.products.find().pretty()
```

### Find product by name
```javascript
db.products.findOne({ name: "Monstera Deliciosa" })
```

### Find products by price range
```javascript
db.products.find({
  price: { $gte: 20, $lte: 50 }
})
```

### Count total products
```javascript
db.products.countDocuments()
```

### Insert a product manually
```javascript
db.products.insertOne({
  name: "Pothos",
  price: 15.99,
  description: "Easy to grow, tolerates low light",
  imagePath: "/uploads/pothos.jpg"
})
```

### Update product price
```javascript
db.products.updateOne(
  { name: "Monstera Deliciosa" },
  { $set: { price: 34.99 } }
)
```

### Update multiple products
```javascript
db.products.updateMany(
  { price: { $lt: 20 } },
  { $set: { description: "Budget-friendly plant" } }
)
```

### Delete a product by name
```javascript
db.products.deleteOne({ name: "Dead Plant" })
```

### Delete all products (be careful!)
```javascript
db.products.deleteMany({})
```

---

## Search & Filter

### Search by partial name (case-insensitive)
```javascript
db.products.find({
  name: { $regex: "monstera", $options: "i" }
})
```

### Find products sorted by price
```javascript
db.products.find().sort({ price: 1 })  // ascending
db.products.find().sort({ price: -1 }) // descending
```

### Find with limit
```javascript
db.products.find().limit(5)  // first 5 products
```

### Skip and limit (pagination)
```javascript
db.products.find().skip(10).limit(5)  // products 11-15
```

---

## Aggregation

### Group products by price range
```javascript
db.products.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$price", 10] } },
      count: { $sum: 1 },
      avgPrice: { $avg: "$price" }
    }
  }
])
```

### Get product statistics
```javascript
db.products.aggregate([
  {
    $group: {
      _id: null,
      totalProducts: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" }
    }
  }
])
```

### Find most expensive products
```javascript
db.products.aggregate([
  { $sort: { price: -1 } },
  { $limit: 5 }
])
```

---

## Indexes

### Create index on product name (speeds up searches)
```javascript
db.products.createIndex({ name: 1 })
```

### Create index on price
```javascript
db.products.createIndex({ price: 1 })
```

### View all indexes
```javascript
db.products.getIndexes()
```

### Drop an index
```javascript
db.products.dropIndex("name_1")
```

---

## Backup & Restore (Command Line)

### Backup database
```bash
mongodump --db nursery_db --out ./backup
```

### Backup to specific file
```bash
mongodump --db nursery_db --archive=nursery_backup.archive
```

### Restore database
```bash
mongorestore --db nursery_db ./backup/nursery_db
```

### Restore from archive
```bash
mongorestore --archive=nursery_backup.archive
```

---

## Cleanup & Maintenance

### Drop entire collection
```javascript
db.products.drop()
```

### Drop entire database
```javascript
db.dropDatabase()
```

### View collection stats
```javascript
db.products.stats()
```

### View database stats
```javascript
db.stats()
```

---

## Using MongoDB Compass (GUI)

MongoDB Compass is a visual tool for managing MongoDB:

1. **Download**: https://www.mongodb.com/products/compass
2. **Connect**: 
   - For local: `mongodb://localhost:27017`
   - For Atlas: Paste connection string
3. **Browse**: Click databases → collections → documents
4. **View data**: Click on any document to expand
5. **Edit data**: Click pencil icon to edit
6. **Delete data**: Click trash icon to delete

**No commands needed - visual interface!**

---

## Common Queries for the App

### Get all products sorted by newest first
```javascript
db.products.find().sort({ createdAt: -1 })
```

### Get popular products (price between 20-50)
```javascript
db.products.find({
  price: { $gte: 20, $lte: 50 }
}).sort({ createdAt: -1 })
```

### Get products with images
```javascript
db.products.find({
  imagePath: { $exists: true, $ne: null }
})
```

### Get products without images
```javascript
db.products.find({
  $or: [
    { imagePath: null },
    { imagePath: { $exists: false } }
  ]
})
```

### Bulk update all products (add field)
```javascript
db.products.updateMany(
  {},
  { $set: { featured: false } }
)
```

---

## Performance Tips

### Create indexes for frequently searched fields
```javascript
db.products.createIndex({ name: 1, price: 1 })
```

### Monitor query performance
```javascript
db.products.find({ name: "Monstera" }).explain("executionStats")
```

### Archive old data
```javascript
db.products.deleteMany({
  createdAt: { $lt: new Date("2024-01-01") }
})
```

---

## Debugging

### Check current user
```javascript
db.getCurrentUser()
```

### Check current database
```javascript
db.getName()
```

### View connection info
```javascript
db.getClient()
```

### List database operations (current operation)
```javascript
db.currentOp()
```

---

## Exit MongoDB

```javascript
exit
```

---

## MongoDB Atlas Commands

### View cluster metrics (Atlas web console)
1. Go to Metrics in Atlas
2. View operations, connections, replication lag
3. Monitor CPU, memory, disk usage

### Download backup from Atlas
1. Go to Backups
2. Click "Restore" or "Download"

### Scale cluster
1. Go to Clusters
2. Click "Modify"
3. Change cluster tier, storage, etc.

---

## Quick Reference Table

| Command | Purpose |
|---------|---------|
| `show databases` | List all databases |
| `use nursery_db` | Switch to database |
| `show collections` | List collections |
| `db.products.find()` | View all products |
| `db.products.findOne()` | View first product |
| `db.products.countDocuments()` | Count products |
| `db.products.insertOne({...})` | Add product |
| `db.products.updateOne()` | Update product |
| `db.products.deleteOne()` | Delete product |
| `db.products.drop()` | Delete collection |
| `exit` | Exit MongoDB |

---

## Tips & Tricks

### Format output nicely
```javascript
db.products.find().pretty()
```

### Count before deleting
```javascript
db.products.countDocuments({ price: { $lt: 10 } })
```

### Batch operations
```javascript
const bulk = db.products.initializeOrderedBulkOp();
bulk.insert({ name: "Plant 1", price: 25 });
bulk.insert({ name: "Plant 2", price: 30 });
bulk.execute();
```

### Get database size
```javascript
db.stats().dataSize  // bytes
```

---

**For more help**: https://docs.mongodb.com/manual/reference/
