import React from 'react'
import { storiesOf } from '@storybook/react'
import PopupConfirmButton from './PopupConfirmButton'

const stories = storiesOf('Popup Confirm Button', module)

stories.add(
  'confirm',
  () => (
    <PopupConfirmButton
      label='Ok'
      onClick={() => console.log('Click detected')}
    />
  )
)

stories.add(
  'secondary',
  () => (
    <PopupConfirmButton
      label='Ok'
      type='secondary'
      onClick={() => console.log('Click detected')}
    />
  )
)
