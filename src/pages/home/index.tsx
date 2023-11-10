import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './home.styles'

const Home: FC = () => {
  return (
    <Styled.Home data-component-name='Home'>
      <Link to={'/timeline'}>cv</Link>
    </Styled.Home>
  )
}

export default Home
