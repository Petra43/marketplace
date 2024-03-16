"use client"

import React from "react";
import style from "./comment.module.css";

/**
 * 
 * @param listingComment  
 * @returns a component that displays comment information
 * created by: Ryn Parker 
 */
export default function CommentComponent({listingComment}: {listingComment: ListingComment}) {

  const myComment = listingComment

  return (
    <div className={style.commentContainer}>
      <div className={style.heading}> {myComment.owner} </div>
      <div className={style.comment}> {myComment.text} </div>
    </div>
    )
}