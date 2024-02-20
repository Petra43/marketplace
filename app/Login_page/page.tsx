'use client'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
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
        <h1>Login</h1>
        <label htmlFor="username">Email</label>
        <input
          type="email"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit">LOG IN</button>
      </form>

    </div>
  );
}