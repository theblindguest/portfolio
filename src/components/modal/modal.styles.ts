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
    width: 700px;
    height: 550px;
    z-index: 10;
    background-color: ${props.theme.colors.backgrounds.modal};
    border-radius: 10px;
    overflow: auto;
    padding: 60px;
    margin: 30px;
  `
)

export const Header = styled.div<{ image: string }>(
  (props) => css`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin: -60px -60px 0;
    height: 300px;
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    padding: 20px 60px;
    justify-content: end;
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
  margin-top: 20px;
`
