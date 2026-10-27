import { ArrowRight } from "lucide-react";
import styles from "./PortalCard.module.css";

export default function PortalCard({ grupo, materia, descricao, Icon, cor, href }) {
  return (
    <a href={href} className={styles.card} style={{ "--cor": cor }}>
      <div className={styles.topo}>
        <span className={styles.icone}>
          <Icon size={28} />
        </span>
        <span className={styles.grupo}>Grupo {grupo}</span>
      </div>

      <h3 className={styles.materia}>{materia}</h3>
      <p className={styles.descricao}>{descricao}</p>

      <span className={styles.acessar}>
        Acessar portal
        <ArrowRight size={18} />
      </span>
    </a>
  );
}
