import React, { useState } from 'react'
import { FiVolume1 } from 'react-icons/fi'
import './VolumeSlider.css'

const VolumeSlider = () => {
  const [value, setValue] = useState(0)
  const MAX = 100
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    }
  }
  return (
    <div className='volume-wrapper'>
      <FiVolume1 className='volume-icon' />
      <input
        className='custom-volume-slider'
        type='range'
        min='0'
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
      />
    </div>
  )
}

export default VolumeSlider
