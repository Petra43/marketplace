"use clients";
import styles from "./section.module.css";
import React from "react";
import { Item } from "../dashboard-item/item";
/**created by Nirav Singh */
type CatalogItem = {
  // Way to define a type for some object
  name: string;
  information: string;
  price: number;
};
type props = {
  title: string;
  enableCRUD: boolean;
};
// Way to define a component. Export at the front allows you to call it in other files
export const ItemList = ({ title, enableCRUD }: props) => {
  const catalogArray: CatalogItem[] = [
    //array list box brackets mean array
    {
      name: "Dinner Set",
      information:
        "This dinner set is sure to impress your dinner party guests. Made with top of the line clay.",
      price: 5,
    },
    {
      name: "Dinner Set",
      information:
        "This dinner set is sure to impress your dinner party guests. Made with top of the line clay.",
      price: 5,
    },
    {
      name: "Dinner Set",
      information:
        "This dinner set is sure to impress your dinner party guests. Made with top of the line clay.",
      price: 5,
    },
    {
      name: "Dinner Set",
      information:
        "This dinner set is sure to impress your dinner party guests. Made with top of the line clay.",
      price: 5,
    },
  ];
  const content = catalogArray.map((catalogItem) => (
    <Item name={catalogItem.name} information={catalogItem.information} />
  ));

  const addButton = () =>
    enableCRUD ? ( //button function
      <button className={styles.btn} type="button">
        add
      </button>
    ) : (
      <></>
    );

  return (
    <div>
      <div className={styles.itemlistcontainer}>
        <div className={styles.flex}>
          <h3 className={styles.headline}>{title}</h3>
          {addButton()}
        </div>
        <ul className={styles.container}>{content}</ul>
      </div>
    </div>
  );
};
