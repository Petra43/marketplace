import { exampleComments } from "../constants";
import CommentSection from "./components/comment-section/CommentSection";
import SellerInfo from "./components/seller-info/SellerInfo";
import styles from "./page.module.css"


export default function ListingDetails() {
  const listingId: string = ""
  let isEdit: boolean = false;
  const isOwner: boolean = false;

  if(isEdit) {

  } else {

  }

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imageViewer}>
          image viewer goes here
        </div>
        <div className="information">
          <div className="pageTitle"></div>
          <div className="price"></div>
          <div className="listingDescription"></div>
          <SellerInfo sellerId=""/>
          <CommentSection comments={exampleComments}/>
        </div>
      </div>
    </>
  )
}

const testInfo = {

}