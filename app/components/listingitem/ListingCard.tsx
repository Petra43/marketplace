import React, { Component } from 'react';
import Image from 'next/image';
import babyknitted from '/public/babyknitted.jpg';
import { ListingResult } from './producttypes';
import styles from './productList.module.css';
import { formatPrice } from './formatprice';


export default function ListingCard({listingResult}): React.FC<{}> {
    return (
      <div className={styles.grid}>
        <div>
          <Image src={babyknitted} width= {300} height={135} alt='knitted-baby-beanie' className={styles.listingimg} />
          <div className={styles.card}>
            <div className={styles.text}>
              <h3>{listingResult.name}</h3>
              <p>{listingResult.description}</p>
              <p className={styles.price}>{formatPrice(listingResult.price)}</p>
            </div>
          </div>
        </div>
      </div>
          );
  };
