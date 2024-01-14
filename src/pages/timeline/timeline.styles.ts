import styled, { css } from 'styled-components'

export const Timeline = styled.div<{ $isDesktopMoment: boolean }>((props) => {
  return css`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 826px;
    width: 100%;
    /* padding bottom to ensure timeline scroll lands nicely at the bottom of the page */
    padding-bottom: 23px;
    position: relative;

    ${props.$isDesktopMoment &&
    css`
      padding-bottom: 183px;
    `}
  `
})

export const LineMarker = styled.div<{ $isDesktopMoment: boolean }>((props) => {
  return css`
    position: sticky;
    top: 20px;
    width: 50px;
    height: 3px;
    margin-bottom: -3px;
    background-color: ${props.theme.colors.text.standard};
    z-index: 2;

    ${props.$isDesktopMoment &&
    css`
      width: 64px;
      margin-left: 9px;
    `}
  `
})
