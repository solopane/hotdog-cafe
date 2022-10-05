import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://bscscan.com/token/0x55f0799d60f5f1046971d494bce376a09dd4c668"
        >
          Contract
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://pancakeswap.info/pair/0x7b4ea74ee1085be9361c893aa4f888e169af0ee5"
        >
          HOTDOG-BNB 🔥
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://pancakeswap.info/pair/0x4C0747c9b8c11783AC00d8e653AF9a7774B1E80b"
        >
          HOTDOG-CAKE 🔥
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://pancakeswap.info/pair/0xFAF539671Eb058C2Cef1Fc8eE49d647DE51C974e"
        >
          HOTDOG-BURGER 🔥
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://pancakeswap.info/pair/0x4D67FBD680Ba6BE639bfE7659a69e2D3B685A20a"
        >
          EX-HOTS!
        </StyledLink>
        <StyledLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/cafehotdog">
          Twitter
        </StyledLink>
        <StyledLink target="_blank" rel="noopener noreferrer" href="https://t.me/hotdogcafe">
          Telegram
        </StyledLink>
        <StyledLink target="_blank" rel="noopener noreferrer" href="mailto:hello@hotdog.cafe">
         📨 hello@hotdog.cafe
        </StyledLink>
      </StyledNav>
    )
  }

  const StyledNav = styled.nav`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  `

  const StyledLink = styled.a`
    color: ${(props) => props.theme.color.grey[100]};
    padding-left: ${(props) => props.theme.spacing[3]}px;
    padding-right: ${(props) => props.theme.spacing[3]}px;
    text-decoration: none;
    @media (max-width: 767px) {
      padding-left: ${(props) => props.theme.spacing[2]}px;
      padding-right: ${(props) => props.theme.spacing[2]}px;
    }
    &:hover {
      color: ${(props) => props.theme.color.primary.main};
    }
  `

export default Nav
