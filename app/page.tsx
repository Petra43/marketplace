import Image from "next/image";
import bannerImg from '/public/bannerImg.png';
import styles from "./page.module.css";
import ListingCard from "./components/listingitem/ListingCard";
import { ListingResult } from "./components/listingitem/productTypes";
import { listingInfo } from "./components/listingitem/constants";
import React from "react";
import ListingSection from "./components/listing-section/listingSection";


export default function Home() {
  const listingResult:ListingResult = {
    id: 2,
    name: "Knitted Beanie",
    description: "Veniam aliquip nisi qui adipisicing est sit mollit eiusmod aliqua nostrud irure do sint quis.",
    price: 20.00,
    category: "Knitted",
    thumbnailURL: "",
  }
  const img = {width:"100%", height:"100%"} 

  return (
<div>
    <div className="headerImage">
    <Image 
        src={bannerImg} style={img}
        alt='clay-wheel'  
        className={styles.headerImage}/>
    </div>
  <h1 className={styles.headerTitle}>Most Trusted Market Place for <br/> Hand Made Products in <br/> New Zealand </h1>
  <div>
  <ListingSection></ListingSection>
  </div>
</div>
);
}

