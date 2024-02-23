"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import { Jua, Roboto } from "next/font/google";

const jua = Jua({ subsets: ["latin"], weight: "400" });

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataObject = {
      username: formData.username,
      password: formData.password,
    };

    console.log("Submitting form data:", formDataObject);
    // Implement email sign up logic here
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={jua.className}>Login</h1>

        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            className={styles.inputField}
            placeholder="Email"
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <input
            className={styles.inputField}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <div className={styles.flex}>
            <div className={styles.rememberMe}>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button className={styles.pill} type="button">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
