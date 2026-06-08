/**
 * 📦 Order Model
 * نموذج الطلب
 */

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, 'اسم الزبون مطلوب'],
    trim: true
  },
  primaryPhone: {
    type: String,
    required: [true, 'رقم الهاتف الأساسي مطلوب']
  },
  secondaryPhone: {
    type: String,
    default: ''
  },
  governorate: {
    type: String,
    required: [true, 'المحافظة مطلوبة']
  },
  area: {
    type: String,
    required: [true, 'المنطقة مطلوبة']
  },
  productType: {
    type: String,
    required: [true, 'نوع البضاعة مطلوب']
  },
  quantity: {
    type: Number,
    required: [true, 'عدد القطع مطلوب'],
    min: [1, 'عدد القطع يجب أن يكون 1 على الأقل']
  },
  orderSize: {
    type: String,
    enum: ['صغير', 'وسط', 'كبير'],
    required: true
  },
  sellPrice: {
    type: Number,
    required: [true, 'سعر البيع مطلوب'],
    min: [0, 'سعر البيع يجب أن يكون موجب']
  },
  deliveryFee: {
    type: Number,
    default: 5000,
    description: 'أجور التوصيل الثابتة'
  },
  totalPrice: {
    type: Number,
    required: true
  },
  profit: {
    type: Number,
    default: 0,
    description: 'الربح = السعر - أجور التوصيل'
  },
  status: {
    type: String,
    enum: ['جديد', 'موجل', 'واصل', 'راجع'],
    default: 'جديد'
  },
  orderNumber: {
    type: String,
    unique: true,
    required: true,
    description: 'رقم الطلب الفريد'
  },
  notes: {
    type: String,
    default: ''
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deliveredAt: { type: Date, default: null },
  returnedAt: { type: Date, default: null }
}, {
  timestamps: true,
  collection: 'orders'
});

// Pre-save hook - Calculate profit
OrderSchema.pre('save', function(next) {
  if (this.status === 'واصل') {
    this.profit = this.sellPrice - this.deliveryFee;
    this.deliveredAt = new Date();
  }
  if (this.status === 'راجع') {
    this.profit = 0;
    this.returnedAt = new Date();
  }
  this.updatedAt = new Date();
  next();
});

// Index for fast queries
OrderSchema.index({ orderNumber: 1 });
OrderSchema.index({ status: 1 });
OrderSchema.index({ userId: 1 });
OrderSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Order', OrderSchema);