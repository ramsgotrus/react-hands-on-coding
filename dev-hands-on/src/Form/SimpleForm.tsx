import React, { useState } from "react";
import "./Styles.css";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SimpleFormData: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let tempError: FormData = {
      name: "",
      email: "",
      password: "",
    };
    let isValid: boolean = true;
    if (!formData.name) {
      tempError.name = "Name is required";
      isValid = false;
    }
    if (!formData.password) {
      tempError.password = "password is required";
      isValid = false;
    }
    if (!formData.email) {
      tempError.email = "email is required";
      isValid = false;
    }
    setErrors(tempError);
    return isValid;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Submited");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label id="name" typeof="html">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleEvent}
      />
      {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      <label id="email" typeof="html">
        Email:
      </label>
      <input type="email" name="email" id="email" onChange={handleEvent} />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      <label id="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleEvent}
      />
      {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      <button>Submit</button>
    </form>
  );
};

export default SimpleFormData;
