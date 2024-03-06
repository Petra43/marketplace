"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"
import styles from "./input.module.css"

/**
 * component for editing rich text
 * @param {string} content the content of the editor
 * @param {boolean} isEdit enable edit functions
 * @param {Function} getContent callback to update parents state
 * @returns editor component JSX
 * Created by: Ryn parker 
 * uses Tiptap library https://tiptap.dev/
 */
export default function TipTap({content, isEdit, setContent}: {content: string, isEdit: boolean, setContent: Function}) {
  const editor = useEditor({
  extensions: [
    StarterKit,
  ],
  content: content,
  editable: isEdit,
  onUpdate({editor}) {
    setContent(editor.getText())
  },
})

useEffect(() => {
  editor?.setEditable(isEdit)
  editor?.setOptions({
    editorProps: {
      attributes: {
        class: isEdit ? styles.edit : ""
      }
      
    }
  })
},[editor,isEdit])

return <EditorContent editor={editor}/>
}