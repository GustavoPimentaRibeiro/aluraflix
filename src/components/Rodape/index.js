import styles from "./Rodape.module.css";
import logo from "../../images/logo.svg";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={logo} alt="Logo da Alura" />
    </footer>
  );
}

export default Rodape;
