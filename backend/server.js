/**
 * 👗 Dress Sales Management System - Backend Server
 * نظام إدارة مبيعات الفساتين النسائية
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cron = require('node-cron');

// Import Routes
const authRoutes = require('./routes/auth');
const ordersRoutes = require('./routes/orders');
const reportsRoutes = require('./routes/reports');
const excelRoutes = require('./routes/excel');

const app = express();

// ============================================
// 🔒 Middleware Security
// ============================================
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : '*',
  credentials: true
}));

// ============================================
// 📝 Body Parser
// ============================================
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ============================================
// 🗄️ MongoDB Connection
// ============================================
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dress-sales', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ============================================
// 📍 API Routes
// ============================================
app.use('/api/auth', authRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/excel', excelRoutes);

// ============================================
// 🏠 Health Check
// ============================================
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date()
  });
});

// ============================================
// 📊 System Info
// ============================================
app.get('/api', (req, res) => {
  res.json({
    name: '👗 Dress Sales Management System',
    version: '1.0.0',
    description: 'نظام إدارة مبيعات الفساتين النسائية',
    endpoints: {
      auth: '/api/auth',
      orders: '/api/orders',
      reports: '/api/reports',
      excel: '/api/excel'
    },
    status: 'running'
  });
});

// ============================================
// ⏰ Scheduled Tasks (Cron Jobs)
// ============================================

// Daily notification at 8 PM
cron.schedule('0 20 * * *', async () => {
  console.log('📢 Daily notification sent');
});

// Monthly report on 1st of month at 9 AM
cron.schedule('0 9 1 * *', async () => {
  console.log('📊 Monthly report generated');
});

// ============================================
// ❌ Error Handling
// ============================================
app.use((err, req, res, next) => {
  console.error('🔴 Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// ============================================
// 404 Handler
// ============================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// ============================================
// 🚀 Start Server
// ============================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║  👗 Dress Sales Management System          ║
║  نظام إدارة مبيعات الفساتين النسائية      ║
╠════════════════════════════════════════════╣
║  ✅ Server running on port: ${PORT}
║  📝 Environment: ${process.env.NODE_ENV || 'development'}
║  🗄️  Database: Connected
║  ⏰ Timezone: ${process.env.TIMEZONE || 'Asia/Baghdad'}
╚════════════════════════════════════════════╝
  `);
});

module.exports = app;