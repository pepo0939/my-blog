import Link from "next/link";
import styles from "../styles/Layout.module.css"; // Asegúrate de crear este archivo CSS

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link href="/">Volver a la Página Principal</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
