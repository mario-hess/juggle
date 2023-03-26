import React, { useState, useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'

import Cheeseburger from './Cheeseburger/Cheeseburger.jsx'
import Playlist from './Playlist/Playlist.jsx'
import ControlArea from './ControlArea/ControlArea.jsx'
import Dropzone from './Dropzone/Dropzone.jsx'

const MusicPlayer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [playlist, setPlayList] = useState(null)
  const [current, setCurrent] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const howlerRef = useRef(null)
  const [toggled, setToggled] = useState(false)

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
        color={'#303030'}
        width={38}
        height={38}
        isToggled={toggled}
        onClick={toggle}
      />

      <Dropzone setPlayList={setPlayList} />
      {playlist ? (
        <Playlist playlist={playlist} setCurrent={setCurrent} />
      ) : null}

      <ControlArea isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  )
}

export default MusicPlayer
