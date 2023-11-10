import styled, { css } from 'styled-components'

export const Contact = styled.div<{ $isDesktop?: boolean }>((props) => {
  return css`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
  `
})

export const Heading = styled.div`
  display: inline-block;
  margin: 0 auto 30px;
`

export const Label = styled.label`
  margin-bottom: 10px;
`

export const Input = styled.input<{ $isDesktop?: boolean }>((props) => {
  return css`
    margin-bottom: 20px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid #999;
    padding: 10px 15px;
  `
})

export const TextArea = styled.textarea<{ $isDesktop?: boolean }>((props) => {
  return css`
    min-height: 120px;
    max-width: 600px;
    margin-bottom: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #999;
    box-sizing: border-box;
  `
})

export const Submit = styled.button<{ $isDesktop?: boolean }>((props) => {
  return css`
    cursor: pointer;
    height: 44px;
    border: none;
    background-color: #a6d0c8;
  `
})
