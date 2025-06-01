import Link from "next/link";
import styles from "./footer.module.scss";
import Logo from "@/component/logo/Logo";

interface NavLink {
  href: string;
  label: string;
}

interface NavColumn {
  title: string;
  links: NavLink[];
}

interface SocialLink {
  href: string;
  ariaLabel: string;
  svgPath: string[];
}

const socialLinks: SocialLink[] = [
  {
    href: "#",
    ariaLabel: "GitHub",
    svgPath: [
      "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z",
      "M14 2V8H20",
      "M16 13H8",
      "M16 17H8",
      "M10 9H9H8",
    ],
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    svgPath: [
      "M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z",
      "M6 9H2V21H6V9Z",
      "M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z",
    ],
  },
  {
    href: "#",
    ariaLabel: "Telegram",
    svgPath: [
      "M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229",
    ],
  },
  {
    href: "#",
    ariaLabel: "Twitter",
    svgPath: [
      "M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z",
    ],
  },
];

const navColumns: NavColumn[] = [
  {
    title: "Навигация",
    links: [
      { href: "/", label: "Главная" },
      { href: "/about", label: "Обо мне" },
      { href: "/portfolio", label: "Портфолио" },
      { href: "/blog", label: "Блог" },
      { href: "/contact", label: "Контакты" },
    ],
  },
  {
    title: "Портфолио",
    links: [
      { href: "/portfolio#web-projects", label: "Веб-проекты" },
      { href: "/portfolio#mobile-apps", label: "Мобильные приложения" },
      { href: "/portfolio#designs", label: "Дизайны" },
      { href: "/portfolio#testimonials", label: "Отзывы" },
    ],
  },
  {
    title: "Контакты",
    links: [
      {
        href: "mailto:valukandrey004@gmail.com",
        label: "valukandrey004@gmail.com",
      },
      { href: "tel:+375333260981", label: "+375(33)326-09-81" },
      { href: "/contact#form", label: "Форма обратной связи" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Logo />
            <p className={styles.footerDescription}>
              Frontend разработчик, создающий современные и интерактивные
              веб-приложения
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a
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
                    {link.svgPath.map((path, idx) => (
                      <path
                        key={idx}
                        d={path}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ))}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerNav}>
            {navColumns.map((column, index) => (
              <div key={index} className={styles.navColumn}>
                <h3 className={styles.navTitle}>{column.title}</h3>
                <ul className={styles.navLinks}>
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className={styles.navLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 Андрей Валюк. Все права защищены.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
