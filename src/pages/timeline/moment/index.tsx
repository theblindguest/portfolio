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
}

const Moment: FC<Moment> = ({
  startDate,
  endDate,
  heading,
  subHeading,
  text,
  id,
  image
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
      id={id}
      data-component-name='Moment'
      onClick={() =>
        setModalData({
          startDate,
          endDate,
          heading,
          subHeading,
          text,
          id,
          image
        })
      }
    >
      <Styled.Image image={image} />
      <Styled.Dates $isVisible={isVisible}>
        {startDate} - {endDate}
      </Styled.Dates>
      <Styled.Heading $isVisible={isVisible}>
        {heading} | {subHeading}
      </Styled.Heading>
      <Styled.Text $isVisible={isVisible}>{text}</Styled.Text>
    </Styled.Moment>
  )
}

export default Moment
