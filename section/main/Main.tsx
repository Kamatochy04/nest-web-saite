"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./main.module.scss";
import BgIcon from "@/assets/icons/main_bg.svg";
import Image from "next/image";
import MainBgIcon from "@/assets/icons/MainBgIcon";
interface Technology {
  name: string;
}

const frontendTechnologies: Technology[] = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Redux" },
  { name: "Git" },
];

const backendTechnologies: Technology[] = [
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Python" },
  { name: "Django" },
  { name: "REST API" },
];

const Main: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(
      `.${styles.animateOnScroll}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.bgIcon}>
        <MainBgIcon className={styles.img} />
      </div>
      <div className={styles.heroContent}>
        <h3 className={`${styles.heroTopTitle} ${styles.animateOnScroll}`}>
          Hi. I'm Web Developer
        </h3>
        <h1 className={`${styles.heroTitle} ${styles.animateOnScroll}`}>
          Меня зовут Андрей Валюк
        </h1>
        <h2 className={`${styles.heroSubtitle} ${styles.animateOnScroll}`}>
          Привет! Я веб-разработчик, специализируюсь на создании современных и
          функциональных веб-решений. На этом сайте вы можете ознакомиться с
          моими проектами и профессиональными навыками. Открыт к интересным
          проектам и коллаборациям. Давайте обсудим ваши идеи!
        </h2>
      </div>

      <div className={styles.techSliders}>
        <div className={styles.sliderContainer}>
          <div className={`${styles.sliderTrack} ${styles.frontendTrack}`}>
            {[...frontendTechnologies, ...frontendTechnologies].map(
              (tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech.name}
                </span>
              )
            )}
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={`${styles.sliderTrack} ${styles.backendTrack}`}>
            {[...backendTechnologies, ...backendTechnologies].map(
              (tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <Link href="#about" className={styles.scrollDown}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
};

export default Main;
