import React, { FC } from 'react'

import Moment from './moment'
import moments from '../../data/timelineMoments'
import getBreakpoints from '../../helpers/responsive'

import * as Styled from './timeline.styles'

const Timeline: FC = () => {
  const { isDesktopMoment } = getBreakpoints()

  return (
    <>
      <Styled.Timeline
        $isDesktopMoment={isDesktopMoment}
        data-component-name="Timeline"
      >
        <Styled.LineMarker $isDesktopMoment={isDesktopMoment} />
        {moments.map((moment, key) => {
          return (
            <Moment
              isDesktopMoment={isDesktopMoment}
              key={key}
              id={`moment-${key}`}
              {...moment}
            />
          )
        })}
      </Styled.Timeline>
    </>
  )
}

export default Timeline
