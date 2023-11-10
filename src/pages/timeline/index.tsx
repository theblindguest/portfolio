import React, { FC, useState, useEffect } from 'react'

import Moment from './moment'
import moments from '../../data/timelineMoments'

import * as Styled from './timeline.styles'
import { useOutletContext } from 'react-router-dom'
import { OutletContext } from '../layout'

function onTimelineScroll(
  event: any,
  setFadeLeft: React.Dispatch<React.SetStateAction<number>>,
  setFadeRight: React.Dispatch<React.SetStateAction<number>>,
  setDynamicScrollMidpoint: React.Dispatch<React.SetStateAction<number>>
) {
  const timeline = document.querySelector('[data-component-name="Timeline"]')
  if (!event.deltaY || !timeline) {
    return
  }
  timeline!.scrollLeft += event.deltaY

  const { scrollLeft, scrollWidth, clientWidth } = timeline!
  const scrollRight = scrollWidth - clientWidth - scrollLeft

  const baseScrollMidpoint = clientWidth / 2
  setDynamicScrollMidpoint(scrollLeft + baseScrollMidpoint)

  if (scrollLeft === 0 || scrollRight === 0) return

  scrollLeft < 180 && setFadeLeft(scrollLeft)
  scrollRight < 180 && setFadeRight(scrollRight)
}

const mapDots = (
  numberOfDots: number,
  dynamicScrollMidpoint: number,
  baseScrollMidpoint: number
) => {
  const dots = []
  for (let dot = 0; dot < numberOfDots; dot++) {
    dots.push(<Styled.Dot key={dot} $isPastMid={true} />)
  }
  return dots
}

const Timeline: FC = () => {
  const [dots, setDots] = useState(0)
  const [dynamicScrollMidpoint, setDynamicScrollMidpoint] = useState(0)
  const [baseScrollMidpoint, setBaseScrollMidpoint] = useState(0)
  const [fadeLeft, setFadeLeft] = useState(0)
  const [fadeRight, setFadeRight] = useState(180)

  useEffect(() => {
    const timeline = document.querySelector('[data-component-name="Timeline"]')
    const { scrollWidth, clientWidth } = timeline!
    const numberOfDots = Math.round(scrollWidth / 20) - 1
    const baseScrollMidpoint = clientWidth / 2
    setDots(numberOfDots)
    setBaseScrollMidpoint(baseScrollMidpoint)

    const element = document.scrollingElement || document.documentElement
    // handle remove event on component dismount?
    element.addEventListener('wheel', (e) => {
      onTimelineScroll(e, setFadeLeft, setFadeRight, setDynamicScrollMidpoint)
    })
  }, [])

  const { modalData } = useOutletContext<OutletContext>()

  return (
    <>
      <Styled.FadeLeft $fadeLeft={fadeLeft} />
      <Styled.Timeline data-component-name='Timeline' $modalData={modalData}>
        <Styled.DotContainer>
          {mapDots(dots, dynamicScrollMidpoint, baseScrollMidpoint)}
        </Styled.DotContainer>
        {moments.map((moment, key) => {
          return <Moment key={key} id={`moment-${key}`} {...moment} />
        })}
      </Styled.Timeline>
      <Styled.FadeRight $fadeRight={fadeRight} />
    </>
  )
}

export default Timeline
