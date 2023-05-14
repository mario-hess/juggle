import React from 'react'
import styled from 'styled-components'

const Cover = styled.img`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: cover;
  width: 100px;
  height: 100px;
`
const Title = styled.p`
  display: block;
  position: relative;
  margin-bottom: 13px;
  margin-left: 120px;
  font-weight: 700;
  font-size: 15px;
  color: black;
`
const Artist = styled.p`
  display: block;
  position: relative;
  margin-bottom: 12px;
  margin-left: 120px;
  font-weight: bold;
  font-size: 12px;
  color: dimgray;
`

const TrackInfo = ({ current, playlist }) => {
  let picture = null

  if (current?.metadata?.common?.picture) {
    picture = current?.metadata?.common?.picture[0]
  }

  let imageUri

  if (picture) {
    let base64String = ''
    for (let i = 0; i < picture.data.length; i++) {
      base64String += String.fromCharCode(picture.data[i])
    }
    imageUri = 'data:' + picture.format + ';base64,' + window.btoa(base64String)
  }

  return (
    <div>
      {(playlist || playlist?.length > 0) && (
        <>
          {picture && <Cover src={imageUri}></Cover>}
          <Title>
            {current?.metadata?.common?.title
              ? current?.metadata?.common?.title
              : 'Unknown Title'}
          </Title>
          <Artist>
            {current?.metadata?.common?.artist
              ? current?.metadata?.common?.artist
              : 'Unknown Artist'}
          </Artist>
        </>
      )}
    </div>
  )
}

export default TrackInfo
