import styled, { css } from 'styled-components'

export const About = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 640px;
    width: 100%;
  `
})

export const Portrait = styled.img(() => {
  return css`
    width: 100%;
  `
})

export const Description = styled.div(() => {
  return css`
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    line-height: 1.4em;

    > div:first-child {
      margin-bottom: 20px;
    }
  `
})
