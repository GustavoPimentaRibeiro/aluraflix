import styles from "./Conteudo.module.css";
import Categoria from "components/Categoria";
import Card from "components/Card";

import { useContext } from "react";
import { VideosContext } from "context/VideosContext";
import { TimesContext } from "context/TimesContext";
import ModalEditar from "components/ModalEditar";

function Conteudo() {
  const { times } = useContext(TimesContext);
  const { videos } = useContext(VideosContext);

  return (
    <div className={styles.container}>
      {times.map((time) => {
        return (
          <section key={time.id} className={styles.conteudo}>
            <Categoria corFundo={time.corFundo}>{time.categoria}</Categoria>

            <div className={styles.cardsContainer}>
              {videos.map((card) => {
                return (
                  card.categoria === time.categoria && (
                    <Card key={card.id} {...card} corFundo={time.corFundo} />
                  )
                );
              })}
            </div>
          </section>
        );
      })}
      <ModalEditar />
    </div>
  );
}

export default Conteudo;
