import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr 2fr 1fr;

  background-color: ${(props) =>
    props.active ? '#fafafa' : props.theme.colors.background};

  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
`

const Item = styled.p`
  font-size: 16px;
  font-weight: 550;
  color: #49a246;
  padding-bottom: 12px;
  padding-top: 12px;
`

const Icon = styled.div`
  padding-bottom: 12px;
  padding-top: 12px;
  color: ${(props) => props.theme.colors.accent};

  &:hover {
    cursor: pointer;
    color: red;
  }
`

const Element = ({
  track,
  current,
  setCurrent,
  index,
  active,
  setPlaylist,
}) => {
  const onClick = (event) => {
    event.preventDefault()
    setCurrent(track)
  }

  const onDelete = (event) => {
    event.preventDefault()

    setPlaylist((prev) => [...prev.filter((song) => song !== track)])
    if (current === track) setCurrent(null)
  }

  return (
    <Wrapper active={active}>
      <Item onClick={onClick}>{index + 1}</Item>
      <Item onClick={onClick}>
        {track.metadata.common.albumartist || 'Unknown'}
      </Item>
      <Item onClick={onClick}>{track.metadata.common.title || 'Unknown'}</Item>
      <Item onClick={onClick}>
        {new Date(track.metadata.format.duration * 1000)
          .toISOString()
          .slice(14, 19)}
      </Item>
      <Item onClick={onClick}>{track.metadata.common.album || 'Unknown'}</Item>
      <Icon>
        <AiOutlineDelete onClick={onDelete} />
      </Icon>
    </Wrapper>
  )
}

export default Element
