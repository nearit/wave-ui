import React from 'react'
import { storiesOf } from '@storybook/react'
import PopupButton from './PopupButton'

const stories = storiesOf('Popup Button', module)

stories.add(
  'default usage',
  () => (
    <PopupButton
      label='Ok'
      onClick={() => console.log('Click detected')}
    />
  )
)
