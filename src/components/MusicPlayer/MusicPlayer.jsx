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
  const [toggled, setToggled] = useState(false)
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
                    setCurrent={setCurrent}
                  />
                }
              />
              <Route path='/playlists' element={<Playlists />} />
            </Routes>
          </HashRouter>
        </Container>

        <ControlArea isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </Wrapper>
    </>
  )
}

export default MusicPlayer
