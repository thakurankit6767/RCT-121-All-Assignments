
import styles from "./Button.module.css";

function Button({ title, onClick, disabled, id }) {
  return (
    <button id={id} data-testid="button-component" className={styles.button} onClick={onClick}>
      {title} 
    </button>
  );
}

export default Button;



