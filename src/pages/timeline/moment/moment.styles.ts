import styled, { keyframes, css } from 'styled-components'

export const Moment = styled.div`
  display: flex;
  margin-bottom: 100px;
  position: relative;
  left: -140px;
  width: calc(100% + 140px);

  &:last-child {
    margin-bottom: 0;
  }
`

const dateSlide = keyframes`
  from {
    transform: translate(100px, 0);
    opacity: 0%;
  }
  to {
    transform: translate(0, 0);
    opacity: 100%;
  }
`
const animateSpeed = '600ms'

export const Dates = styled.div<Props>(
  (props) => css`
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    min-width: 90px;
    font-size: 24px;
    text-align: right;
    font-weight: 900;
    opacity: 0%;

    ${props.$isVisible &&
    css`
      animation: ${dateSlide} ${animateSpeed} ease-in-out;
      animation-delay: 100ms;
      animation-fill-mode: forwards;
    `}
  `
)

export const Content = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  min-width: 380px;
  padding: 20px;
  cursor: pointer;
`

export const Image = styled.div<{ image: string }>(
  (props) => css`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    min-width: 350px;
    min-height: 300px;
    z-index: 1;
    overflow: hidden;
    margin: -20px 20px -20px -20px;
    background-image: url(${props.image});
    background-position: center;
    background-size: cover;
  `
)

interface Props {
  $isVisible: boolean
}

const copySlide = keyframes`
  from {
    transform: translate(-60px, 0);
    opacity: 0%;
  }
  to {
    transform: translate(0, 0);
    opacity: 100%;
  }
`

export const Copy = styled.div<Props>(
  (props) => css`
    display: flex;
    flex-direction: column;
    opacity: 0%;

    ${props.$isVisible &&
    css`
      animation: ${copySlide} ${animateSpeed} ease-in-out;
      animation-delay: 100ms;
      animation-fill-mode: forwards;
    `}
  `
)

export const Heading = styled.div(
  () => css`
    font-weight: 700;
    margin-top: 10px;
  `
)

export const Text = styled.div(
  () => css`
    margin-top: 10px;
    color: #888;
    font-size: 14px;
    overflow: hidden;
  `
)
