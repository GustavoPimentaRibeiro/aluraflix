import styles from "./Categoria.module.css";

function Categoria({ children, corFundo }) {
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: corFundo }} className={styles.categoria}>
        {children}
      </div>
    </div>
  );
}

export default Categoria;
