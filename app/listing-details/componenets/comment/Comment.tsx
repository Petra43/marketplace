"use client"

import React from "react";
import style from "./comment.module.css";
export default function CommentComponent({listingComment}: {listingComment: ListingComment}) {

  const myComment = listingComment

  return (
    <div className={style.commentContainer}>
      <div className={style.heading}> {myComment.owner} </div>
      <div className={style.comment}> {myComment.text} </div>
    </div>
    )
}