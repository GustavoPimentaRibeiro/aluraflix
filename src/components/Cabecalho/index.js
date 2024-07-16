import styles from "./Cabecalho.module.css";
import logo from "../../images/logo.svg";
import CabecalhoLink from "./CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} className={styles.logo} alt="Logo da Alura" />
      <nav className={styles.botoesContainer}>
        <CabecalhoLink to="/">HOME</CabecalhoLink>

        <CabecalhoLink to="/novovideo">NOVO VÍDEO</CabecalhoLink>
        {/* <BotaoCabecalho acao="home" ativo>
          HOME
        </BotaoCabecalho>
        <BotaoCabecalho acao="adicionar">NOVO VÍDEO</BotaoCabecalho> */}
      </nav>
    </header>
  );
}

export default Cabecalho;
