import React from 'react'
import PlayButton from './PlayButton.jsx'
import styles from './MainButtons.module.css'
import {
  RxTrackPrevious,
  RxTrackNext,
  RxTrackPlay,
  RxShuffle,
} from 'react-icons/rx'
import { BsRepeat } from 'react-icons/bs'

const MainButtons = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className={styles.wrapper}>
      <RxShuffle className={styles.icon} />
      <RxTrackPrevious className={styles.icon} />
      <PlayButton
        className={styles.icon}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <RxTrackNext className={styles.icon} />
      <BsRepeat className={styles.icon} />
    </div>
  )
}

export default MainButtons
