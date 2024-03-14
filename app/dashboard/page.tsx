"use client";
import styles from "./dashboard.module.css";
import React from "react";
import { Jua } from "next/font/google";
import { ItemList } from "./components/dashboard-section/ItemList";
/**Created By Nirav Singh */
const jua = Jua({ subsets: ["latin"], weight: "400" });

const DashboardPage = () => {
  return (
    <div>
      <div className={styles.h1}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.flexcontainer}>
        <ItemList enableCRUD={true} title="Selling" />
        <div>
          <ItemList enableCRUD={false} title="Purchased" />
          <ItemList enableCRUD={false} title="Sold" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
