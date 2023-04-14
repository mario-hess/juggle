import styled from 'styled-components'

import React, { useState } from 'react'
import Element from './Element.jsx'

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr 2fr;
`

const Playlist = ({ playlist, setCurrent }) => {
  const [chosen, setChosen] = useState()

  return (
    <>
      <Header>
        <p>#</p>
        <p>Artist</p>
        <p>Title</p>
        <p>Time</p>
        <p>Album</p>
      </Header>
      {playlist.map((track, index) => (
        <Element
          key={index}
          index={index}
          track={track}
          setCurrent={setCurrent}
          active={track === chosen}
          setChosen={setChosen}
        />
      ))}
    </>
  )
}

export default Playlist
