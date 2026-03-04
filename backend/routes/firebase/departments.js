const express = require('express');
const { db } = require('../../config/firebase');

const router = express.Router();

// @route   GET /api/departments
// @desc    Get all departments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('departments')
      .where('isActive', '==', true)
      .orderBy('order', 'asc')
      .get();

    const departments = [];
    snapshot.forEach(doc => {
      departments.push({
        id: doc.id,
        ...doc.data()
      });
    });

    res.json({ departments });
  } catch (error) {
    console.error('Get departments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
