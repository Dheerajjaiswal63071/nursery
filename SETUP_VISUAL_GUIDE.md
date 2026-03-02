# 📚 Complete Setup Guide with Screenshots

## Step-by-Step Database Setup for Green Nursery

---

## STEP 1: Choose Your Database Option

```
┌─────────────────────────────────────────────────────────────┐
│                    WHICH DATABASE?                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ✅ LOCAL MONGODB (Recommended for quick start)            │
│  ├─ Fast setup (5 minutes)                                 │
│  ├─ Runs on your computer                                  │
│  ├─ No internet needed (once installed)                    │
│  ├─ Perfect for development                                │
│  └─ Connection: mongodb://localhost:27017/nursery_db       │
│                                                             │
│  ☁️  MONGODB ATLAS (Cloud - Free tier available)           │
│  ├─ No local installation needed                           │
│  ├─ Accessible from anywhere                              │
│  ├─ Better for production                                  │
│  ├─ Auto-backups included                                  │
│  └─ Connection: mongodb+srv://user:pass@cluster...         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## OPTION A: Local MongoDB Setup

### Step A1: Download MongoDB

1. Open browser and go to: https://www.mongodb.com/try/download/community
2. Select **Windows**
3. Download the **MSI Installer** (.msi file)
4. File will be: `mongodb-windows-x86_64-*.msi`

```
Expected: File downloads to C:\Users\user\Downloads\
```

### Step A2: Install MongoDB

1. Double-click the downloaded `.msi` file
2. Windows will show **"MongoDB Setup Wizard"**
3. Click **"Next"** to proceed
4. Accept license agreement → **"Next"**
5. Choose **"Complete"** setup → **"Next"**
6. ✅ Check: **"Install MongoDB as a Windows Service"** (important!)
7. Click **"Next"** → **"Install"**
8. Wait for installation to complete
9. Click **"Finish"**

```
MongoDB is now installed and running as a service!
```

### Step A3: Verify Installation

Open **PowerShell** and run:

```powershell
mongod --version
```

You should see:
```
db version v6.0.0 (or similar)
Build Info: ...
```

✅ If you see version number, MongoDB is installed correctly!

### Step A4: Start MongoDB Service

```powershell
# Check if service is running
Get-Service MongoDB

# Start the service (if not running)
Start-Service MongoDB

# Verify it's running
Get-Service MongoDB
```

You should see:
```
Status   Name               DisplayName
------   ----               -----------
Running  MongoDB            MongoDB
```

✅ MongoDB is now running!

### Step A5: Test Connection

```powershell
mongosh
```

You should see:
```
> 
```

Type:
```javascript
show databases
```

You should see some default databases. Type `exit` to quit.

✅ Connection works!

### Step A6: Configure Application

Create `.env` file in `server/` folder:

```powershell
cd c:\Users\user\Desktop\nam\server
Copy-Item .env.example .env
```

Edit `.env` and paste:

```
MONGO_URI=mongodb://localhost:27017/nursery_db
JWT_SECRET=my_super_secret_key_change_this
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

### Step A7: Start Application

```powershell
cd c:\Users\user\Desktop\nam\server
npm install
npm start
```

You should see:
```
✅ MongoDB connected
✅ Default admin created: admin@nursery.com
✅ Server running on port 5000
```

✅ **Local MongoDB is ready!**

---

## OPTION B: MongoDB Atlas (Cloud) Setup

### Step B1: Create Account

1. Go to: https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"** (or "Sign In" if you have account)
3. Create account with email
4. Check email and **verify** your address
5. Log in to Atlas dashboard

```
You're now in MongoDB Atlas!
```

### Step B2: Create Cluster

1. Click **"Create"** button
2. Click **"Build a Database"**
3. Choose **"M0 FREE"** tier (shows as "Free Forever")
4. Click **"Create Cluster"**

```
Configuration screen opens:
```

5. **Select Provider**: AWS (Recommended)
6. **Select Region**: Choose closest to you
   - Example: `us-east-1` for East Coast
   - Example: `eu-west-1` for Europe
7. Click **"Create Cluster"**
8. ⏳ **Wait 3-5 minutes** for cluster to be created

```
Status will change from "Creating" to "Running"
```

✅ Cluster is created!

### Step B3: Create Database User

1. In left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. **Username**: `nursery_user`
4. **Password**: Create a strong password (SAVE IT!)
   - Example: `MyNursery2024!Secure`
5. **User Privileges**: Select "Built-in Role" → "Read and write to any database"
6. Click **"Create User"**

```
User is created!
```

### Step B4: Configure Network

1. In left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. Choose **"Allow Access from Anywhere"** (for development)
   - ⚠️ For production, add specific IPs
4. Click **"Confirm"**

```
Your IP is whitelisted!
```

### Step B5: Get Connection String

1. Go back to **"Clusters"**
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string

```
It will look like:
mongodb+srv://nursery_user:<password>@cluster0.xxxxx.mongodb.net/nursery_db?retryWrites=true&w=majority
```

5. **Replace**:
   - `<password>` with your actual password
   - `<username>` with `nursery_user`

Example result:
```
mongodb+srv://nursery_user:MyNursery2024!Secure@cluster0.abcde.mongodb.net/nursery_db?retryWrites=true&w=majority
```

✅ Connection string is ready!

### Step B6: Configure Application

Create `.env` file in `server/` folder:

```powershell
cd c:\Users\user\Desktop\nam\server
Copy-Item .env.example .env
```

Edit `.env` and paste:

```
MONGO_URI=mongodb+srv://nursery_user:MyNursery2024!Secure@cluster0.abcde.mongodb.net/nursery_db?retryWrites=true&w=majority
JWT_SECRET=my_super_secret_key_change_this
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

### Step B7: Start Application

```powershell
cd c:\Users\user\Desktop\nam\server
npm install
npm start
```

You should see:
```
✅ MongoDB connected
✅ Default admin created: admin@nursery.com
✅ Server running on port 5000
```

✅ **MongoDB Atlas is ready!**

---

## STEP 2: Start Frontend

In a **NEW PowerShell terminal**:

```powershell
cd c:\Users\user\Desktop\nam\client
npm start
```

Opens at: **http://localhost:3000**

---

## STEP 3: Test Everything Works

### 3.1: Test Frontend Home Page
```
Visit: http://localhost:3000
You should see: "Welcome to Green Nursery" hero section
```

### 3.2: Test Admin Login
```
Visit: http://localhost:3000/admin/login
Enter:
  Email: admin@nursery.com
  Password: admin123
Click Login → Should redirect to /admin/dashboard
```

### 3.3: Test Add Product
```
On admin dashboard:
1. Scroll down to "Add New Product"
2. Fill in:
   - Plant Name: "Test Plant"
   - Price: "29.99"
   - Description: "A beautiful test plant"
   - Select an image file
3. Click "Add Product"
4. Should show success message
5. Product appears in the list
```

### 3.4: Test View Product
```
Visit: http://localhost:3000/products
Click on your test plant
Should show full product details page
```

### 3.5: Test Other Pages
```
- Home: http://localhost:3000 ✓
- Products: http://localhost:3000/products ✓
- About: http://localhost:3000/about ✓
- Contact: http://localhost:3000/contact ✓
```

---

## STEP 4: View Database Data (Optional)

### Option 1: Using MongoDB Compass (GUI)

1. Download: https://www.mongodb.com/products/compass
2. Install and open Compass
3. **For Local**:
   - Click "Connect" (default localhost:27017)
4. **For Atlas**:
   - Click "Create New" → paste your connection string
5. Navigate:
   - Left sidebar → `nursery_db` → `products`
6. You'll see all your plants as documents!

### Option 2: Using MongoDB Shell

```powershell
mongosh

use nursery_db

db.products.find().pretty()

exit
```

Shows all your products in the terminal.

---

## Folder Structure After Setup

```
c:\Users\user\Desktop\nam\
├── server/
│   ├── .env                 ✅ (NEW - you created this)
│   ├── .env.example         (reference)
│   ├── models/
│   │   ├── Admin.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── products.js
│   ├── uploads/             (auto-created when you upload images)
│   │   └── image1.jpg
│   │   └── image2.jpg
│   ├── server.js
│   ├── package.json
│   └── node_modules/        (auto-created by npm install)
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── styles.css
│   ├── public/
│   ├── package.json
│   └── node_modules/        (auto-created by npm install)
│
├── DATABASE_SETUP.md         (this guide)
├── README.md
└── SETUP_CHECKLIST.md
```

---

## Terminal Windows You Need Open

```
WINDOW 1: Backend Server
Terminal 1: cd server; npm start
Output: "Server running on port 5000"

WINDOW 2: Frontend Server
Terminal 2: cd client; npm start
Output: Opens http://localhost:3000

WINDOW 3: (Optional) Database
Terminal 3: mongosh
For viewing database manually
```

---

## Common Problems & Solutions

### Problem 1: "MongoDB connected" doesn't appear

**Solution:**
```powershell
# Make sure MongoDB service is running
Start-Service MongoDB

# Wait 5 seconds and restart server
npm start
```

### Problem 2: "address already in use :::5000"

**Solution:**
```powershell
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID [number] /F

# Then restart
npm start
```

### Problem 3: "Cannot find module" error

**Solution:**
```powershell
# Make sure you ran npm install
npm install

# Then start
npm start
```

### Problem 4: Image upload doesn't work

**Solution:**
```powershell
# Create uploads folder if missing
mkdir c:\Users\user\Desktop\nam\server\uploads

# Restart server
npm start
```

### Problem 5: Admin login fails

**Solution:**
- Check `.env` has correct `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- Restart server - it creates admin on startup
- Check browser console for errors (F12)

### Problem 6: Atlas connection fails

**Solution:**
- Double-check connection string is correct
- Verify IP is whitelisted in Network Access
- Make sure password doesn't have special characters (or escape them)
- Test: `mongosh "your_connection_string"`

---

## Next Steps

1. ✅ Add more plants via admin panel
2. ✅ Customize colors in `client/src/styles.css`
3. ✅ Update company info in components
4. ✅ Deploy to production (Heroku for backend, Vercel for frontend)
5. ✅ Set up backups for database

---

## File You Need to Create

```
c:\Users\user\Desktop\nam\server\.env
```

Contents:
```
# For Local MongoDB:
MONGO_URI=mongodb://localhost:27017/nursery_db

# OR For MongoDB Atlas:
MONGO_URI=mongodb+srv://nursery_user:password@cluster0.xxxxx.mongodb.net/nursery_db?retryWrites=true&w=majority

# Common to both:
JWT_SECRET=change_this_to_random_string_12345
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

**IMPORTANT**: Never share this file or commit to GitHub!

---

## Quick Command Reference

```powershell
# Start MongoDB (local only)
Start-Service MongoDB

# Navigate to server
cd c:\Users\user\Desktop\nam\server

# Install dependencies
npm install

# Start backend
npm start

# In NEW terminal, navigate to client
cd c:\Users\user\Desktop\nam\client

# Install dependencies
npm install

# Start frontend
npm start

# Visit in browser
http://localhost:3000
```

---

## Support Resources

- **MongoDB Setup**: https://docs.mongodb.com/manual/installation/
- **MongoDB Atlas**: https://docs.atlas.mongodb.com/
- **Mongoose**: https://mongoosejs.com/docs/
- **Express**: https://expressjs.com/
- **React**: https://react.dev/

---

**🎉 Congratulations! Your database is set up!**

**Next: Add plants to your nursery via the admin panel at http://localhost:3000/admin/login**

---

*Last Updated: March 2026*
