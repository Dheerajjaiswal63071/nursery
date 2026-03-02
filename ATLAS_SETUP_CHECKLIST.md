# MongoDB Atlas Setup - Step-by-Step Checklist

Use this checklist to set up MongoDB Atlas for your Green Nursery app.

---

## ✅ STEP 1: Create Account

- [ ] Visit: https://www.mongodb.com/cloud/atlas
- [ ] Click "Try Free"
- [ ] Enter your email
- [ ] Create password
- [ ] Accept terms
- [ ] Click "Sign Up"
- [ ] Verify email (check inbox)
- [ ] Log in to Atlas dashboard

**Status**: ✅ Account Ready

---

## ✅ STEP 2: Create Cluster

- [ ] See "Projects" page
- [ ] Click "Create" button
- [ ] Select "Build a Database"
- [ ] Choose **M0 FREE** tier (shows "Free Forever")
- [ ] Select **AWS** provider
- [ ] Choose region closest to you
  - [ ] `us-east-1` (East USA)
  - [ ] `us-west-2` (West USA)
  - [ ] `eu-west-1` (Europe)
  - [ ] `ap-southeast-1` (Asia)
- [ ] Click "Create Cluster"
- [ ] ⏳ Wait 3-5 minutes for status to show "Running"

**Status**: ✅ Cluster Ready

---

## ✅ STEP 3: Configure Network

- [ ] Click "Network Access" (left sidebar)
- [ ] Click "Add IP Address"
- [ ] Select "Allow Access from Anywhere"
- [ ] Click "Confirm"

**Note**: For production, you'd add specific IPs only.

**Status**: ✅ Network Access Ready

---

## ✅ STEP 4: Create Database User

- [ ] Click "Database Access" (left sidebar)
- [ ] Click "Add New Database User"
- [ ] **Username**: Type `nursery_user`
- [ ] **Password**: Click "Generate Secure Password"
- [ ] **Copy & Save** the password somewhere safe! ⚠️
- [ ] **Confirm Password** (if you created your own)
- [ ] **User Privileges**: Select "Read and write to any database"
- [ ] Click "Create User"

**⚠️ IMPORTANT**: Save your password!

Example: `MyPlant2024!Secure`

**Status**: ✅ Database User Ready

---

## ✅ STEP 5: Get Connection String

- [ ] Click "Clusters" (left sidebar)
- [ ] Find your cluster
- [ ] Click "Connect" button
- [ ] Choose "Connect your application"
- [ ] Click "Copy" to copy connection string
- [ ] Paste in Notepad (temporary)

You'll see:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Edit the Connection String:

Replace `<username>` with: `nursery_user`

Replace `<password>` with: Your saved password (e.g., `MyPlant2024!Secure`)

Remove `/?` and add database name: `/nursery_db?retryWrites=true&w=majority`

**Final Result** (example):
```
mongodb+srv://nursery_user:MyPlant2024!Secure@cluster0.a1b2c.mongodb.net/nursery_db?retryWrites=true&w=majority
```

- [ ] Connection string is ready

**Status**: ✅ Connection String Ready

---

## ✅ STEP 6: Configure Your App

**In PowerShell:**

```powershell
cd c:\Users\user\Desktop\nam\server
```

- [ ] Navigate to server folder
- [ ] Create .env file:
  ```powershell
  Copy-Item .env.example .env
  ```

### Edit .env File

Open file in Notepad or VS Code:
`c:\Users\user\Desktop\nam\server\.env`

Paste this content (with your connection string):

```env
MONGO_URI=mongodb+srv://nursery_user:MyPlant2024!Secure@cluster0.a1b2c.mongodb.net/nursery_db?retryWrites=true&w=majority
JWT_SECRET=my_super_secret_key_change_this_in_production
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

- [ ] Replace with your actual connection string
- [ ] Save the file
- [ ] Never share this file!

**Status**: ✅ App Configured

---

## ✅ STEP 7: Install Backend

**In PowerShell:**

```powershell
cd c:\Users\user\Desktop\nam\server
npm install
```

- [ ] Installation completes (takes 1-2 minutes)

**Status**: ✅ Dependencies Installed

---

## ✅ STEP 8: Start Backend Server

**In same PowerShell window:**

```powershell
npm start
```

Wait for messages to appear...

**You should see:**
```
✅ MongoDB connected
✅ Default admin created: admin@nursery.com
✅ Server running on port 5000
```

If you see errors:
- [ ] Check MONGO_URI in .env
- [ ] Verify connection string is correct
- [ ] Verify username/password are correct
- [ ] Check Network Access allows your IP

**Status**: ✅ Backend Running

---

## ✅ STEP 9: Start Frontend

**Open a NEW PowerShell window** (don't close the first one!):

```powershell
cd c:\Users\user\Desktop\nam\client
npm start
```

Wait for it to compile...

Browser should open automatically to:
```
http://localhost:3000
```

If not, manually visit: **http://localhost:3000**

- [ ] Home page loads
- [ ] See "Green Nursery" title
- [ ] See featured plants section

**Status**: ✅ Frontend Running

---

## ✅ STEP 10: Test Admin Login

Visit: **http://localhost:3000/admin/login**

- [ ] Login page loads
- [ ] Enter email: `admin@nursery.com`
- [ ] Enter password: `admin123`
- [ ] Click "Login"
- [ ] Redirected to `/admin/dashboard`
- [ ] See "Manage Products" section

**Status**: ✅ Admin Access Works

---

## ✅ STEP 11: Test Add Product

On the Admin Dashboard:

- [ ] Scroll down to "Add New Product" form
- [ ] Enter Plant Name: `Monstera Deliciosa`
- [ ] Enter Price: `29.99`
- [ ] Enter Description: `A beautiful climbing plant`
- [ ] Select an image file from your computer
- [ ] Click "Add Product"
- [ ] See success message: "Product added successfully"
- [ ] Product appears in the products list below

**Status**: ✅ Product Creation Works

---

## ✅ STEP 12: Verify in MongoDB Atlas

1. [ ] Go back to: https://cloud.mongodb.com
2. [ ] Click "Clusters"
3. [ ] Click "Collections" on your cluster
4. [ ] Navigate to: `nursery_db` → `products`
5. [ ] ✅ You should see your Monstera product data!

```javascript
{
  _id: ObjectId("..."),
  name: "Monstera Deliciosa",
  price: 29.99,
  description: "A beautiful climbing plant",
  imagePath: "/uploads/...",
  createdAt: Date,
  updatedAt: Date
}
```

**Status**: ✅ Data Stored in MongoDB!

---

## ✅ STEP 13: Test Website Features

Visit: **http://localhost:3000**

- [ ] Home page loads with featured plants
- [ ] Click "Explore Our Plants" button
- [ ] Products page shows your Monstera plant
- [ ] Click on product card → see details page
- [ ] Click "Plants" in header → back to products
- [ ] Click "About" → see About page
- [ ] Click "Contact" → see Contact page
- [ ] Fill contact form → see success message
- [ ] Try searching for "monstera" on Products page

**Status**: ✅ All Features Working!

---

## Summary

You have successfully:

✅ Created MongoDB Atlas account (free tier)
✅ Set up a database cluster
✅ Configured network access
✅ Created database user
✅ Got connection string
✅ Configured your application
✅ Connected backend to MongoDB
✅ Started frontend application
✅ Tested admin functionality
✅ Added products to database
✅ Viewed data in MongoDB Atlas
✅ Verified website features

---

## Troubleshooting Reference

| Problem | Solution |
|---------|----------|
| "MongoDB connection error" | Check MONGO_URI in .env, verify username/password |
| "Cannot connect to cluster" | Check Network Access, ensure IP is whitelisted |
| "Authentication failed" | Verify exact username: `nursery_user` and password |
| "Port 5000 already in use" | Kill process: `taskkill /PID [number] /F` |
| "Can't see data in Atlas" | Refresh page, check database name is `nursery_db` |
| "Admin login fails" | Ensure admin user was created on startup (check terminal) |
| "Image upload doesn't work" | Check `server/uploads` folder exists, restart server |

---

## Keep Secure

⚠️ **Never share:**
- MongoDB connection string
- Database password
- JWT_SECRET

⚠️ **Never commit to GitHub:**
- `.env` file

---

## Files You Created

```
✅ c:\Users\user\Desktop\nam\server\.env
   (Contains your MongoDB Atlas connection string)
```

---

## You're All Set! 🎉

Your Green Nursery app is fully functional with MongoDB Atlas!

**Next Steps:**
1. Add 5-10 more plants to the catalog
2. Test all pages (Home, Products, About, Contact)
3. Customize company info in components
4. Deploy to production (optional)

---

## Support

- **MongoDB Atlas Dashboard**: https://cloud.mongodb.com
- **Connection Issues**: Check Network Access tab in Atlas
- **User Management**: Check Database Access tab in Atlas
- **View Data**: Click Collections on your cluster

---

**Your nursery is ready! 🌿 Start adding plants!**

Visit: http://localhost:3000/admin/login
