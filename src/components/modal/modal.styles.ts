import styled, { css } from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

export const Text = styled.div`
  line-height: 20px;
  padding: 30px;

  ul {
    li {
      margin-bottom: 8px;
    }
  }
`
