const express = require('express');
const { db } = require('../../config/firebase');

const router = express.Router();

// @route   GET /api/testimonials
// @desc    Get all approved testimonials
// @access  Public
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('testimonials')
      .where('isApproved', '==', true)
      .where('isPublished', '==', true)
      .get();

    const testimonials = [];
    snapshot.forEach(doc => {
      testimonials.push({
        id: doc.id,
        ...doc.data()
      });
    });

    res.json({ testimonials });
  } catch (error) {
    console.error('Get testimonials error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
