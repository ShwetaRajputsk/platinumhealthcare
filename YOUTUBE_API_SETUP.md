# YouTube API Setup Guide

## Overview
The Video Blogs section on the homepage fetches the latest videos from your YouTube channel (ID: `UC1CRRy_C7q3ycLsMJ1zTdsw`).

## How It Works

### Without API Key (Current Setup)
- The component displays 4 fallback videos with static images
- Clicking videos opens your YouTube channel
- No API calls are made

### With API Key (Recommended)
- Automatically fetches your latest 4 videos from YouTube
- Shows real video thumbnails and titles
- Clicking opens video in a modal player
- Videos stay synced with your channel

## Setting Up YouTube API Key (Optional)

### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Name it something like "Platinum Healthcare Website"

### Step 2: Enable YouTube Data API v3
1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "YouTube Data API v3"
3. Click on it and press "Enable"

### Step 3: Create API Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. (Optional) Click "Restrict Key" to limit it to YouTube Data API v3 only

### Step 4: Add API Key to Your Project
1. Open `frontend/.env` file
2. Add your API key:
   ```
   REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE
   ```
3. Restart your development server

### Step 5: Test
1. Visit your homepage
2. Scroll to "Our Video Blogs" section
3. You should see your latest 4 YouTube videos
4. Click any video to play it in a modal

## API Quota Information
- YouTube Data API v3 has a daily quota limit (10,000 units/day for free tier)
- Each video fetch costs approximately 100 units
- This means you can fetch videos ~100 times per day
- The component caches results during page session

## Fallback Behavior
If the API key is not set or quota is exceeded:
- Component automatically shows static fallback videos
- Users can still click to visit your YouTube channel
- No errors are shown to users

## Current Fallback Videos
1. Carbon Laser Treatments
2. Dental Care
3. PRP Hair Transplantation
4. HIFU Skin Treatment

## Channel Information
- Channel ID: `UC1CRRy_C7q3ycLsMJ1zTdsw`
- Channel URL: https://www.youtube.com/channel/UC1CRRy_C7q3ycLsMJ1zTdsw

## Troubleshooting

### Videos Not Loading
1. Check if API key is correctly set in `.env`
2. Verify the API key is enabled for YouTube Data API v3
3. Check browser console for error messages
4. Verify you haven't exceeded daily quota

### Wrong Videos Showing
- The component fetches the 4 most recent videos from your channel
- Make sure videos are public (not unlisted or private)
- Videos are ordered by publish date (newest first)

## Cost
- YouTube Data API v3 is FREE for most use cases
- Daily quota: 10,000 units
- No credit card required for basic usage
