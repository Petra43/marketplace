import React from "react";
import ListingCard from "../listingitem/ListingCard";
import { listingInfo } from "../listingitem/constants";
import { Jua } from "next/font/google";
import styles from "./listingSection.module.css";
const jua=Jua({weight:"400", subsets:["latin"]})

/** Anna Created this Listing Section which feeds information to the listing cards */

export default function ListingSection(): React.JSX.Element {
    const content: React.JSX.Element[] = []
    const testData: listingResult[] = listingInfo // this will be replaced with a data base call in the future
    testData.forEach( listingSummery => content.push(<ListingCard listingResult={listingSummery}/>))
    return (
          <><h1 className="jua">Handmade with Love</h1>
          <div className={styles.flex}>{content}</div>
          </>

        );
  };


