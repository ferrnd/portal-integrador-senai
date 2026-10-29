import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.conteudo}>
        <a href="#" className={styles.logo} aria-label="Início">
          <Image
            src="/senai-logo.webp"
            alt="SENAI"
            width={2000}
            height={513}
            priority
            className={styles.logoImagem}
          />
        </a>

        <nav className={styles.nav}>
          <a href="#portais">Portais</a>
          <a href="#sobre">Sobre</a>
          <span className={styles.selo}>
            Projeto Integrador
            <Image src="/marca-integrador.png" alt="" width={78} height={78} className={styles.marca} />
          </span>
        </nav>
      </div>
    </header>
  );
}
