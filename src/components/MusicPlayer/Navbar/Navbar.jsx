import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background: lightgrey;
`

const Navbar = () => {
  return (
    <Wrapper>
      <p>Menu</p>
      <a>Home</a>
      <a>PlayLists</a>
      <p>Playlists</p>
      <a>Playlist 1</a>
      <a>Playlist 2</a>
      <a>Playlist 3</a>
    </Wrapper>
  )
}

export default Navbar
