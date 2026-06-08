# 👗 نظام إدارة مبيعات الفساتين النسائية

## 🎉 تم إنشاء المشروع بنجاح!

### ✅ ما تم إنجازه:

#### 📁 Backend (الخادم)
- ✅ تم إعداد Express Server
- ✅ نماذج البيانات الكاملة (User, Order, DailyReport, MonthlyReport)
- ✅ جميع المسارات (Routes) الأساسية
- ✅ جاهز للمصادقة والأمان
- ✅ مدعوم بـ MongoDB

#### 🌐 Web Dashboard (لوحة التحكم)
- ✅ واجهة React.js حديثة
- ✅ لوحة تحكم رئيسية بإحصائيات
- ✅ صفحات الطلبات والتقارير
- ✅ خدمات API متقدمة
- ✅ دعم كامل للعربية

#### 📱 Mobile App (تطبيق الجوال)
- ✅ تطبيق React Native كامل
- ✅ شاشات جميع الوظائف
- ✅ نموذج إضافة الطلبات
- ✅ عرض الإحصائيات والتقارير
- ✅ دعم كامل للعربية

---

## 🚀 الخطوات التالية:

### 1️⃣ تشغيل Backend
```bash
cd backend
npm install
npm run dev
```

### 2️⃣ تشغيل Web
```bash
cd web
npm install
npm run dev
```

### 3️⃣ تشغيل Mobile
```bash
cd mobile
npm install
npx react-native run-android
```

---

## 📊 معادلة حساب الأرباح

```
الربح = سعر البيع - 5000 (أجور التوصيل)
```

### حالات الطلب:
- 🟢 **جديد**: الطلب مدخل في النظام
- 🟡 **موجل**: الطلب بانتظار التوصيل
- 🔵 **واصل**: وصل للزبون (يتم حساب الربح)
- 🔴 **راجع**: تم إرجاع الطلب (لا ربح)

---

## 🗂️ هيكل المشروع

```
dress-sales-system/
├── backend/
│   ├── models/          ✅ نماذج البيانات
│   ├── routes/          ✅ المسارات
│   ├── server.js        ✅ الخادم الرئيسي
│   └── package.json     ✅
├── web/
│   ├── src/
│   │   ├── App.jsx      ✅ الواجهة الرئيسية
│   │   └── services/    ✅ خدمات API
│   └── package.json     ✅
├── mobile/
│   ├── src/
│   │   ├── App.js       ✅ التطبيق الرئيسي
│   │   └── services/    ✅ خدمات API
│   └── package.json     ✅
└── README.md           ✅
```

---

## 🎯 المميزات الرئيسية

### 📱 للجوال:
- إضافة طلبات جديدة بسهولة
- تتبع حالة الطلبات الفوري
- تنبيهات يومية الساعة 8 مساءً
- عرض الأرباح والإحصائيات
- واجهة جميلة وسهلة

### 💻 للويب:
- لوحة تحكم متقدمة
- إدارة كاملة للطلبات
- تقارير شهرية شاملة
- رسوم بيانية للأرباح
- إدارة ملفات Excel

---

## 📞 الدعم التقني

### تم إنشاء المشروع بـ:
- ✅ **Backend**: Node.js + Express + MongoDB
- ✅ **Web**: React + Redux + Tailwind CSS
- ✅ **Mobile**: React Native + Redux
- ✅ **الأمان**: JWT + bcrypt
- ✅ **المزامنة**: Axios + API

---

## 🔗 الروابط المهمة

- **GitHub Repository**: https://github.com/hussainpc79-arch/dress-sales-system
- **Backend API**: http://localhost:5000/api
- **Web App**: http://localhost:3000
- **Mobile**: Android/iOS

---

## 📝 التعليمات المهمة

### قبل البدء:
1. تثبيت Node.js
2. تثبيت MongoDB
3. نسخ `.env.example` إلى `.env` وملء البيانات
4. تشغيل `npm install` في كل مجلد

### ملف .env للـ Backend:
```
MONGODB_URI=mongodb://localhost:27017/dress-sales
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
TIMEZONE=Asia/Baghdad
NOTIFICATION_HOUR=20
NOTIFICATION_MINUTE=0
```

---

## 🎊 التطبيق جاهز للاستخدام!

### ماذا تستطيع فعله الآن:

1. ✅ إضافة طلبات جديدة من الجوال والويب
2. ✅ تتبع حالة الطلبات (جديد/موجل/واصل/راجع)
3. ✅ حساب الأرباح تلقائياً
4. ✅ الحصول على تقارير يومية
5. ✅ عرض الإحصائيات والرسوم البيانية
6. ✅ إدارة ملفات Excel
7. ✅ تنبيهات يومية
8. ✅ تقارير شهرية شاملة

---

## 💬 هل تريد تطويرات إضافية؟

- إضافة ميزات جديدة
- تحسينات الواجهة
- تكامل مع خدمات أخرى
- دعم لغات إضافية
- أي استفسار تقني

---

**تم بناء النظام بـ ❤️ من قبل GitHub Copilot - 2026**

**استمتع بإدارة مبيعات الفساتين! 👗✨**