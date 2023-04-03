import React from 'react'

const Element = ({ track, setCurrent }) => {
  const onClick = (event) => {
    setCurrent(track.source)
  }
  return <div onClick={onClick}>{track.metadata.common.title}</div>
}

export default Element
