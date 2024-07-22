import styles from "./BotaoModal.module.css";

function BotaoModal({ children, ativo = false }) {
  return (
    <button className={`${styles.botao} ${ativo && styles.ativo}`}>
      {children}
    </button>
  );
}

export default BotaoModal;
