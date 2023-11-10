import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  max-width: 890px;
  width: 100%;
  margin: 0 auto;
`

export const Name = styled.div`
  font-weight: 700;
  color: #a65852;
`

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
        background-color: rgba(166, 208, 200, 1);
        top: 4px;
        transition: all 200ms ease-in-out;
      }
    `}
  `
)
