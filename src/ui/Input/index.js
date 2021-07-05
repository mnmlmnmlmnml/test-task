import React from "react";
import styles from "./index.module.scss";

export function Input(props) {
  const {
    onChange,
    type = "text",
    name,
    value,
    required,
    placeholder,
    pattern,
    label,
    errors,
  } = props;
  return (
    <div>
      <label className={styles.wrapper}>
        <span className={styles.text}>{label}</span>
        <input
          onChange={onChange}
          type={type}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          className={styles.input}
          data-error={!!errors[name]}
        />
      </label>
      {errors[name] && <span className={styles.error}>{errors[name]}</span>}
    </div>
  );
}
