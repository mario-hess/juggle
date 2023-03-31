import React from 'react'
import styles from './TrackInfo.module.css'

const TrackInfo = () => {
  const title = 'Jezahel'
  const artist = 'Shirtley Bassey'
  return (
    <div className={styles.trackinfo}>
      <div className={styles.cover} />
      <p className={styles.title}>{title}</p>
      <p className={styles.artist}>{artist}</p>
    </div>
  )
}

export default TrackInfo
