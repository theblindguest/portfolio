import React, { ChangeEvent, FC, useState } from 'react'

import * as Styled from './header.styles'

import { ThemeNames } from '../../styles/themes'
import { Palette } from '../../assets'

interface HeaderProps {
  tabletDesktopNav: boolean
  setThemeName: React.Dispatch<React.SetStateAction<ThemeNames>>
  themeName: ThemeNames
}

const Header: FC<HeaderProps> = ({
  tabletDesktopNav,
  setThemeName,
  themeName
}) => {
  const [activeLink, setActiveLink] = useState(document.location.href)

  const onModeToggle = () => {
    if (themeName === 'light') return setThemeName('dark')
    return setThemeName('light')
  }

  return (
    <Styled.Header
      data-component-name="Header"
      $tabletDesktopNav={tabletDesktopNav}
    >
      <Styled.NavContainer>
        <Styled.Name>jack watson</Styled.Name>
        <Styled.Nav>
          <Styled.NavItem
            to={'/about'}
            onClick={() => setActiveLink('about')}
            $isActive={activeLink!.includes('about')}
          >
            about
          </Styled.NavItem>
          <Styled.NavItem
            to={'/timeline'}
            onClick={() => setActiveLink('timeline')}
            $isActive={activeLink!.includes('timeline')}
          >
            timeline
          </Styled.NavItem>
          <Styled.NavItem
            to={'/contact'}
            onClick={() => setActiveLink('contact')}
            $isActive={activeLink!.includes('contact')}
          >
            contact
          </Styled.NavItem>
        </Styled.Nav>
      </Styled.NavContainer>
      <Styled.ModeToggle onClick={onModeToggle} themeName={themeName} />
    </Styled.Header>
  )
}

export default Header
