import styles from "./Input.module.css";

function Input({
  type = "text",
  bordaAzul = false,
  label,
  name,
  placeholder = "",
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {type === "textarea" ? (
        <textarea
          rows={7}
          cols={60}
          wrap="hard"
          name={name}
          placeholder={placeholder}
          className={styles.input}
          {...(bordaAzul
            ? { style: { borderColor: "#6BD1FF" } }
            : { style: { borderColor: "#262626" } })}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          {...(bordaAzul
            ? { style: { borderColor: "#6BD1FF" } }
            : { style: { borderColor: "#262626" } })}
        />
      )}
    </div>
  );
}

export default Input;
