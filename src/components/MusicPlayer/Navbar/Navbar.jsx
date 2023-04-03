import React from 'react'
import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 1rem;
`

const Heading = styled.h3`
text-align: left;

`

const MenuWrapper = styled.div`
  margin-top: 2rem;
`

const Menu = styled.p`
  color: lightgrey;
  text-align:left;
`

const LinkWrapper = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
  }
 
`

const Link = styled.a`
  margin-left: 1rem;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Heading>Juggle</Heading>
      <MenuWrapper>
      <Menu>Menu</Menu>
      <LinkWrapper><AiFillHome/><Link>Home</Link></LinkWrapper>
      <LinkWrapper><AiOutlineUnorderedList /><Link>Playlists</Link></LinkWrapper>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Navbar
