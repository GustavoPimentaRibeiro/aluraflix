import styles from "./Acao.module.css";
import { useVideosContext } from "Hooks/useVideosContext";

function Acao({ acao, id, iconeAcao, children }) {
  const { editarVideo, deletarVideo } = useVideosContext();

  function escolheAcao(acao, id) {
    switch (acao) {
      case "deletar":
        return deletarVideo(id);
      case "editar":
        return editarVideo(id);
      default:
        return null;
    }
  }

  return (
    <div onClick={() => escolheAcao(acao, id)} className={styles.acao}>
      <img src={iconeAcao} alt={`Ícone de ${children}`} />
      {children}
    </div>
  );
}

export default Acao;
