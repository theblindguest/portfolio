import styled, { css } from 'styled-components'

export const About = styled.div<{ $isDesktop?: boolean }>((props) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    ${props.$isDesktop &&
    css`
      flex-direction: row;
    `}
  `
})

export const Portrait = styled.div<{ $isDesktop?: boolean }>((props) => {
  return css`
    width: 100%;
    max-width: 600px;
    height: 500px;
    background-color: #f3f3f3;

    ${props.$isDesktop &&
    css`
      height: 100%;
      width: 50%;
    `}
  `
})

export const Description = styled.div<{ $isDesktop?: boolean }>((props) => {
  return css`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
    line-height: 1.4em;

    > div:first-child {
      margin-bottom: 20px;
    }

    ${props.$isDesktop &&
    css`
      height: 100%;
      width: 50%;
    `}
  `
})
