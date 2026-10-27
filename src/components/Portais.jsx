import PortalCard from "./PortalCard";
import { portais } from "@/data/portais";
import styles from "./Portais.module.css";

export default function Portais() {
  return (
    <section id="portais" className={styles.secao}>
      <div className={styles.cabecalho}>
        <h2>Escolha sua disciplina</h2>
        <p>Cada portal foi desenvolvido por uma equipe da turma.</p>
      </div>

      <div className={styles.grade}>
        {portais.map((portal) => (
          <PortalCard key={portal.grupo} {...portal} />
        ))}
      </div>
    </section>
  );
}
