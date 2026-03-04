#!/bin/bash

# Start MongoDB if not running
if ! pgrep -x "mongod" > /dev/null; then
    echo "Starting MongoDB..."
    mongod --dbpath /opt/homebrew/var/mongodb &
    sleep 3
fi

# Start backend server
echo "Starting backend server..."
cd backend && npm run dev &

# Wait a moment for backend to start
sleep 5

# Start frontend server
echo "Starting frontend server..."
cd ../frontend && npm start &

echo "🚀 All servers started!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:5001/api"
echo "💾 MongoDB: mongodb://localhost:27017"

# Keep script running
wait