import styled, { keyframes, css } from 'styled-components'

export const Moment = styled.div<{ $isDesktopMoment: boolean }>(
  (props) => css`
    display: flex;
    position: relative;
    height: 400px;
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
)

export const DatesStickyWrapper = styled.div<{ $isDesktopMoment: boolean }>(
  (props) =>
    css`
      display: flex;
      flex-direction: column;
      /* margin-bottom: -101px; */

      /* ${props.$isDesktopMoment &&
      css`
        margin-bottom: -134px;
      `} */
    `
)

export const DatesSticky = styled.div`
  position: sticky;
  top: 20px;
  padding-right: 24px;
`

export const DatesText = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  width: 66px;
  font-size: 14px;
  text-align: right;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 20px;
`

// const SVGOffset = '40px'

// export const Shine = styled.svg`
//   position: absolute;
//   width: calc(100% + ${SVGOffset});
//   height: calc(100% + ${SVGOffset});
//   z-index: 5;
//   inset: calc((${SVGOffset} - 2px) / -2);
// `

// const shiny = keyframes`
//   0% {
//   stroke-dashoffset: 0;
//   /* opacity: 0%; */
//   }
//   /* 8% {
//     opacity: 100%;
//   }
//   22% {
//     opacity: 100%;
//   }
//   30% {
//     stroke-dashoffset: -75px;
//     opacity: 0%;
//   } */
//   100% {
//     stroke-dashoffset: -100px;
//     /* opacity: 0%; */
//   }
// `

// const sharedRectProperties = ($isDesktopMoment: boolean) => css`
//   /* opacity: 0%; */
//   width: calc(100% - ${SVGOffset});
//   height: ${$isDesktopMoment ? '281px' : '400px'};
//   fill: transparent;
//   stroke-dasharray: 20px 30px;
//   transition: stroke-dashoffset 500ms;
//   x: calc((${SVGOffset} - 3px) / 2);
//   y: calc((${SVGOffset} - 3px) / 2);
//   animation: ${shiny} 8s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: infinite;
// `

// export const ShineBlur = styled.rect<{ $isDesktopMoment: boolean }>(
//   (props) => css`
//     ${sharedRectProperties(props.$isDesktopMoment)}
//     filter: blur(8px);
//     stroke-width: 4px;
//     stroke: #fff;
//   `
// )

// export const ShineLine = styled.rect<{ $isDesktopMoment: boolean }>(
//   (props) => css`
//     ${sharedRectProperties(props.$isDesktopMoment)}
//     stroke-width: 2px;
//     stroke: #fff;
//   `
// )

export const ContentWrapper = styled.div`
  max-width: 610px;
  cursor: pointer;
  width: 100%;
  display: flex;
`

export const Content = styled.div<{
  $isDesktopMoment: boolean
}>(
  (props) =>
    css`
      width: 100%;
      display: flex;
      position: relative;
      flex-direction: column;
      background-color: ${props.theme.colors.backgrounds.moment};
      border-radius: 10px;
      padding: 20px;
      cursor: pointer;
      outline: 2px solid transparent;

      ${props.$isDesktopMoment &&
      css`
        flex-direction: row;
      `}
    `
)

export const Image = styled.div<{ image: string; $isDesktopMoment: boolean }>(
  (props) => css`
    background-image: url(${props.image});
    background-position: center;
    background-size: cover;
    min-height: 130px;
    height: 250px;
    margin: -20px -20px 0px -20px;
    border-radius: 10px 10px 0 0;

    ${props.$isDesktopMoment &&
    css`
      width: 100%;
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
    margin-top: 10px;

    ${props.$isVisible &&
    css`
      animation: ${props.$isDesktopMoment ? copySlide : copySlideMobile} 610ms
        ease-in-out;
      animation-delay: ${props.$isDesktopMoment ? '150ms' : '250ms'};
      animation-fill-mode: forwards;
    `}

    ${props.$isDesktopMoment &&
    css`
      max-width: 220px;
      width: 100%;
      margin-top: 0;
    `} /* ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30px;
      -webkit-box-shadow: 0px -2px 30px 0px ${props.theme.colors.backgrounds
      .moment};
      -moz-box-shadow: 0px -2px 30px 0px ${props.theme.colors.backgrounds
      .moment};
      box-shadow: 0px -2px 30px 0px ${props.theme.colors.backgrounds.moment};
    } */
  `
)

export const Heading = styled.div<Props>(
  (props) => css`
    font-weight: 700;
    margin-top: 10px;
    font-size: 16px;

    ${props.$isDesktopMoment &&
    css`
      display: block;
      overflow: initial;
    `}
  `
)

export const SubHeading = styled.div<Props>(
  (props) => css`
    font-weight: 700;
    margin-top: 8px;
    font-size: 14px;

    ${props.$isDesktopMoment &&
    css`
      display: block;
      overflow: initial;
    `}
  `
)

export const Text = styled.div<Props>(
  (props) => css`
    color: ${props.theme.colors.text.momentSubtext};
    font-size: 14px;
    line-height: 20px;
    height: 114px;
    overflow: hidden;

    ${props.$isDesktopMoment &&
    css`
      height: 152px;
    `}
  `
)

export const ReadMore = styled.div<Props>(
  (props) => css`
    color: ${props.theme.colors.cta};
    font-size: 15px;
    line-height: 20px;
    padding-top: 8px;
    margin-top: auto;
  `
)
