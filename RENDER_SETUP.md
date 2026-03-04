# Render Deployment Setup

## Environment Variables to Add in Render

Go to your Render service dashboard → Environment tab and add these variables:

### Required Firebase Variables

```
FIREBASE_PROJECT_ID=platinum-healthcare

FIREBASE_PRIVATE_KEY_ID=c143be72cad1b9ba7e98c22c299ac0b64206ec44

FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDvFJMCblBbJe+d
5QuRm5hFBsby211XbSBNKmVneG+cf9RQh1ffgA5Dl46rNV8fkQ6Vh5P+m05/KEiY
pz7KJLeWlFm5NpQKKEqOBFAeRpL1ZXQbzPGDjh5GoDfB05CSgcb50QI2Qv2bvUaz
7WWsNpo6kAdaJU/+9zMfhajvr5qwQ4ebyuyZYfgansiwWvzBQOa04o7o8FoAqOq0
hZm1Xrk2asZEeDAAYwmxfZji/d1SWOhQN5GXZLRb7LiYf2cOIPcKnspvv8zVRer4
lFaFGx+d2L/9oUlsImmq4Zmuof901wwKiMwIJWbcsYb5rEp+n0Ebr3S4nWHuExED
KAEBNJlFAgMBAAECggEADOWf5eUBh16NMIf8jxxE+I7xsy7LjZMgx54z3i23B6A1
rypok8aaqQwcnCEYQoxWrGZQliQr9dwRySUB1Bxq8uqJyd38hRfAqIHpuIMMxm7J
9qigQVKB+5laU1BltMw0vvaGwgVBx7b21hnw/tCV5/bWZAct6452PuBnnpZrJ9BC
EXqpHxuS/ME0WbPNQD293nFz6dAiYbjBUX4Sk2g2FZhSr4Fg8czrgaYrplZrRAM7
zhxnQwZfGgS3q2L7w1kSbC6NmK35rDRx9owABruV5Ye5IZASsNwyhIPRBkF41fbQ
YTDSxdQwpbAJ302Jv2Apt7x+hhFCAzfgxQUSwxjBwQKBgQD8T1Hhn9vVWYikGg6i
tf1OA6CNVZp25OJsBC0iZiHKq8no+TRo+/y6Sj9EfUCNip9uRk3zCLwKHOB+f2Sh
thzn7HkDEDhGv9KJBarWwSHD8Guh6ptKbxUcOr+Mpa8Kqgl4NlGipeI5n2LJ+pAf
zFG/t3DVB+XlmGe80Vr//flafQKBgQDyk7i4x6d8kcN3Eijlv1pTZ7Aw8BFGXxWX
AFUU9rGZl6INDMr2PanAa83/TQSX97i3rzzj32aFC/AnXCiv7ya8n07UB0QnvgRW
xh2wzsRzr4eShBeAWFK31PRR6uLl9ucvtQofxzs5p6exHtIiU71HRrvH6R4D2uo7
RKOmALUsaQKBgDFCXy8Yobe+mjHHsJHNzB1+EctmKhkKSLZj/lfX7sL91Ra6CKRy
hf3s3vtFJOQ9azEBYtiPHP8wchfgUUpNHsmc3mddtE8DxlvgEmGJJUl219ytzBG1
LD7trVYNRuZjGiQxHrENh+ROHOBoHdlHb7JpYwsEVrsDjUVM7mJKOHOVAoGBAIOH
Q361iwQJSTHz38cLJV/Z9ffjA4rjnaI9pOR0CsJcLJrk19wCfVt/WLfYO+hmgnre
gqaQCFeVrIa6+rjCdH+L5cMjmXnvFw0x6QFoa67KezkfdFq8CUXyKvOL57GHWb1N
bYrjjSJq3Is2Sfwg6Z2PJdx0czjl52Fxi0ZEVfgZAoGBAL1ue6/sSY56yMYu7/Sg
wyE5ooOrbutt7u7esnyW6/Cew/DC47DeG5wXisRW4HeWOaiemfsfr6PL/x4xFiya
r6u5Hl8/c9TavH61SEBnyORDew2+Z6lbKpW6SDPC/8z8/2nSagVPiZmNLURul4FA
t1Qbqc/U+4X3waFjxTq2FKy7
-----END PRIVATE KEY-----

FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@platinum-healthcare.iam.gserviceaccount.com

FIREBASE_CLIENT_ID=115840960298769149882

FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40platinum-healthcare.iam.gserviceaccount.com
```

### Optional Variables

```
PORT=5000
NODE_ENV=production
```

## Steps to Add Environment Variables in Render

1. Go to your Render dashboard: https://dashboard.render.com/
2. Click on your backend service
3. Go to the "Environment" tab in the left sidebar
4. Click "Add Environment Variable"
5. Add each variable one by one:
   - Key: `FIREBASE_PROJECT_ID`
   - Value: `platinum-healthcare`
   - Click "Save Changes"
6. Repeat for all variables above

## Important Notes

- For `FIREBASE_PRIVATE_KEY`, copy the ENTIRE private key including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines
- Make sure there are no extra spaces or line breaks when pasting
- After adding all variables, Render will automatically redeploy your service
- The deployment should succeed once all Firebase credentials are configured

## Verify Deployment

After adding the environment variables:
1. Check the deployment logs in Render
2. You should see: `✅ Firebase Admin initialized successfully`
3. Your backend API should be accessible at your Render URL

## Next Step: Frontend Deployment

Once your backend is running on Render, deploy your frontend to Netlify:
1. Set the `REACT_APP_API_URL` environment variable in Netlify to your Render backend URL
2. Example: `https://your-backend-name.onrender.com`
