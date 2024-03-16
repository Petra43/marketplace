"use client";
import styles from "./item.module.css";
import React from "react";
import { Jua } from "next/font/google";
import TipTap from "@/app/components/input-components/tiptapEditor";
/**Created by Nirav Singh */
const jua = Jua({ subsets: ["latin"], weight: "400" });

// for each component's props, you have to define the type for the props

type Props = {
  name: string;
  information: string;
};

// In components you must provide a props type with React.FC<>
export const Item: React.FC<Props> = ({ name, information }) => {
  return (
    <div className={styles.itemFrame}>
      <div>
        <img
          src="\assets\new-products\pottery\TonySly-126smallfile_2048x.webp"
          alt="Dinner Set"
        />
      </div>

      <div className={styles.info}>
        <h3>{name}</h3>
        <TipTap content={information} isEdit={false} setContent={() => {}} />
      </div>
    </div>
  );
};
