# 🚀 Quick Start - MongoDB Atlas Setup

## Step-by-Step Guide (5 minutes)

### 1. Create MongoDB Atlas Account
- Open: https://www.mongodb.com/cloud/atlas/register
- Sign up with Google or Email (FREE)

### 2. Create Free Database
- Click **"Create"** or **"Build a Database"**
- Select **"M0 FREE"** (the free tier)
- Choose **AWS** and region **Mumbai** or **Singapore** (closest to UAE)
- Cluster Name: Keep default or name it `platinum-healthcare`
- Click **"Create Cluster"** (takes 1-3 minutes)

### 3. Create Database User
- You'll see a popup "Security Quickstart"
- **Username**: `platinumadmin`
- **Password**: Click "Autogenerate Secure Password" and COPY IT!
- Or create your own password (remember it!)
- Click **"Create User"**

### 4. Add Your IP Address
- In the same popup, under "Where would you like to connect from?"
- Click **"Add My Current IP Address"**
- Or click **"Add a Different IP Address"** and enter `0.0.0.0/0` (allows from anywhere)
- Click **"Finish and Close"**

### 5. Get Connection String
- Click **"Connect"** button on your cluster
- Choose **"Drivers"** or **"Connect your application"**
- Copy the connection string (looks like this):
  ```
  mongodb+srv://platinumadmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
  ```
- Replace `<password>` with your actual password
- Add database name at the end:
  ```
  mongodb+srv://platinumadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/platinum-healthcare?retryWrites=true&w=majority
  ```

### 6. Update .env File
Open `backend/.env` and replace this line:
```
MONGODB_URI=mongodb://localhost:27017/platinum-healthcare
```

With your Atlas connection string:
```
MONGODB_URI=mongodb+srv://platinumadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/platinum-healthcare?retryWrites=true&w=majority
```

### 7. Test Connection
```bash
node scripts/checkConnection.js
```

You should see: ✅ Successfully connected to MongoDB!

### 8. Populate Database
```bash
node scripts/seedData.js
```

### 9. Start Your Application
```bash
# Start backend (from backend folder)
npm run dev

# In a new terminal, start frontend
cd ../frontend
npm start
```

---

## 🎉 Done!

Your website will be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5001

Admin Login:
- URL: http://localhost:3000/admin/login
- Email: admin@platinumhealthuae.com
- Password: admin123456

---

## ⚠️ Troubleshooting

### "Authentication failed"
- Check your password in the connection string
- Make sure there are no special characters that need URL encoding
- If password has special chars like @, #, %, encode them:
  - @ becomes %40
  - # becomes %23
  - % becomes %25

### "IP not whitelisted"
- Go to MongoDB Atlas → Network Access
- Add IP: 0.0.0.0/0 (allows all IPs)

### Still having issues?
- Make sure you copied the FULL connection string
- Check that you replaced <password> with your actual password
- Verify the database name is at the end: `/platinum-healthcare?`

---

## 📝 Example Connection String

Here's what a complete connection string looks like:

```
MONGODB_URI=mongodb+srv://platinumadmin:MySecurePass123@cluster0.abc123.mongodb.net/platinum-healthcare?retryWrites=true&w=majority
```

Replace:
- `platinumadmin` - your username
- `MySecurePass123` - your password
- `cluster0.abc123.mongodb.net` - your cluster URL (from Atlas)
- `platinum-healthcare` - database name
