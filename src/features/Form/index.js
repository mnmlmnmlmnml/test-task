import React, { useState, useReducer, useEffect } from "react";
import styles from "./index.module.scss";
import { Input, Select, Checkbox, Radio, Button } from "../../ui";

function reducer(state, action) {
  return { ...state, [action.name]: action.payload };
}

const clientGroups = ["VIP", "Проблемные", "ОМС"];
const doctors = ["Иванов", "Захаров", "Чернышева"];
const typeDocument = [
  "Паспорт",
  "Свидетельство о рождении",
  "Вод. удостоверение",
];

const validation = {
  surname: {
    required: true,
  },
  name: { required: true },
  lastname: "",
  birth: { required: true },
  tel: { required: true },
  sex: "",
  group: { required: true },
  doctors: "",
  subscription: false,
  post: "",
  region: "",
  country: "",
  city: { required: true },
  street: "",
  house: "",
  documents: { required: true },
  series: "",
  number: "",
  issuer: "",
  issue_date: { required: true },
};

const initialState = {
  surname: "",
  name: "",
  lastname: "",
  birth: "",
  tel: "",
  sex: "",
  group: "",
  doctors: "",
  subscription: false,
  post: "",
  region: "",
  country: "",
  city: "",
  street: "",
  house: "",
  documents: "",
  series: "",
  number: "",
  issuer: "",
  issue_date: "",
};

export function Form() {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    dispatch({
      name: e.target.name,
      payload: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = {};
    const fields = Object.keys(data);
    console.log(fields);
    fields.forEach((field) => {
      if (validation[field].required && !data[field]) {
        errors[field] = "Это обязательное поле";
      }
    });
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log("Отправка формы");
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Фамилия:"
        name="surname"
        onChange={handleChange}
        errors={errors}
      />
      <Input label="Имя:" name="name" onChange={handleChange} errors={errors} />
      <Input
        label="Отчество:"
        name="lastname"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Дата рождения:"
        name="birth"
        type="date"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Номер телефона:"
        name="tel"
        onChange={handleChange}
        errors={errors}
      />
      <Radio
        onChange={handleChange}
        errors={errors}
        label="Пол:"
        name="sex"
        options={[
          { value: "male", label: "Мужской" },
          { value: "female", label: "Женский" },
        ]}
      />
      <Select
        label="Группа клиентов:"
        name="group"
        onChange={handleChange}
        errors={errors}
        options={clientGroups}
      />
      <Select
        label="Лечащий врач:"
        name="doctors"
        onChange={handleChange}
        options={doctors}
        errors={errors}
      />
      <Checkbox
        label="Не отправлять СМС."
        name="subscription"
        onChange={handleChange}
      />
      <Input
        label="Индекс:"
        name="post"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Страна:"
        name="country"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Область:"
        name="region"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Город:"
        name="city"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Улица:"
        name="street"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Дом:"
        name="house"
        onChange={handleChange}
        errors={errors}
      />
      <Select
        label="Тип документа:"
        name="documents"
        onChange={handleChange}
        errors={errors}
        options={typeDocument}
      />
      <Input
        label="Серия:"
        name="series"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Номер:"
        name="number"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Кем выдан:"
        name="issuer"
        onChange={handleChange}
        errors={errors}
      />
      <Input
        label="Дата выдачи:"
        name="issue_date"
        onChange={handleChange}
        errors={errors}
      />
      <Button label="Отправить" type="submit" />
    </form>
  );
}
