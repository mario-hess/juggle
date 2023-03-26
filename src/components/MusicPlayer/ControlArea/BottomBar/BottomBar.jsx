import React from 'react'
import TrackInfo from './TrackInfo/TrackInfo.jsx'
import MainButtons from './MainButtons/MainButtons.jsx'
import VolumeSlider from './VolumeSlider/VolumeSlider.jsx'
import styles from './BottomBar.module.css'

const BottomBar = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className={styles.wrapper}>
      <TrackInfo />
      <MainButtons isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <VolumeSlider />
    </div>
  )
}

export default BottomBar
