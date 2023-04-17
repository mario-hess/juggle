import React, { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr 2fr;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-right: 5px;
  padding-left: 5px;

  background-color: ${(props) =>
    props.active ? 'rgba(128, 128, 128, 0.3)' : props.theme.colors.background};

  &:hover {
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.4);
  }
`

/* Servus Max :)
  Hier möchte ich dir gerne den Umgang mit "styled-components" (https://styled-components.com/) zeigen.
  Unter diesem Kommentar kannst du sehen, wie ich Konstanten definiert habe und diesen einen HTML-Tag zugewisen habe.

  ----- Beispiel: -----
  const Number = styled.p``
  ---------------------

  das "stlyed.p" am ende bedeutet, dass der Konstante "Number" der HTML-Tag "p" zugewiesen wird. Dies Funktioniert 
  mit allen möglichen HTML-Tags, zB mit einem "div".

  ----- Beispiel: -----
  const Container = styled.div``
  ---------------------

  Innerhalb der Anführungszeichen, kann man direkt das CSS eintragen!
  ----- Beispiel: -----
  const Number = styled.p`
    color: red;
  `
  ---------------------

  Weiter unten im return statement, kannst du sehen, dass die Konstate wie ein HTML-Tag verwendet werden kann!
   ----- Beispiel: -----
  <Number>4</Number>
  ---------------------

  Die "4" übernimmt jetzt den Style, der für "Number" definiert wurde :)

  Ich habe dir die nötigen Konstanten unten schon erstellt (Number, Artist, Title, Time, Album).

  Alles was für dich neu ist, ist dass du das CSS nicht mehr in eine eigene CSS datei packst, 
  sondern direkt die Komponente stylen kannst, indem du das CSS zwischen die Anführungszeichen einträgst.

  Als Beispiel habe ich den Text in der Komponente "Number" Fett gemacht.

  Wenn du das ganze Element stylen willst, kannst du das direkt oben in der "Wrapper" Konstante 
  machen (zB Abstand unten/oben, Rahmen, HintergrundFarbe etc)!
  Ich habe in der Wrapper Konstante schon ein bisschen was eingetragen damit du gleich ein Layout hast mit dem du 
  Arbeiten kannst.

  Ich hoffe das ist nicht zu viel Input! Have fun!
*/

const Number = styled.p`
  font-size: 16px;
  font-weight: 550;
  color: #49a246;`

const Artist = styled.p`
font-size: 16px;
font-weight: 500;
color: #49a246;`

const Title = styled.p`
font-size: 16px;
font-weight: 500;
color: #49a246;`

const Time = styled.p`
font-size: 16px;
font-weight: 500;
color: #49a246;`

const Album = styled.p`
font-size: 16px;
font-weight: 500;
color: #49a246;`

const Element = ({ track, setCurrent, index, active, setChosen }) => {
  useEffect(() => {
    if (index == 0) setChosen(track)
  }, [])

  const onClick = (event) => {
    event.preventDefault()
    setChosen(track)
    setCurrent(track.source)
  }

  return (
    <Wrapper onClick={onClick} active={active}>
      <Number>{index + 1}</Number>
      <Artist>{track.metadata.common.albumartist || 'Unknown'}</Artist>
      <Title>{track.metadata.common.title || 'Unknown'}</Title>
      <Time>
        {new Date(track.metadata.format.duration * 1000)
          .toISOString()
          .slice(14, 19)}
      </Time>
      <Album>{track.metadata.common.album || 'Unknown'}</Album>
    </Wrapper>
  )
}

export default Element
