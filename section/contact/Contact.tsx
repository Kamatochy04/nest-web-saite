"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.scss";

interface SocialLink {
  href: string;
  ariaLabel: string;
  svgPath: string | string[];
}

interface ContactInfo {
  email: string;
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
    ],
  },
  {
    href: "#",
    ariaLabel: "Telegram",
    svgPath:
      "M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229",
  },
];

const contactInfo: ContactInfo = {
  email: "valukandrey004@gmail.com",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      setTimeout(() => {
        setSubmitStatus("Сообщение успешно отправлено!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setSubmitStatus("Ошибка при отправке. Попробуйте снова.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Связаться со мной</h2>
        <p className={styles.sectionSubtitle}>
          Готов обсудить ваш проект или ответить на любые вопросы! Заполните
          форму ниже или свяжитесь со мной через email или социальные сети.
        </p>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Контактная информация</h3>
            <p className={styles.infoText}>
              Я открыт к сотрудничеству и новым проектам. Напишите мне, чтобы
              обсудить ваши идеи или задать вопросы о моих услугах.
            </p>
            <div className={styles.email}>
              <span className={styles.emailLabel}>Email:</span>
              <Link
                href={`mailto:${contactInfo.email}`}
                className={styles.emailLink}
              >
                {contactInfo.email}
              </Link>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.ariaLabel}
                  target="_blank"
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
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Имя
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className={styles.formInput}
                placeholder="Ваше имя"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className={styles.formInput}
                placeholder="Ваш email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Сообщение
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className={styles.formTextarea}
                placeholder="Ваше сообщение"
              />
            </div>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnSubmit}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
            {submitStatus && (
              <p className={styles.submitStatus}>{submitStatus}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
