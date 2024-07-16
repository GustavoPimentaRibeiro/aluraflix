import Acao from "./Acao";
import styles from "./AcoesCard.module.css";
import editar from "./editar.svg";
import excluir from "./excluir.svg";

function AcoesCard({ id, corFundo }) {
  return (
    <div
      style={{
        boxShadow: `0px -4px 5px 3px ${corFundo} inset`,
        borderColor: corFundo,
      }}
      className={styles.acaoContainer}
    >
      <Acao acao="deletar" id={id} iconeAcao={excluir}>
        DELETAR
      </Acao>
      <Acao acao="editar" id={id} iconeAcao={editar}>
        EDITAR
      </Acao>
    </div>
  );
}

export default AcoesCard;
