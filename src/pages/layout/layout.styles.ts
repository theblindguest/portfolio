import styled, { css } from 'styled-components'

export const OuterContainer = styled.div(() => {
  return css`
    padding: 30px;
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

export const ContentMain = styled.main(() => {
  return css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 30px;
    padding: 50px 0 0;
  `
})
