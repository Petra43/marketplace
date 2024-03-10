import React from "react"
import style from "./commentSection.module.css"
import CommentComponent from "../comment/comment";

export default function CommentSection({comments}: {comments: ParentComment[]}) {

  // creates the JSX for the reply rows
  const makeReplyRows = (comments: ListingComment[]) => {
    const replyRows: React.JSX.Element[] = [];
    comments.forEach((comment) => replyRows.push(<CommentComponent listingComment={comment}/>))
    return replyRows
  }

  // creates the JSX for the comment rows
  const makeCommentRows = (comments: ParentComment[]) => {
    const commentRows: React.JSX.Element[] = []
    comments.forEach((comment) => {
      const replies = makeReplyRows(comment.children)

      commentRows.push(
      <div className={style.commentContainer}>
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

  return(
    <div className={style.container}>
      <h3 className={style.title}>Ask the seller a question</h3>
      {commentRows}
    </div>
  )
}