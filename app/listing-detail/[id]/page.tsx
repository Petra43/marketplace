"use client"

// --- framework imports ---
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createListingUrl, exampleComments } from "../../constants";
// --- style imports ---
import styles from "./page.module.css"
// --- component imports ---
import SellerInfo from "../components/seller-info/SellerInfo";
import CommentSection from "../components/comment-section/CommentSection";
import TipTapEditor from "../../components/input-components/tiptapEditor";
import TitleEditor from "../../components/input-components/titleEditor";
import PriceEditor from "@/app/components/input-components/priceEditor";


/**
 * component for editing prices
 * @param {string} id the content of the editor
 * @returns ListingDetail next.js page
 * Created by: Ryn Parker
 */
export default function ListingDetail({ params }: { params: {id: string}}) {
// --- set states --
  const [editDescription, setEditDescription] = useState(false)
  const [listingDetails, setListingDetails] = useState<ListingDetails>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

// --- set variables ---
  const listingId: string = params.id;
  let isEdit: boolean = false;
  const isOwner: boolean = true;

  const createNewListing = () => {
    const newListingBoilerPlate = {
      id: "new",
      ownerId: "current user id",
      name: "product name",
      description: "add description",
      price: 0.00
    }
    setListingDetails(newListingBoilerPlate)
  }

  useEffect(() => {
    //run api calls
    if(listingId === createListingUrl) {
      createNewListing()
      setLoading(false)
    } else {
      try {
        // run api calls
        // if else is for testing
        if (listingId === "test") {
          setListingDetails(testListingDetails)
          setLoading(false)
        } else {
          throw new TypeError("does not exist") 
        }
      } catch (error) {
        console.error(error);
        router.push('/error');
      }
    }
  },[loading, listingId, router])

  const toggleEditDescription = () => {
    if(isOwner) {
      return (
        <div className={styles.editLabelCont}>
          <label>Description</label>
          <button onClick={() => setEditDescription(!editDescription)}>
            edit
          </button>
        </div>
      )
    } else {
      return <></>
    }
  }

// --- update functions --- 
// each function creates a deep clone and changes the clones value then save clone as the listingDetails state

  const updateDescription = (content: string) => {
    let newListingDetails: ListingDetails = structuredClone(listingDetails);
    newListingDetails.description = content
    setListingDetails(newListingDetails)
  }

  const updateTitle = (title: string) => {
    let newListingDetails: ListingDetails = structuredClone(listingDetails)
    newListingDetails.name = title
    setListingDetails(newListingDetails)
  }

  const updatePrice = (price: number) => {
    let newListingDetails: ListingDetails = structuredClone(listingDetails)
    newListingDetails.price = price
    setListingDetails(newListingDetails)
  }
  

  if(loading) {
    // --- waiting for useEffect ---
    return <>loading</>
  } else {
    // --- main page output ---
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
            <div className="price">
              <PriceEditor 
                price={listingDetails.price}
                canEdit={isOwner}
                callback={(value: number) => updatePrice(value)}/>
            </div>
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
}


// --- testing constants ---
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