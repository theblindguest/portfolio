import styled, { css } from 'styled-components'

export const About = styled.div<{ $isDesktopAbout: boolean }>((props) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 640px;
    width: 100%;

    ${props.$isDesktopAbout &&
    css`
      flex-direction: row;
    `}
  `
})

export const PortraitContainer = styled.div(() => {
  return css`
    display: flex;
    justify-content: center;
    width: 50%;
    margin-bottom: auto;
  `
})

export const Portrait = styled.img(() => {
  return css`
    width: 100%;
    max-width: 400px;
  `
})

export const Description = styled.div<{ $isDesktopAbout: boolean }>((props) => {
  return css`
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    line-height: 1.4em;

    > div:first-child {
      margin-bottom: 20px;
    }

    a {
      color: ${props.theme.colors.text.standard};
    }

    ${props.$isDesktopAbout &&
    css`
      padding: 0 0 20px;
      padding-left: 30px;
    `}
  `
})
