import React from "react";
import styles from "../styles/Recipes.module.css";

// قائمة الوصفات للتضخيم
const recipes = [
  {
    title: "شوفان بالحليب والبروتين",
    img: "../images/شوفان بالحليب.webp",
    benefit: "إفطار غني بالبروتين والطاقة",
    ingredients: ["½ كوب شوفان", "1 كوب حليب قليل الدسم", "½ موزة", "ملعقة بروتين بودرة", "ملعقة عسل"],
    preparation: "اسلق الشوفان مع الحليب 5 دقائق، أضف الموز والبروتين والعسل.",
    nutrition: "السعرات: 350 | بروتين: 25غ | كارب: 50غ | دهون: 7غ"
  },
  {
    title: "سلطة الدجاج والخضار",
    img: "../images/سلطة دجاج وخضار.jpeg",
    benefit: "غنية بالبروتين وقليلة الدهون",
    ingredients: ["100غ صدر دجاج مشوي", "خس، طماطم، خيار", "ملعقة زيت زيتون", "ليمون"],
    preparation: "قطع الدجاج والخضار، أضف الزيت وعصير الليمون وقلّب جيدًا.",
    nutrition: "السعرات: 250 | بروتين: 30غ | كارب: 10غ | دهون: 8غ"
  },
  {
    title: "سمك مشوي مع الأرز البني",
    img: "../images/سمك مشوي مع الأرز.jpeg",
    benefit: "وجبة عالية البروتين وغنية بالأوميغا-3",
    ingredients: ["150غ سمك مشوي", "½ كوب أرز بني", "خضار مشوية", "رشة توابل"],
    preparation: "اشوي السمك مع التوابل، قدمه مع الأرز والخضار.",
    nutrition: "السعرات: 400 | بروتين: 35غ | كارب: 40غ | دهون: 10غ"
  },
  {
    title: "توست الأفوكادو والبيض",
    img: "../images/توست أفوكادو.jpg",
    benefit: "إفطار متوازن بالبروتين والدهون الصحية",
    ingredients: ["شريحة توست كامل الحبوب", "½ أفوكادو مهروس", "بيضة مسلوقة", "رشة ملح وفلفل"],
    preparation: "ضع الأفوكادو على التوست، أضف البيضة المسلوقة ورش الملح والفلفل.",
    nutrition: "السعرات: 300 | بروتين: 12غ | كارب: 28غ | دهون: 15غ"
  },
  {
    title: "معكرونة بالتونة",
    img: "../images/معكرونة التونة.jpg",
    benefit: "غنية بالبروتين وسهلة التحضير للغداء",
    ingredients: ["100غ معكرونة", "علبة تونة مصفاة", "خضار حسب الرغبة", "ملعقة زيت زيتون"],
    preparation: "اسلق المعكرونة، أضف التونة والخضار والملح وزيت الزيتون.",
    nutrition: "السعرات: 450 | بروتين: 30غ | كارب: 55غ | دهون: 12غ"
  },
  {
    title: "زبادي بالمكسرات",
    img: "../images/زبادي بالمكسرات.jpg",
    benefit: "وجبة خفيفة غنية بالبروتين والدهون الصحية",
    ingredients: ["1 كوب زبادي يوناني", "حفنة مكسرات", "ملعقة عسل"],
    preparation: "ضع المكسرات على الزبادي وأضف العسل للنكهة.",
    nutrition: "السعرات: 220 | بروتين: 15غ | كارب: 20غ | دهون: 10غ"
  }
];

export default function BulkingRecipes() {
  return (
    <div className={styles.container}>
      <header className={styles.siteHeader}>
        <h1>وصفات صحية للتضخيم</h1>
        <p className={styles.subtitle}>
          وجبات متوازنة وسهلة التحضير للتضخيم أو الحفاظ على الصحة
        </p>
      </header>

      <main>
        {recipes.map((rec, i) => (
          <section key={i} className={styles.recipe}>
            <img src={rec.img} alt={rec.title} className={styles.recipeImg} />
            <h2>{rec.title}</h2>
            <p className={styles.benefit}>{rec.benefit}</p>

            <h3>المكونات:</h3>
            <ul>
              {rec.ingredients.map((ing, j) => <li key={j}>{ing}</li>)}
            </ul>

            <h3>طريقة التحضير:</h3>
            <p>{rec.preparation}</p>

            <div className={styles.nutrition}>{rec.nutrition}</div>
          </section>
        ))}
      </main>

    </div>
  );
}
