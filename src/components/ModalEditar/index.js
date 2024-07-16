import styles from "./ModalEditar.module.css";

function ModalEditar() {
  return (
    <div className={styles.modalContainer}>
      <form className={styles.modal}>
        <h1>Editar Video</h1>
        <div>
          <input type="text" placeholder="Título do Vídeo" />
          <input type="text" placeholder="URL do Vídeo" />
        </div>
        <div>
          <button>Cancelar</button>
          <button>Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default ModalEditar;
