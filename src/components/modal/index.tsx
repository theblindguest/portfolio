import React, { FC } from 'react'

import * as Styled from './modal.styles'

import { Moment } from '../../pages/timeline/moment'

interface Modal {
  modalData: Moment
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
}

const Modal: FC<Modal> = ({ modalData, setModalData }: Modal) => {
  const { startDate, endDate, heading, subHeading, text, id, image } = modalData

  var element = document.scrollingElement || document.documentElement
  element.addEventListener(
    'wheel',
    (e) => {
      console.log('document.scrollingElement', document.scrollingElement)
      e.preventDefault()
      e.stopPropagation()
      return false
    },
    { passive: false }
  )

  return (
    <Styled.ModalOverlay
      data-component-name='Modal'
      onClick={() => {
        setModalData(undefined)
      }}
    >
      <Styled.Modal
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Styled.Header image={image}>
          <Styled.Heading>
            {heading} | {subHeading}
          </Styled.Heading>
          <Styled.Dates>
            {startDate} - {endDate}
          </Styled.Dates>
        </Styled.Header>
        <Styled.Text>{text}</Styled.Text>
      </Styled.Modal>
    </Styled.ModalOverlay>
  )
}

export default Modal
