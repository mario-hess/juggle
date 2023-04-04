import React from 'react'
import styled from 'styled-components'

import ProgressBar from './ProgressBar/ProgressBar.jsx'
import BottomBar from './BottomBar/BottomBar.jsx'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  align-self: flex-end;
`

const ControlArea = ({ isPlaying, setIsPlaying, setVolume }) => {
  return (
    <Wrapper>
      <ProgressBar />
      <BottomBar
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setVolume={setVolume}
      />
    </Wrapper>
  )
}

export default ControlArea
