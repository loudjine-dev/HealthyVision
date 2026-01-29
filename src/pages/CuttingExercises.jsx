import React from "react";
import styles from "../styles/Exercises.module.css";

export default function CuttingExercises() {
  const sections = [
    {
      sectionTitle: "تمارين الكارديو وحرق الدهون",
      exercises: [
        {
          title: "كارديو سريع",
          desc: "تمرين كارديو مكثف لرفع نبض القلب وتسريع حرق الدهون.",
          video: "fast-cardio-fat-burn.mp4",
        },
        {
          title: "انطلاقة العداء",
          desc: "تمرين انفجاري عالي الشدة يركز على التسارع السريع، يحرق الدهون ويقوي عضلات الساقين.",
          video: "sprint-cardio-workout.mp4",
        },
        {
          title: "القفز بالحبل",
          desc: "كارديو ممتاز لحرق السعرات وتقوية الساقين.",
          video: "jump-rope-fat-loss.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين HIIT",
      exercises: [
        {
          title: "تمرين HIIT لحرق الدهون",
          desc: "تمارين متقطعة ترفع معدل الأيض وتحرق الدهون بعد التمرين.",
          video: "hiit-fat-loss-workout.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين بليومتريك",
      exercises: [
        {
          title: "القفز والهبوط",
          desc: "تمرين بليومتريك يقوي العضلات ويحرق الدهون بسرعة.",
          video: "jump-and-land-workout.mp4",
        },
        {
          title: "قفزات بليومتريك",
          desc: "حركات انفجارية لزيادة القوة والسرعة.",
          video: "plyometric-jumps-fat-burn.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين الكور (Core)",
      exercises: [
        {
          title: "تمرين عجلة البطن (Ab Wheel)",
          desc: "تمرين قوي لتقوية عضلات البطن والكور.",
          video: "ab-wheel-core-workout.mp4",
        },
      ],
    },

    {
      sectionTitle: "تمارين كامل الجسم",
      exercises: [
        {
          title: "سحب الحبل",
          desc: "تمرين شامل لتقوية الذراعين والظهر وزيادة التحمل.",
          video: "rope-pull-full-body.mp4",
        },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>تمارين التنشيف وحرق الدهون</h1>

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
