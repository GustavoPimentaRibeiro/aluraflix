import styles from "./Botao.module.css";

function Botao({ props, children, bordaMarcada = false }) {
  return (
    <button
      className={`${styles.botao}`}
      {...(bordaMarcada && { style: { border: "3px solid #2271D1" } })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Botao;
