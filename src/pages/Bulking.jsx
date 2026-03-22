import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Goals.module.css";

/* إذا عندك صور للكارد، حطها هنا بنفس الطريقة */
const bulkingImg = "/cutting/images/Bulking.png";

export default function Bulking() {
  const categories = [
    { title: "نصائح التغذية", link: "/bulking/nutrition" },
    { title: "التمارين الرياضية", link: "/bulking/exercises" },
    { title: "وصفات لزيادة الوزن", link: "/bulking/recipes" },
    { title: "برامج التضخيم", link: "/bulking/program" },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>برامج التضخيم</h1>

        <p className={styles.desc}>
          زيادة الكتلة العضلية بشكل صحي وتدريجي، مع تعزيز القوة البدنية وبناء جسم
          قوي ومتوازن دون دهون زائدة.
        </p>

        {/* إذا حبيت تضيف صورة فوق */}
        {/* <img src={bulkingImg} alt="التضخيم" className={styles.image} /> */}

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