import styled, { css } from 'styled-components'
import { Moment } from './moment'

export const Timeline = styled.div<{ $modalData?: Moment }>((props) => {
  return css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 30px;
    scrollbar-color: #a65852 #fbe45b;
    position: relative;
  `
})

export const LineContainer = styled.div<{ $modalData?: Moment }>((props) => {
  return css`
    position: absolute;
    top: 10px;
    display: flex;
    flex-direction: column;
    left: -30px;
    width: 20px;
  `
})

export const Line = styled.div<{ $modalData?: Moment }>((props) => {
  return css`
    position: relative;
    width: 12px;
    height: 1px;
    margin-bottom: 11px;
    background-color: #555;
  `
})

export const Lines = styled.div<{ $modalData?: Moment }>((props) => {
  return css`
    position: absolute;
    height: calc(100% - 270px);
    display: flex;
    flex-direction: column;
    left: -30px;
    width: 10px;

    background: linear-gradient(
      to bottom,
      #333,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );

    background-size: 100% 8px;
  `
})
