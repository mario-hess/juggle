import React from 'react'
import styled from 'styled-components'

import TrackInfo from './TrackInfo/TrackInfo.jsx'
import MainButtons from './MainButtons/MainButtons.jsx'
import VolumeSlider from './VolumeSlider/VolumeSlider.jsx'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 20px 0 20px 0;
`

const BottomBar = ({ isPlaying, setIsPlaying }) => {
  return (
    <Wrapper>
      <TrackInfo />
      <MainButtons isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <VolumeSlider />
    </Wrapper>
  )
}

export default BottomBar
