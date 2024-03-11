"use clients";
import Image from "next/image";
import styles from "./section.module.css";
import React from "react";
import { Item } from "../dashboard-item/item";

type CatalogItem = {
  // Way to define a type for some object
  name: string;
  information: string;
  price: number;
};

// Way to define a component. Export at the front allows you to call it in other files
export const ItemList = () => {
  const catalogArray: CatalogItem[] = [
    //array list box brackets mean array
    {
      name: "Dinner Set",
      information: "Made with top of the line clay",
      price: 5,
    },
    {
      name: "Dumbbell Set",
      information: "Upto 24 kgs",
      price: 5,
    },
    {
      name: "Football Set",
      information: "Shin pads, soccer ball, etc",
      price: 5,
    },
    {
      name: "Playstation 5",
      information: "Comes with God of War",
      price: 5,
    },
  ];

  return (
    <div>
      <h3 className={styles.headline}>Selling</h3>
      <ul>
        {catalogArray.map((catalogItem) => (
          <Item name={catalogItem.name} information={catalogItem.information} />
        ))}
      </ul>
    </div>
  );
};
