import Image from "next/image";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.secao}>
      <div className={styles.conteudo}>
        <h3 className={styles.subtitulo}>Todos os portais oferecem</h3>
        <ol className={styles.recursos}>
          <li>
            <span className={styles.numero}>01</span>
            <h4>Notícias</h4>
            <p>Novidades da disciplina, cadastradas e atualizadas pelas próprias equipes.</p>
          </li>
          <li>
            <span className={styles.numero}>02</span>
            <h4>Simulado</h4>
            <p>Questões da disciplina, com correção e resultado ao final.</p>
          </li>
          <li>
            <span className={styles.numero}>03</span>
            <h4>Carreiras e estágios</h4>
            <p>Profissões e oportunidades ligadas aos cursos do SENAI Valinhos.</p>
          </li>
          <li>
            <span className={styles.numero}>04</span>
            <h4>Dicas e vídeos</h4>
            <p>Orientações de estudo e vídeos educativos para o vestibular.</p>
          </li>
        </ol>

        <div className={styles.topo}>
          <div className={styles.texto}>
            <h2>Sobre o projeto</h2>
            <p className={styles.destaque}>
              O Projeto Integrador Final reúne tudo o que a turma aprendeu no
              curso Técnico em Desenvolvimento de Sistemas do SENAI Valinhos.
            </p>
            <p>
              A turma foi dividida em cinco grupos, e cada um ficou responsável
              pelo portal de uma disciplina do Ensino Médio. O Grupo 4, além do
              portal de Português, desenvolveu esta página, que reúne o acesso
              a todos os portais.
            </p>
          </div>

          <Image
            src="/mosaico-disciplinas.webp"
            alt="Fotos das cinco disciplinas: Português, Geografia, Biologia, História e Filosofia"
            width={1080}
            height={620}
            className={styles.mosaico}
          />
        </div>

      </div>
    </section>
  );
}
