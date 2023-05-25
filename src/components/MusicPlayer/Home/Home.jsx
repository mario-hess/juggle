import React from 'react'

import Dropzone from './Dropzone/Dropzone.jsx'
import Playlist from './Playlist/Playlist.jsx'

const Home = ({ playlist, setPlaylist, current, setCurrent }) => {
  return playlist?.length > 0 ? (
    <div>
      <Playlist
        playlist={playlist}
        setPlaylist={setPlaylist}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  ) : (
    <Dropzone playlist={playlist} setPlaylist={setPlaylist} />
  )
}

export default Home
