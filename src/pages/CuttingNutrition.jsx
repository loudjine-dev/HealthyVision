import React from "react";
import styles from "../styles/Nutrition.module.css";

export default function CuttingNutrition() {
  const tips = [
    {
      title: "عجز سعرات تدريجي",
      text: "قلّل السعرات بمقدار 300–500 سعرة يوميًا لتفادي فقدان العضلات."
    },
    {
      title: "رفع البروتين",
      text: "البروتين العالي يحافظ على الكتلة العضلية أثناء خسارة الدهون."
    },
    {
      title: "كربوهيدرات ذكية",
      text: "استخدم الكربوهيدرات المعقدة وركّزها حول التمرين."
    },
    {
      title: "دهون معتدلة",
      text: "الدهون ضرورية لصحة الهرمونات حتى أثناء التنشيف."
    },
    {
      title: "الخضار والألياف",
      text: "الألياف تزيد الشبع وتحسّن الهضم وتقلل الجوع."
    },
    {
      title: "شرب الماء بكثرة",
      text: "الترطيب الجيد يدعم الحرق ويقلل احتباس السوائل."
    },
    {
      title: "تقليل السكريات",
      text: "السكريات الزائدة تعيق خسارة الدهون وترفع الشهية."
    },
    {
      title: "التحكم في الصوديوم",
      text: "تقليل الملح يساعد في تقليل احتباس السوائل."
    },
    {
      title: "نوم كافٍ",
      text: "قلة النوم تضعف الحرق وتزيد الشهية."
    },
    {
      title: "مراقبة التقدم",
      text: "تابع الوزن ونسبة الدهون وعدّل السعرات حسب النتائج."
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>تغذية التنشيف</h1>
        <p>
          نصائح غذائية تساعدك على خسارة الدهون مع الحفاظ على العضلات والصحة.
        </p>
      </header>

      <section className={styles.tips}>
        {tips.map((tip, index) => (
          <div key={index} className={styles.card}>
            <h3>{index + 1}. {tip.title}</h3>
            <p>{tip.text}</p>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        © 2025 Healthy Vision – جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
