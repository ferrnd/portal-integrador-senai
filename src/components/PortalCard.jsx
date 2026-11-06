import styles from "./PortalCard.module.css";

export default function PortalCard({ grupo, materia, descricao, Icon, cor, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{ "--cor": cor }}
    >
      <div className={styles.topo}>
        <Icon size={150} strokeWidth={1.5} className={styles.fundoIcone} aria-hidden="true" />
        <span className={styles.grupo}>Grupo {grupo}</span>
        <h3 className={styles.materia}>{materia}</h3>
      </div>

      <div className={styles.corpo}>
        <p className={styles.descricao}>{descricao}</p>
        <span className={styles.acessar}>Acessar portal</span>
      </div>
    </a>
  );
}
