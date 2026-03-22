import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Gym.module.css";

/* ✅ المسار الصحيح للصور مع GitHub Pages */
const cuttingImg = "/cutting/images/Cutting.png";
const bulkingImg = "/cutting/images/Bulking.png";

export default function Gym() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>حدد هدفك</h1>

      <div className={styles.cards}>
        {/* ===== كرت التنشيف ===== */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src={cuttingImg} alt="التنشيف" />
          </div>
          <div className={styles.cardBody}>
            <h2>التنشيف</h2>
            <p>
              إنقاص نسبة الدهون مع الحفاظ على الكتلة العضلية،
              للحصول على جسم مشدود، متناسق، وبروز عضلي واضح دون فقدان القوة.
            </p>
            <Link to="/cutting" className={styles.btn}>ابدأ</Link>
          </div>
        </div>

        {/* ===== كرت التضخيم ===== */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src={bulkingImg} alt="التضخيم" />
          </div>
          <div className={styles.cardBody}>
            <h2>التضخيم</h2>
            <p>
              زيادة الكتلة العضلية بشكل صحي وتدريجي،
              مع تعزيز القوة البدنية وتحسين الأداء الرياضي،
              وبناء جسم قوي ومتوازن مع تقليل تراكم الدهون.
            </p>
            <Link to="/bulking" className={styles.btn}>ابدأ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}