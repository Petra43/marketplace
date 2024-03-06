"use client"

import { useEffect, useState } from "react";
import { exampleComments } from "../constants";
import CommentSection from "./components/comment-section/CommentSection";
import SellerInfo from "./components/seller-info/SellerInfo";
import styles from "./page.module.css"
import TipTapEditor from "../components/input-components/tiptapEditor";
import TitleEditor from "../components/input-components/titleEditor";


export default function ListingDetails() {

  const [editDescription, setEditDescription] = useState(false)
  const [listingDetails, setListingDetails] = useState(testListingDetails)

  useEffect(() => {
    //run api calls
  }
  ),[]

  const listingId: string = ""
  let isEdit: boolean = false;
  const isOwner: boolean = true;

  const toggleEditDescription = () => {
    if(isOwner) {
      return (
        <div className={styles.editLabelCont}>
          <label>Description</label>
          <button onClick={() => setEditDescription(!editDescription)}> edit </button>
        </div>
      )
    } else {
      return <></>
    }
  }

  const updateDescription = (content: string) => {
    const newListingDetails: ListingDetails = {
      id: listingDetails.id,
      name: listingDetails.name,
      ownerId: listingDetails.ownerId,
      description: content,
      price: listingDetails.price,
    }
    setListingDetails(newListingDetails)
  }

  const updateTitle = (title: string) => {
    const newListingDetails: ListingDetails = {
      id: listingDetails.id,
      name: title,
      ownerId: listingDetails.ownerId,
      description: listingDetails.description,
      price: listingDetails.price,
    }
    setListingDetails(newListingDetails)
  }


  
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imageViewer}>
          image viewer goes here
        </div>
        <div className="information">
          <div className="pageTitle">
            <TitleEditor 
              title={listingDetails.name} 
              titleType="h2"
              canEdit={true}
              callback={(value:string) => updateTitle(value)} 
            /> 
          </div>
          <div className="price">{listingDetails.price}</div>
          <div className="listingDescription">
            {toggleEditDescription()}
            <TipTapEditor 
              content={listingDetails.description} 
              isEdit={editDescription} 
              setContent={(cont:string) => updateDescription(cont)}
            />
          </div>
          <SellerInfo sellerId={listingDetails.ownerId}/>
        </div>
      </div>
    </>
  )
}

const testContent = "<p>hello ryn</p><p>this is a test of the editor</p>"

const testListingDetails: ListingDetails = {
  name: "test product",
  id: "test",
  ownerId:"test",
  description: testContent,
  price: 19.99,
}

type ListingDetails = {
  name: string;
  id: string;
  ownerId:string;
  description: string;
  price: number;
}

