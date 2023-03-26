import React from 'react'

import styles from './ControlArea.module.css'

import ProgressBar from './ProgressBar/ProgressBar.jsx'
import BottomBar from './BottomBar/BottomBar.jsx'

const ControlArea = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className={styles.wrapper}>
      <ProgressBar />
      <BottomBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default ControlArea
