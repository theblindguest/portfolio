import React, { FC, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Modal } from '../../components'
import GlobalStyle from '../../styles/globalStyles'
import getBreakpoints from '../../helpers/responsive'

import * as Styled from './layout.styles'

import Theme, { ThemeNames } from '../../styles/themes'
import { Moment } from '../timeline/moment'

export interface OutletContext {
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
  modalData?: Moment
}

const Layout: FC = () => {
  const [modalData, setModalData] = useState<Moment | undefined>(undefined)
  const [themeName, setThemeName] = useState<ThemeNames>('dark')
  const { tabletDesktopNav } = getBreakpoints()

  useEffect(() => {
    addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        setModalData(undefined)
      }
    })
  }, [])

  return (
    <Theme themeName={themeName}>
      <GlobalStyle $themeName={themeName} />
      {modalData && (
        <Modal setModalData={setModalData} modalData={{ ...modalData }} />
      )}
      <Styled.OuterContainer data-component-name="Layout">
        <Styled.InnerContainer>
          <Header
            setThemeName={setThemeName}
            themeName={themeName}
            tabletDesktopNav={tabletDesktopNav}
          />
          <Styled.ContentMain>
            <Outlet
              context={{ setModalData, modalData } satisfies OutletContext}
            />
          </Styled.ContentMain>
        </Styled.InnerContainer>
      </Styled.OuterContainer>
    </Theme>
  )
}

export default Layout
