import React from 'react'

import Dropzone from './Dropzone/Dropzone.jsx'
import Playlist from './Playlist/Playlist.jsx'

const Home = ({ playlist, setPlaylist }) => {
  return (
    <>
      <Dropzone playlist={playlist} setPlaylist={setPlaylist} />
      {playlist ? (
        <Playlist playlist={playlist} setCurrent={setCurrent} />
      ) : null}
    </>
  )
}

export default Home
