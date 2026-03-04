# Firebase Setup Instructions

## Step 1: Download Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **platinum-healthcare**
3. Click on the gear icon (⚙️) next to "Project Overview"
4. Select **Project Settings**
5. Go to the **Service Accounts** tab
6. Click **Generate New Private Key**
7. Click **Generate Key** to download the JSON file
8. Rename the downloaded file to `serviceAccountKey.json`
9. Move it to `backend/config/serviceAccountKey.json`

## Step 2: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Choose **Start in production mode** (we'll set rules later)
4. Select your preferred location (e.g., `us-central`)
5. Click **Enable**

## Step 3: Enable Firebase Authentication

1. In Firebase Console, go to **Authentication**
2. Click **Get Started**
3. Go to **Sign-in method** tab
4. Enable **Email/Password** authentication
5. Click **Save**

## Step 4: Enable Firebase Storage

1. In Firebase Console, go to **Storage**
2. Click **Get Started**
3. Choose **Start in production mode**
4. Click **Done**

## Step 5: Set Firestore Security Rules

Go to **Firestore Database** > **Rules** and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all documents
    match /{document=**} {
      allow read: if true;
    }
    
    // Allow write access only to authenticated users
    match /{document=**} {
      allow write: if request.auth != null;
    }
  }
}
```

## Step 6: Set Storage Security Rules

Go to **Storage** > **Rules** and paste:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Important Notes

- **NEVER commit `serviceAccountKey.json` to Git**
- Add it to `.gitignore`
- Keep your service account key secure
- For production, use environment variables for sensitive data
