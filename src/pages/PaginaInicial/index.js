import Banner from "../../components/Banner";
import Conteudo from "../../components/Conteudo";
import styles from "./PaginaInicial.module.css";

function PaginaInicial() {
  return (
    <div className={styles.container}>
      <Banner />

      <Conteudo />
    </div>
  );
}

export default PaginaInicial;
