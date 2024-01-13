import styled, { css } from 'styled-components'

export const Timeline = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 868px;
    width: 100%;
    /* padding bottom to ensure timeline scroll lands nicely at the bottom of the page */
    padding-bottom: 132px;
    scrollbar-color: #a65852 #fbe45b;
    position: relative;
  `
})

export const LineMarker = styled.div<{ isDesktopMoment: boolean }>((props) => {
  return css`
    position: sticky;
    top: 20px;
    width: 68px;
    height: 3px;
    margin-bottom: -3px;
    background-color: #444;
    z-index: 2;

    ${props.isDesktopMoment &&
    css`
      width: 76px;
      margin-left: 9px;
    `}
  `
})
