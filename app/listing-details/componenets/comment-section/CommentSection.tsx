import React from "react"
import style from "./commentSection.module.css"
import CommentComponent from "../comment/comment";

export default function CommentSection() {

  const exampleComments: ParentComment[] = [{
    comment: {
      owner: "Ryn Parker",
      text: "Aliquip quis labore ipsum eiusmod voluptate. Aliqua pariatur eiusmod incididunt anim. Eu eiusmod pariatur exercitation laboris aute ad minim aliquip cupidatat aute officia. Non incididunt laborum labore officia elit est ad sit do laboris. Magna laboris dolor est ex ad dolor voluptate."
    },
    children: [
    {
      owner: "Anna",
      text: "Aliquip quis labore ipsum eiusmod voluptate. Aliqua pariatur eiusmod incididunt anim. Eu eiusmod pariatur exercitation laboris aute ad minim aliquip cupidatat aute officia. Non incididunt laborum labore officia elit est ad sit do laboris. Magna laboris dolor est ex ad dolor voluptate."
    },
    {
      owner: "Nirav",
      text: "Aliquip quis labore ipsum eiusmod voluptate. Aliqua pariatur eiusmod incididunt anim. Eu eiusmod pariatur exercitation laboris aute ad minim aliquip cupidatat aute officia. Non incididunt laborum labore officia elit est ad sit do laboris. Magna laboris dolor est ex ad dolor voluptate."
    }]
  },
  {
    comment: {
      owner: "Anna",
      text: "Aliquip quis labore ipsum eiusmod voluptate. Aliqua pariatur eiusmod incididunt anim. Eu eiusmod pariatur exercitation laboris aute ad minim aliquip cupidatat aute officia. Non incididunt laborum labore officia elit est ad sit do laboris. Magna laboris dolor est ex ad dolor voluptate."
    },
    children: [{
      owner: "Nirav",
      text: "Aliquip quis labore ipsum eiusmod voluptate. Aliqua pariatur eiusmod incididunt anim. Eu eiusmod pariatur exercitation laboris aute ad minim aliquip cupidatat aute officia. Non incididunt laborum labore officia elit est ad sit do laboris. Magna laboris dolor est ex ad dolor voluptate."
    },
    {
    owner: "Ryn Parker",
    text: "Aliquip quis labore ipsum eiusmod voluptate. Aliqua pariatur eiusmod incididunt anim. Eu eiusmod pariatur exercitation laboris aute ad minim aliquip cupidatat aute officia. Non incididunt laborum labore officia elit est ad sit do laboris. Magna laboris dolor est ex ad dolor voluptate."
  },]
  }]

  const makeReplyRows = (comments: ListingComment[]) => {
    const replyRows: React.JSX.Element[] = [];
    comments.forEach((comment) => replyRows.push(<CommentComponent listingComment={comment}/>))
    return replyRows
  }

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

  const commentRows:React.JSX.Element[]  = makeCommentRows(exampleComments)

  return(
    <div className={style.container}>
      <div className={style.title}>Comments and Questions</div>
      <div className="comments">
        {commentRows}
      </div>
    </div>
  )
}