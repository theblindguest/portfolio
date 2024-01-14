import React, { FC, useEffect } from 'react'

import * as Styled from './modal.styles'

import { Moment } from '../../pages/timeline/moment'

interface Modal {
  modalData: Moment
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
}

const Modal: FC<Modal> = ({ modalData, setModalData }: Modal) => {
  const { startDate, endDate, heading, subHeading, text, image } = modalData

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <Styled.ModalOverlay
      data-component-name="Modal"
      onClick={() => {
        setModalData(undefined)
      }}
    >
      <Styled.Modal
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Styled.HeaderBackground image={image}>
          <Styled.HeaderText>
            <Styled.Heading>
              {heading} | {subHeading}
            </Styled.Heading>
            <Styled.Dates>
              {startDate} - {endDate}
            </Styled.Dates>
          </Styled.HeaderText>
        </Styled.HeaderBackground>
        <Styled.Text dangerouslySetInnerHTML={{ __html: text }} />
      </Styled.Modal>
    </Styled.ModalOverlay>
  )
}

export default Modal
