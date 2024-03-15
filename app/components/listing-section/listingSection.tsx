"use client"
import React, { useCallback, useEffect, useState } from "react";
import ListingCard from "../listingitem/ListingCard";
import { listingInfo } from "../listingitem/constants";
import { Jua } from "next/font/google";
import styles from "./listingSection.module.css";
import { ListingResult } from "../listingitem/productTypes";
const jua=Jua({weight:"400", subsets:["latin"]})

/** Anna Created this Listing Section which feeds information to the listing cards */

export default function ListingSection(): React.JSX.Element {
  //States 
  const [listings, setListings] = useState<ListingResult[]>([])
  const [loading, setLoading] = useState(true) 
  
  const getListingsData = (async () => {
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }
    const response = await fetch('/api/listing', request)
    const responseBody = await response.json() as unknown as DbListing[]
    const retrievedListings = responseBody.map((listing: DbListing) => {
      const result: ListingResult = {
        id: listing._id,
        name: listing.name,
        description: listing.description,
        price: listing.price,
      }
      return result 
    }) 
      setListings(retrievedListings)
      setLoading(false)
  })
  useEffect (() => {getListingsData()},[])
  const makeListings = ()=>{ 
    const content :React.JSX.Element[]= [] 
  
  listings.forEach(listing =>content.push(<ListingCard key={listing.id} listingResult={listing}/>)) 
  return content
  }

  if (loading) {
    return <div>loading</div>
  } else {
    return (
      <><h1 className="jua">Handmade with Love</h1>
      <div className={styles.flex}>{makeListings()}</div>
      </>
    );
  }
};
