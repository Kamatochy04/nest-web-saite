import Link from "next/link";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className={`${styles.logo} ${styles.inactive}`}>
      <div className={styles.logoIcon}>AV</div>
      <span className={styles.logoText}>Andrey Valiuk</span>
    </Link>
  );
};

export default Logo;
