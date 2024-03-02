import Image from "next/image";
import styles from "./page.module.css";
import ListingCard from "./components/listingitem/ListingCard";
import { ListingResult } from "./components/listingitem/producttypes";




export default function Home() {
  const listingResult:ListingResult = {
    id: 2,
    name: "Knitted Beanie",
    description: "Veniam aliquip nisi qui adipisicing est sit mollit eiusmod aliqua nostrud irure do sint quis.",
    price: 20.00,
    category: "Knitted",
    thumbnailURL: "",
  }
  
  return (
    <>
     <p>hello world</p>
    <ListingCard listingResult={listingResult} />
    </>
  );
}

