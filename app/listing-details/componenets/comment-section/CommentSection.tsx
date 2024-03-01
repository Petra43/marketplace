"use client"

import React, { useEffect, useState } from "react"
import style from "./commentSection.module.css"
import CommentComponent from "../comment/comment";
import { NextResponse } from "next/server";
import { exampleComments } from "@/app/constants";

export default function CommentSection({listingId}: {listingId: string}) {

  const testId = "65e112dd536ebd2518bf1783" // for testing
  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  }

  //states
  const [comments, setComments] = useState<ParentComment[]>([])
  const [loading, setLoading] = useState<Boolean>(true)



  // is really slow but works
  const replyData = async (commentId: string): Promise<ListingComment[]> => {
    const response = await fetch(`/api/comments/replies/${commentId}`, request)
    const replies: ListingComment[] = await response.json()
    //console.log(replies)

    return replies
  }

  const commentData = async () => {
    const response = await fetch(`/api/listing/${testId}/comments`, request)
    const com = await response.json()
    const newCom = []
    for await (const c of com) {
      const r = await replyData(c.id)
      newCom.push( {
        comment: c,
        children: r
      })
    }
    setLoading(false)
    console.dir(newCom)
    setComments(newCom)
  }

  useEffect( () => {
    commentData()
  },[])

  

  // creates the JSX for the reply rows
  const makeReplyRows = (comments: ListingComment[]) => {
    const replyRows: React.JSX.Element[] = [];
    comments.forEach((comment) => replyRows.push(<CommentComponent listingComment={comment} key={comment.id}/>))
    return replyRows
  }

  // creates the JSX for the comment rows
  const makeCommentRows = (comments: ParentComment[]) => {
    const commentRows: React.JSX.Element[] = []
    comments.forEach((comment) => {
      const replies = makeReplyRows(comment.children)

      commentRows.push(
      <div className={style.commentContainer} key={comment.comment.id}>
        <CommentComponent listingComment={comment.comment} />
        <div className={style.replyContainer}>
          {replies}
        </div>
      </div>
      )
    })
    return commentRows
  }

  const commentRows:React.JSX.Element[]  = makeCommentRows(comments)

  const out = () => {
    if (loading) {
      return <div>loading</div>
    } else {
      return commentRows
    }
  }

  return(
    <div className={style.container}>
      <div className={style.title}>Comments and Questions</div>
      {out()}
    </div>
  )
}