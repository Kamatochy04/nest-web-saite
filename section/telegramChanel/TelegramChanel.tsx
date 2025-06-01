import Image from "next/image";
import Link from "next/link";
import styles from "./telegram.module.scss";

interface TelegramChannel {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  stats: string[];
  link: string;
}

const telegramChannels: TelegramChannel[] = [
  {
    imageSrc: "/assets/img/talkAboutWeb.png",
    imageAlt: "Frontend Insights",
    title: "Андрей Валюк || поговорим о web",
    description:
      "Анализ современных трендов во фронтенд-разработке, разбор новых технологий и полезные советы для разработчиков.",
    stats: ["Ежедневные посты"],
    link: "https://t.me/talk_about_web",
  },
  {
    imageSrc: "/assets/img/ITNews.png",
    imageAlt: "Tech News Digest",
    title: "IT News",
    description:
      "Свежие новости из мира технологий, гаджетов и IT-индустрии. Только самое важное без лишнего шума.",
    stats: ["Еженедельные дайджесты"],
    link: "https://t.me/+l7vzC-G5OqUxYWMy",
  },
];

const Telegram: React.FC = () => {
  return (
    <section className={styles.telegramSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Мои Telegram-каналы</h2>
        <p className={styles.sectionSubtitle}>
          Подписывайтесь на мои каналы, где я делюсь полезными материалами и
          мыслями
        </p>
        <div className={styles.telegramGrid}>
          {telegramChannels.map((channel, index) => (
            <div key={index} className={styles.telegramCard}>
              <div className={styles.telegramImage}>
                <Image
                  src={channel.imageSrc}
                  alt={channel.imageAlt}
                  width={600}
                  height={350}
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.telegramIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.telegramContent}>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <div className={styles.telegramStats}>
                  {channel.stats.map((stat, idx) => (
                    <span key={idx} className={styles.statItem}>
                      {stat}
                    </span>
                  ))}
                </div>
                <Link
                  href={channel.link}
                  target="_blank"
                  className={`${styles.btn} ${styles.btnTelegram}`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Подписаться
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Telegram;
