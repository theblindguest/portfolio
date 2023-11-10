import styled, { keyframes, css } from 'styled-components'

export const Moment = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  min-width: 380px;
  padding: 20px;
  margin-right: 150px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`

export const Image = styled.div<{ image: string }>(
  (props) => css`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 420px;
    min-height: 300px;
    z-index: 1;
    overflow: hidden;
    margin-left: -20px;
    margin-top: -20px;
    background-image: url(${props.image});
    background-size: cover;
  `
)

interface Props {
  $isVisible: boolean
}

const cascade = keyframes`
  from {
    transform: translate(0, -40px);
    opacity: 0%;
  }
  to {
    transform: translate(0, 0);
    opacity: 100%;
  }
`
const animateSpeed = '1s'

export const Dates = styled.div<Props>(
  (props) => css`
    margin-top: 10px;
    font-size: 14px;
    ${props.$isVisible &&
    css`
      animation: ${cascade} ${animateSpeed} ease-in-out;
    `}
  `
)

export const Heading = styled.div<Props>(
  (props) => css`
    font-weight: 700;
    margin-top: 10px;
    opacity: 0%;
    ${props.$isVisible &&
    css`
      animation: ${cascade} ${animateSpeed} ease-in-out;
      animation-delay: 100ms;
      animation-fill-mode: forwards;
    `}
  `
)

export const Text = styled.div<Props>(
  (props) => css`
    margin-top: 10px;
    color: #888;
    font-size: 14px;
    opacity: 0%;
    overflow: hidden;
    ${props.$isVisible &&
    css`
      animation: ${cascade} ${animateSpeed} ease-in-out;
      animation-delay: 150ms;
      animation-fill-mode: forwards;
    `}
  `
)
