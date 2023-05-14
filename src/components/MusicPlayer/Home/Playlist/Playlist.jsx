import { useState, useRef } from 'react'
import styled from 'styled-components'
import { parseFiles } from '../../../../utils/parseFiles'

import React from 'react'
import Element from './Element.jsx'

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr 2fr 1fr;
  font-size: 16px;
  padding-bottom: 12px;
  padding-top: 12px;
  font-color: black;
`

const Form = styled.form`
  height: 100%;
  width: 100%;
`

const Input = styled.input`
  display: none;
`

const Label = styled.label``

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

const Playlist = ({ playlist, setPlaylist, current, setCurrent }) => {
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
    setPlaylist((prev) => [...prev, ...list])
  }

  const handleChange = async (event) => {
    event.preventDefault()
    if (!event.target.files || !event.target.files[0]) return
    const files = event.target.files
    const list = await parseFiles(files)
    setPlaylist((prev) => [...prev, ...list])
  }

  return (
    <Form onDragEnter={handleDrag} onSubmit={(event) => event.preventDefault()}>
      <Header>
        <p>#</p>
        <p>Artist</p>
        <p>Title</p>
        <p>Time</p>
        <p>Album</p>
      </Header>

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
        {playlist.map((track, index) => (
          <Element
            key={index}
            index={index}
            track={track}
            current={current}
            setCurrent={setCurrent}
            active={track === current}
            setPlaylist={setPlaylist}
          />
        ))}
      </Label>
    </Form>
  )
}

export default Playlist
