import React, { useState } from 'react'
import { RxPlay, RxPause } from 'react-icons/rx'



// Switching the "isPlaying" boolean, which is
// a "state" (hence the setIsPlaying function),
// to false, pauses the track. Switching to true, plays the track.
// reference: https://github.com/thangngoc89/react-howler

// 1. Clicking the button should switch the isPlaying state
// 2. The button should display "Play" when track is paused,
//    "Pause" when track is playing.
// 3. Have fun! - Mario :)

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
};

  return <button style = {buttonStyle} onClick={onClick}>{isPlaying ? < RxPause /> : < RxPlay />}</button>
}

export default PlayButton
