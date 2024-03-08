"use client"

import { useState } from "react"
import styles from "./input.module.css"

/**
 * component for editing prices
 * @param {number} price the content of the editor
 * @param {boolean} canEdit show user the edit button if they are allowed to edit
 * @param {Function} callback callback to update parents state
 * @returns titleEditor component JSX
 * Created by: Ryn Parker
 */
export default function PriceEditor(
  {price, canEdit, callback}:
  {price: number,canEdit: boolean, callback: Function}) {

  const [isEdit, setIsEdit] = useState(false)
  const toggleEditButton = () => canEdit ? <button onClick={() => setIsEdit(!isEdit)}>edit</button> : <></>
  
  if(canEdit) {
    if(isEdit) {
      return (
        <div className={styles.container}>
          <input 
            type="number"
            name="priceEditor"
            value={price}
            onChange={(e) => callback(e.target.value)}/>
            {toggleEditButton()}
        </div>
      )
    } else {
      return (
        <div className={styles.container}>
          {price}
          {toggleEditButton()}
        </div>
      )
    }


  } else {
    return <div>{price}</div>
  }
}