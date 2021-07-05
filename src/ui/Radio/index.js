import React from "react";
import styles from "./index.module.scss";

export function Radio(props) {
  const { onChange, name, value, label, errors, options = [] } = props;
  return (
    <label className={styles.wrapper}>
      <span className={styles.text}>{label}</span>
      {options.map((option) => (
        <span className={styles.sex} key={option.value}>
          {option.label}
          <input
            className={styles.input}
            type="radio"
            name={name}
            onChange={onChange}
            errors={errors}
            value={option.value}
            checked={value}
          />
        </span>
      ))}
    </label>
  );
}
