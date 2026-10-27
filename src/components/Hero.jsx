import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.conteudo}>
        <span className={styles.etiqueta}>
          Técnico em Desenvolvimento de Sistemas
        </span>
        <h1 className={styles.titulo}>Portal de Matérias do Ensino Médio</h1>
        <p className={styles.subtitulo}>
          Conteúdos, notícias, carreiras, simulados e dicas de estudo em um só
          lugar. Escolha uma disciplina para começar.
        </p>

        <a href="#portais" className={styles.botao}>
          Ver portais
        </a>

        <dl className={styles.numeros}>
          <div>
            <dt>5</dt>
            <dd>disciplinas</dd>
          </div>
          <div>
            <dt>15+</dt>
            <dd>notícias por portal</dd>
          </div>
          <div>
            <dt>100%</dt>
            <dd>feito por alunos</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
