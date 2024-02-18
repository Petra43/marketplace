import React from 'react';
import Image from 'next/image';
import babyknitted from '/public/babyknitted.jpg';
import { ListingResult } from './producttypes';
import styles from './productList.module.css';


export default function ListingCard(listingResult:ListingResult): React.FC<{}> {
    return (
      <div className={styles.grid}>
        <div>
          <Image src={babyknitted} width= {300} height={135} alt='knitted-baby-beanie' className={styles.listingimg} />
          <div className={styles.card}>
            <div className={styles.text}>
              <h1>{listingResult.name}</h1>
              <p>{listingResult.description}</p>
            </div>
          </div>
        </div>
      </div>
          );
  };
