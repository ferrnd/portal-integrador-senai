import Image from "next/image";
import { portais, recursos } from "@/data/portais";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.secao}>
      <div className={styles.conteudo}>
        <div className={styles.texto}>
          <h2>Sobre o projeto</h2>
          <p>
            Este é o Projeto Integrador Final do curso Técnico em
            Desenvolvimento de Sistemas do SENAI Valinhos. A turma foi dividida
            em cinco grupos, e cada um ficou responsável por uma disciplina do
            Ensino Médio. O Grupo 4, além do portal de Português, desenvolveu
            esta página, que reúne o acesso a todos os portais.
          </p>

          <ul className={styles.grupos}>
            {portais.map((portal) => (
              <li key={portal.grupo} style={{ "--cor": portal.cor }}>
                <strong>{portal.grupo}</strong>
                {portal.materia}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.lista}>
          <h3>Todos os portais oferecem:</h3>
          <ul>
            {recursos.map((recurso) => (
              <li key={recurso}>
                <Image src="/marca-integrador.png" alt="" width={78} height={78} className={styles.marca} />
                {recurso}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
