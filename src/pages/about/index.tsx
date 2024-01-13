import React, { FC } from 'react'

import { portrait } from '../../assets/theme-light'

import * as Styled from './about.styles'

const About: FC = () => {
  return (
    <Styled.About data-component-name="About">
      <Styled.Portrait src={portrait} />
      <Styled.Description>
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
