import React, { useState, useRef } from 'react'
import { parseFiles } from '../../../utils/parseFiles'
import styles from './Dropzone.module.css'

const Dropzone = ({ setPlayList }) => {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef(null)

  const handleDrag = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
    } else if (event.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = async (event) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (!event.dataTransfer.files || !event.dataTransfer.files[0]) return
    const files = event.dataTransfer.files
    const list = await parseFiles(files)
    setPlayList(list)
  }

  const handleChange = async (event) => {
    e.preventDefault()
    if (!event.target.files || !event.target.files[0]) return
    const files = event.target.files
    const list = await parseFiles(files)
    setPlayList(list)
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  return (
    <form
      className={styles.form_file_upload}
      onDragEnter={handleDrag}
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        ref={inputRef}
        type='file'
        accept='audio/*'
        className={styles.input_file_upload}
        multiple={true}
        onChange={handleChange}
      />
      <label className={styles.Dropzone} htmlFor='input_file_upload'>
        {dragActive && (
          <div
            className={styles.drag_file_element}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
        <div>
          <p>Drag and drop your file here or</p>
          <button className={styles.upload_button} onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      </label>
    </form>
  )
}

export default Dropzone
