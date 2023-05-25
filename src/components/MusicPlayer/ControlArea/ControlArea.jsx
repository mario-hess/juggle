import React from 'react'
import styled from 'styled-components'

import ProgressBar from './ProgressBar/ProgressBar.jsx'
import BottomBar from './BottomBar/BottomBar.jsx'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  align-self: flex-end;
`

const ControlArea = ({
  isPlaying,
  setIsPlaying,
  setVolume,
  loop,
  setLoop,
  playlist,
  current,
  setCurrent,
  howlerRef,
}) => {
  return (
    <Wrapper>
      <ProgressBar howlerRef={howlerRef} current={current} />
      <BottomBar
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setVolume={setVolume}
        loop={loop}
        setLoop={setLoop}
        playlist={playlist}
        current={current}
        setCurrent={setCurrent}
      />
    </Wrapper>
  )
}

export default ControlArea
