import React, { FC, Fragment, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer, Modal } from '../../components'
import GlobalStyle from '../../styles/globalStyles'

import * as Styled from './layout.styles'

import { Moment } from '../timeline/moment'
import getBreakpoints from '../../helpers/responsive'

export interface OutletContext {
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
  modalData?: Moment
}

const Layout: FC = () => {
  const [modalData, setModalData] = useState<Moment | undefined>(undefined)
  const { isDesktop } = getBreakpoints()

  useEffect(() => {
    addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        console.log('keyup')
        setModalData(undefined)
      }
    })
  })

  return (
    <Fragment>
      {modalData && (
        <Modal setModalData={setModalData} modalData={{ ...modalData }} />
      )}
      <GlobalStyle />
      <Styled.OuterContainer
        data-component-name='Layout'
        $isDesktop={isDesktop}
      >
        <Styled.InnerContainer>
          <Header />
          <Styled.Content $isDesktop={isDesktop}>
            <Outlet
              context={{ setModalData, modalData } satisfies OutletContext}
            />
          </Styled.Content>
          <Footer />
        </Styled.InnerContainer>
      </Styled.OuterContainer>
    </Fragment>
  )
}

export default Layout
