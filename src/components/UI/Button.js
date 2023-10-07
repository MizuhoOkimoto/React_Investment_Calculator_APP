import styles from "./Button.module.css";

function Button(props) {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt} onClick={props.onReset}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
}
export default Button;
