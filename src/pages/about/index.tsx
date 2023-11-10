import React, { FC } from 'react'

import * as Styled from './about.styles'

import getBreakpoints from '../../helpers/responsive'

const About: FC = () => {
  const { isDesktop } = getBreakpoints()

  return (
    <Styled.About data-component-name='About' $isDesktop={isDesktop}>
      <Styled.Portrait $isDesktop={isDesktop} />
      <Styled.Description $isDesktop={isDesktop}>
        <div>Hello</div>
        <div>
          I'm Jack Watson, a software engineer from London, England. I say
          software engineer because that's what I've been doing professionally
          since 2018, but the truth is I just like to make things.
        </div>
      </Styled.Description>
    </Styled.About>
  )
}

export default About
