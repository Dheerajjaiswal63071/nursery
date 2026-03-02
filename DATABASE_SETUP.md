# MongoDB Database Setup Guide

This guide will help you set up MongoDB for the Green Nursery application.

## Option 1: Local MongoDB Installation (Recommended for Development)

### Step 1: Download MongoDB Community Edition

1. Visit [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Select your operating system:
   - **Windows**: Choose the MSI installer (Recommended)
   - **Mac**: Choose DMG or Homebrew
   - **Linux**: Choose your distribution

### Step 2: Install MongoDB on Windows

1. Run the downloaded MSI installer
2. Follow the installation wizard:
   - Accept the license agreement
   - Choose "Complete" setup
   - Install MongoDB as a Windows Service (Recommended)
   - Click "Install"
3. Complete the installation
4. MongoDB will start automatically as a Windows Service

### Step 3: Verify Installation

Open PowerShell and run:

```powershell
mongod --version
```

You should see the MongoDB version number.

### Step 4: Start MongoDB Service

The service should start automatically, but you can verify or start it manually:

```powershell
# Check if MongoDB service is running
Get-Service MongoDB

# Start MongoDB service if not running
Start-Service MongoDB
```

### Step 5: Connect to MongoDB

Open a new PowerShell window and run:

```powershell
mongosh
```

You should see a connection message. Type `exit` to quit.

---

## Option 2: MongoDB Atlas (Cloud - Free Tier Available)

### Recommended for Production / Quick Setup without Local Installation

### Step 1: Create MongoDB Atlas Account

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" or "Sign In"
3. Create a new account with email and password
4. Verify your email address

### Step 2: Create a New Project

1. Click "Create" on the Projects page
2. Enter project name: `nursery-project`
3. Click "Create Project"

### Step 3: Create a Cluster

1. Click "Create" to build a database
2. Choose "M0 FREE" tier (free, perfect for development)
3. Select a provider (AWS, Google Cloud, or Azure)
4. Select a region closest to you
5. Click "Create Cluster"
   - Wait 3-5 minutes for cluster to be created

### Step 4: Configure Network Access

1. In the left sidebar, click "Network Access"
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (for development only)
4. Click "Confirm"

### Step 5: Create Database User

1. In the left sidebar, click "Database Access"
2. Click "Add New Database User"
3. Enter credentials:
   - **Username**: `nursery_user`
   - **Password**: Create a strong password (save it!)
4. Set privileges to "Built-in Role" → "Read and write to any database"
5. Click "Create User"

### Step 6: Get Connection String

1. Go back to "Clusters" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your password and `<username>` with username

Example format:
```
mongodb+srv://nursery_user:your_password@cluster0.xxxxx.mongodb.net/nursery_db?retryWrites=true&w=majority
```

---

## Step 3: Configure Your Application

### Create `.env` File in Server Folder

1. Navigate to your server directory:
```powershell
cd c:\Users\user\Desktop\nam\server
```

2. Create a `.env` file (copy from `.env.example`):
```powershell
Copy-Item .env.example .env
```

3. Edit the `.env` file and set your MongoDB connection:

**For Local MongoDB:**
```
MONGO_URI=mongodb://localhost:27017/nursery_db
JWT_SECRET=your_super_secret_jwt_key_12345
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

**For MongoDB Atlas (Cloud):**
```
MONGO_URI=mongodb+srv://nursery_user:your_password@cluster0.xxxxx.mongodb.net/nursery_db?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_12345
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

Replace:
- `your_password` with your Atlas database password
- `cluster0.xxxxx` with your actual cluster name
- `your_super_secret_jwt_key_12345` with a random string

---

## Step 4: Verify Database Connection

### Start the Server

```powershell
cd c:\Users\user\Desktop\nam\server
npm install
npm start
```

You should see:
```
MongoDB connected
Default admin created: admin@nursery.com
Server running on port 5000
```

### Test Database Connection

Open your browser and go to:
```
http://localhost:5000
```

You should see:
```json
{"msg":"Nursery API running"}
```

---

## Step 5: Verify Collections are Created

### Using MongoDB Compass (GUI Tool)

**For Local MongoDB:**

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Install it
3. Open Compass
4. Click "Connect" (uses localhost:27017 by default)
5. You should see your `nursery_db` database
6. Collections will appear when you add products

**For MongoDB Atlas:**

1. Go to your Atlas dashboard
2. Click "Collections" on your cluster
3. You'll see databases and collections here

---

## Database Schema

Your application creates these collections automatically:

### 1. **admins** collection
```javascript
{
  _id: ObjectId,
  email: String,        // e.g., "admin@nursery.com"
  password: String,     // bcrypt hashed
  createdAt: Date,
  updatedAt: Date
}
```

### 2. **products** collection
```javascript
{
  _id: ObjectId,
  name: String,         // e.g., "Monstera Deliciosa"
  price: Number,        // e.g., 29.99
  description: String,  // Plant care description
  imagePath: String,    // e.g., "/uploads/filename.jpg"
  createdAt: Date,
  updatedAt: Date
}
```

---

## Common Issues & Solutions

### Issue 1: "MongoDB connection error"

**Solution:**
- For local: Make sure MongoDB service is running
  ```powershell
  Start-Service MongoDB
  ```
- For Atlas: Check connection string has correct password and username
- Verify firewall isn't blocking port 27017

### Issue 2: "Authentication failed"

**Solution:**
- Check database user credentials in `.env`
- For Atlas: Make sure IP address is whitelisted in Network Access

### Issue 3: "ECONNREFUSED 127.0.0.1:27017"

**Solution:**
- MongoDB service not running
- Install MongoDB properly
- Run: `Start-Service MongoDB`

### Issue 4: "Connection string URI does not have any authSource"

**Solution:**
- Add `?authSource=admin` to your connection string for local MongoDB:
```
mongodb://localhost:27017/nursery_db?authSource=admin
```

---

## Database Backup & Management

### Backup Local MongoDB

```powershell
# Create backup folder
mkdir C:\backups

# Backup database
mongodump --db nursery_db --out "C:\backups\nursery_backup"
```

### Restore Backup

```powershell
mongorestore --db nursery_db "C:\backups\nursery_backup\nursery_db"
```

### For MongoDB Atlas

1. Go to "Backup" section in Atlas dashboard
2. Click "Create Backup" to manually backup
3. Backups are automatically created daily

---

## Production Checklist

Before deploying to production:

- [ ] Use strong, random JWT_SECRET
- [ ] Use strong admin password
- [ ] For Atlas: Enable IP whitelist (not "allow from anywhere")
- [ ] Enable encryption at rest
- [ ] Configure regular automated backups
- [ ] Use environment variables from hosting platform
- [ ] Never commit `.env` file to GitHub
- [ ] Use HTTPS for all connections

---

## Quick Start Commands

### Local MongoDB (All-in-one)

```powershell
# 1. Start MongoDB service
Start-Service MongoDB

# 2. Navigate to server
cd c:\Users\user\Desktop\nam\server

# 3. Create .env file
Copy-Item .env.example .env

# 4. Edit .env and set:
# MONGO_URI=mongodb://localhost:27017/nursery_db

# 5. Install and start server
npm install
npm start
```

### MongoDB Atlas (All-in-one)

```powershell
# 1. Get connection string from Atlas dashboard
# 2. Navigate to server
cd c:\Users\user\Desktop\nam\server

# 3. Create .env file
Copy-Item .env.example .env

# 4. Edit .env and set:
# MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/nursery_db

# 5. Install and start server
npm install
npm start
```

---

## Testing the Database

Once running, test by:

1. Go to `http://localhost:3000/admin/login`
2. Log in with: `admin@nursery.com` / `admin123`
3. Add a product with an image
4. Check in MongoDB that product was saved

---

## Need Help?

- **MongoDB Docs**: https://docs.mongodb.com/
- **Atlas Docs**: https://docs.atlas.mongodb.com/
- **Mongoose Docs**: https://mongoosejs.com/
- **MongoDB Community Forum**: https://www.mongodb.com/community/forums/
