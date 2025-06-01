import Link from "next/link";
import styles from "./services.module.scss";

interface Service {
  title: string;
  description: string;
  iconPath: string;
}

const services: Service[] = [
  {
    title: "Разработка веб-приложений",
    description:
      "Создание современных и масштабируемых веб-приложений с использованием React, Next.js и TypeScript. Обеспечиваю высокую производительность и адаптивный дизайн.",
    iconPath:
      "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z M14 2V8H20 M16 13H8 M16 17H8 M10 9H9H8",
  },
  {
    title: "UI/UX оптимизация",
    description:
      "Улучшение пользовательских интерфейсов для повышения удобства и вовлеченности. Фокус на доступность, интуитивность и современные стандарты дизайна.",
    iconPath:
      "M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V7C20 7 19 8 16 8C13 8 11 6 8 6C5 6 4 7 4 7V15Z M4 22V18 M20 22V18",
  },
  {
    title: "Интеграция API",
    description:
      "Подключение и настройка API для обеспечения бесшовного взаимодействия между фронтендом и бэкендом. Работа с REST и GraphQL для надежных решений.",
    iconPath:
      "M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM12 3C13.66 3 15 4.34 15 6V8H9V6C9 4.34 10.34 3 12 3Z",
  },
  {
    title: "Техническая поддержка",
    description:
      "Обеспечение поддержки и оптимизации существующих веб-приложений. Исправление багов, обновление зависимостей и улучшение производительности.",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Мои услуги</h2>
        <p className={styles.sectionSubtitle}>
          Профессиональные решения для ваших задач в области frontend-разработки
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={service.iconPath}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link
                href="/contact"
                className={`${styles.btn} ${styles.btnService}`}
              >
                Заказать услугу
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
