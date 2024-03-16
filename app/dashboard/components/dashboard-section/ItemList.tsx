"use clients";
import styles from "./section.module.css";
import React, { useEffect, useState } from "react";
import { Item } from "../dashboard-item/item";
import Link from "next/link";
import { createListingUrl } from "@/app/constants";
import { describe } from "node:test";
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
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
  const content = items.map(
    (
      catalogItem //mapping an array of items to a usable JSX display to show on screen
    ) => <Item name={catalogItem.name} information={catalogItem.information} />
  );
  const addlistingurl = `/listing-detail/${createListingUrl}`;
  const addButton = () =>
    enableCRUD ? ( //button function
      <Link href={addlistingurl}>
        <button className={styles.btn} type="button">
          add
        </button>
      </Link>
    ) : (
      <></>
    );
  const getlistingdata = async () => {
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`/api/listing`, request);
    const responseBody = (await response.json()) as unknown as DbListing[];
    console.log(responseBody);
    const catalogArray: CatalogItem[] = responseBody.map((item) => {
      const catalogItem: CatalogItem = {
        name: item.name,
        information: item.description,
        price: item.price,
      };
      setIsLoading(false);
      return catalogItem;
    });
    setItems(catalogArray);
  };

  useEffect(() => {
    getlistingdata();
  }, []);
  if (isLoading) {
    return <div>loading...</div>;
  } else {
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
  }
};
