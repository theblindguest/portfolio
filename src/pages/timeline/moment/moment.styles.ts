import styled, { keyframes, css } from 'styled-components'

export const Moment = styled.div<{ $isDesktopMoment: boolean }>((props) => {
  return css`
    display: flex;
    position: relative;
    height: 375px;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;

      > div:first-child {
        height: 100%;
      }
    }

    ${props.$isDesktopMoment &&
    css`
      height: 280px;
      margin-bottom: 80px;
    `}
  `
})

export const DatesStickyWrapper = styled.div<{ $isDesktopMoment: boolean }>(
  (props) =>
    css`
      display: flex;
      flex-direction: column;
      background-color: ${props.theme.colors.backgrounds.standard};
      margin-bottom: -101px;

      ${props.$isDesktopMoment &&
      css`
        margin-bottom: -134px;
      `}
    `
)

export const DatesSticky = styled.div(
  () => css`
    position: sticky;
    top: 20px;
    padding-right: 24px;
  `
)

export const DatesText = styled.div<Props>((props) => {
  return css`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    width: 48px;
    font-size: 14px;
    text-align: right;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 20px;

    ${props.$isDesktopMoment &&
    css`
      margin-top: 14px;
      width: 70px;
      font-size: 16px;
    `}
  `
})

export const Content = styled.div<{ $isDesktopMoment: boolean }>((props) => {
  return css`
    display: flex;
    flex-direction: column;
    background-color: ${props.theme.colors.backgrounds.moment};
    border-radius: 10px;
    max-width: 600px;
    padding: 20px;
    cursor: pointer;

    ${props.$isDesktopMoment &&
    css`
      flex-direction: row;
    `}
  `
})

export const Image = styled.div<{ image: string; $isDesktopMoment: boolean }>(
  (props) => css`
    min-width: 60%;
    background-image: url(${props.image});
    background-position: center;
    background-size: cover;
    min-height: 130px;
    height: 250px;
    margin: -20px -20px 0px -20px;
    border-radius: 10px 10px 0 0;

    ${props.$isDesktopMoment &&
    css`
      height: auto;
      margin: -20px 20px -20px -20px;
      border-radius: 10px 0 0 10px;
    `}
  `
)

interface Props {
  $isVisible?: boolean
  $isDesktopMoment?: boolean
}

const copySlide = keyframes`
  from {
    transform: translate(-60px, 0);
    opacity: 0%;
  }
  to {
    transform: translate(0, 0);
    opacity: 100%;
  }
`

const copySlideMobile = keyframes`
  from {
    transform: translate(0px, -30px);
    opacity: 0%;
  }
  to {
    transform: translate(0, 0);
    opacity: 100%;
  }
`

export const Copy = styled.div<Props>(
  (props) => css`
    display: flex;
    flex-direction: column;
    opacity: 0%;

    ${props.$isVisible &&
    css`
      animation: ${props.$isDesktopMoment ? copySlide : copySlideMobile} 600ms
        ease-in-out;
      animation-delay: ${props.$isDesktopMoment ? '150ms' : '250ms'};
      animation-fill-mode: forwards;
    `}
  `
)

export const Heading = styled.div<Props>((props) => {
  return css`
    font-weight: 700;
    margin-top: 10px;
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${props.$isDesktopMoment &&
    css`
      display: block;
      overflow: initial;
      font-size: 16px;
    `}
  `
})

export const Text = styled.div<Props>((props) => {
  return css`
    color: ${props.theme.colors.text.momentSubtext};
    font-size: 15px;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${props.$isDesktopMoment &&
    css`
      display: block;
    `}
  `
})
