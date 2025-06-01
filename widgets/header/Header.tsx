"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Logo from "@/component/logo/Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("noScroll");
  };

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("noScroll");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setHeaderHidden(false);
        return;
      }

      if (currentScrollY > lastScrollY && !headerHidden) {
        setHeaderHidden(true);
      } else if (currentScrollY < lastScrollY && headerHidden) {
        setHeaderHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, headerHidden]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${headerHidden ? styles.hidden : ""}`}
      >
        <div className={styles.headerContainer}>
          <Logo />

          <nav className={styles.desktopNav}>
            <ul className={styles.navMenu}>
              <li className={styles.navItem}>
                <Link
                  href="#"
                  className={`${styles.navLink} ${styles.inactive}`}
                >
                  Портфолио
                </Link>
                <div className={styles.sectionsDropdown}>
                  <div className={styles.sectionsContainer}>
                    <h3 className={styles.sectionsTitle}>Разделы портфолио</h3>
                    <ul className={styles.sectionsList}>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Веб-проекты
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Мобильные приложения
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Дизайны
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Отзывы
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="#"
                  className={`${styles.navLink} ${styles.inactive}`}
                >
                  Обо мне
                </Link>
                <div className={styles.sectionsDropdown}>
                  <div className={styles.sectionsContainer}>
                    <h3 className={styles.sectionsTitle}>Разделы Обо мне</h3>
                    <ul className={styles.sectionsList}>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Навыки
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Опыт
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Образование
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Увлечения
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="#"
                  className={`${styles.navLink} ${styles.inactive}`}
                >
                  Блог
                </Link>
                <div className={styles.sectionsDropdown}>
                  <div className={styles.sectionsContainer}>
                    <h3 className={styles.sectionsTitle}>Категории блога</h3>
                    <ul className={styles.sectionsList}>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Туториалы
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Размышления
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Новости
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className={`${styles.sectionLink} ${styles.inactive}`}
                        >
                          Кейсы
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href="/experience" className={styles.navLink}>
                  Опыт работ
                </Link>
              </li>
            </ul>
          </nav>

          <div
            ref={burgerMenuRef}
            className={`${styles.burgerMenu} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <ul className={styles.mobileNav}>
          <li className={styles.mobileNavItem}>
            <Link
              href="#"
              className={`${styles.mobileNavLink} ${styles.inactive}`}
            >
              Портфолио
            </Link>
            <button
              className={styles.mobileSectionsBtn}
              onClick={() => toggleDropdown("portfolio")}
            >
              <span>Разделы</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <ul
              className={`${styles.mobileSectionsList} ${
                activeDropdown === "portfolio" ? styles.active : ""
              }`}
            >
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Веб-проекты
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Мобильные приложения
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Дизайны
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Отзывы
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="#"
              className={`${styles.mobileNavLink} ${styles.inactive}`}
            >
              Обо мне
            </Link>
            <button
              className={styles.mobileSectionsBtn}
              onClick={() => toggleDropdown("about")}
            >
              <span>Разделы</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <ul
              className={`${styles.mobileSectionsList} ${
                activeDropdown === "about" ? styles.active : ""
              }`}
            >
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Навыки
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Опыт
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Образование
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Увлечения
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="#"
              className={`${styles.mobileNavLink} ${styles.inactive}`}
            >
              Блог
            </Link>
            <button
              className={styles.mobileSectionsBtn}
              onClick={() => toggleDropdown("blog")}
            >
              <span>Разделы</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <ul
              className={`${styles.mobileSectionsList} ${
                activeDropdown === "blog" ? styles.active : ""
              }`}
            >
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Туториалы
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Размышления
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Новости
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${styles.mobileSectionLink} ${styles.inactive}`}
                  onClick={closeMobileMenu}
                >
                  Кейсы
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/experience"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Опыт работы
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.active : ""}`}
        onClick={closeMobileMenu}
      />
    </>
  );
};

export default Header;
