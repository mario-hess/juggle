import React, { useState, useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'
import { parseFiles } from '../../utils/parseFiles'

import Playlist from './Playlist/Playlist.jsx'
import ControlArea from './ControlArea/ControlArea.jsx'

const MusicPlayer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [playlist, setPlayList] = useState(null)
  const [current, setCurrent] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const howlerRef = useRef(null)

  useEffect(() => {
    if (!playlist) return
    setCurrent(playlist[0].source)
  }, [playlist])

  useEffect(() => {
    if (!isLoading) return
    setIsLoading(false)
    window.electronAPI.switchWindow()
  }, [])

  const onChange = async (event) => {
    const files = event.target.files
    const list = await parseFiles(files)
    setPlayList(list)
  }

  return (
    <>
      <div>MusicPlayer</div>
      <input type='file' accept='audio/*' multiple onChange={onChange} />
      {playlist ? (
        <Playlist playlist={playlist} setCurrent={setCurrent} />
      ) : null}
      <ControlArea isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      {current ? (
        <ReactHowler
          src={[current]}
          preload={true}
          loop={true}
          playing={isPlaying}
          ref={howlerRef}
        />
      ) : null}
    </>
  )
}

export default MusicPlayer
