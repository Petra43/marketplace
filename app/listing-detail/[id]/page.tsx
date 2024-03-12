"use client"

// --- framework imports ---
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createListingUrl } from "../../constants";
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
  const isOwner: boolean = true; // will need to compare listing owner with current user

  const createNewListing = () => {
    const newListingBoilerPlate = {
      id: createListingUrl,
      ownerId: "current user id",
      name: "product name",
      description: "add description",
      price: 0.00
    }
    setListingDetails(newListingBoilerPlate)
  }

  const getListingData = useCallback( async () => {
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }

    const response = await fetch(`/api/listing/${listingId}`, request)
    const responseBody = await response.json() as unknown as DbListing
    const retrievedListing: ListingDetails = {
      id: responseBody._id,
      name: responseBody.name,
      description: responseBody.description,
      ownerId: responseBody.ownerId,
      price: responseBody.price,
    }
    setListingDetails(retrievedListing)
    
  }, [listingId])

  useEffect(() => {
    //run api calls
    if(listingId === createListingUrl) {
      createNewListing()
      setLoading(false)
    } else {
      try {
        // run api calls
        getListingData()
        // if else is for testing
        setLoading(false)
      } catch (error) {
        console.error(error);
        router.push('/error');
      }
    }
  },[loading, listingId, router, getListingData])

  const toggleEditDescription = () => {
    if(isOwner) {
      return (
        <div className={styles.editLabelCont}>
          <div></div>
          <button onClick={() => setEditDescription(!editDescription)}>
            edit
          </button>
        </div>
      )
    } else {
      return <></>
    }
  }

  const saveButton = () => isOwner ? <button onClick={() => saveListing()}> save </button> : <></>

// --- update functions --- 
// each function creates a deep clone and changes the clones value then save clone as the listingDetails state

  const updateDescription = (content: string) => {
    let newListingDetails: ListingDetails = structuredClone(listingDetails) as ListingDetails;
    newListingDetails.description = content;
    setListingDetails(newListingDetails);
  }

  const updateTitle = (title: string) => {
    let newListingDetails: ListingDetails = structuredClone(listingDetails) as ListingDetails;
    newListingDetails.name = title;
    setListingDetails(newListingDetails);
  }

  const updatePrice = (price: number) => {
    let newListingDetails: ListingDetails = structuredClone(listingDetails) as ListingDetails;
    newListingDetails.price = price;
    setListingDetails(newListingDetails);
  }

  const saveListing = async () => {

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listingDetails)
    }

    const response = await fetch(`/api/listing`, request)
    const responseBody = await response.json() as unknown as InsertResponse
    
    if (responseBody.acknowledged) {
      let newListing = structuredClone(listingDetails) as ListingDetails
      newListing.id = responseBody.insertedId
      setListingDetails(newListing)
      alert("save successful")
      } else {
        alert("save failed")
      }
      //console.log(listingDetails)
      
    
    }

  // --- output ---
  if(loading) {
    // - waiting for useEffect -
    return <>loading</>
  } else if(listingDetails){
    // - main page output -
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
                canEdit={isOwner}
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
              <TipTapEditor 
                content={listingDetails.description} 
                isEdit={editDescription} 
                setContent={(cont:string) => updateDescription(cont)}
              />
              {toggleEditDescription()}
            </div>
            {saveButton()}
            <SellerInfo sellerId={listingDetails.ownerId}/>
            <CommentSection listingId={listingId}/>
          </div>
        </div>
      </>
    )
  }
}


// --- testing constants ---
const testContent = "<p>Introducing the Dinner Set in our Modern range, the perfect combination of elegance and functionality and a seamless addition to your table. The plates in this set are press-moulded which offers a lovely simple surface where the food can stand out. </p>"

const testListingDetails: ListingDetails = {
  name: "test product",
  id: "test",
  ownerId:"test",
  description: testContent,
  price: 19.99,
}