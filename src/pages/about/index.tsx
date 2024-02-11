import React, { FC } from 'react'

import getBreakpoints from '../../helpers/responsive'

import { portrait } from '../../assets/theme-light'

import * as Styled from './about.styles'

const About: FC = () => {
  const { isDesktopAbout } = getBreakpoints()

  return (
    <Styled.About data-component-name="About" $isDesktopAbout={isDesktopAbout}>
      <Styled.PortraitContainer>
        <Styled.Portrait src={portrait} />
      </Styled.PortraitContainer>
      <Styled.Description $isDesktopAbout={isDesktopAbout}>
        <div>Hello</div>
        <p>
          I'm Jack Watson, a software engineer from London, England. I say
          software engineer because that's what I've been doing professionally
          since 2018, but the truth is I just like to make things.
        </p>
        <p>
          This is my website where you can find examples of{' '}
          <a href="/timeline">some of the things</a> that I am fortunate enough
          to be paid to make, as well as a few things that no one in their right
          mind would pay <i>anyone</i> to make.
        </p>
        <p>Cheers,</p>
        <p>Jack</p>
      </Styled.Description>
    </Styled.About>
  )
}

export default About
