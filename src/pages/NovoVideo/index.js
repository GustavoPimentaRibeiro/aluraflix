import Input from "components/Input";
import styles from "./NovoVideo.module.css";
import Botao from "components/Botao";
import InputSuspenso from "components/InputSuspenso";
import { TimesContext } from "context/TimesContext";
import { useContext } from "react";

function NovoVideo() {
  const { times } = useContext(TimesContext);

  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1>NOVO VÍDEO</h1>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      </div>

      <div className={styles.dadosContainer}>
        <div>
          <div className={styles.divider} />
          <h2 className={styles.titulo}>Criar Card</h2>
          <div className={styles.divider} />
        </div>

        <form className={styles.formulario}>
          <div className={styles.inputContainer}>
            <InputSuspenso times={times} name="categoria" label="Categoria" />
          </div>

          <div className={styles.inputContainer}>
            <Input
              label="Imagem"
              name="imagem"
              placeholder="Digite o link da imagem"
            />

            <Input
              label="Vídeo"
              name="video"
              placeholder="Digite o link do vídeo"
            />
          </div>

          <div className={styles.inputContainer}>
            <Input
              type="textarea"
              name="descricao"
              label="Descrição"
              placeholder="Sobre o que é esse vídeo?"
            />
          </div>

          <div className={styles.botoesContainer}>
            <Botao bordaMarcada>Salvar</Botao>
            <Botao>Limpar</Botao>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NovoVideo;
