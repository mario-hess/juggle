import React from 'react'

import Dropzone from './Dropzone/Dropzone.jsx'
import Playlist from './Playlist/Playlist.jsx'

const Home = ({ playlist, setPlaylist, setCurrent }) => {
  return (
    <>
      <Dropzone playlist={playlist} setPlaylist={setPlaylist} />
      {playlist ? (
        <div>
          <Playlist playlist={playlist} setCurrent={setCurrent} />
        </div>
      ) : null}
    </>
  )
}

export default Home
