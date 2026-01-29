import React from "react";
import styles from "../styles/Exercises.module.css";

export default function BulkingExercises() {
  const sections = [
    {
      sectionTitle: "تمارين الصدر",
      exercises: [
        {
          title: "ضغط البار على البنش",
          desc: "تمرين أساسي لزيادة القوة والكتلة العضلية في الصدر.",
          video: "bench-bar-press.mp4",
        },
        {
          title: "ضغط بنش مائل (الصدر العلوي)",
          desc: "يستهدف الصدر العلوي لزيادة الحجم والشكل.",
          video: "incline-bench-press-upper-chest.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين البايسبس",
      exercises: [
        {
          title: "بايسبس بالدامبل (تمرين كامل)",
          desc: "يحسن القوة والتحكم العضلي.",
          video: "dumbbell-biceps-workout.mp4",
        },
        {
          title: "بايسبس المتوازي",
          desc: "تمرين وزن الجسم لتقوية الذراعين.",
          video: "parallel-bar-biceps.mp4",
        },
        {
          title: "تقوية البايسبس بالمتوازي",
          desc: "يعزز القوة العضلية والتحمل.",
          video: "parallel-biceps-strength.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين الأكتاف",
      exercises: [
        {
          title: "رفع أمامي للأكتاف",
          desc: "يستهدف الكتف الأمامي ويزيد من عرض الكتف.",
          video: "front-shoulder-raise.mp4",
        },
        {
          title: "رفع جانبي للأكتاف",
          desc: "تمرين أساسي لتوسيع الأكتاف وبناء الشكل الجمالي.",
          video: "side-shoulder-raise.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين الظهر",
      exercises: [
        {
          title: "سحب أرضي للظهر",
          desc: "يقوي عضلات الظهر السفلية والوسطى.",
          video: "ground-pull-back.mp4",
        },
        {
          title: "عضلات الظهر العلوية",
          desc: "تمرين لبناء سماكة وقوة أعلى الظهر.",
          video: "upper-back-muscle.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين الأرجل",
      exercises: [
        {
          title: "تمرين السكوات",
          desc: "تمرين شامل لبناء عضلات الأرجل وزيادة القوة.",
          video: "squat-fat-burning.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين الترايسبس",
      exercises: [
        {
          title: "الترايسبس – الرأس الخلفي",
          desc: "يعزل الرأس الخلفي للترايسبس لزيادة الحجم.",
          video: "triceps-rear-head.mp4",
        },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>تمارين التضخيم وبناء العضلات</h1>

      {sections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>

          {section.exercises.map((ex, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.text}>
                <h3>{ex.title}</h3>
                <p>{ex.desc}</p>
              </div>

              <video controls preload="metadata" className={styles.video}>
                <source src={`/videos/${ex.video}`} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
