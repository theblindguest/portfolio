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
  isDesktopMoment: boolean
}

const Moment: FC<Moment> = ({
  startDate,
  endDate,
  heading,
  subHeading,
  text,
  id,
  image,
  isDesktopMoment
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
    <Styled.Moment
      $isDesktopMoment={isDesktopMoment}
      data-component-name="Moment"
    >
      <Styled.DatesStickyWrapper $isDesktopMoment={isDesktopMoment}>
        <Styled.DatesSticky>
          <Styled.DatesText $isDesktopMoment={isDesktopMoment}>
            {endDate}
            <br />/ {startDate}
          </Styled.DatesText>
        </Styled.DatesSticky>
      </Styled.DatesStickyWrapper>
      <Styled.Content
        data-component-name="Content"
        $isDesktopMoment={isDesktopMoment}
        onClick={() =>
          setModalData({
            startDate,
            endDate,
            heading,
            subHeading,
            text,
            id,
            image,
            isDesktopMoment
          })
        }
      >
        <Styled.Image image={image} $isDesktopMoment={isDesktopMoment} />
        <Styled.Copy
          id={id}
          $isVisible={isVisible}
          $isDesktopMoment={isDesktopMoment}
        >
          <Styled.Heading $isDesktopMoment={isDesktopMoment}>
            {heading} | {subHeading}
          </Styled.Heading>
          <Styled.Text
            $isDesktopMoment={isDesktopMoment}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </Styled.Copy>
      </Styled.Content>
    </Styled.Moment>
  )
}

export default Moment
