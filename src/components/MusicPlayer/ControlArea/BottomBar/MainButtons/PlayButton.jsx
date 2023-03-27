import React,{ useState } from 'react'

// Switching the "isPlaying" boolean, which is
// a "state" (hence the setIsPlaying function),
// to false, pauses the track. Switching to true, plays the track.
// reference: https://github.com/thangngoc89/react-howler

// 1. Clicking the button should switch the isPlaying state
// 2. The button should display "Play" when track is paused,
//    "Pause" when track is playing.
// 3. Have fun! - Mario :)

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const onClick = (event) => {
    event.preventDefault()
    setIsPlaying(!isPlaying);
  }
  return <button onClick={onClick}>{isPlaying ? 'Pause' : 'Play'}</button>
}

export default PlayButton
