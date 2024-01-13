import React, { FC } from 'react'

import Moment from './moment'
import moments from '../../data/timelineMoments'
import getBreakpoints from '../../helpers/responsive'

import * as Styled from './timeline.styles'

const Timeline: FC = () => {
  const { isMomentBig } = getBreakpoints()

  return (
    <>
      <Styled.Timeline data-component-name="Timeline">
        <Styled.LineMarker />
        {moments.map((moment, key) => {
          return (
            <Moment
              isMomentBig={isMomentBig}
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
