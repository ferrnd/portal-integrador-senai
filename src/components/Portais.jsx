import PortalCard from "./PortalCard";
import { portais } from "@/data/portais";
import styles from "./Portais.module.css";

export default function Portais() {
  return (
    <section id="portais" className={styles.secao}>
      <div className={styles.cabecalho}>
        <h2>Escolha uma disciplina</h2>
        <p>Cada portal é aberto em uma nova aba, para que você possa voltar a esta página.</p>
      </div>

      <div className={styles.grade}>
        {portais.map((portal) => (
          <PortalCard key={portal.grupo} {...portal} />
        ))}
      </div>
    </section>
  );
}
