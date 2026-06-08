/**
 * 📈 Monthly Report Model
 * نموذج التقرير الشهري
 */

const mongoose = require('mongoose');

const MonthlyReportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  },
  year: {
    type: Number,
    required: true
  },
  totalOrders: { type: Number, default: 0 },
  totalDelivered: { type: Number, default: 0 },
  totalReturned: { type: Number, default: 0 },
  totalProfit: { type: Number, default: 0 },
  totalExpenses: { type: Number, default: 0 },
  deliveryRate: { type: Number, default: 0 },
  returnRate: { type: Number, default: 0 },
  profitMargin: { type: Number, default: 0 },
  topArea: {
    area: String,
    orders: Number,
    profit: Number
  },
  topProduct: {
    productType: String,
    orders: Number,
    profit: Number
  },
  recommendations: [{ type: String }],
  status: { type: String, enum: ['draft', 'finalized', 'archived'], default: 'draft' },
  finalizedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
  collection: 'monthly_reports'
});

MonthlyReportSchema.index({ userId: 1, year: 1, month: 1 });

module.exports = mongoose.model('MonthlyReport', MonthlyReportSchema);