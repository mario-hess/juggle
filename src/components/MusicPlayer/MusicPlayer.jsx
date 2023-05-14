import React, { useState, useEffect, useRef } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ReactHowler from 'react-howler'
import styled from 'styled-components'

import Home from './Home/Home.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Playlists from './Playlists/Playlists.jsx'
import ControlArea from './ControlArea/ControlArea.jsx'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px dotted blue;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;
  margin: auto;
`

const MusicPlayer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [playlist, setPlaylist] = useState(null)
  const [current, setCurrent] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.25)
  const [loop, setLoop] = useState(false)
  const howlerRef = useRef(null)

  useEffect(() => {
    if (!playlist || playlist?.length === 0) return
  }, [playlist])

  useEffect(() => {
    if (!isLoading) return
    setIsLoading(false)
    window.electronAPI.switchWindow()
  }, [])

  return (
    <>
      {current && (
        <ReactHowler
          src={[current.source]}
          preload={true}
          loop={loop}
          playing={isPlaying}
          ref={howlerRef}
          volume={volume}
        />
      )}

      <Wrapper>
        <Container>
          <HashRouter>
            <Navbar />
            <Routes>
              <Route
                path='/'
                exact
                element={
                  <Home
                    playlist={playlist}
                    setPlaylist={setPlaylist}
                    current={current}
                    setCurrent={setCurrent}
                  />
                }
              />
              <Route path='/playlists' element={<Playlists />} />
            </Routes>
          </HashRouter>
        </Container>

        <ControlArea
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setVolume={setVolume}
          loop={loop}
          setLoop={setLoop}
          playlist={playlist}
          current={current}
          setCurrent={setCurrent}
          howlerRef={howlerRef}
        />
      </Wrapper>
    </>
  )
}

export default MusicPlayer
