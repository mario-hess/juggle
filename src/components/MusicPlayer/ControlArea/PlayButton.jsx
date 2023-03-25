import React from 'react'

// Switching the "isPlaying" boolean, which is
// a "state" (hence the setIsPlaying function),
// to false, pauses the track. Switching to true, plays the track.
// reference: https://github.com/thangngoc89/react-howler

// 1. Clicking the button should switch the isPlaying state
// 2. The button should display "Play" when track is paused,
//    "Pause" when trach is playing.
// 3. Have fun! - Mario :)

const PlayButton = ({ isPlaying, setIsPlaying }) => {
  const onClick = (event) => {
    event.preventDefault()
    // ...
  }
  return <button onClick={onClick}>Play/Pause</button>
}

export default PlayButton
