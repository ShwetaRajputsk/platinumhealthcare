const express = require('express');
const { db } = require('../../config/firebase');

const router = express.Router();

// @route   GET /api/doctors
// @desc    Get all doctors
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Set cache headers for better performance
    res.set('Cache-Control', 'public, max-age=300'); // Cache for 5 minutes

    const { 
      page = 1, 
      limit = 10, 
      department, 
      specialization, 
      search, 
      featured,
      isActive
    } = req.query;

    let query = db.collection('doctors');

    // Apply filters
    if (isActive !== undefined) {
      query = query.where('isActive', '==', isActive === 'true');
    } else {
      query = query.where('isActive', '==', true); // Default to active doctors
    }

    if (department) {
      query = query.where('departmentId', '==', department);
    }

    if (featured) {
      query = query.where('featured', '==', featured === 'true');
    }

    // Get all matching documents
    const snapshot = await query.get();
    let doctors = [];

    snapshot.forEach(doc => {
      doctors.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Apply search filter (client-side since Firestore doesn't support full-text search)
    if (search) {
      const searchLower = search.toLowerCase();
      doctors = doctors.filter(doctor => 
        doctor.name.toLowerCase().includes(searchLower) ||
        doctor.specialization.toLowerCase().includes(searchLower)
      );
    }

    // Apply specialization filter
    if (specialization) {
      const specLower = specialization.toLowerCase();
      doctors = doctors.filter(doctor => 
        doctor.specialization.toLowerCase().includes(specLower)
      );
    }

    // Sort
    if (featured === 'true') {
      doctors.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else {
      doctors.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    // Pagination
    const total = doctors.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedDoctors = doctors.slice(startIndex, endIndex);

    // Populate department info - batch fetch all departments at once
    const departmentIds = [...new Set(paginatedDoctors.map(d => d.departmentId).filter(Boolean))];
    const departmentsMap = {};
    
    if (departmentIds.length > 0) {
      // Fetch all departments in parallel
      const deptPromises = departmentIds.map(id => db.collection('departments').doc(id).get());
      const deptDocs = await Promise.all(deptPromises);
      
      deptDocs.forEach((deptDoc, index) => {
        if (deptDoc.exists) {
          departmentsMap[departmentIds[index]] = {
            _id: deptDoc.id,
            name: deptDoc.data().name,
            slug: deptDoc.data().slug,
            color: deptDoc.data().color
          };
        }
      });
    }

    // Assign departments to doctors
    paginatedDoctors.forEach(doctor => {
      if (doctor.departmentId && departmentsMap[doctor.departmentId]) {
        doctor.department = departmentsMap[doctor.departmentId];
      }
    });

    res.json({
      success: true,
      data: {
        doctors: paginatedDoctors,
        totalPages: Math.ceil(total / limit),
        currentPage: parseInt(page),
        total
      }
    });
  } catch (error) {
    console.error('Get doctors error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/doctors/:id
// @desc    Get doctor by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    // Set cache headers for better performance
    res.set('Cache-Control', 'public, max-age=600'); // Cache for 10 minutes

    const doctorDoc = await db.collection('doctors').doc(req.params.id).get();

    if (!doctorDoc.exists) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const doctor = {
      id: doctorDoc.id,
      ...doctorDoc.data()
    };

    // Populate department
    if (doctor.departmentId) {
      const deptDoc = await db.collection('departments').doc(doctor.departmentId).get();
      if (deptDoc.exists) {
        doctor.department = {
          _id: deptDoc.id,
          ...deptDoc.data()
        };
      }
    }

    res.json({
      success: true,
      data: {
        doctor
      }
    });
  } catch (error) {
    console.error('Get doctor error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
