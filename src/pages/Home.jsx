import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFlask,
  FaStethoscope,
  FaPills,
  FaDumbbell,
  FaAmbulance,
  FaClipboardList
} from "react-icons/fa";
import styles from "../styles/Home.module.css";

const cardsData = [
  { title: "تحاليل طبية", img: "/images/تحاليل.png", link: "/medical-tests", icon: <FaFlask /> },
  { title: "نصائح طبية", img: "/images/نصائح طبية.webp", link: "/medical-advice", icon: <FaStethoscope /> },
  { title: "تذكير الأدوية", img: "/images/ادوية.png", link: "/medication-reminder", icon: <FaPills /> },
  { title: "الجيم", img: "/images/الجيم.jpg", link: "/gym", icon: <FaDumbbell /> },
  { title: "الطوارئ الذكية", img: "/images/الطوارئ.png", link: "/emergency", icon: <FaAmbulance /> },
  { title: "إدارة الصحة", img: "/images/إدارة.webp", link: "/health-administration", icon: <FaClipboardList /> }
];

export default function Home() {

  useEffect(() => {
    // حركة ظهور الكروت عند scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(`.${styles.card}`).forEach(card => observer.observe(card));

    // حركة دخول Hero
    const heroH1 = document.querySelector(`.${styles.heroContent} h1`);
    const heroP = document.querySelector(`.${styles.heroContent} p`);
    heroH1.classList.add(styles.heroIn);
    heroP.classList.add(styles.heroIn);

  }, []);

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <h1>مرحبا بك في Healthy Vision</h1>
          <p>منصة طبية ذكية وعصرية لخدمتك</p>
        </div>

        {/* فقاعات وحركة ماء صحية */}
        <div className={styles.heroBackground}>
          {[...Array(30)].map((_, i) => (
            <div key={i} className={styles.bubble}></div>
          ))}
          <div className={styles.waves}></div>
        </div>
      </section>

      {/* CARDS */}
      <section className={styles.categories} id="categories">
        <h2 className={styles.sectionTitle}>الفئات </h2>

        <div className={styles.cards}>
          {cardsData.map((card, i) => (
            <Link key={i} to={card.link} className={styles.card}>
              <img src={card.img} alt={card.title} className={styles.cardImage} />
              <div className={styles.overlay}></div>
              <div className={styles.cardContent}>
                <span className={styles.icon}>{card.icon}</span>
                <h3>{card.title}</h3>
                <span className={styles.more}>الدخول</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
