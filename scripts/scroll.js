// إنشاء كائن IntersectionObserver
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // إضافة الفئة 'active' إلى العنصر الذي يتم مشاهدته
      entry.target.classList.add('active');
    } else {
      // إزالة الفئة 'active' إذا لم يكن العنصر مرئيًا
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.8 }); // نسبة الرؤية المطلوبة

// مراقبة جميع عناصر الـ section
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
