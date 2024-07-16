import styles from "./Input.module.css";

function Input({ type = "text", label, name, placeholder }) {
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
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
        />
      )}
    </div>
  );
}

export default Input;
