import styled, { css } from 'styled-components'
import { Moment } from './moment'

export const Timeline = styled.div<{ $modalData?: Moment }>((props) => {
  return css`
    display: flex;
    height: 100%;
    overflow: auto;
    padding-bottom: 30px;
    scrollbar-color: #a65852 #fbe45b;
    position: relative;

    /* prevents timeline scrolling when modal is open */
    ${!!props.$modalData &&
    css`
      overflow: clip;
    `}
  `
})

export const DotContainer = styled.div`
  position: absolute;
  display: flex;
  top: calc(50% - 15px);
  overflow: auto;
  align-items: center;
`

export const Dot = styled.div<{ $isPastMid?: boolean }>((props) => {
  return css`
    width: 20px;
    height: 20px;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: relative;
      top: 4px;
      left: 4px;
      border-radius: 10px;
      border: 2px solid #c4aa23;
      width: 8px;
      height: 8px;
      transition: background 400ms ease;
    }

    ${props.$isPastMid &&
    css`
      &::after {
        background: #c4aa23;
      }
    `}
  `
})

export const FadeLeft = styled.div<{ $fadeLeft: number }>(
  (props) => css`
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(-60px + ${props.$fadeLeft / 3}px);
    z-index: 3;
    background: linear-gradient(
      to right,
      rgba(251, 228, 91, 1) 0%,
      rgba(125, 185, 232, 0) 100%
    );
  `
)

export const FadeRight = styled.div<{ $fadeRight: number }>(
  (props) => css`
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: calc(-60px + ${props.$fadeRight / 3}px);
    z-index: 3;
    background: linear-gradient(
      to left,
      rgba(251, 228, 91, 1) 0%,
      rgba(125, 185, 232, 0) 100%
    );
  `
)
