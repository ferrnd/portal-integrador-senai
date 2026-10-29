import Image from "next/image";
import { portais } from "@/data/portais";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <div className={styles.marca}>
          <Image
            src="/senai-logo.webp"
            alt="SENAI"
            width={2000}
            height={513}
            className={styles.logo}
          />
          <p>
            Projeto Integrador Final do curso Técnico em Desenvolvimento de
            Sistemas — SENAI Valinhos.
          </p>
        </div>

        <div className={styles.coluna}>
          <h4>Portais</h4>
          <ul>
            {portais.map((portal) => (
              <li key={portal.grupo}>
                <a href={portal.href} target="_blank" rel="noopener noreferrer">
                  {portal.materia}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.coluna}>
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#portais">Portais</a>
            </li>
            <li>
              <a href="#sobre">Sobre o projeto</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.rodape}>
        © 2026 SESI/SENAI · Projeto educacional · Desenvolvido pelo{" "}
        <a
          href="https://github.com/ferrnd/portal-integrador-senai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grupo 4
        </a>
      </div>
    </footer>
  );
}
