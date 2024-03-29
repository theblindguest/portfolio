import styled, { css } from 'styled-components'

export const ModalOverlay = styled.div(
  (props) =>
    css`
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: ${props.theme.colors.backgrounds.modalBackdrop};
      z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
    `
)

export const Modal = styled.div(
  (props) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 600px;
    max-height: 550px;
    z-index: 10;
    background-color: ${props.theme.colors.backgrounds.modal};
    border-radius: 10px;
    overflow: auto;
    margin: 30px;
  `
)

export const HeaderBackground = styled.div<{ image: string }>(
  (props) => css`
    display: flex;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    min-height: 270px;
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
  `
)

export const HeaderText = styled.div(
  (props) => css`
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 30px;
  `
)

export const Dates = styled.div(
  (props) => css`
    color: ${props.theme.colors.text.modalImageText};
  `
)

export const Heading = styled.div(
  (props) => css`
    color: ${props.theme.colors.text.modalImageText};
    font-weight: 700;
    font-size: 30px;
  `
)

export const Text = styled.div((props) => {
  return css`
    line-height: 20px;
    padding: 30px;
    color: ${props.theme.colors.text.modalText};

    ul {
      li {
        margin-bottom: 8px;
      }
    }
  `
})

export const Image = styled.img(
  (props) => css`
    width: 100%;
    margin-bottom: 5px;
  `
)

export const ImageCaption = styled.div((props) => {
  return css``
})

export const ImagesContainer = styled.div((props) => {
  return css`
    padding: 0 30px;

    div:last-child {
      margin-bottom: 0px;
    }
  `
})

export const ImageContainer = styled.div((props) => {
  return css`
    padding-bottom: 20px;
  `
})
