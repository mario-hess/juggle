import React, { useState } from 'react'

import './ProgressBar.css'

const ProgressBar = () => {
  const [value, setValue] = useState(0)
  const MAX = 100
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    }
  }
  return (
    <input
      className='custom-slider'
      type='range'
      min='0'
      max={MAX}
      onChange={(e) => setValue(e.target.value)}
      style={getBackgroundSize()}
      value={value}
    />
  )
}

export default ProgressBar
