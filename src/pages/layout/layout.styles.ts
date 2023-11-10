import styled, { css } from 'styled-components'

export const OuterContainer = styled.div<{ $isDesktop?: boolean }>((props) => {
  return css`
    height: 100%;
    padding: 30px;

    ${props.$isDesktop &&
    css`
      height: calc(100vh - 60px);
    `}
  `
})

export const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Content = styled.main<{ $isDesktop?: boolean }>((props) => {
  return css`
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 30px;

    ${props.$isDesktop &&
    css`
      padding: 50px 0;
      max-width: 890px;
      max-height: 433px;
    `}
  `
})
