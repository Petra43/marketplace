import React from "react";
import style from "./sellerInfo.module.css"
import Image from "next/image";
import userIcon from "/public/assets/icons/user-3296.png"

export default function SellerInfo({sellerId}:{sellerId: string}) {
  
  const sellerName = "Petra Parker"
  let altText = "default profile image";
  let url = userIcon
  const img = {
    width: "100%",
    height: '100%'
  }
  
  return (
    <div className={style.container}>
      <div className={style.profileImage}>
        <Image 
          src={url}
          alt={altText}
          style={img}
        /> 
      </div>
      <div className={style.infoContainer}>{sellerName}</div>
    </div>
  )
}