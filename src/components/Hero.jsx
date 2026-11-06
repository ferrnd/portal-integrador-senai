import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.conteudo}>
        <h1 className={styles.titulo}>Portal de Matérias do Ensino Médio</h1>
        <p className={styles.subtitulo}>
          Desenvolvido pela turma do curso Técnico em Desenvolvimento de
          Sistemas do SENAI Valinhos. Cada grupo criou o portal de uma
          disciplina do Ensino Médio.
        </p>
      </div>
    </section>
  );
}
