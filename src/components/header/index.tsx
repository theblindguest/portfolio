import React, { FC, useState } from 'react'

import * as Styled from './header.styles'

interface HeaderProps {
  tabletDesktopNav: boolean
}

const Header: FC<HeaderProps> = ({ tabletDesktopNav }) => {
  const [activeLink, setActiveLink] = useState(document.location.href)

  return (
    <Styled.Header
      data-component-name="Header"
      $tabletDesktopNav={tabletDesktopNav}
    >
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
    </Styled.Header>
  )
}

export default Header
