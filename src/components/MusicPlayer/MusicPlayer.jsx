import React, { useState, useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'
import styled from 'styled-components'

import Cheeseburger from './Cheeseburger/Cheeseburger.jsx'
import Playlist from './Playlist/Playlist.jsx'
import ControlArea from './ControlArea/ControlArea.jsx'
import Dropzone from './Dropzone/Dropzone.jsx'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MusicPlayer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [playlist, setPlayList] = useState(null)
  const [current, setCurrent] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const howlerRef = useRef(null)
  const [toggled, setToggled] = useState(false)

  useEffect(() => {
    console.log(isPlaying)
    console.log(current)
  }, [isPlaying, current])

  useEffect(() => {
    if (!playlist) return
    setCurrent(playlist[0].source)
  }, [playlist])

  useEffect(() => {
    if (!isLoading) return
    setIsLoading(false)
    window.electronAPI.switchWindow()
  }, [])

  const toggle = (event) => {
    event.preventDefault()
    setToggled(!toggled)
  }

  return (
    <>
      {current ? (
        <ReactHowler
          src={[current]}
          preload={true}
          loop={true}
          playing={isPlaying}
          ref={howlerRef}
        />
      ) : null}

      <Cheeseburger
        color={'#49a246'}
        width={38}
        height={38}
        isToggled={toggled}
        onClick={toggle}
      />
      <Wrapper>
        <Dropzone setPlayList={setPlayList} />
        {playlist ? (
          <Playlist playlist={playlist} setCurrent={setCurrent} />
        ) : null}

        <ControlArea isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </Wrapper>
    </>
  )
}

export default MusicPlayer
