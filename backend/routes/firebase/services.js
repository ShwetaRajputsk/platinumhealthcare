const express = require('express');
const { db } = require('../../config/firebase');

const router = express.Router();

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('services')
      .where('isActive', '==', true)
      .get();

    const services = [];
    snapshot.forEach(doc => {
      services.push({
        id: doc.id,
        ...doc.data()
      });
    });

    res.json({ services });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
