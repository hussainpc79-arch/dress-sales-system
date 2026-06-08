/**
 * 🔐 Authentication Routes
 * مسارات المصادقة
 */

const express = require('express');
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', (req, res) => {
  res.json({ 
    success: true,
    message: '✅ User registered successfully',
    data: req.body 
  });
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
  res.json({ 
    success: true,
    message: '🔓 User logged in successfully',
    token: 'jwt_token_here'
  });
});

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post('/logout', (req, res) => {
  res.json({ 
    success: true,
    message: '🔒 User logged out successfully'
  });
});

module.exports = router;