import styles from "./InputSuspenso.module.css";

function InputSuspenso({ times, label, bordaAzul }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <select
        className={styles.select}
        {...(bordaAzul
          ? { style: { borderColor: "#6BD1FF" } }
          : { style: { borderColor: "#262626" } })}
      >
        <option value="" defaultValue={""}>
          Selecione uma categoria
        </option>
        {times.map((time) => (
          <option key={time.id} value={time.categoria}>
            {time.categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSuspenso;
