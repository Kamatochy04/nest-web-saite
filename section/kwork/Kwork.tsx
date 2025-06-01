import Image from "next/image";
import Link from "next/link";
import styles from "./kwork.module.scss";

interface KworkData {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  stats: string[];
  link: string;
}

const kworkData: KworkData = {
  imageSrc: "/assets/img/kwork-profile-full.jpg",
  imageAlt: "Kwork Profile",
  title: "Андрей Валюк || Frontend Developer",
  description:
    "Создаю современные и производительные веб-приложения с использованием React, Next.js и TypeScript. Мои услуги включают разработку адаптивных интерфейсов, оптимизацию производительности и качественный код.",
  stats: ["5+ успешных проектов", "100% удовлетворенность клиентов"],
  link: "https://kwork.ru/user/andreivalyuk",
};

const Kwork: React.FC = () => {
  return (
    <section id="kwork" className={styles.kworkSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Мой фриланс на Kwork</h2>
        <p className={styles.sectionSubtitle}>
          Профессиональные услуги frontend-разработки для ваших проектов на
          платформе Kwork
        </p>
        <div className={styles.kworkContent}>
          <div className={styles.kworkCard}>
            <div className={styles.kworkBackground}></div>
            <div className={styles.kworkInner}>
              <div className={styles.kworkImage}>
                <Image
                  src={kworkData.imageSrc}
                  alt={kworkData.imageAlt}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.kworkText}>
                <h3>{kworkData.title}</h3>
                <p>{kworkData.description}</p>
                <div className={styles.kworkStats}>
                  {kworkData.stats.map((stat, index) => (
                    <span key={index} className={styles.statItem}>
                      {stat}
                    </span>
                  ))}
                </div>
                <Link
                  href={kworkData.link}
                  target="_blank"
                  className={`${styles.btn} ${styles.btnKwork}`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 9V12L14 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Заказать на Kwork
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kwork;
