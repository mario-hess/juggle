import React, { useState } from 'react'
import styled from 'styled-components'

const Slider = styled.input`
  width: 99.5%;
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

const ProgressBar = () => {
  const [value, setValue] = useState(0)
  const MAX = 100
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    }
  }
  return (
    <Slider
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
