import React, { useState, useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'
import styled from 'styled-components'

//import Cheeseburger from './Cheeseburger/Cheeseburger.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Playlist from './Playlist/Playlist.jsx'
import ControlArea from './ControlArea/ControlArea.jsx'
import Dropzone from './Dropzone/Dropzone.jsx'

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
  const [playlist, setPlayList] = useState(null)
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

  /*
  const toggle = (event) => {
    event.preventDefault()
    setToggled(!toggled)
  }

  <Cheeseburger
  color={'#49a246'}
  width={38}
  height={38}
  isToggled={toggled}
  onClick={toggle}
/>
*/
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
          <Navbar />
          <Dropzone playlist={playlist} setPlayList={setPlayList} />
          {playlist ? (
            <Playlist playlist={playlist} setCurrent={setCurrent} />
          ) : null}
        </Container>

        <ControlArea isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </Wrapper>
    </>
  )
}

export default MusicPlayer
