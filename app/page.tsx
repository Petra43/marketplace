"use client";
import Image from "next/image";
import styles from "./dashboard/compontents/dashboard-item/item.module.css";
import React from "react";
import { Jua, Roboto } from "next/font/google";
import { ItemList } from "./dashboard/compontents/dashboard-section/ItemList";

const jua = Jua({ subsets: ["latin"], weight: "400" });

const DashboardPage = () => {
  return (
    <div>
      <ItemList />
    </div>
  );
};

export default DashboardPage;
