import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineUnorderedList } from 'react-icons/ai'
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
  color: ${(props) => props.theme.colors.foreground};
  text-align: left;
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.foreground};
  margin: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
  }
`

const LinkText = styled.p`
  margin-left: 1rem;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Heading>Juggle</Heading>
      <MenuWrapper>
        <Menu>Menu</Menu>
        <LinkWrapper to='/'>
          <AiFillHome />
          <LinkText>Home</LinkText>
        </LinkWrapper>
        <LinkWrapper to='/playlists'>
          <AiOutlineUnorderedList />
          <LinkText>Playlists</LinkText>
        </LinkWrapper>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Navbar
