import React, { FC, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import * as Styled from './modal.styles'

import { Moment } from '../../pages/timeline/moment'

interface Modal {
  modalData: Moment
  setModalData: React.Dispatch<React.SetStateAction<Moment | undefined>>
}

const confettiColours = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722'
]

const Modal: FC<Modal> = ({ modalData, setModalData }: Modal) => {
  const {
    startDate,
    endDate,
    heading,
    subHeading,
    text,
    image,
    images,
    isShiny
  } = modalData

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const { width, height } = useWindowSize()

  return (
    <Styled.ModalOverlay
      data-component-name="Modal"
      onClick={() => {
        setModalData(undefined)
      }}
    >
      {isShiny ? (
        <Confetti
          numberOfPieces={500}
          colors={confettiColours}
          width={width}
          height={height}
        />
      ) : null}
      <Styled.Modal
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Styled.HeaderBackground image={image.desktop}>
          <Styled.CloseButton onClick={() => setModalData(undefined)} />
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
