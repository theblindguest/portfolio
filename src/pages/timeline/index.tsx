import React, { FC } from 'react'

import Moment from './moment'
import moments from '../../data/timelineMoments'

import * as Styled from './timeline.styles'

const Timeline: FC = () => {
  return (
    <>
      <Styled.Timeline data-component-name="Timeline">
        <Styled.LineMarker />
        <Styled.Lines />
        {moments.map((moment, key) => {
          return <Moment key={key} id={`moment-${key}`} {...moment} />
        })}
      </Styled.Timeline>
    </>
  )
}

export default Timeline
