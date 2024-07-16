import AcoesCard from "./AcoesCard";
import styles from "./Card.module.css";

function Card({ id, imagem, corFundo }) {
  return (
    <div className={styles.card}>
      <div
        style={{
          border: `4px solid ${corFundo}`,
          boxShadow: `0px 0px 17px 8px ${corFundo} inset`,
        }}
        className={styles.imagemContainer}
      >
        <img className={styles.imagem} src={imagem} alt="Imagem do Card" />
      </div>

      <AcoesCard id={id} corFundo={corFundo} />
    </div>
  );
}

export default Card;
