import React from 'react'

import ProgressBar from './ProgressBar.jsx'
import PlayButton from './PlayButton.jsx'

const ControlArea = ({ isPlaying, setIsPlaying }) => {
  return (
    <>
      <ProgressBar />
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  )
}

export default ControlArea
