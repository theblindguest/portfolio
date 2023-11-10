import React, { FC, useState } from 'react'

import * as Styled from './contact.styles'

import getBreakpoints from '../../helpers/responsive'

const validateEmail = (emailAddress: string) => {
  console.log('emailAddress', emailAddress)
}

interface Validate {
  name?: string
  email?: string
  message?: string
}

const validateAndSend = async ({ name, email, message }: Validate) => {
  console.log('validating')
  console.log('name', name)
  console.log('email', email)
  console.log('message', message)
}

const Contact: FC = () => {
  const { isDesktop } = getBreakpoints()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Styled.Contact data-component-name='Contact' $isDesktop={isDesktop}>
      <Styled.Heading>Drop me a message</Styled.Heading>
      <Styled.Label htmlFor='name'>Name</Styled.Label>
      <Styled.Input
        type='text'
        id='name'
        name='name'
        onChange={(e) => setName(e.target.value)}
      />
      <Styled.Label htmlFor='email'>Email address</Styled.Label>
      <Styled.Input
        type='text'
        id='email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => validateEmail(e.target.value)}
      />
      <Styled.Label htmlFor='message'>Message</Styled.Label>
      <Styled.TextArea
        id='message'
        name='message'
        onChange={(e) => setMessage(e.target.value)}
      />
      <Styled.Submit
        type='submit'
        onClick={async () => {
          await validateAndSend({ name, email, message })
        }}
      >
        Send
      </Styled.Submit>
    </Styled.Contact>
  )
}

export default Contact
