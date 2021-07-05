import React from "react";
import styles from "./index.module.scss";

export function Checkbox(props) {
  const { onChange, name, value, label } = props;

  return (
    <label className={styles.wrapper}>
      <span className={styles.text}>{label}</span>
      <input
        className={styles.input}
        onChange={onChange}
        name={name}
        checked={value}
        type="checkbox"
      />
    </label>
  );
}
