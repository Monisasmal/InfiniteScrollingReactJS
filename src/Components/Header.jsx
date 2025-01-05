import React from 'react'
import styled from 'styled-components'

const header = styled.header`
max-width: 70rem;
margin: 2rem auto;
text-align: center;
display: flex;
`
const H1 = styled.h1`
margin: 1em 0px;
text-align: center;
color:#ffffff;
`

const P = styled.p`
text-align: center;
color:#ffffff;
`

const Header = () => {
  return (
<header>
    <H1>😮Infinite Scrolling😀</H1>
    <P>The internet's Source of Freely usable images.</P>
    <P>Powered by Creators Everywhere.</P>
</header>
  )
}

export default Header