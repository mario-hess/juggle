import React, { useState } from 'react'
import styled from 'styled-components'

import { FiVolume1 } from 'react-icons/fi'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const Slider = styled.input`
  width: 40%;
  -webkit-appearance: none;
  appearance: none;
  height: 7px;
  background: lightgrey;
  border-radius: 5px;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.accent},
    ${(props) => props.theme.colors.accent}
  );
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 7px;
    width: 1px;
    ${(props) => props.theme.colors.accent};
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`

const Icon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 14px 0 14px;
  font-size: 1.5em;
  color: #828282;
`

const VolumeSlider = ({ setVolume }) => {
  const [value, setValue] = useState(25)
  const MAX = 100
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    }
  }

  const onChange = (event) => {
    setValue(event.target.value)
    setVolume(parseFloat(event.target.value / 100).toFixed(1))
    console.log(parseFloat(event.target.value / 100).toFixed(1))
  }

  return (
    <Wrapper>
      <Icon>
        <FiVolume1 className='volume-icon' />
      </Icon>
      <Slider
        type='range'
        min='0'
        max={MAX}
        onChange={onChange}
        style={getBackgroundSize()}
        value={value}
        step={0.01}
      />
    </Wrapper>
  )
}

export default VolumeSlider
