#!/bin/bash

echo "🚀 Opening MongoDB Atlas signup page..."
echo ""
echo "Follow these steps:"
echo "1. Sign up (it's FREE)"
echo "2. Create a FREE cluster (M0)"
echo "3. Create database user"
echo "4. Get connection string"
echo "5. Update backend/.env"
echo ""
echo "See QUICK_START.md for detailed instructions"
echo ""

# Open MongoDB Atlas in default browser
if command -v open &> /dev/null; then
    open "https://www.mongodb.com/cloud/atlas/register"
elif command -v xdg-open &> /dev/null; then
    xdg-open "https://www.mongodb.com/cloud/atlas/register"
else
    echo "Please open this URL in your browser:"
    echo "https://www.mongodb.com/cloud/atlas/register"
fi
