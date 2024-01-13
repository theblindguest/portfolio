import styled, { keyframes, css } from 'styled-components'

export const Moment = styled.div<{ isMomentBig: boolean }>((props) => {
  return css`
    display: flex;
    margin-bottom: 80px;
    position: relative;
    height: 280px;

    &:last-child {
      margin-bottom: 0;
    }

    ${props.isMomentBig &&
    css`
      height: 400px;
      margin-bottom: 50px;
    `}
  `
})

export const DatesStickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% + 140px);
  background-color: #fbe45b;
`

export const DatesSticky = styled.div(
  () => css`
    position: sticky;
    top: 20px;
    padding-right: 24px;
  `
)

export const DatesText = styled.div(
  () => css`
    display: flex;
    justify-content: flex-end;
    margin-top: 14px;
    width: 90px;
    font-size: 16px;
    text-align: right;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 20px;
  `
)

export const Content = styled.div<{ isMomentBig: boolean }>((props) => {
  return css`
    display: flex;
    background-color: white;
    border-radius: 10px;
    max-width: 600px;
    padding: 20px;
    cursor: pointer;

    ${props.isMomentBig &&
    css`
      flex-direction: column;
    `}
  `
})

export const Image = styled.div<{ image: string; isMomentBig: boolean }>(
  (props) => css`
    border-radius: 10px 0 0 10px;
    min-width: 60%;
    margin: -20px 20px -20px -20px;
    background-image: url(${props.image});
    background-position: center;
    background-size: cover;

    ${props.isMomentBig &&
    css`
      height: 250px;
      margin: -20px -20px 0px -20px;
      border-radius: 10px 10px 0 0;
    `}
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
      animation: ${copySlide} 600ms ease-in-out;
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
  `
)
