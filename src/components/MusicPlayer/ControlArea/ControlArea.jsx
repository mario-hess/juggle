import React from 'react'

import styles from './ControlArea.module.css'

import ProgressBar from './ProgressBar/ProgressBar.jsx'
import PlayButton from './MainButtons/PlayButton.jsx'

const ControlArea = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className={styles.wrapper}>
      <ProgressBar />
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default ControlArea
