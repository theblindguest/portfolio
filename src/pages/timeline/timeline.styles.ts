import styled, { css } from 'styled-components'
import { Moment } from './moment'

export const Timeline = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    height: 100%;
    /* padding bottom to ensure timeline scroll lands nicely at the bottom of the page */
    padding-bottom: 132px;
    scrollbar-color: #a65852 #fbe45b;
    position: relative;
  `
})

export const LineMarker = styled.div(() => {
  return css`
    position: sticky;
    top: 20px;
    margin-left: -111px;
    width: 120px;
    height: 1px;
    background-color: #7d7d7d;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      top: -40px;
      right: -1px;
      width: 20px;
      height: 40px;
      background-color: #fbe45b;
    }
  `
})

export const Lines = styled.div(() => {
  return css`
    position: absolute;
    height: calc(100% - 130px);
    display: flex;
    flex-direction: column;
    width: 10px;
    z-index: 1;

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
