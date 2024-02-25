import React from "react";
import style from "./sellerInfo.module.css"
import Image from "next/image";

export default function SellerInfo({sellerId}:{sellerId: string}) {
  
  const sellerName = "Petra Parker"
  
  return (
    <div className={style.container}>
      <div className={style.profileImage}>
        <Image 
          src="/public/assets/icons/user-3296.png"
          alt="default profile image"
          fill={true}
        /> 
      </div>
      <div className={style.infoContainer}>{sellerName}</div>
    </div>
  )
}