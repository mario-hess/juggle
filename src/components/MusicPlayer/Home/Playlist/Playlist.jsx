import React from 'react'
import Element from './Element.jsx'

const Playlist = ({ playlist, setCurrent }) => {
  return playlist.map((track, index) => (
    <Element key={index} track={track} setCurrent={setCurrent} />
  ))
}

export default Playlist
