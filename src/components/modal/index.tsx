import React, { FC, useEffect } from 'react'

import * as Styled from './modal.styles'

import { Moment } from '../../pages/timeline/moment'

interface Modal {
  modalData: Moment
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
}

const Modal: FC<Modal> = ({ modalData, setModalData }: Modal) => {
  const { startDate, endDate, heading, subHeading, text, image, images } =
    modalData

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
        <Styled.Text>{text(100)}</Styled.Text>
        {images?.length && (
          <Styled.ImagesContainer>
            {images.map((image) => (
              <Styled.ImageContainer>
                <Styled.Image src={image.src} />
                <Styled.ImageCaption>{image.caption}</Styled.ImageCaption>
              </Styled.ImageContainer>
            ))}
          </Styled.ImagesContainer>
        )}
      </Styled.Modal>
    </Styled.ModalOverlay>
  )
}

export default Modal
