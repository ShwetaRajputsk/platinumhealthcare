const express = require('express');
const { db } = require('../../config/firebase');

const router = express.Router();

// @route   POST /api/appointments
// @desc    Create new appointment
// @access  Public
router.post('/', async (req, res) => {
  try {
    const appointmentData = {
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const docRef = await db.collection('appointments').add(appointmentData);

    res.status(201).json({
      message: 'Appointment created successfully',
      id: docRef.id
    });
  } catch (error) {
    console.error('Create appointment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
