import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      {/* ===================== ABOUT SECTION ===================== */}
      <section className={styles.about}>
        <h1>من نحن</h1>
        <p>
          في <strong>Healthy Vision</strong> نعمل على دمج التكنولوجيا بالصحة
          لتوفير تجربة سلسة، من متابعة التمارين وحتى فهم نتائج التحاليل،
          لنضع بين يديك كل ما تحتاجه لتدير صحتك بذكاء وراحة.
        </p>

        <ul className={styles.timeline}>
          <li className={styles.timelineItem}>
            <h3>فهم التحاليل الطبية</h3>
            <p>تفسير مبسط لنتائج الفحوصات الطبية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>نصائح طبية</h3>
            <p>إرشادات عملية للحياة الصحية اليومية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>تذكير الأدوية</h3>
            <p>تنظيم وتذكير بمواعيد الدواء اليومية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>الجيم - تنشيف / تضخيم</h3>
            <p>خطط تدريبية تناسب أهدافك البدنية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>غرفة الطوارئ الذكية</h3>
            <p>مساعدة فورية عند الحالات الحرجة.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>إدارة الصحة</h3>
            <p>أدوات لمتابعة حالتك الصحية بانتظام.</p>
          </li>
        </ul>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className={styles.footer}>
        <h2>تواصل معنا</h2>
        <div className={styles.contactItem}>
          البريد: <a href="mailto:healtyvision1409@gmail.com">healtyvision1409@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          الهاتف: <a href="tel:+213654601047">+213 654 601 047</a>
        </div>
        <p className={styles.copy}>© 2025 - جميع الحقوق محفوظة | Healthy Vision</p>
      </footer>
    </>
  );
}

export default About;
