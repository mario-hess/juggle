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

const MainButtons = ({
  isPlaying,
  setIsPlaying,
  loop,
  setLoop,
  playlist,
  current,
  setCurrent,
}) => {
  const onLoop = (event) => {
    event.preventDefault()
    setLoop(!loop)
  }

  const onPrev = (event) => {
    event.preventDefault()
    let counter = 0

    playlist.forEach((track) => {
      if (track.source == current && counter != 0) {
        setCurrent(playlist[counter - 1].source)
        return
      }
      counter++
    })
  }

  const onNext = (event) => {
    event.preventDefault()
    let counter = 0

    playlist.forEach((track) => {
      if (track.source == current && counter < playlist.length - 1) {
        setCurrent(playlist[counter + 1].source)
        return
      }
      counter++
    })
  }

  const onShuffle = (event) => {
    event.preventDefault()
    // playlist.length -> (länge des arrays)
    // setCurrent(playlist[index]) -> Spielt den Song an der stelle index ab
  }

  return (
    <div className={styles.wrapper}>
      <RxShuffle className={styles.icon} onClick={onShuffle} />
      <RxTrackPrevious className={styles.icon} onClick={onPrev} />
      <PlayButton
        className={styles.icon}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <RxTrackNext className={styles.icon} onClick={onNext} />
      <BsRepeat className={styles.icon} onClick={onLoop} />
    </div>
  )
}

export default MainButtons
