/**
 * 📊 Daily Report Model
 * نموذج التقرير اليومي
 */

const mongoose = require('mongoose');

const DailyReportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportDate: {
    type: Date,
    required: true,
    default: () => new Date().setHours(0, 0, 0, 0)
  },
  totalOrders: { type: Number, default: 0 },
  newOrders: { type: Number, default: 0 },
  deliveredOrders: { type: Number, default: 0 },
  returnedOrders: { type: Number, default: 0 },
  delayedOrders: { type: Number, default: 0 },
  totalProfit: { type: Number, default: 0 },
  totalDeliveryFees: { type: Number, default: 0 },
  averageProfitPerOrder: { type: Number, default: 0 },
  deliveryRate: { type: Number, default: 0 },
  returnRate: { type: Number, default: 0 },
  notes: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'completed', 'reviewed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
  collection: 'daily_reports'
});

DailyReportSchema.index({ userId: 1, reportDate: -1 });

module.exports = mongoose.model('DailyReport', DailyReportSchema);