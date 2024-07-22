import { useContext } from "react";
import styles from "./ModalEditar.module.css";
import BotaoModal from "./BotaoModal";

import { TimesContext } from "context/TimesContext";

import InputSuspenso from "components/InputSuspenso";
import Input from "components/Input";

function ModalEditar() {
  const { times } = useContext(TimesContext);

  return (
    <div className={styles.modalContainer}>
      <form className={styles.modal}>
        <h1 className={styles.titulo}>Editar Card:</h1>
        <div className={styles.inputsContainer}>
          <InputSuspenso times={times} label="Categoria" bordaAzul />

          <Input
            label="Imagem"
            name="imagem"
            placeholder="URL da imagem"
            bordaAzul
          />

          <Input
            label="Video"
            name="video"
            placeholder="URL do vídeo"
            bordaAzul
          />

          <Input
            type="textarea"
            label="Descrição"
            name="descricao"
            placeholder="Descricão do vídeo"
            bordaAzul
          />
        </div>
        <div className={styles.botoesContainer}>
          <BotaoModal ativo>Salvar</BotaoModal>
          <BotaoModal>Limpar</BotaoModal>
        </div>
      </form>
    </div>
  );
}

export default ModalEditar;
