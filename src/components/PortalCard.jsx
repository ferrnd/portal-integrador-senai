import { ArrowRight } from "lucide-react";
import styles from "./PortalCard.module.css";

export default function PortalCard({ grupo, materia, descricao, Icon, cor, foto, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{ "--cor": cor, "--foto": foto ? `url(${foto})` : "none" }}
    >
      <div className={styles.topo}>
        <span className={styles.grupo}>Grupo {grupo}</span>
        <h3 className={styles.materia}>
          {materia}
          <Icon size={28} strokeWidth={2} className={styles.icone} aria-hidden="true" />
        </h3>
      </div>

      <div className={styles.corpo}>
        <p className={styles.descricao}>{descricao}</p>
        <span className={styles.acessar}>
          Acessar portal
          <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
