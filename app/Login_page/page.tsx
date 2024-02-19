'use client'
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";


interface FormData {
  username: string;
  password: string;
}

export default function Home() {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataObject: FormData = {
      username: formData.username,
      password: formData.password,
    };

    console.log("Submitting form data:", formDataObject);
    // Implement email sign up logic here
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h2 className={styles.title}>Login</h2>
        <label className={styles.label} htmlFor="Email">
          Email:
        </label>
        <input
          className={styles.input}
          type="text"
          id="Email"
          name="Email"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label className={styles.label} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}