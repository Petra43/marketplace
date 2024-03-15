import React, { Component } from 'react';
import Image from 'next/image';
import babyknitted from '/public/babyknitted.jpg';
import styles from './productList.module.css';
import { formatPrice } from './formatprice';
import { ListingResult } from './productTypes';

/** Anna Created this Listing Card Page which styles the Listing Card Component */
export default function ListingCard({listingResult}:{listingResult:ListingResult}): React.JSX.Element {
  const img = {width:"100%", height:"60%"} 

const price = listingResult.price !==undefined ? listingResult.price :0 

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
          <p className={styles.price}>{formatPrice(price)}</p>
        </div>
      </div>
      );
};
