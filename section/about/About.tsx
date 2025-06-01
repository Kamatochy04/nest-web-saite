import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.scss";
import meImg from "@/assets/img/Me.jpg";

interface SocialLink {
  href: string;
  ariaLabel: string;
  svgPath: string;
}

interface DetailItem {
  svgPath: string[];
  label: string;
  value: string;
}

interface Skill {
  name: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "#",
    ariaLabel: "GitHub",
    svgPath:
      "M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.65 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.65 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22",
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    svgPath: [
      "M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z",
      "M6 9H2V21H6V9Z",
      "M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z",
    ].join(" "),
  },
  {
    href: "#",
    ariaLabel: "Telegram",
    svgPath:
      "M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229",
  },
];

const details: DetailItem[] = [
  {
    svgPath: [
      "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
      "M12 8V12L15 15",
    ],
    label: "Возраст",
    value: "20 года",
  },
  {
    svgPath: [
      "M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
      "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
    ],
    label: "Город",
    value: "Гродно",
  },
  {
    svgPath: [
      "M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92",
      "M18 8L12 3L6 8",
      "M12 3V15",
    ],
    label: "Образование",
    value: "Высшее техническое",
  },
];

const skills: Skill[] = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Redux" },
  { name: "Git" },
];

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Обо мне</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <img src={meImg} alt="" />
              <Image
                src={meImg}
                alt="Andrey Valiuk"
                width={350}
                height={350}
                priority
              />
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.ariaLabel}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {Array.isArray(link.svgPath) ? (
                      link.svgPath.map((path, idx) => (
                        <path
                          key={idx}
                          d={path}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ))
                    ) : (
                      <path
                        d={link.svgPath}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.aboutText}>
            <p>
              Привет! Я Андрей Валюк, frontend-разработчик с 2-летним опытом
              создания современных веб-приложений. Специализируюсь на React,
              TypeScript и Next.js.
            </p>
            <div className={styles.aboutDetails}>
              {details.map((detail, index) => (
                <div key={index} className={styles.detailItem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {detail.svgPath.map((path, idx) => (
                      <path
                        key={idx}
                        d={path}
                        stroke="#6e45e2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ))}
                  </svg>
                  <span>
                    <strong>{detail.label}:</strong> {detail.value}
                  </span>
                </div>
              ))}
            </div>
            <p>
              Я увлечен созданием интуитивно понятных и производительных
              пользовательских интерфейсов. В своей работе уделяю особое
              внимание качеству кода, доступности и производительности.
            </p>
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
