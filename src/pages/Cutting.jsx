import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Goals.module.css";

export default function Cutting() {
  const categories = [
    { title: "نصائح التغذية", link: "/cutting/nutrition" },
    { title: "التمارين الرياضية", link: "/cutting/exercises" },
    { title: "وصفات صحية", link: "/cutting/recipes" },
    { title: "برامج التنشيف", link: "/cutting/program" },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>برامج التنشيف</h1>

        <p className={styles.desc}>
          إنقاص نسبة الدهون مع الحفاظ على الكتلة العضلية، للحصول على جسم مشدود
          ومتناسق مع إبراز العضلات.
        </p>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <Link key={i} to={cat.link} className={styles.item}>
              {cat.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}