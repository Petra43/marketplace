"use client"

import { useState } from "react"
import styles from "./input.module.css"

/**
 * component for editing titles
 * @param {TitleType} titleType the content of the editor
 * @param {boolean} canEdit show user the edit button if they are allowed to edit
 * @param {Function} callback callback to update parents state
 * @returns titleEditor component JSX
 * Created by: Ryn Parker
 */
export default function TitleEditor(
  {titleType, canEdit, title, callback}: 
  {titleType: TitleType, canEdit: boolean, title: string, callback: Function}) {
    
  const [isEdit, setIsEdit] = useState(false)

  // uses if/else shorthand
  const toggleEditButton = () => canEdit ? <button onClick={() => setIsEdit(!isEdit)}>edit</button> : <></>

  const createOutput = ():React.JSX.Element => {
  let out: React.JSX.Element;
    switch(titleType) {
      case "h1": out = <h1>{title}</h1>; break
      case "h2": out = <h2>{title}</h2>; break
      case "h3": out = <h3>{title}</h3>; break
      case "h4": out = <h4>{title}</h4>; break
      case "h5": out = <h5>{title}</h5>; break
      case "h6": out = <h6>{title}</h6>; break
    }

    return (
      <div className={styles.container}>
        {out}
        {toggleEditButton()}
      </div>
    )
  }
  
  if (isEdit) {
    return (
      <div className={styles.container}>
        <input 
          className={titleType}
          name="titleEditor" 
          type="text" 
          value={title} 
          onChange={(e) => callback(e.target.value)}>
        </input>
        {toggleEditButton()}
      </div>
    )

  } else {
    return createOutput()
  }
}

type TitleType = "h1" | "h2"| "h3" | "h4" | "h5" | "h6"