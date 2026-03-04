const { db } = require('../config/firebase');

(async () => {
  try {
    console.log('🔍 Checking Firebase Authentication Setup...\n');
    
    const usersSnapshot = await db.collection('users').get();
    console.log('✅ Total users in Firebase:', usersSnapshot.size);
    
    usersSnapshot.forEach(doc => {
      const user = doc.data();
      console.log('\n👤 User found:');
      console.log('   ID:', doc.id);
      console.log('   Email:', user.email);
      console.log('   Role:', user.role);
      console.log('   Active:', user.isActive);
      console.log('   Password hash exists:', !!user.password);
    });
    
    console.log('\n📝 Login Credentials:');
    console.log('   Email: admin@platinumhealthuae.com');
    console.log('   Password: admin123456');
    console.log('\n🔐 Authentication Method:');
    console.log('   - User data stored in Firebase Firestore');
    console.log('   - Password hashed with bcrypt');
    console.log('   - JWT tokens for session management');
    console.log('   - Login endpoint: POST /api/auth/login');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
})();
