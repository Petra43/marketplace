import React, { Component } from 'react';
import Image from 'next/image';
import babyknitted from '/public/babyknitted.jpg';
import styles from './productList.module.css';
import { formatPrice } from './formatprice';

/** Anna Created this Listing Card Page which styles the Listing Card Component */
export default function ListingCard({listingResult}): React.FC<{}> {
  const img = {width:"100%", height:"60%"} 
    return (
      <div className={styles.card}>
        <Image 
          src={babyknitted} style={img}
          alt='knitted-baby-beanie'  
          className={styles.listingimg} 
          />
        <div className={styles.text}>
          <h2>{listingResult.name}</h2>
          <p>{listingResult.description}</p>
          <p className={styles.price}>{formatPrice(listingResult.price)}</p>
        </div>
      </div>
      );
};
