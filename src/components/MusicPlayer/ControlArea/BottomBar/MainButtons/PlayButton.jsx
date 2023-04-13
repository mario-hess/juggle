import React, { useState } from 'react'
import { RxPlay, RxPause } from 'react-icons/rx'

const PlayButton = ({ isPlaying, setIsPlaying }) => {
  const onClick = (event) => {
    event.preventDefault()
    setIsPlaying(!isPlaying)
    console.log(isPlaying)
  }

  const buttonStyle = {
    backgroundColor: '#49a246',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: '#fff',
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {isPlaying ? <RxPause /> : <RxPlay />}
    </button>
  )
}

export default PlayButton
