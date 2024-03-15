import React, { Component } from 'react';
import Image from 'next/image';
import babyknitted from '/public/babyknitted.jpg';
import styles from './productList.module.css';
import { formatPrice } from './formatprice';
import { ListingResult } from './productTypes';
import TipTap from '../input-components/tiptapEditor';
import { Content } from 'next/font/google';
import { link } from 'fs';
import Link from 'next/link';

/** Anna Created this Listing Card Page which styles the Listing Card Component */
export default function ListingCard({listingResult}:{listingResult:ListingResult}): React.JSX.Element {
  const img = {width:"100%", height:"60%"} 

const price = listingResult.price !==undefined ? listingResult.price :0 

    return (
      <Link href={`/listing-detail/${listingResult.id}`} className={styles.link}>
        <div className={styles.card}>
          <Image 
            src={babyknitted} style={img}
            alt='knitted-baby-beanie'  
            className={styles.listingimg} 
            />
          <div className={styles.text}>
            <h2>{listingResult.name}</h2>
            <TipTap isEdit={false}content={listingResult.description}setContent={()=>{}}></TipTap>
            <p className={styles.price}>{formatPrice(price)}</p>
          </div>
        </div>
      </Link>
      );
};
