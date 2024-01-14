import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import day from '../../assets/icons/day.svg'
import night from '../../assets/icons/night.svg'

import { ThemeNames } from '../../styles/themes'

export const Header = styled.div<{ $tabletDesktopNav?: boolean }>((props) => {
  return css`
    display: flex;
    align-self: flex-start;
    align-items: center;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
  `
})

export const NavContainer = styled.div((props) => {
  return css`
    display: flex;
    flex-direction: column;
  `
})

export const Name = styled.div((props) => {
  return css`
    font-weight: 700;
    color: ${props.theme.colors.text.siteName};
  `
})

export const Nav = styled.div`
  display: flex;
  margin-top: 12px;

  > a {
    margin-right: 30px;
    text-decoration: none;
    color: inherit;

    :hover {
      cursor: pointer;
    }
  }
  &:last-child {
    margin-right: 0px;
  }
`

export const NavItem = styled(Link)<{
  $isActive: boolean
}>(
  (props) => css`
    &::after {
      content: '';
      display: block;
      position: relative;
      width: 100%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0);
      top: -4px;
      left: 0;
      transition: all 200ms ease-in-out;
    }

    ${props.$isActive &&
    css`
      &::after {
        background-color: ${props.theme.colors.text.underline};
        top: 4px;
        transition: all 200ms ease-in-out;
      }
    `}
  `
)

interface ModeToggleProps {
  themeName: ThemeNames
}
export const ModeToggle = styled.button<ModeToggleProps>((props) => {
  return css`
    margin-left: auto;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(${props.themeName === 'light' ? day : night});
    background-repeat: no-repeat;
    background-size: 22px 22px;
    background-position: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
  `
})

export const Option = styled.option((props) => {
  return css``
})
