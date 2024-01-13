import styled, { keyframes, css } from 'styled-components'

export const Moment = styled.div`
  display: flex;
  margin-bottom: 80px;
  position: relative;
  left: -110px;
  width: calc(100% + 140px);
  height: 280px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const DatesStickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% + 140px);
  background-color: #fbe45b;
`

export const DatesSticky = styled.div(
  () => css`
    position: sticky;
    top: 21px;
    padding-right: 50px;
  `
)

export const DatesText = styled.div(
  () => css`
    display: flex;
    justify-content: flex-end;
    margin-top: 14px;
    min-width: 90px;
    font-size: 24px;
    text-align: right;
    font-weight: 900;
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
    min-width: 340px;
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
    overflow: hidden;
  `
)
