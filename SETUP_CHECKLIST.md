# 🚀 Green Nursery - Quick Setup Checklist

Complete this checklist to get your nursery application running with a fully functional database.

## Prerequisites
- [ ] Node.js installed (v14 or higher)
- [ ] npm installed
- [ ] Git (optional)
- [ ] Web browser (Chrome, Firefox, Safari, Edge)

---

## Option A: Local MongoDB Setup (Fastest for Development)

### Step 1: Install MongoDB ✅
- [ ] Download MongoDB Community Edition from https://www.mongodb.com/try/download/community
- [ ] Run the MSI installer
- [ ] Choose "Complete" setup
- [ ] Check "Install as a Windows Service"
- [ ] Complete installation

### Step 2: Verify MongoDB ✅
```powershell
mongod --version
```
- [ ] Should display version number

### Step 3: Start MongoDB Service ✅
```powershell
Start-Service MongoDB
```
- [ ] Service should start successfully

### Step 4: Configure Application ✅

**Navigate to server folder:**
```powershell
cd c:\Users\user\Desktop\nam\server
```

**Create .env file:**
```powershell
Copy-Item .env.example .env
```

**Edit `.env` file** and set:
```
MONGO_URI=mongodb://localhost:27017/nursery_db
JWT_SECRET=my_super_secret_key_12345
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

### Step 5: Start Server ✅
```powershell
cd c:\Users\user\Desktop\nam\server
npm install
npm start
```

- [ ] Should see: "MongoDB connected"
- [ ] Should see: "Default admin created"
- [ ] Should see: "Server running on port 5000"

### Step 6: Test Connection ✅
Visit: http://localhost:5000
- [ ] Should see: `{"msg":"Nursery API running"}`

---

## Option B: MongoDB Atlas Setup (Cloud, Free Tier)

### Step 1: Create Atlas Account ✅
- [ ] Visit https://www.mongodb.com/cloud/atlas
- [ ] Click "Try Free"
- [ ] Create account with email
- [ ] Verify email address

### Step 2: Create Cluster ✅
- [ ] Click "Create" → "Build a Database"
- [ ] Choose "M0 FREE" tier
- [ ] Select provider (AWS recommended)
- [ ] Select region closest to you
- [ ] Click "Create Cluster"
- [ ] Wait 3-5 minutes ⏳

### Step 3: Configure Network ✅
- [ ] Click "Network Access" in left sidebar
- [ ] Click "Add IP Address"
- [ ] Choose "Allow Access from Anywhere"
- [ ] Click "Confirm"

### Step 4: Create Database User ✅
- [ ] Click "Database Access" in left sidebar
- [ ] Click "Add New Database User"
- [ ] **Username**: `nursery_user`
- [ ] **Password**: Create strong password (save it!)
- [ ] Select "Read and write to any database"
- [ ] Click "Create User"

### Step 5: Get Connection String ✅
- [ ] Go to "Clusters"
- [ ] Click "Connect"
- [ ] Choose "Connect your application"
- [ ] Copy the connection string
- [ ] Replace `<password>` and `<username>`
- [ ] Should look like:
```
mongodb+srv://nursery_user:your_password@cluster0.xxxxx.mongodb.net/nursery_db?retryWrites=true&w=majority
```

### Step 6: Configure Application ✅

**Navigate to server folder:**
```powershell
cd c:\Users\user\Desktop\nam\server
```

**Create .env file:**
```powershell
Copy-Item .env.example .env
```

**Edit `.env` file** and paste your connection string:
```
MONGO_URI=mongodb+srv://nursery_user:your_password@cluster0.xxxxx.mongodb.net/nursery_db?retryWrites=true&w=majority
JWT_SECRET=my_super_secret_key_12345
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

### Step 7: Start Server ✅
```powershell
cd c:\Users\user\Desktop\nam\server
npm install
npm start
```

- [ ] Should see: "MongoDB connected"
- [ ] Should see: "Default admin created"
- [ ] Should see: "Server running on port 5000"

### Step 8: Test Connection ✅
Visit: http://localhost:5000
- [ ] Should see: `{"msg":"Nursery API running"}`

---

## Running the Full Application

### Terminal 1: Backend Server
```powershell
cd c:\Users\user\Desktop\nam\server
npm start
```
- [ ] Running on http://localhost:5000

### Terminal 2: Frontend Application
```powershell
cd c:\Users\user\Desktop\nam\client
npm start
```
- [ ] Running on http://localhost:3000

### Access Application
- [ ] Frontend: http://localhost:3000
- [ ] Admin Panel: http://localhost:3000/admin/login
- [ ] Admin Credentials: `admin@nursery.com` / `admin123`

---

## Verify Everything Works

### Test Admin Login
- [ ] Navigate to http://localhost:3000/admin/login
- [ ] Enter email: `admin@nursery.com`
- [ ] Enter password: `admin123`
- [ ] Click Login
- [ ] Should redirect to `/admin/dashboard`

### Test Add Product
- [ ] Click "Add New Product"
- [ ] Fill in:
  - [ ] Plant Name: "Test Plant"
  - [ ] Price: "29.99"
  - [ ] Description: "A test plant"
  - [ ] Select an image file
- [ ] Click "Add Product"
- [ ] Should see success message
- [ ] Product should appear in list

### Test View Product
- [ ] Go to http://localhost:3000/products
- [ ] Click on your test plant
- [ ] Should see full product details

### Test Browse as Customer
- [ ] Go to http://localhost:3000
- [ ] Click "Explore Our Plants"
- [ ] Should see products in grid
- [ ] Search should work
- [ ] Click product cards to view details

---

## Troubleshooting

### MongoDB Not Starting (Local)
```powershell
# Check service status
Get-Service MongoDB

# Restart service
Restart-Service MongoDB

# Or start it
Start-Service MongoDB
```

### Connection Error from App
- [ ] Check MONGO_URI in `.env`
- [ ] Verify MongoDB is running
- [ ] Verify port 27017 is not blocked

### Atlas Connection Issues
- [ ] Verify connection string is correct
- [ ] Check username and password are correct
- [ ] Verify IP is whitelisted in Network Access
- [ ] Check database user exists

### Port Already in Use
```powershell
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

### Image Upload Not Working
- [ ] Check `server/uploads` folder exists
- [ ] Verify folder has write permissions
- [ ] Restart server after creating folder

---

## Database Management

### View Data in Compass (Local)

1. Download MongoDB Compass: https://www.mongodb.com/products/compass
2. Install and open
3. Click "Connect" (localhost:27017)
4. Navigate to `nursery_db` → `products`
5. View all your plants!

### View Data in Atlas

1. Go to your Atlas dashboard
2. Click "Clusters"
3. Click "Collections"
4. Browse your `products` collection

---

## Next Steps

Once everything is running:

1. **Add more plants** via admin panel
2. **Customize colors** in `client/src/styles.css`
3. **Update contact info** in `client/src/components/Contact.js`
4. **Add plant images** through admin panel
5. **Test all pages**: Home, Products, About, Contact
6. **Deploy** to production (Heroku, Vercel, etc.)

---

## File Structure
```
nam/
├── server/
│   ├── .env                 (create this - not committed)
│   ├── .env.example         (reference)
│   ├── server.js
│   ├── models/
│   │   ├── Admin.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── products.js
│   ├── middleware/
│   │   └── auth.js
│   ├── uploads/             (auto-created for images)
│   ├── package.json
│   └── node_modules/
│
├── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── styles.css
│   │   └── components/
│   │       ├── Home.js
│   │       ├── Products.js
│   │       ├── ProductDetails.js
│   │       ├── About.js
│   │       ├── Contact.js
│   │       ├── AdminLogin.js
│   │       ├── AdminDashboard.js
│   │       ├── AdminProducts.js
│   │       └── ProductForm.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── node_modules/
│
├── DATABASE_SETUP.md         (detailed guide)
└── README.md                (overview)
```

---

## Getting Help

- Check `DATABASE_SETUP.md` for detailed instructions
- Check `README.md` for overview
- View browser console for errors (F12)
- Check terminal for server errors
- MongoDB Docs: https://docs.mongodb.com/

---

## 🎉 You're Ready!

Once all checkboxes are complete, your Green Nursery application is fully functional with a real database!

**Happy planting! 🌿**
