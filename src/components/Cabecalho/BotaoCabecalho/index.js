import styles from "./BotaoCabecalho.module.css";
import botaoAdicionar from "./botao-adicionar.svg";
import botaoAdicionarAtivo from "./botao-adicionar-ativo.svg";
import botaoHome from "./botao-home.svg";
import botaoHomeAtivo from "./botao-home-ativo.svg";

function BotaoCabecalho({ acao = "default", ativo = false, children }) {
  function escolheImagem(acao, ativo) {
    switch (acao) {
      case "adicionar":
        return ativo ? botaoAdicionarAtivo : botaoAdicionar;
      case "home":
        return ativo ? botaoHomeAtivo : botaoHome;
      default:
        return null;
    }
  }

  return (
    <header className={`${styles.botaoCabecalho} ${ativo && styles.ativo}`}>
      <img
        src={escolheImagem(acao, ativo)}
        className={styles.logo}
        alt="Logo da Alura"
      />
      {ativo ? children : ""}
    </header>
  );
}

export default BotaoCabecalho;
