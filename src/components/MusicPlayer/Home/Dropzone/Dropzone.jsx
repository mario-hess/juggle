import React, { useState, useRef } from 'react'
import { parseFiles } from '../../../../utils/parseFiles'
import styled from 'styled-components'

const Form = styled.form`
  height: 16rem;
  width: 100%;
  max-width: 80%;
  text-align: center;
  position: relative;
  margin: auto;
`

const Input = styled.input`
  display: none;
`

const Label = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  border-color: #cbd5e1;
  background-color: #f8fafc;
`

const Drag = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

const Button = styled.button`
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1rem;
  border: none;
  font-family: 'Oswald', sans-serif;
  background-color: transparent;
`

const Dropzone = ({ playlist, setPlaylist }) => {
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
    event.preventDefault()
    event.stopPropagation()
    setDragActive(false)
    if (!event.dataTransfer.files || !event.dataTransfer.files[0]) return
    const files = event.dataTransfer.files
    const list = await parseFiles(files)
    setPlaylist(list)
  }

  const handleChange = async (event) => {
    event.preventDefault()
    if (!event.target.files || !event.target.files[0]) return
    const files = event.target.files
    const list = await parseFiles(files)
    setPlaylist(list)
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  return (
    <Form onDragEnter={handleDrag} onSubmit={(event) => event.preventDefault()}>
      <Input
        ref={inputRef}
        type='file'
        accept='audio/*'
        multiple={true}
        onChange={handleChange}
      />
      <Label htmlFor='input_file_upload'>
        {dragActive && (
          <Drag
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></Drag>
        )}
        <div>
          <p>Drag and drop your file here or</p>
          <Button onClick={onButtonClick}>Upload a file</Button>
        </div>
      </Label>
    </Form>
  )
}

export default Dropzone
