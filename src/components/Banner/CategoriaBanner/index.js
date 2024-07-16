import styles from "./CategoriaBanner.module.css";

function CategoriaBanner({ corFundo, children }) {
  return (
    <div
      className={styles.categoriaBanner}
      style={{ backgroundColor: corFundo }}
    >
      {children}
    </div>
  );
}

export default CategoriaBanner;
