import React, { useState } from "react";
import styles from "../styles/Program.module.css";

const BULKING_PROGRAMS = {
  beginner: {
    title: "برنامج تضخيم — مبتدئ (3–4 أيام)",
    days: [
      { day: "اليوم 1 — صدر + بايسبس", exercises: ["بنش بار — 3 × 8-10", "ضغط مائل دمبل — 3 × 10", "بايسبس دمبل — 3 × 12"], tip: "تعلم التكنيك أولًا." },
      { day: "اليوم 2 — ظهر + ترايسبس", exercises: ["سحب علوي — 3 × 10", "رو دمبل — 3 × 10", "ترايسبس كيبل — 3 × 12"], tip: "تحكم بالحركة." },
      { day: "اليوم 3 — أرجل", exercises: ["سكوات — 3 × 8", "ليج برس — 3 × 10", "كالف — 4 × 15"], tip: "لا تتعجل الوزن." },
    ],
  },
  intermediate: {
    title: "برنامج تضخيم — متوسط (4–5 أيام)",
    days: [
      { day: "اليوم 1 — Push", exercises: ["بنش بار — 4 × 6-8", "شولدر برس — 3 × 8"], tip: "ارفع تدريجيًا." },
      { day: "اليوم 2 — Pull", exercises: ["باربل رو — 4 × 6-8", "بايسبس دمبل — 3 × 10"], tip: "اسحب بالكوع." },
      { day: "اليوم 3 — Legs", exercises: ["سكوات — 4 × 6-8", "كالف — 4 × 20"], tip: "قوة الأرجل أساس." },
      { day: "اليوم 4 — Upper خفيف", exercises: ["بنش — 3 × 12", "رفرفة جانبية — 3 × 15"], tip: "تحكم > وزن." },
    ],
  },
  advanced: {
    title: "برنامج تضخيم — متقدم (5–6 أيام)",
    days: [
      { day: "اليوم 1 — Push ثقيل", exercises: ["بنش — 5 × 5"], tip: "أقصى قوة." },
      { day: "اليوم 2 — Pull ثقيل", exercises: ["ديدلفت — 4 × 5"], tip: "شد الظهر كامل." },
      { day: "اليوم 3 — Legs ثقيل", exercises: ["سكوات — 5 × 5"], tip: "تنفس ثابت." },
      { day: "اليوم 4 — Push خفيف", exercises: ["دمبل — 3 × 12"], tip: "ضخ دم." },
      { day: "اليوم 5 — Pull خفيف", exercises: ["Lat — 3 × 12"], tip: "تحكم عضلي." },
    ],
  },
};

export default function BulkingProgram() {
  const [level, setLevel] = useState("beginner");
  const program = BULKING_PROGRAMS[level];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{program.title}</h1>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: "30px" }}>
          <select
            className={styles["level-select"]}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="beginner">مبتدئ</option>
            <option value="intermediate">متوسط</option>
            <option value="advanced">متقدم</option>
          </select>
        </div>
      </header>

      <main className={styles.grid}>
        {program.days.map((day, i) => (
          <section key={i} className={styles.card}>
            <h3>{day.day}</h3>
            <ul>
              {day.exercises.map((ex, idx) => (
                <li key={idx}>{ex}</li>
              ))}
            </ul>
            <span className={styles.tip}>نصيحة: {day.tip}</span>
          </section>
        ))}
      </main>
    </div>
  );
}
