# MongoDB Atlas Quick Start Guide

Complete step-by-step guide to set up MongoDB Atlas (Cloud) for Green Nursery.

## ⏱️ Time Required: 10-15 minutes

---

## Step 1: Create MongoDB Atlas Account

### 1.1 Sign Up
1. Visit: **https://www.mongodb.com/cloud/atlas**
2. Click **"Try Free"** button
3. Enter your email address
4. Create a password
5. Accept terms and click **"Sign Up"**

### 1.2 Verify Email
1. Check your email inbox
2. Click the verification link from MongoDB
3. You'll be logged into Atlas dashboard

✅ **Account created!**

---

## Step 2: Create Your Cluster

### 2.1 Build a Database

1. You'll see the **Projects** page
2. Click **"Create"** button
3. Select **"Build a Database"**

### 2.2 Choose Plan

You'll see three options:

```
┌─────────────────────────────────────────┐
│  ✅ M0 FREE (Recommended)               │
│  ├─ Free forever                        │
│  ├─ Perfect for development             │
│  ├─ 512MB storage                       │
│  └─ No credit card required             │
│                                          │
│  M2 SMALL ($57/month)                   │
│  ├─ 2GB storage                         │
│  ├─ Better for testing                  │
│  └─ First 3 months free                 │
│                                          │
│  M4 SMALL ($114/month)                  │
│  ├─ 4GB storage                         │
│  └─ Production-ready                    │
└─────────────────────────────────────────┘
```

**Select: M0 FREE** (shows "Free Forever")

✅ **Plan selected!**

### 2.3 Configure Cluster

1. **Cloud Provider**: Select **AWS** (fast, reliable)
2. **Region**: Choose closest to you:
   - 🇺🇸 `us-east-1` (N. Virginia) - East Coast USA
   - 🇺🇸 `us-west-2` (Oregon) - West Coast USA
   - 🇪🇺 `eu-west-1` (Ireland) - Europe
   - 🇮🇳 `ap-southeast-1` (Singapore) - Asia

3. Click **"Create Cluster"**
4. ⏳ **Wait 3-5 minutes** for cluster to initialize

Status will change: Creating → Running ✅

✅ **Cluster created!**

---

## Step 3: Configure Network Access

### 3.1 Open Network Settings

1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**

### 3.2 Allow Connections

You have two options:

**Option A: Development (Allow from Anywhere)**
```
For local development and testing
✅ Click "Allow Access from Anywhere"
✅ Click "Confirm"
```

**Option B: Production (Specific IPs)**
```
For production, add your specific IP:
- Click "Add My Current IP Address"
- Or manually enter IP: 1.2.3.4
```

**For now, use Option A** (Allow from Anywhere)

✅ **Network access configured!**

---

## Step 4: Create Database User

### 4.1 Open Database Access

1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**

### 4.2 Create User

Fill in the form:

```
┌─────────────────────────────────────────┐
│  Username: nursery_user                 │
│  Password: [Generate Secure Password]   │
│                                          │
│  ☑ Confirm Password                     │
│                                          │
│  User Privileges:                       │
│  ☑ Built-in Role                        │
│  → Read and write to any database       │
└─────────────────────────────────────────┘
```

**Steps:**

1. **Username field**: Type `nursery_user`
2. **Password field**: 
   - Click **"Generate Secure Password"** (recommended)
   - Or create your own: `MyPlant2024!Secure`
3. **Copy & Save** the password somewhere safe
4. **Confirm Password** checkbox (if manually entered)
5. **User Privileges**: 
   - Select "Built-in Role" 
   - Choose "Read and write to any database"
6. Click **"Create User"**

**IMPORTANT**: Save your password! You'll need it soon.

✅ **Database user created!**

---

## Step 5: Get Connection String

### 5.1 Go to Clusters

1. In left sidebar, click **"Clusters"**
2. Find your cluster
3. Click **"Connect"**

### 5.2 Get Connection String

A popup will appear with connection options.

Click: **"Connect your application"**

You'll see a connection string like:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 5.3 Copy the String

1. Click **"Copy"** button
2. Paste in a text editor (Notepad)
3. **Replace placeholders**:
   - Replace `<username>` with: `nursery_user`
   - Replace `<password>` with: your actual password (you just created)

**Example result:**
```
mongodb+srv://nursery_user:MyPlant2024!Secure@cluster0.a1b2c.mongodb.net/?retryWrites=true&w=majority
```

4. **Add database name** at the end:
   - Remove the `/?` at the end
   - Add: `/nursery_db?retryWrites=true&w=majority`

**Final connection string:**
```
mongodb+srv://nursery_user:MyPlant2024!Secure@cluster0.a1b2c.mongodb.net/nursery_db?retryWrites=true&w=majority
```

✅ **Connection string ready!**

---

## Step 6: Configure Your Application

### 6.1 Create .env File

Open PowerShell:

```powershell
cd c:\Users\user\Desktop\nam\server
Copy-Item .env.example .env
```

### 6.2 Edit .env File

Open the `.env` file in a text editor (Notepad, VS Code, etc.):

**Location**: `c:\Users\user\Desktop\nam\server\.env`

**Replace the contents with:**

```env
MONGO_URI=mongodb+srv://nursery_user:MyPlant2024!Secure@cluster0.a1b2c.mongodb.net/nursery_db?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

**Replace:**
- Your actual connection string from Step 5.3
- `JWT_SECRET` with a random string (or keep as-is for development)

✅ **.env file configured!**

---

## Step 7: Start Your Application

### 7.1 Install Backend Dependencies

```powershell
cd c:\Users\user\Desktop\nam\server
npm install
```

Wait for installation to complete...

### 7.2 Start Backend Server

```powershell
npm start
```

**You should see:**
```
✅ MongoDB connected
✅ Default admin created: admin@nursery.com
✅ Server running on port 5000
```

✅ **Backend is running!**

### 7.3 Start Frontend (New Terminal)

Open a **new PowerShell window**:

```powershell
cd c:\Users\user\Desktop\nam\client
npm start
```

**Opens automatically at**: http://localhost:3000

✅ **Frontend is running!**

---

## Step 8: Test Everything

### 8.1 Test Home Page
```
Visit: http://localhost:3000
✅ You should see the Green Nursery home page
```

### 8.2 Test Admin Login
```
Visit: http://localhost:3000/admin/login
Email: admin@nursery.com
Password: admin123
Click: Login
✅ Should redirect to /admin/dashboard
```

### 8.3 Test Add Product
```
On admin dashboard:
1. Scroll to "Add New Product"
2. Fill in:
   - Plant Name: "Monstera"
   - Price: "29.99"
   - Description: "Beautiful plant"
   - Upload an image
3. Click "Add Product"
✅ Should show success message
✅ Product appears in list
```

### 8.4 View in MongoDB Atlas

1. Go back to: **https://www.mongodb.com/cloud/atlas**
2. Click **"Clusters"**
3. Click **"Collections"** on your cluster
4. Browse to: `nursery_db` → `products`
5. ✅ You should see your product data!

---

## Verification Checklist

- [ ] Account created on MongoDB Atlas
- [ ] Free M0 cluster created
- [ ] Network access configured
- [ ] Database user created (nursery_user)
- [ ] Connection string obtained
- [ ] `.env` file created with connection string
- [ ] Backend: `npm install` completed
- [ ] Backend: `npm start` shows "MongoDB connected"
- [ ] Frontend: `npm start` opens http://localhost:3000
- [ ] Admin login works (admin@nursery.com / admin123)
- [ ] Can add products from admin panel
- [ ] Can see products in MongoDB Atlas dashboard

---

## Troubleshooting

### Problem: "MongoDB connection error"

**Solution:**
1. Check connection string in `.env` is correct
2. Verify username and password are correct
3. Make sure password has correct special characters
4. Check Network Access allows your IP (or "Allow from Anywhere")
5. Wait 1-2 minutes after creating user

### Problem: "Authentication failed"

**Solution:**
1. Verify username is exactly: `nursery_user`
2. Verify password matches what you created
3. Recreate the database user if forgotten
4. Make sure there are no extra spaces in password

### Problem: "connection string error"

**Solution:**
1. Copy full connection string again from Atlas
2. Replace `<username>` and `<password>` carefully
3. Ensure no spaces before/after username or password
4. Check it ends with: `?retryWrites=true&w=majority`

### Problem: "Server still shows port 5000 is in use"

**Solution:**
```powershell
# Find and kill the process
netstat -ano | findstr :5000
taskkill /PID [number] /F

# Try again
npm start
```

### Problem: "Can't see data in Atlas dashboard"

**Solution:**
1. Refresh the Atlas page
2. Make sure you're in correct cluster
3. Make sure you're in correct database: `nursery_db`
4. Try clicking "Collections" again
5. Add another product and refresh

---

## MongoDB Atlas Dashboard Navigation

```
Atlas Dashboard
├── Project Overview (top)
├── SECURITY (left sidebar)
│   └── Network Access (allow IPs)
│   └── Database Access (create users)
├── DATABASE (left sidebar)
│   └── Clusters (your database)
│       ├── Connect (get connection string)
│       ├── Collections (view data)
│       └── Backups (backup data)
└── MONITORING
    └── Metrics (performance)
```

---

## Environment File (.env) Reference

**Location**: `c:\Users\user\Desktop\nam\server\.env`

```env
# MongoDB Atlas connection string
# Format: mongodb+srv://username:password@cluster.mongodb.net/database_name?...
MONGO_URI=mongodb+srv://nursery_user:MyPlant2024!Secure@cluster0.a1b2c.mongodb.net/nursery_db?retryWrites=true&w=majority

# JWT Secret (used for admin token)
# Change this to a random string in production!
JWT_SECRET=my_super_secret_jwt_key_12345_change_me

# Default admin credentials (created on first startup)
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123

# Server port
PORT=5000
```

---

## Running the Application

### **Terminal 1: Backend**
```powershell
cd c:\Users\user\Desktop\nam\server
npm start
```
Runs on: `http://localhost:5000`

### **Terminal 2: Frontend** (new window)
```powershell
cd c:\Users\user\Desktop\nam\client
npm start
```
Runs on: `http://localhost:3000`

---

## Common MongoDB Atlas Links

- **Atlas Dashboard**: https://cloud.mongodb.com
- **Cluster Management**: https://cloud.mongodb.com/v2/
- **Connection Strings**: Check your cluster's "Connect" button
- **Database Access**: Manage users in your project
- **Network Access**: Manage IP whitelisting
- **Backups**: Auto-backups are included

---

## Next Steps

1. ✅ Add 5-10 plants via admin panel
2. ✅ Test all website features
3. ✅ Customize colors in `client/src/styles.css`
4. ✅ Update company info in components
5. ✅ Test on mobile (responsive design)
6. ✅ Deploy to production

---

## Keep These Secure

⚠️ **Never share these publicly:**
- Your MongoDB connection string
- Database username
- Database password
- JWT_SECRET

⚠️ **Never commit `.env` to GitHub**

---

## Support

- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/
- **Connection String Format**: https://docs.mongodb.com/manual/reference/connection-string/
- **Mongoose Guide**: https://mongoosejs.com/docs/

---

## ✅ You're Ready!

Your Green Nursery application is now connected to MongoDB Atlas (Cloud)!

**Next**: Log in to admin panel and start adding plants! 🌿

Visit: http://localhost:3000/admin/login

---

*Last Updated: March 1, 2026*
