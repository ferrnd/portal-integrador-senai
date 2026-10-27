import { recursos } from "@/data/portais";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.secao}>
      <div className={styles.conteudo}>
        <div className={styles.texto}>
          <span className={styles.etiqueta}>Sobre o projeto</span>
          <h2>O que você encontra em cada portal</h2>
          <p>
            Este é o Projeto Integrador Final do curso Técnico em
            Desenvolvimento de Sistemas do SENAI Valinhos. Cada equipe criou um
            portal completo sobre uma disciplina do Ensino Médio, para ajudar
            estudantes a aprender, descobrir profissões e se preparar para o
            futuro.
          </p>
        </div>

        <div className={styles.grade}>
          {recursos.map(({ titulo, texto, Icon }) => (
            <div key={titulo} className={styles.item}>
              <span className={styles.icone}>
                <Icon size={24} />
              </span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
