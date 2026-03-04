#!/bin/bash

echo "🏥 Platinum Healthcare - Database Setup"
echo "========================================"
echo ""

# Check if MongoDB is running locally
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB is installed locally"
    
    # Check if MongoDB service is running
    if pgrep -x "mongod" > /dev/null; then
        echo "✅ MongoDB service is running"
        echo ""
        echo "Testing connection..."
        cd backend && node scripts/checkConnection.js
    else
        echo "⚠️  MongoDB is installed but not running"
        echo ""
        echo "Starting MongoDB..."
        
        if command -v brew &> /dev/null; then
            brew services start mongodb-community@7.0
            sleep 3
            echo ""
            echo "Testing connection..."
            cd backend && node scripts/checkConnection.js
        else
            echo "Please start MongoDB manually or use MongoDB Atlas"
            echo "See MONGODB_SETUP.md for instructions"
        fi
    fi
else
    echo "⚠️  MongoDB is not installed locally"
    echo ""
    echo "You have two options:"
    echo ""
    echo "1. Use MongoDB Atlas (Recommended - Free Cloud Database)"
    echo "   - Quick setup in 5 minutes"
    echo "   - No installation needed"
    echo "   - See MONGODB_SETUP.md for step-by-step guide"
    echo ""
    echo "2. Install MongoDB locally"
    echo "   On Mac with Homebrew:"
    echo "   brew tap mongodb/brew"
    echo "   brew install mongodb-community@7.0"
    echo "   brew services start mongodb-community@7.0"
    echo ""
    
    read -p "Would you like to open the setup guide? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command -v open &> /dev/null; then
            open MONGODB_SETUP.md
        else
            cat MONGODB_SETUP.md
        fi
    fi
fi
