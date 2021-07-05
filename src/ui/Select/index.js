import React from "react";
import styles from "./index.module.scss";

export function Select(props) {
  const { onChange, type, name, value, label, errors, options = [] } = props;

  return (
    <label className={styles.wrapper}>
      <span className={styles.text}>{label}</span>
      <select
        className={styles.input}
        onChange={onChange}
        type={type}
        value={value}
        name={name}
        errors={errors}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
