# Nursery (Plant Shop) - Fullstack Project

This repository contains a fullstack Nursery (Plant Shop) app:

- **Frontend**: React.js with modern UI
- **Backend**: Node.js + Express + MongoDB + Mongoose
- **Authentication**: JWT-based admin authentication
- **Image Upload**: Multer (stores images locally in `server/uploads`)

## 📁 Folders

- `server/` - Express API with MongoDB integration
- `client/` - React frontend with responsive design
- `DATABASE_SETUP.md` - Detailed database setup guide
- `SETUP_CHECKLIST.md` - Quick setup checklist

## 🚀 Quick Start (5 Minutes)

### 1️⃣ Setup Database

**Choose One:**

**Option A: Local MongoDB (Easiest)**
```powershell
# Install MongoDB from https://www.mongodb.com/try/download/community
# Then create server/.env file with:
MONGO_URI=mongodb://localhost:27017/nursery_db
JWT_SECRET=your_jwt_secret_here
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

**Option B: MongoDB Atlas (Cloud)**
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create free M0 cluster
3. Get connection string
4. Add to `server/.env`:
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/nursery_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123
PORT=5000
```

📖 **For detailed setup**: See `DATABASE_SETUP.md`

### 2️⃣ Backend Setup & Start

```powershell
cd server
npm install
npm start
```

**Expected Output:**
```
MongoDB connected
Default admin created: admin@nursery.com
Server running on port 5000
```

✅ Test: Visit http://localhost:5000 - Should see JSON response

### 3️⃣ Frontend Setup & Start

**In a new terminal:**
```powershell
cd client
npm install
npm start
```

**Opens automatically at**: http://localhost:3000

## 🌐 Features

### Public Website
- ✅ Home page with featured plants
- ✅ Product listing with search
- ✅ Product details page
- ✅ About page with team info
- ✅ Contact page with form
- ✅ Responsive design
- ✅ Green nature theme

### Admin Panel
- ✅ Admin login (JWT authentication)
- ✅ Add products with image upload
- ✅ Edit product details
- ✅ Delete products
- ✅ View all products
- ✅ Image preview

### Backend APIs
- ✅ POST `/api/auth/login` - Admin login
- ✅ GET `/api/products` - List products
- ✅ GET `/api/products/:id` - Product details
- ✅ POST `/api/products` - Create product (protected)
- ✅ PUT `/api/products/:id` - Update product (protected)
- ✅ DELETE `/api/products/:id` - Delete product (protected)
- ✅ POST `/api/products/upload` - Image upload (protected)

## 📖 Page Routes

| Route | Page | Access |
|-------|------|--------|
| `/` | Home | Public |
| `/products` | All Plants | Public |
| `/products/:id` | Plant Details | Public |
| `/about` | About Us | Public |
| `/contact` | Contact Us | Public |
| `/admin/login` | Admin Login | Public |
| `/admin/dashboard` | Admin Panel | Protected |

## 🔑 Default Admin Credentials

```
Email: admin@nursery.com
Password: admin123
```

Change these values in `server/.env` before production!

## 📸 Image Upload

Images are:
- Uploaded via Multer in `server/routes/products.js`
- Stored in `server/uploads/` folder
- Served statically at `http://localhost:5000/uploads/<filename>`
- Referenced in products as `imagePath`

## 🎨 Customization

### Change Theme Colors
Edit `client/src/styles.css`:
```css
:root {
  --primary: #27ae60;      /* Main green */
  --accent: #f39c12;       /* Orange highlights */
  --text-dark: #2c3e50;    /* Dark text */
}
```

### Update Company Info
- **Home page**: `client/src/components/Home.js`
- **About page**: `client/src/components/About.js`
- **Contact page**: `client/src/components/Contact.js`
- **Footer**: `client/src/App.js`

### Change Admin Email/Password
Edit `server/.env`:
```
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=newpassword
```

Then restart the server.

## 🗄️ Database Collections

### admins
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (bcrypt hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### products
```javascript
{
  _id: ObjectId,
  name: String,
  price: Number,
  description: String,
  imagePath: String,  // "/uploads/filename.jpg"
  createdAt: Date,
  updatedAt: Date
}
```

## 🛠️ Tech Stack

**Frontend:**
- React 18.2.0
- React Router 6.14.1
- CSS3 (responsive)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt (password hashing)
- Multer (file upload)
- CORS

## ⚙️ Environment Variables

Create `server/.env`:

```env
# Database
MONGO_URI=mongodb://localhost:27017/nursery_db

# JWT Secret (change this!)
JWT_SECRET=your_super_secret_key_12345

# Admin credentials
ADMIN_EMAIL=admin@nursery.com
ADMIN_PASSWORD=admin123

# Server
PORT=5000
```

**Never commit `.env` to Git!**

## 📱 Responsive Design

- Desktop: Full layout
- Tablet: Optimized grid (2-3 columns)
- Mobile: Single column, touch-friendly buttons

## 🔒 Security Features

- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Protected API routes
- ✅ CORS enabled
- ✅ Environment variables for secrets

## 🚢 Deployment

### Deploy Backend to Heroku

```bash
cd server
git init
heroku login
heroku create nursery-app
git push heroku main
```

Set environment variables on Heroku:
```bash
heroku config:set MONGO_URI=your_atlas_connection_string
heroku config:set JWT_SECRET=your_secret
```

### Deploy Frontend to Vercel

```bash
cd client
npm install -g vercel
vercel
```

Set `REACT_APP_API_URL` in `.env.local` for production API URL.

## 📝 File Structure

```
nam/
├── server/
│   ├── models/          (Mongoose schemas)
│   ├── routes/          (API endpoints)
│   ├── middleware/      (Auth middleware)
│   ├── uploads/         (Uploaded images)
│   ├── server.js        (Main server file)
│   ├── package.json
│   ├── .env.example
│   └── .env             (create this)
│
├── client/
│   ├── src/
│   │   ├── components/  (React components)
│   │   ├── App.js       (Main app)
│   │   └── styles.css   (Global styles)
│   ├── public/
│   ├── package.json
│   └── node_modules/
│
├── DATABASE_SETUP.md    (Detailed DB guide)
├── SETUP_CHECKLIST.md   (Quick checklist)
└── README.md            (This file)
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify MongoDB is running: `Get-Service MongoDB`
- Check MONGO_URI in `.env`
- For Atlas: Verify IP is whitelisted

### Port Already in Use
```powershell
netstat -ano | findstr :5000
taskkill /PID <number> /F
```

### Image Upload Not Working
- Create `server/uploads` folder if missing
- Ensure folder has write permissions
- Restart server

### Admin Login Fails
- Check `.env` has correct ADMIN_EMAIL and ADMIN_PASSWORD
- Verify database has admin user (server creates it on startup)

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Mongoose Docs](https://mongoosejs.com)
- [JWT Guide](https://jwt.io)

## 📄 License

MIT License - feel free to use for any purpose

## 👥 Support

For issues or questions:
1. Check `DATABASE_SETUP.md` for detailed guides
2. Check `SETUP_CHECKLIST.md` for quick reference
3. Review browser console (F12) for errors
4. Check terminal output for server errors

---

## 🎉 Quick Commands Reference

```powershell
# Start MongoDB (Windows)
Start-Service MongoDB

# Start Backend
cd server; npm start

# Start Frontend (new terminal)
cd client; npm start

# Install dependencies
npm install

# Build for production
npm run build

# View database in Compass
# Download: https://www.mongodb.com/products/compass
```

---

**Happy planting! 🌿 Your Green Nursery is ready!**
