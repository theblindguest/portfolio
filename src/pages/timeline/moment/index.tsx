import React, { FC, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

import * as Styled from './moment.styles'
import { OutletContext } from '../../layout'

export interface Moment {
  startDate: string
  endDate: string
  heading: string
  subHeading: string
  text: string
  id: string
  image: string
  isMomentBig: boolean
}

const Moment: FC<Moment> = ({
  startDate,
  endDate,
  heading,
  subHeading,
  text,
  id,
  image,
  isMomentBig
}: Moment) => {
  const onMomentVisible = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
  }
  const options = {
    root: document.querySelector('[data-component-name="Timeline"]')
  }
  const observer = new IntersectionObserver(onMomentVisible, options)

  useEffect(() => {
    const target = document.getElementById(id)
    if (target) {
      observer.observe(target)
    }
  })

  const [isVisible, setIsVisible] = useState(false)

  const { setModalData } = useOutletContext<OutletContext>()

  return (
    <Styled.Moment isMomentBig={isMomentBig} data-component-name="Moment">
      <Styled.DatesStickyWrapper>
        <Styled.DatesSticky>
          <Styled.DatesText>
            {endDate}
            <br />/ {startDate}
          </Styled.DatesText>
        </Styled.DatesSticky>
      </Styled.DatesStickyWrapper>
      <Styled.Content
        id={id}
        data-component-name="Content"
        isMomentBig={isMomentBig}
        onClick={() =>
          setModalData({
            startDate,
            endDate,
            heading,
            subHeading,
            text,
            id,
            image,
            isMomentBig
          })
        }
      >
        <Styled.Image image={image} isMomentBig={isMomentBig} />
        <Styled.Copy $isVisible={isVisible} isMomentBig={isMomentBig}>
          <Styled.Heading>
            {heading} | {subHeading}
          </Styled.Heading>
          <Styled.Text>{text}</Styled.Text>
        </Styled.Copy>
      </Styled.Content>
    </Styled.Moment>
  )
}

export default Moment
