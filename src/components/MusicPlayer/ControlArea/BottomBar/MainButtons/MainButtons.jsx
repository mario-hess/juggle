import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BsRepeat } from 'react-icons/bs'
import {
  RxTrackPrevious,
  RxTrackNext,
  RxShuffle,
  RxPlay,
  RxPause,
} from 'react-icons/rx'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: auto;
`

const Icon = styled.div`
  margin: 0 14px 0 14px;
  font-size: 1.5em;
  color: #828282;

  &:hover {
    cursor: pointer;
    color: #49a246;
  }
`

const LoopIcon = styled.div`
  margin: 0 14px 0 14px;
  font-size: 1.5em;
  color: ${(props) => (props.loop ? props.theme.colors.accent : '#828282')};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
  }
`

const PlayButton = styled.div`
  background-color: ${(props) => props.theme.colors.accent};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  margin: 0 14px 0 14px;

  &:hover {
    cursor: pointer;
  }
`

const MainButtons = ({
  isPlaying,
  setIsPlaying,
  loop,
  setLoop,
  playlist,
  current,
  setCurrent,
}) => {
  useEffect(() => {
    if (!current) setIsPlaying(false)
  }, [current])

  const onPlay = (event) => {
    event.preventDefault()
    if (!current) return
    setIsPlaying(!isPlaying)
  }

  const onLoop = (event) => {
    event.preventDefault()
    setLoop(!loop)
  }

  const onPrev = (event) => {
    event.preventDefault()
    if (!playlist) return
    let counter = 0

    playlist.forEach((track) => {
      if (track == current && counter != 0) {
        setCurrent(playlist[counter - 1])
        return
      }
      counter++
    })
  }

  const onNext = (event) => {
    event.preventDefault()
    if (!playlist) return
    let counter = 0

    playlist.forEach((track) => {
      if (track == current && counter < playlist.length - 1) {
        setCurrent(playlist[counter + 1])
        return
      }
      counter++
    })
  }

  const onShuffle = (event) => {
    event.preventDefault()
    if (playlist || playlist?.length > 0) {
      let rng = Math.floor(Math.random() * (playlist.length - 0))
      setCurrent(playlist[rng])
      setIsPlaying(true)
    }
  }

  return (
    <Wrapper>
      <Icon>
        <RxShuffle onClick={onShuffle} />
      </Icon>
      <Icon>
        <RxTrackPrevious onClick={onPrev} />
      </Icon>
      <PlayButton onClick={onPlay}>
        {isPlaying ? <RxPause /> : <RxPlay />}
      </PlayButton>
      <Icon>
        <RxTrackNext onClick={onNext} />
      </Icon>
      <LoopIcon loop={loop}>
        <BsRepeat onClick={onLoop} />
      </LoopIcon>
    </Wrapper>
  )
}

export default MainButtons
