import React, { FC, useEffect } from 'react'

import * as Styled from './modal.styles'

import { Moment } from '../../pages/timeline/moment'

interface Modal {
  modalData: Moment
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
}

const Modal: FC<Modal> = ({ modalData, setModalData }: Modal) => {
  const preventBackgroundScroll = (e: WheelEvent): boolean => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
  const element = document.scrollingElement || document.documentElement
  // @ts-ignore
  element.addEventListener('wheel', preventBackgroundScroll, { passive: false })

  useEffect(() => {
    return () => {
      // @ts-ignore
      element.removeEventListener('wheel', preventBackgroundScroll, {
        passive: false
      })
    }
  }, [])

  const { startDate, endDate, heading, subHeading, text, id, image } = modalData

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
